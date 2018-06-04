import React from "react";
import ReactDOM from "react-dom";
import App from './app';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<App />, wrapper) : false;


import { Data } from './data/recept';
const Recipe = ({ name, ingredients, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <ul className="ingredients">
      {ingredients.map((ingredients, i) => <li key={i}>{ingredients.name}</li>)}
    </ul>
    <section className="ingredients">
      <h2>조리 절차</h2>
      {steps.map((step, i) =>
        <p key={i}>{step}</p>
      )}
    </section>
  </section>
const Menu = ({title, recipes}) =>
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipes, i) =>
        <Recipe key={i} {...recipes} />
      )}
    </div>
  </article>
ReactDOM.render(<Menu recipes={Data} title="menu"/>, document.getElementById("menu"))
