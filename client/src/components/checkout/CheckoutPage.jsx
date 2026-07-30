import { Link } from "react-router-dom";
import CheckoutCard from "../cards/CheckoutCard";
import { useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { calculateItemTotal } from "../../utils/calculateItemTotal";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (items.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    try {
      setIsSubmitting(true);
      setCheckoutError("");

      const response = await fetch(
        "http://localhost:5000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer: formData,
            items: items.map((item) => ({
              pid: item.pid,
              selected: item.selected,
            })),
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutError(error.message);
      setIsSubmitting(false);
    }
  };

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
            onChange={handleChange}
            value={formData.email}
            required
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
                value={formData.fname}
                required
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
                value={formData.lname}
                required
              />
              <br />
            </div>
          </div>
          <br />
        </div>

        {/* Shipping Address Form */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10 ">
          <div className="text-[1.2rem] font-semibold mb-7 flex items-center">
            <span className="material-symbols-outlined mr-3">
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
            value={formData.address}
            required
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
                value={formData.city}
                required
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
                value={formData.zip}
                required
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
            onChange={handleChange}
            value={formData.country}
            required
          />
          <br />
          <br />
        </div>

        {/* Payment Info Form  */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10">
          <div className="text-[1.2rem] font-semibold mb-7 flex items-center">
            <span className="material-symbols-outlined mr-3">credit_card</span>
            <span>Payment</span>
          </div>

          <p className="mt-4 text-black/60">
            You will enter your payment information securely through Stripe
            after clicking Place Order.
          </p>

          <br />
        </div>

        {/* Item Cards */}
        <div className="w-95 h-auto bg-white p-8 border border-black/25 rounded-2xl mt-10">
          <span className="text-[1.2rem] font-semibold">Order Summary</span>
          <div className="w-full h-auto overflow-y-auto mt-7">
            <CheckoutCard></CheckoutCard>
          </div>
          <div className="w-full h-auto border-t border-b pt-5 pb-5 mt-5">
            <input
              className="border border-black/25 p-3 rounded-[13px] w-full mb-5"
              type="text"
              placeholder="Promo code (SALE30)"
            />
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>${calculateItemTotal(items)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <div className="w-full h-auto pt-5 pb-5">
            <div className="flex justify-between text-[1.3rem] font-bold">
              <span>Total</span>
              <span>${0 + calculateItemTotal(items)}</span>
            </div>
            {checkoutError && (
              <p className="mt-4 text-red-600">{checkoutError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full bg-red-100 rounded-2xl p-5 text-[1.3rem] mt-8
             disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Opening secure checkout..." : "🔒 Place Order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
