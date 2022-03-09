import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FcMusic} from 'react-icons/fc'
interface SearchProps {
    search:string
}
function MyNavbar() {
    return ( 
        <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand>
        <Link to='/'>
            <span className='text-light'> 
                Music
            </span>
        <FcMusic/>
        </Link>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
        <Link to='/'>
            Home
        </Link>
        </Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}

export default MyNavbar;