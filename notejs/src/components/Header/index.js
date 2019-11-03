import React from 'react';

import { Container, ActionButton, Brand } from './styles';

export default function Header({
  className,
  isLoading,
  saveHasError,
  retrySave,
  onOpenMenu,
}) {
  return (
    <Container className={`container ${className}`}>
      <ActionButton onClick={onOpenMenu}>
        <i className={`material-icons ${className}`}>menu</i>
      </ActionButton>
      <Brand>Note.js</Brand>
      {isLoading && (
        <ActionButton isLoading={isLoading}>
          <i className={`material-icons ${className}`}>refresh</i>
        </ActionButton>
      )}
      {saveHasError && (
        <ActionButton danger={saveHasError} onClick={retrySave}>
          <i className={`material-icons ${className}`}>cloud_off</i>
        </ActionButton>
      )}
    </Container>
  );
}
