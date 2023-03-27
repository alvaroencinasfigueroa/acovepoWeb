import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import imagen1 from './components/imagenpolicia1.jpg';
import tolete from './components/toletepolicia.jpg';
import gases from './components/gasespolicia.jpg';
import escudo from './components/escudospolicia.jpg';
import chamarra from './components/chamarrapolicia.png';
import botas from './components/botaspolicia.jpg';

const products = [
  {
    id: 1,
    name: 'CHALECO POLICIAL',
    price: 199.99,
    image: imagen1,
  },
  {
    id: 2,
    name: 'GAS LACRIMÓGENO',
    price: 79.99,
    image: gases,
  },
  {
    id: 3,
    name: 'ESCUDO ANTIMOTINES',
    price: 219.99,
    image: escudo,
  },
  {
    id: 4,
    name: 'TOLOTE ANTIMOTINES',
    price: 45.99,
    image: tolete,
  },
  {
    id: 5,
    name: 'CHAMARRA POLICIA',
    price: 209.99,
    imagen: chamarra,
  },
  {
    id: 6,
    name: 'BOTAS POLICIA',
    price: 189.99,
    image: botas,
  }
];


const App = () => {
  return <ProductGrid products={products} />;
};

export default App;