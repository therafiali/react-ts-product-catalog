// src/App.tsx
import React from 'react';
import ProductCatalog from './components/ProductCatalog';
import { products } from './data/product';

const App: React.FC = () => {
  return (
    <div className=" bg-black ">
     
      <ProductCatalog products={products} />
    </div>
  );
};

export default App;
