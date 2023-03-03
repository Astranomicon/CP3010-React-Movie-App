import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComp = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>CP3010 Large Assignment 2</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/reviews'>Add Review</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarComp;
