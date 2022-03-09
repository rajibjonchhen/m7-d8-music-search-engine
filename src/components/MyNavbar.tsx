import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FcMusic} from 'react-icons/fc'
import { Dispatch, SetStateAction } from "react";
interface SearchProps {
    search:string
    setSearch: Dispatch<SetStateAction<string>>
}

function MyNavbar({search, setSearch}:SearchProps) {

    // const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    //     console.log(e)
    //     e.preventDefault()
    //     setSearch(e.target.value)
    //     }

    //     const handleSubmit = (e : ChangeEvent<HTMLInputElement>) => {
            
    //     }

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
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => handleChange}
        />
        <Button variant="outline-success" onClick={(e) => handleSubmit}>Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}

export default MyNavbar;