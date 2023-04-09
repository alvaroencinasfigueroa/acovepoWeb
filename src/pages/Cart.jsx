import {firestore} from '../config.js';
import {collection, getDocs} from 'firebase/firestore';
// import {ref, getDownloadURL} from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import CartGrid from '../components/cart/CartGrid';
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../styles/OrderForm.css";

export default function Cart() {
  const db = firestore;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productsRef = collection(db, 'products');
    const productDocs = await getDocs(productsRef);
    const productsArray = productDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(productsArray);
  };

  useEffect(() => {  
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <CartGrid products={products}></CartGrid>
      <hr className="hr"/>
      <div className="text-center">
        <button type="submit" className="btn btn-primary w-50">
          Enviar
        </button>
      </div>
    </div>
  )
}
