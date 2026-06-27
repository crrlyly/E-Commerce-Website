import Stats from "../Stats";
import title from "../../assets/title.jpeg";
import collection from "../../assets/collection.jpg";
import styles from "../../styles/home/home.module.css";

function TitlePage() {
  return (
    <div className="2xl:pt-0 2xl:h-dvh xl:min-h-190 md:min-h-180 md:flex md:gap-6 md:pt-25 md:px-15 min-h-210 w-full bg-gray-100 pt-15">
      <div
        className={`${styles.leftContainer} ${styles.noMarginBottom} 2xl:justify-center md:w-1/2 md:gap-4 flex flex-col items-start gap-9 px-7`}
      >
        <div className="xl:mt-10 md:font-semibold bg-amber-50 inline-flex px-5 py-3 rounded-3xl border border-gray-100">
          <span className="material-symbols-outlined pr-1">stars_2</span> New
          Collection 2024
        </div>

        <h1 className="xl:mt-5 text-7xl font-[570] md:font-bold">
          Discover <span className="block text-gray-600">Your Style</span>
        </h1>

        <p
          className={`${styles.addMargin} xl:mb-7 md:w-full md:text-[1.3rem] text-[1.2rem] font-light leading-9 text-gray-500`}
        >
          Explore our curated collection of premium products designed to elevate
          your everyday life. Quality meets style.
        </p>

        <div className="md:mb-7 md:flex">
          <a href="/#shop" className="whitespace-nowrap md:inline-block md:mr-5 md:py-4 text-[1.3rem] inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-10 py-5 text-white content-center">
            Shop Now
            <span className="material-symbols-outlined leading-none md:align-middle">
              arrow_forward
            </span>
          </a>
          <button
            className={`${styles.noMarginLeft} ml-5 whitespace-nowrap md:mt-0 md:inline-block md:mr-5 md:py-4 md:font-semibold text-[1.3rem] mt-5 inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-5 bg-white content-center border-2 border-gray-200`}
          >
            View Lookbook
          </button>
        </div>
        <Stats></Stats>
      </div>

      <div
        className={`${styles.hideContainer} hidden w-1/2 md:flex items-center justify-center`}
      >
        <div
          className={`${styles.extendHeight} xl:h-130 drop-shadow-lg h-110 w-7/8 rounded-4xl bg-cover bg-center relative`}
          style={{ backgroundImage: `url(${title})` }}
        >
          <div className="drop-shadow-lg -bottom-7.5 -left-7.5 rounded-3xl w-70 h-30 absolute bg-white flex items-center justify-center gap-3">
            <img className="w-15 h-15" src={collection} alt="" />
            <div className="">
              <h2 className="uppercase">Trending</h2>
              <h1 className="font-semibold text-[1.1rem]">
                Classic Collection
              </h1>
              <h2 className="font-semibold">From $49</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
