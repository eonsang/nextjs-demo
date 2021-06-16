import React from 'react';
import styled from 'styled-components';

import AppLayout from '../components/layout/AppLayout';


export default function Home() {
  return (
    <AppLayout>
      <Title>hello</Title>
    </AppLayout>
  )
}

const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`
