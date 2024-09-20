import thumbnail1 from '../assets/images/thumbnail-1.jpg';
import Delete from '../assets/icons/delete.svg';
// eslint-disable-next-line react/prop-types
function Cart({ itemCount, setItemCount }) {
  const PRICE = 125.0;
  const VAlUE = PRICE * itemCount;
  function handleDelete() {
    if (itemCount > 0) {
      setItemCount((itemCount) => itemCount - 1);
    }
  }
  return (
    <div className="absolute z-10 w-[320px] sm:w-[375px] h-[220px] mt-2 right-2 sm:right-10 border bg-white rounded-md px-6 py-4 mx-auto sm:drop-shadow-xl">
      <div className="flex flex-col justify-center">
        <p className="text-base font-bold border-b-2 pb-2">Cart</p>
        {itemCount === 0 ? (
          <p className="text-center text-sm font-semibold mt-[70px] text-neutral-100">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="flex items-center justify-between mt-6">
              <img src={thumbnail1} alt="img" className="h-14 rounded-md" />
              <div>
                <p className="text-sm capitalize">
                  Fall Limited Edition sneakers
                </p>
                <p className="font-bold">
                  <span className="font-normal text-sm  text-neutral-100 mr-1">
                    ${PRICE}.00 &times;{itemCount}
                  </span>
                  ${VAlUE}.00
                </p>
              </div>
              <button onClick={handleDelete}>
                <img src={Delete} alt="delete" />
              </button>
            </div>
            <button
              className="text-center mt-4 w-full bg-primary rounded-md py-3 font-bold text-sm"
              onClick={() => setItemCount(0)}
            >
              Check out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
