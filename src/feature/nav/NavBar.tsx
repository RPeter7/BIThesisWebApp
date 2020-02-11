import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item header as={NavLink} exact to='/'>
          Dashboard
        </Menu.Item>
        <Menu.Item name='Queries' as={NavLink} to='/queries' />
        <Menu.Item>
          <Button
            as={NavLink}
            to='/createQuery'
            positive
            content='Create Query'
          />
        </Menu.Item>
        {/* {user && (
          <Menu.Item position='right'>
            <Image avatar spaced='right' src={user.image || '/assets/user.png'} />
            <Dropdown pointing='top left' text={user.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user.username}`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )} */}
      </Container>
    </Menu>
  );
};

export default NavBar;
