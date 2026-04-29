import styles from "../../../../styles/css/home.module.css";

export default function Banner() {
  return (
    <div
      className={`${styles.banner} relative z-1 lg:rounded-xl before:absolute before:inset-0 before:bg-cover before:-z-1`}
    >
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 py-10 md:py-20 px-10 lg:py-40">
        <div className="text-liberty text-xl md:text-3xl font-semibold md:space-y-3 text-center">
          <h3>Get Latest Update By Subscribe</h3>
          <h3>Our Newslater</h3>
        </div>
        <button className="bg-mainPink text-white py-3 px-10 rounded-sm text-sm">
          Shop Now
        </button>
      </div>
    </div>
  );
}
