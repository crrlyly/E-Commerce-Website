function ContactPage() {
  return (
    <div className="md:h-100 md:px-20 w-full min-h-160 bg-white flex justify-center items-center">
      <div className="w-5/6 h-[70%] max-w-283.5 bg-gray-900 rounded-3xl pt-10 flex flex-col items-center md:justify-center gap-6 px-8">
        <h1 className="text-center text-white text-4xl font-bold">
          Stay in the Loop
        </h1>
        <p className="text-white opacity-70 text-center font-light">
          Subscribe to our newsletter and be the first to know about new
          arrivals, exclusive offers, and style tips.
        </p>
        <div className="flex md:flex-row md:justify-around flex-col gap-5 items-center justify-center">
          <textarea
            className="w-3/4 md:h-10 bg-gray-700 leading-8.5 resize-none text-gray-100 rounded-2xl pl-5 h-10 border border-gray-600"
            placeholder="Enter your email"
          ></textarea>
          <button className="md:py-2 md:px-10 bg-white px-20 py-4 rounded-2xl flex gap-3">
            Subscribe
            <span class="material-symbols-outlined">send</span>
          </button>
        </div>
        <p className="text-center mb-10 text-white opacity-50 font-light">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
