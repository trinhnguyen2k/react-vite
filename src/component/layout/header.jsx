import './header.css';
import { Link } from 'react-router-dom'
// Use Link để làm single page application - click vào router khác không bị reload lại trang
const Header = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul >
    )
}

export default Header;