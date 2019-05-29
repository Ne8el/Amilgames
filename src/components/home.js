import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const cards = [
  {
    title: 'Démineur',
    desc: 'Attention à Dr Boom !',
    path: '/demineur',
    id: 'demineur'
  },
  {
    title: 'Tétris',
    desc: 'Le puzzle incontournable ;)',
    path: '/tetris',
    id: 'tetris'
  },
  {
    title: 'Sudoku',
    desc: 'Le puzzle chiffré hérité du carré latin, à vos grilles !',
    path: '/sudoku',
    id: 'sudoku'
  },
  {
    title: 'Solitaire',
    desc: 'L\'incontournable jeu de cartes qui rassemble ',
    path: '/solitaire',
    id: 'solitaire'
  },
  {
    title: 'Memory',
    desc: 'Attrapez les tous !',
    path: '/memory',
    id: 'memory'
  },
  {
    title: 'Morpion',
    desc: 'Saurez-vous vous aligner ?',
    path: '/morpion',
    id: 'morpion'
  }
];

const Home = () => {
  return (
    <div className="container ">
      <div className="row">
        {cards.map((card, key) => (
          <div key={key} className="col-md-4 ">
              <div className="card " id={card.id}>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-text">{card.desc}</p>
                  <button className="btn btn-light">
                    <Link key={card.title} to={card.path}>
                      <span className="jouez">Jouez !</span>
                    </Link>
                  </button>
                </div>
              </div>
          </div>
          ))}
      </div>
     
    </div>
  );
};

export default Home;
