import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { 
  Collapse, 
  Container, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  NavItem, 
  NavLink, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  UncontrolledDropdown 
} from 'reactstrap'
import './header.scss'

const Header = ({title,menus,user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md" className='shadow'>
      <Container>
        <NavbarBrand tag={Link} to='/'>{title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            {menus.map((menu,index)=>{
              return(
                <NavItem key={index} className='mx-1'>
                  <NavLink tag={Link} to={menu.link}>{menu.label}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                {user.username}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to='/profile/abdul15irsyad'>Profile</DropdownItem>
                <DropdownItem tag={Link} to='/settings'>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to='/login'>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
