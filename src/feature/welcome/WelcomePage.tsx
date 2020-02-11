import React, { useContext, Fragment } from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoginForm from '../user/LoginForm';
import RegisterForm from '../user/RegisterForm';

const WelcomePage = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, isLoggedIn } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (
    <Segment textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          BIThesisApp
        </Header>
        {isLoggedIn && user ? (
          <Fragment>
            <Header as='h2' content={`Welcome back ${user.displayName}`} inverted/>
            <Button as={Link} to='/activities' size='huge'>
              Go to BIThesisApp!
            </Button>
          </Fragment>
        ) : (
          <Fragment>
          <Header as='h2' content={`Welcome to BIThesisApp!`} inverted/>
          <Button onClick={() => openModal(<LoginForm />)} size='huge' inverted>
            Login
          </Button>
          <Button onClick={() => openModal(<RegisterForm />)} size='huge' inverted>
            Register
          </Button>
        </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default WelcomePage;
