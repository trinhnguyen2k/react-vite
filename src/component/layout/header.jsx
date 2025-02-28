import './header.css';
import { NavLink, Link } from 'react-router-dom'
// Use Link để làm single page application - click vào router khác không bị reload lại trang
// NavLink : navigation link , auto thêm 1 class = Active ,
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
        </ul >
    )
}

export default Header;