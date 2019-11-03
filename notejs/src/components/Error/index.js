import React from 'react';

import { Container, ErrorButton } from './styles';

export default function Error({ onRetry }) {
  return (
    <Container>
      <h1>Ops! </h1>
      <p>Ocorreu um erro inesperado ao carregar a lista de notas.</p>
      <ErrorButton onClick={onRetry}>Tentar Novamente</ErrorButton>
    </Container>
  );
}
