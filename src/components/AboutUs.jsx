import { Link } from "react-router-dom";
import { doctors, stars1, Star } from "../assets/index";
import styles from "../style";
import { Button } from "./index";
const AboutUs = () => {
  return (
    // START WHO COMPONENT
    <div
      className={`who container ${styles.flex} flex-col xl:flex-row gap-[60px] my-[50px] md:my-[120px]`}
    >
      <div className="who-img relative">
        <figure>
          <img src={doctors} alt="doctors image" />
        </figure>
        <figure>
          <img
            src={Star}
            alt="Star"
            className="w-[61px] h-[61px] absolute bottom-[-28px] right-[40px]"
          />
        </figure>
        <figure>
          <img
            src={Star}
            alt="Star"
            className="w-[33px] h-[33px] absolute bottom-[-13px] left-[35px]"
          />
        </figure>
        <figure>
          <img
            src={Star}
            alt="Star"
            className="w-[43px] h-[43px] absolute top-[-20px] right-[20px]"
          />
        </figure>
      </div>
      <div className="who-content max-w-[600px]">
        <h4 className="text-[var(--sec-color)] text-[50px] font-black">
          مـن نـحـن
        </h4>
        <p className="text-[#566983] text-[17px] font-semibold leading-[2] mt-[10px]">
          <span className="text-[var(--main-color)]">مستشفي قدرات الوادي </span>
          هدفنـا الأول هـو العـنـاية بـصـحـة وســلامـة الـمـرضـى مــن خــلال
          الإرتـقــاء بـمـسـتـوى الـخــدمــة واسـتخدام أحـدث الـتـقـنـيـات عـلـى
          مـسـتـوى الـعـالـم ..
        </p>
        <figure className="mt-[15px]">
          <img src={stars1} alt="stars1" />
        </figure>
        <Link
          to={"https://web.whatsapp.com/"}
          target="_blink"
          className="btn block mt-[30px]"
        >
          <Button
            title="واتساب"
            bg="bg-[var(--main-color)]"
            text="text-[var(--white-color)]"
          />
        </Link>
      </div>
    </div>
    // END WHO COMPONENT
  );
};

export default AboutUs;
