import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../feature/home/HomePage'
import NavBar from '../../feature/nav/NavBar';
import NotFound from './NotFound';
import ModalContainer from '../../feature/common/modals/ModalContainer';
import WelcomePage from '../../feature/welcome/WelcomePage';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ModalContainer />
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={WelcomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/home' component={HomePage} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default withRouter(observer(App));
