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

const Header = ({title,logout,user}) => {
  // static state
  const menus = [
    {label: 'Vote Now',link: '/vote-now'},
    {label: 'Rules',link: '/rules'},
  ]
  // state
  const [isOpen, setIsOpen] = useState(false);
  // method
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false)
  const logOutHandler = () => {
    close()
    logout()
  }
  return (
    <Navbar color="light" light expand="md" className='shadow'>
      <Container>
        <NavbarBrand tag={Link} to='/' onClick={close}>{title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            {menus.map((menu,index)=>{
              return (
                <NavItem key={index} className='mx-1'>
                  <NavLink tag={Link} to={menu.link} onClick={close}>{menu.label}</NavLink>
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
                <DropdownItem tag={Link} to={'/profile/'+user.username} onClick={close}>Profile</DropdownItem>
                <DropdownItem tag={Link} to='/settings' onClick={close}>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logOutHandler}>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
