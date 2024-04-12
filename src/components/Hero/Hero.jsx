import "./Hero.css";
import { Search } from "../index";
const Hero = () => {
  return (
    // START HERO COMPONENT
    <div className="hero">
      <div className="container">
        <div className="hero-content absolute top-[50%] translate-y-[-50%]">
          <div className="hero-title mt-[50px]">
            <h4 className="text-[var(--white-color)] text-[39px] md:text-[50px] font-bold leading-[1.8]">
              احجز موعدك مع أفضل الأطباء
              <br /> في مستشفي الوادي
            </h4>
            <p className="text-[var(--white-color)] text-[16px] md:text-[18px] font-medium mt-[20px]">
              صرح طبي مجهز على أعلى مستوى لتقديم الخدمات الطبية ...
            </p>
          </div>
          <Search />
        </div>
      </div>
    </div>
    // END HERO COMPONENT
  );
};

export default Hero;
