export default function CartBar() {
  return (
    <div className="w-full h-dvh bg-pink-400">
      <div className="w-full h-21.25 bg-white px-5 flex place-items-center">
        <div className="flex">
          <h1>Your Cart</h1>
          <div>16</div>
        </div>
        <div>{/* x */}</div>
      </div>
      <div></div>
      <div>
        <div>
          <span>Subtotal</span>
          <span>$1849.82</span>
        </div>
        <div>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>$1938.35</span>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
}
