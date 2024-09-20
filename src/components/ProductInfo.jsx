/* eslint-disable no-unused-vars */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ProductInfo({ itemCount, setItemCount }) {
  const [value, setValue] = useState(0);
  function handleInc() {
    setValue((value) => value + 1);
  }
  function handleDec() {
    if (value === 0) return;
    setValue((value) => value - 1);
  }

  function addToCart(count) {
    if (count === 0) return;
    setItemCount((itemCount) => itemCount + count);
    setValue(0);
  }
  return (
    <section className="flex flex-col gap-4 px-5 pb-4">
      <h2 className="uppercase font-semibold text-neutral-100 mt-5 sm:mt-0 text-xs tracking-widest">
        Sneaker Company
      </h2>
      <p className="text-2xl font-bold">
        Fall Limited Edition <span className="block"> Sneakers</span>
      </p>
      <p className="text-sm text-neutral-100 font-normal tracking-wide ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between sm:inline ">
        <p className="text-xl font-bold items-center justify-center flex sm:inline">
          $125.00
          <span className="text-xs ml-3 text-white bg-black rounded-sm p-0.5">
            50%
          </span>
        </p>
        <p className="text-xs font-medium text-neutral-100 line-through ">
          $250.00
        </p>
      </div>
      <div className="flex items-center flex-col gap-4 sm:flex-row">
        <div className="bg-stone-100 flex justify-between py-3 items-center  px-4 rounded-md w-full sm:w-[50%]">
          <button className="text-primary" onClick={handleDec}>
            -
          </button>
          <span>{value}</span>
          <button className="text-primary" onClick={handleInc}>
            +
          </button>
        </div>
        <button
          className="w-full bg-primary rounded-md py-3 shadow-2xl shadow-primary font-bold text-sm"
          onClick={() => addToCart(value)}
        >
          <img src="" alt="" />
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
