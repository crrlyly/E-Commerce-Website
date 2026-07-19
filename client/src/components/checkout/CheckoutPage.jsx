import { Link } from "react-router-dom";
import CheckoutCard from "../cards/CheckoutCard";
import { useState } from "react";
export default function CheckoutPage() {

  const [formData, setFormData] = useState({
    email:"",
    fname:"",
    lname:"",
    addy:"",
    city:"",
    zip:"",
    country:"",
    cName:"",
    cNum:"",
    exp:"",
    cvv:"",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="w-full h-auto bg-black/2 flex flex-col justify-center items-center pb-30">
      {/* Checkout Title */}
      <div className="w-95 h-35 flex items-center">
        <Link
          to="/"
          className="flex justify-center items-center px-2 py-2 rounded-2xl"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <span className="text-3xl font-bold ml-3">Checkout</span>
        <div className="text-black/40 flex items-center ml-6">
          <span className="material-symbols-outlined">lock</span>
          <span>Secure checkout</span>
        </div>
      </div>

      {/* Start of form */}
      <form
        action="/action_page.php"
        onSubmit={handleSubmit}
        className="w-full h-auto flex flex-col justify-center items-center"
      >
        {/* Contact Info Form */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl">
          <h1 className="text-[1.2rem] font-semibold mb-7">
            Contact Information
          </h1>
          <label className="font-semibold" htmlFor="email">
            Email Address*
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="border border-black/25 p-3 rounded-[13px]"
            value={email}
            onChange={handleChange}
          />
          <br />
          <div className="grid grid-cols-[50%_50%] bg-white mt-5">
            <div className="w-full pr-3">
              <label className="font-semibold" htmlFor="fname">
                First name*
              </label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Carly"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>

            <div className="w-full pl-3">
              <label className="font-semibold" htmlFor="lname">
                Last name*
              </label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Chick"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>
          </div>
          <br />
        </div>

        {/* Shipping Address Form */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10 ">
          <div className="text-[1.2rem] font-semibold mb-7 flex items-center">
            <span class="material-symbols-outlined mr-3">
              delivery_truck_speed
            </span>
            <span>Shipping Address</span>
          </div>
          <label className="font-semibold" htmlFor="address">
            Street Address*
          </label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St"
            className="border border-black/25 p-3 rounded-[13px] w-full"
            onChange={handleChange}
          />
          <br />
          <div className="grid grid-cols-[50%_50%] bg-white mb-5 mt-5">
            <div className="w-full pr-3">
              <label className="font-semibold" htmlFor="city">
                City*
              </label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="New York"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="w-full pl-3">
              <label className="font-semibold" htmlFor="zip">
                ZIP / Postal Code*
              </label>
              <br />
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="10001"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>
          </div>

          <label className="font-semibold" htmlFor="country">
            Country
          </label>
          <br />
          <input
            type="text"
            id="country"
            name="country"
            placeholder="United States"
            className="border border-black/25 p-3 rounded-[13px] w-full"
          />
          <br />
          <br />
        </div>

        {/* Payment Info Form  */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10">
          <div className="text-[1.2rem] font-semibold mb-7 flex items-center">
            <span class="material-symbols-outlined mr-3">credit_card</span>
            <span>Payment</span>
          </div>
          <label className="font-semibold" htmlFor="card-name">
            Cardholder Name*
          </label>
          <br />
          <input
            type="text"
            id="card-name"
            name="card-name"
            placeholder="Jane Doe"
            className="border border-black/25 p-3 rounded-[13px] w-full"
            onChange={handleChange}
          />
          <br />
          <div className="mt-5">
            <label className="font-semibold" htmlFor="card-num">
              Card Number*
            </label>
            <br />
            <input
              type="text"
              id="card-num"
              name="card-num"
              placeholder="1234 5678 9012 3456"
              className="border border-black/25 p-3 rounded-[13px] w-full"
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="grid grid-cols-[50%_50%] bg-white mb-5 mt-5">
            <div className="w-full pr-3">
              <label className="font-semibold" htmlFor="expiry">
                Expiration*
              </label>
              <br />
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM / YY"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="w-full pl-3">
              <label className="font-semibold" htmlFor="cvv">
                CVV*
              </label>
              <br />
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                className="border border-black/25 p-3 rounded-[13px] w-full"
                onChange={handleChange}
              />
              <br />
            </div>
          </div>

          <br />
        </div>

        {/* Item Cards */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10">
          <span className="text-[1.2rem] font-semibold">Order Summary</span>
          <div className="w-full h-auto overflow-y-auto mt-7">
            <CheckoutCard></CheckoutCard>
          </div>
          <div className="w-full h-auto border-t border-b pt-5 pb-5 mt-5">
            <input className="border border-black/25 p-3 rounded-[13px] w-full mb-5" type="text" placeholder="Promo code (SALE30)" />
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>$</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <div className="w-full h-auto pt-5 pb-5">
            <div className="flex justify-between text-[1.3rem] font-bold">
              <span>Total</span>
              <span>$</span>
            </div>
            <input className="w-full bg-red-100 rounded-2xl p-5 text-[1.3rem] mt-8" type="submit" value="🔒 Place Order"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
