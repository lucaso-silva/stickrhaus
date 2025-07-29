import { Link } from "react-router-dom";

export default function NavLink({ user }) {
    const admin = user.role === 'admin';
    return (
        <>
            {admin ? (
                <Link to='/adminpanel' className="navLink">Admin Panel</Link>
            ) : (
                <>
                    {/*<Link to='/wishlist' className="navLink">Wishlist</Link>*/}
                    <Link to='/checkoutaddress' className="navLink">Checkout</Link>
                </>
            )}
        </>
    )
}