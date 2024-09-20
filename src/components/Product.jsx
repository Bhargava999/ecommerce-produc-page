import product_1 from '../assets/images/product-1.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { product } from '../constants/images';
import { useState } from 'react';
import { images } from '../constants/images';
function Product() {
  const [imageChange, setImageChange] = useState(0);

  function handleRight(Change) {
    if (Change < images.length - 1) {
      setImageChange((imageChange) => imageChange + 1);
    }
  }

  function handleLeft(Change) {
    if (Change > 0) {
      setImageChange((imageChange) => imageChange - 1);
    }
  }

  function handleImage(value) {
    setImageChange(value);
  }

  return (
    <section className="relative sm:mt-4">
      <FaChevronLeft
        onClick={() => handleLeft(imageChange)}
        className="sm:hidden absolute bg-white rounded-full h-8 w-8 top-[50%] -translate-y-[50%] p-2 hover:text-primary"
      />
      <FaChevronRight
        onClick={() => handleRight(imageChange)}
        className="absolute sm:hidden bg-white rounded-full h-8 w-8 top-[50%] right-0 -translate-y-[50%] hover:text-primary p-2"
      />
      <div className="sm:space-y-2 sm:w-[90%]">
        <img
          src={imageChange === 0 ? product_1 : images[imageChange]}
          alt="product"
          className="w-full h-full sm:rounded-lg transition-transform"
        />
        <ul className="sm:gap-2 hidden sm:flex">
          {product.map((item, index) => (
            <li key={item.id}>
              <button
                className="focus:ring focus:ring-primary focus:ring-offset-2 rounded-md focus:opacity-30"
                onClick={() => handleImage(index)}
              >
                <img
                  src={item.thumbnail}
                  className=" rounded-md hover:opacity-30 hover:ring hover:ring-primary hover:ring-offset-2"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Product;
