import {firestore, storage} from '../../config.js';
import {collection, getDocs} from 'firebase/firestore';
import {ref, getDownloadURL} from 'firebase/storage';

import React, { useState, useEffect } from 'react';

export default function Cart({}) {
  const db = firestore;
  const [products, setProducts] = useState([]);

  // const photosRef = ref(storage, 'productPhotos');
  
  const converter = (doc) => {
    const data = doc.data();
    const imageUrl = data.imageUrl;
    let newUrl = null;
    const imgRef = ref(storage, imageUrl);
    getDownloadURL(imgRef)
      .then(
        (url) => {
          newUrl = url;
        }
      ).catch(
        (error) =>{
          console.error(error);
        }
      );
    const res = {
      id : doc.id,
      imageUrl : newUrl,
      name : data.name,
      price : data.price
    }
    return res;
  } 
  useEffect(() => {
    const fetchProducts = async () => {
      const productsRef = collection(db, 'products');
      // const productDocs = await getDocs(productsRef);

      // productDocs.forEach(doc => {
      //   console.log(doc.id, doc.data());
      // });
      // const productsArray = productDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setProducts(productsArray);
      const productDocs = await getDocs(productsRef);
      const productsArray = productDocs.docs.map(doc => converter(doc));
      // productDocs.map(doc => 
      //   converter(doc)  
      // );
      setProducts(productsArray);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
