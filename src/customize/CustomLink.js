import { Link, useLocation } from "react-router-dom";

const CustomLink = ({ children, to }) => {
    const location = useLocation();
    const match = location.pathname === to;

    return (
        <li className={match ? 'isActive' : ''}>
            <Link
                to={to}
                style={{ textDecoration: 'none', color: 'black', width: '100%', display: 'flex', alignItems: 'center' }}
            >
                {children}
            </Link>
        </li>
    )
}

export default CustomLink