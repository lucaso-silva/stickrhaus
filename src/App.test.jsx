import { render, screen } from '@testing-library/react';
import Home from './pages/Home.jsx';
import Sections from './components/Home/Sections.jsx'
import { mockStickers } from "../tests/data/stickers.js";
import { vi } from 'vitest';
import {MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { CartProvider } from './contexts/CartContext.jsx'

beforeEach(()=>{
    global.fetch = vi.fn(()=>
        Promise.resolve({
            json: ()=>
                Promise.resolve({
                    dataPag: mockStickers.slice(0,12),
                    data: mockStickers
                })
        })
    )
});

afterEach(()=>{
    vi.resetAllMocks();
});

test('renders initial stickers', async ()=>{
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    const stickerElements = await screen.findAllByTestId('sticker-card');
    expect(stickerElements.length).toBe(18);

    const sunSticker = await screen.getAllByText('Sun');
    expect(sunSticker.length).toBe(1);

    const binCodeSticker = await screen.getAllByText('Binary Code');
    expect(binCodeSticker.length).toBe(1);
});

test('Search for a specif sticker', async () =>{
    render(
        <MemoryRouter>
            <Sections />
        </MemoryRouter>
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInstanceOf(HTMLInputElement);
    await userEvent.type(input, 'Mountains');
    const stickerElements = await screen.findAllByTestId('sticker-card');
    expect(stickerElements.length).toBe(7);
});

test('update and display number of items in the cart', async () =>{
    render(
        <CartProvider>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </CartProvider>
    );

    const cartCount = await screen.findByTestId('cart-info');
    expect(cartCount).toBeInTheDocument();
    const addToCartBtn = await screen.findAllByRole('button', {name: /add to cart/i});

    for(let i=0; i<5; i++){
        await userEvent.click(addToCartBtn[i]);
        expect(cartCount.textContent).toContain(i+1);
    }
})

