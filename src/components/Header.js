import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './styles.css';

export default function Header() {

  const Nav = styled.nav`
    display: block;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
  `;
  const Header = styled.header`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Header>
      <Nav>
        <Link to='/characters'>The Gang</Link>
        <Link to='/'>Home</Link>
      </Nav>
      <h1>Rick &amp; Morty Fan Page</h1>
    </Header>
  );
}
