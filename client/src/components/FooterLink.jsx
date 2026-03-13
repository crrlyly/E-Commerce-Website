export default function FooterLink() {
  return (
    <div className="md:gap-3 flex flex-col gap-4">
      <h1 className="md:text-[1rem] font-medium text-[1.2rem]">Shop</h1>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block  text-gray-700 font-light"
        href=""
      >
        All Products
      </a>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block  text-gray-700 font-light"
        href=""
      >
        Categorys
      </a>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block  text-gray-700 font-light"
        href=""
      >
        Featured
      </a>
    </div>
  );
}
