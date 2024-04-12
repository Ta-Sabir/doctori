import styles from "../style";

const Buttons = () => {
  return (
    <div className={`buttons ${styles.flex} justify-center gap-5 mt-[50px]`}>
      <button
        className={`prev ${styles.flexCenter} bg-[var(--main-color)] text-[var(--white-color)] w-[45px] h-[45px] rounded-full`}
      >
        <span className="icon-arrow-right text-[25px]"></span>
      </button>
      <div className={`points ${styles.flexBetween} gap-2`}>
        <div className="w-[21px] h-[9px] rounded-[6px] bg-[var(--main-color)] cursor-pointer"></div>
        <div className="w-[9px] h-[9px] rounded-[6px] bg-[#F1F1F1] cursor-pointer"></div>
        <div className="w-[9px] h-[9px] rounded-[6px] bg-[#F1F1F1] cursor-pointer"></div>
        <div className="w-[9px] h-[9px] rounded-[6px] bg-[#F1F1F1] cursor-pointer"></div>
      </div>
      <button
        className={`next ${styles.flexCenter} bg-[var(--main-color)] text-[var(--white-color)] w-[45px] h-[45px] rounded-full`}
      >
        <span className="icon-arrow-left text-[25px]"></span>
      </button>
    </div>
  );
};

export default Buttons;
