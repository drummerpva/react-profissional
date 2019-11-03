import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Header, CloseButton, Menu, MenuButton } from './styles';

function NavigationDrawer({ className, onCloseMenu, isOpen, history }) {
  return (
    <Container isOpen={isOpen}>
      <Header>
        <CloseButton onClick={onCloseMenu}>
          <i className={`material-icons ${className}`}>close</i>
        </CloseButton>
      </Header>
      <Menu>
        <MenuButton
          onClick={e => {
            onCloseMenu();
            history.push('/');
          }}
        >
          <i className={`material-icons ${className}`}>note</i>
          Notas
        </MenuButton>
        <MenuButton
          onClick={e => {
            onCloseMenu();
            history.push('/about');
          }}
        >
          <i className={`material-icons ${className}`}>info</i>
          Sobre
        </MenuButton>
      </Menu>
    </Container>
  );
}

export default withRouter(NavigationDrawer);
