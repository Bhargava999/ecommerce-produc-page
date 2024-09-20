import { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';

function App() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className=" lg:max-w-screen-lg mx-auto relative">
      <Header itemCount={itemCount} setItemCount={setItemCount} />
      <main className="sm:flex sm:gap-10 sm:items-center sm:justify-center sm:mt-5 sm:px-4">
        <Product />
        <ProductInfo itemCount={itemCount} setItemCount={setItemCount} />
      </main>
      <footer className="mt-4 py-4">
        <div className="flex items-center justify-center text-xs gap-1 text-neutral-100">
          Challenge by
          <a
            className="hover:text-primary hover:border-b hover:border-primary text-neutral font-medium"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          Coded by
          <a
            className="hover:text-primary hover:border-b hover:border-primary  text-neutral font-medium"
            href="https://www.linkedin.com/in/bhargava-manikanta-mamidisetti-1022a3222/"
            target="_blank"
          >
            Bhargava Manikanta
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
