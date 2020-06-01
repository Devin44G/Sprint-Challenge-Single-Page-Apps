import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App() {

  return (
    <html>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
    </html>
  );
}
