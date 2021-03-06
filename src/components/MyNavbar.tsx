import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FcMusic} from 'react-icons/fc'
import { Dispatch, SetStateAction } from "react";
interface SearchProps {
    search:string
    setSearch: Function //Dispatch<SetStateAction<string>>
    fetchSongs: Function
}

function MyNavbar({search, setSearch, fetchSongs}:SearchProps) {

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(search)
        e.preventDefault()
        setSearch(e.target.value)
        }

    return ( 
        <Navbar bg="dark" expand="lg" variant="dark" style={{position:'sticky', top:0, zIndex:1, borderBottom:'1px solid black', color:'white'}}>
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
        <Link to='/'>
          <div className='nav-link text-light'>
              Home
          </div>
        </Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown" className='text-light'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Form className="d-flex ml-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-success" onClick={(e) => fetchSongs(search)}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}

export default MyNavbar;