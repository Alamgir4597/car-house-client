import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    
        const [user] = useAuthState(auth);
        const handleSignOut = () => {
            signOut(auth);
        }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href='#'>Car House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div >
                                <Link className='text-decoration-none m-2 text-light' to="/">Home</Link>

                               {
                                    user ? <Link className='m-2 text-decoration-none text-light' to="/allproduct">All Product</Link>
                                    :null
                               } 
                                {
                                    user ? <Link className='m-2 text-decoration-none text-light' to="/myitem">My Items</Link>
                                        : null
                                } 
                               
                            </div>

                        </Nav>
                        <Nav>
                           
                            <Link className=' m-2 text-decoration-none text-light' to="/blogs">Blogs</Link>
                            {
                                user ? <Link className='m-2 text-decoration-none text-light' to="/addnewproduct">Add New Product</Link>
                                    : null
                            }
                            {
                                user ? <p className=' m-2 text-light'>{user.displayName}</p> : null
                            }
                            {

                                user ? <Button onClick={handleSignOut}>Sign Out</Button> 
                                    : <Link className='m-1 text-decoration-none text-light' to="/login">Login</Link>
                            }
                          

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;