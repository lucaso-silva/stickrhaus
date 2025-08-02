# StickrHaus: E-Commerce Webpage

StickrHaus is a full-stack e-commerce application developed as the final project for the course CPSC 2650: Full Stack Web Development II at Langara College, Summer 2025.

### Visit: [StickrHaus](https://stickrhaus.vercel.app)

## Features
- Search stickers by name and category (abstract, fantasy, movies, nature, space, technology) 
- Sort by price: low to high, high to low
- Add to cart and checkout
- User authentication: register, login, logout
- Admin dashboard

## Frontend
- React
- Bootstrap
- Formik + Yup: form validation
- **Deployment:** Vercel

## Backend
- Node.js
- Express
- **Deployment:**
  - Render: [stickers data](https://stickrhaus.onrender.com/api/stickers) 

## Database
- MongoDB

## Other Tools
- JWT for authentication
- [Stripe API](https://docs.stripe.com/) for checkout
- Unit and Integration tests with Vitest

## REST API Routes
- #### Auth
| Method | Endpoint | Description | Resquest Body | Protected Route? |
| :------ | -------- | ----------- | ------------- | :----------------: |
| GET  | /api/auth/me | Get user info | - | No |
| GET | /api/auth/admin | Get admin info | - | Yes |
| POST | /api/auth/singup | Create a new user | { firstName: "string", lastName: "string", email: "string", password: "string", role: "string" } | No |
| POST | /api/auth/login | Return user to login | { email: "string", password: "string" } | No |
| POST | /api/auth/logout | Clear cookies, logout user | - | No |

- #### Stickers
| Method | Endpoint | Description | Resquest Body | Protected Route? |
| :------ | -------- | ----------- | ------------- | :-------------: |
| GET | /api/stickers | Get all stickers | - | No |
| GET | /api/stickers/:id | Get a single sticker by ID | - | No |
| POST | /api/stickers | Create a new sticker | { description: "string", size: "string", price: number, category: "string", stock: number, discountPerCent: number } | No |
| DELETE | /api/stickers/:id | Delete a sticker by ID | - | No |
| PATCH | /api/stickers/:id | Update an sticker by ID | - | No |

- #### Checkout
| Method | Endpoint | Description | Resquest Body | Protected Route? |
| :------ | -------- | ----------- | ------------- | :--------------: |
| GET | /api/checkout/session_status | Get checkout session status | - | No |
| POST | /api/checkout/create-checkout-session | Create a Stripe API checkout session | { [{ description: "string", price: number, qty: number, discountPerCent: number }] } | Yes |

## Additional Info
### Testing successful checkout
- **Card number:** 4242 4242 4242 4242
- **Exp. date:** Any future date
- **CVC:** Any number

### Image Sources
- [space_theme](https://pixabay.com/illustrations/astronaut-doodle-rocket-space-7326476/)
- [cart_empty](https://www.iconfinder.com/icons/8219549/empty_question_search_empty_states_basket_cart_mark_shopping_faq_commerce_e_shop_icon)
- [success_order](https://www.iconfinder.com/icons/8219560/delivery_shipping_airdrop_e_commerce_order_box_package_deliver_icon)
- [empty_list](https://www.iconfinder.com/icons/8219644/support_question_faq_list_frequently_asked_questions_icon)
- [under_construction](https://www.iconfinder.com/icons/8219592/web_development_coding_programming_binary_code_workflow_desk_computer_icon)
- [admin_settings](https://www.iconfinder.com/icons/8219580/settings_maintenance_configuration_gears_cogwheel_screwdriver_options_preferences_icon)
- The StickerHaus Logo and the banner text (Creative Designs for Sticky Minds) were created using the font generator on [TextStudio](https://www.textstudio.com/)
  
## Future Improvements
- Create the Wishlist Page
- Update the Stripe checkout form to accept the shipping address information
- Improve responsiveness
- Create Orders object
- Improve UI/UX

## Acknowledgements
To the instructor Adnan Reza for all the guidance. 

___

#### 🧑🏻‍💻 Developed by Lucas Oliveira
