import { Link } from "react-router-dom";
export default function CheckoutPage() {
  return (
    <div className="w-full h-auto bg-pink-200 flex flex-col justify-center items-center ">
      <div className="w-80% h-30 bg-yellow-200">
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
      <div className="w-80% h-30 bg-green-200">
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value="John"/><br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
        <input type="submit" value="Submit"/>
      </div>
      <div className="w-80% h-30 bg-green-200">
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value="John"/><br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
        <input type="submit" value="Submit"/>
      </div>
      <div className="w-80% h-30 bg-green-200">
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value="John"/><br/>
        <label htmlFor="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
        <input type="submit" value="Submit"/>
      </div>
    </div>
  );
}
