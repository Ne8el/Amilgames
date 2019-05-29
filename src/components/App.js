import "../styles/App.css";
import Header from "./header";
import Demineur from "../containers/démineur";
import Morpion from "../containers/tic_tac_toe/index";
import Solitaire from "../containers/solitaire";
import Tetris from "../containers/tetris";
import Sudoku from "../containers/sudoku";
import Memory from "../containers/memory";
import Footer from "./footer";
import Home from "./home";
import React from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/demineur",
    component: Demineur
  },
  {
    path: "/solitaire",
    component: Solitaire
  },
  {
    path: "/morpion",
    component: Morpion
  },
  {
    path: "/tetris",
    component: Tetris
  },
  {
    path: "/memory",
    component: Memory
  },
  {
    path: "/sudoku",
    component: Sudoku
  }
];

function App() {
  return (
    <div>
      <Header />
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
