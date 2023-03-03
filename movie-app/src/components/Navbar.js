import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComp = () => {
	// Adding this style because bootstrap navbar was breaking my routes
	const navStyle = {
		background: "#94dbff",
		margin: "5px",
		padding: "5px",
		border: "2px solid black",
		borderRadius: "5px",
		color: "black",
	};

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>CP3010 Large Assignment 2</Navbar.Brand>
					<Nav className='me-auto'>
						<NavLink to='/' style={navStyle}>
							Home
						</NavLink>
						<NavLink to='/reviews' style={navStyle}>
							Add Review
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarComp;
