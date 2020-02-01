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
    align-items: center;
    height: 50vh;
  `;
  const Span = styled.span`
    position: absolute;
    width: 100%;
    height: 4rem;
    background-color: #eee;
    opacity: .8;
  `;

  return (
    <Header>
      <Nav>
        <Span></Span>
        <Link to='/'>Home</Link>
        <Link to='/characters'>The Gang</Link>
      </Nav>
      <h1>Rick &amp; Morty Fan Page</h1>
    </Header>
  );
}
