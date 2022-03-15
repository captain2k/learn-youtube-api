import { Link } from 'react-router-dom';
import Account from '../Account';
import SearchInput from '../SearchInput';
import './header.scss';

const Header = () => {

    const handleToggle = () => {

    }

    return (
        <div className="header">
            {/* Logo */}
            <div className="header-logo">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={() => handleToggle(true)}>
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <Link to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614" />
                </Link>
            </div>
            {/* Search input */}
            <SearchInput />
            {/* Account */}
            <Account />
        </div >

    )
}

export default Header