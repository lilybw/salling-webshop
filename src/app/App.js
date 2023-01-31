import './App.css';
import ProductIndex from '../productIndex/ProductIndex.tsx';
import Header from '../header/Header.tsx';
import React from 'react';

const App = () => {
  const [productQuery, setProductQuery] = React.useState('');
  
  return (
    <div className="App">
      <Header setQuery={setProductQuery} />
      <ProductIndex query={productQuery} />
    </div>
  );
}

export default App;
