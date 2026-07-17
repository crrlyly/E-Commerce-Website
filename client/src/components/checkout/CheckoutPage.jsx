import { Link } from "react-router-dom";
export default function CheckoutPage() {
  return (
    <div className="w-full h-auto bg-pink-200 flex flex-col justify-center items-center pb-30">
      <div className="w-90 h-40 bg-yellow-200 flex items-center">
        <Link
          to="/"
          className="bg-purple-200 flex justify-center items-center px-2 py-2 rounded-2xl"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <span>Checkout</span>
        <div>
          <span className="material-symbols-outlined">lock</span>
          <span>Secure checkout</span>
        </div>
      </div>

      <form
        action="/action_page.php"
        className="w-full h-auto flex flex-col justify-center items-center"
      >
        <div className="w-90 h-auto bg-green-200">
          <h1>Contact Information</h1>
          <label htmlFor="email">Email Address*</label>
          <br />
          <input type="text" id="email" name="email" value="you@example.com" />
          <br />
          <label htmlFor="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" value="Carly" />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" value="Chick" />
          <br />
          <br />
        </div>
        <div className="w-90 h-auto bg-green-200 mt-10">
          <div>
            <span class="material-symbols-outlined">delivery_truck_speed</span>
            <span>Shipping Address</span>
          </div>
          <label htmlFor="address">Street Address*</label>
          <br />
          <input type="text" id="address" name="address" value="123 Main St" />
          <br />
          <label htmlFor="city">City*</label>
          <br />
          <input type="text" id="city" name="city" value="New York" />
          <br />
          <label htmlFor="zip">ZIP / Postal Code*</label>
          <br />
          <input type="text" id="zip" name="zip" value="10001" />
          <br />
          <label htmlFor="country">Country</label>
          <br />
          <input type="text" id="country" name="country" value="United States" />
          <br />
          <br />
        </div>
        <div className="w-90 h-auto bg-green-200 mt-10">
          <div>
            <span class="material-symbols-outlined">credit_card</span>
            <span>Payment</span>
          </div>
          <label htmlFor="card-name">Cardholder Name*</label>
          <br />
          <input type="text" id="card-name" name="card-name" value="Jane Doe" />
          <br />
          <label htmlFor="card-num">Card Number*</label>
          <br />
          <input type="text" id="card-num" name="card-num" value="1234 5678 9012 3456" />
          <br />
          <label htmlFor="expiry">Expiration*</label>
          <br />
          <input type="text" id="expiry" name="expiry" value="MM / YY" />
          <br />
          <label htmlFor="cvv">CVV*</label>
          <br />
          <input type="text" id="cvv" name="cvv" value="123" />
          <br />
          <br />
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-auto">

          </div>
          <div className="w-full h-auto">

          </div>
          <div className="w-full h-auto">

          </div>
        </div>
      </form>
    </div>
  );
}
