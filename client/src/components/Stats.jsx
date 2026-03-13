export default function Stats() {
  return (
    <div className="w-full">
      <div className="line h-px bg-gray-200 w-5/5"></div>
      <div className="flex place-content-between mt-9 text-center">
        <div className="w-full">
          <h2 className="font-semibold text-3xl">50k+</h2>
          <span className="text-1xl text-gray-600 font-extralight">Happy <span className="block">Customers</span></span>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-3xl">1000+</h2>
          <span className="text-1xl text-gray-600 font-extralight">Products</span>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-3xl">4.9</h2>
          <span className="text-1xl text-gray-600 font-extralight">Rating</span>
        </div>
      </div>
    </div>
  );
}
