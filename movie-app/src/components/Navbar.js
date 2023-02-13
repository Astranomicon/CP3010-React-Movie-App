import { NavLink } from "react-router-dom";

const Navbar = () => {
  
	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			textDecoration: isActive ? "none" : "underline",
			border: isActive ? "1px solid black" : "none",
			padding: isActive ? "4px" : "0px",
			borderRadius: isActive ? "6px" : "0px",
		};
	};

	return (
		<nav>
			<NavLink style={navLinkStyles} to='/'>
				Home
			</NavLink>
			<NavLink style={navLinkStyles} to='/reviews'>
				Add Review
			</NavLink>
		</nav>
	);
};

export default Navbar;