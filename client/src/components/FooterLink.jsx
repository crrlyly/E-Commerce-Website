export default function FooterLink({title,link1,link2,link3}) {
  return (
    <div className="md:gap-3 flex flex-col gap-4">
      <h1 className="md:text-[1rem] font-medium text-[1.2rem]">{title}</h1>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block hover:underline text-gray-700 font-light"
        href=""
      >
        {link1}
      </a>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block hover:underline text-gray-700 font-light"
        href=""
      >
        {link2}
      </a>
      <a
        className="md:text-[1rem] md:text-gray-500 md:font-medium block hover:underline text-gray-700 font-light"
        href=""
      >
        {link3}
      </a>
    </div>
  );
}
