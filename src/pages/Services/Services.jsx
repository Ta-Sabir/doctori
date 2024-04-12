import "./Services.css";
import { servicesBox, servicesBox2 } from "../../constants/index";
import styles from "../../style";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    // START SERVICES PAGES
    <section id="services">
      <div className="section-title pt-[45px] md:pt-[120px] pb-[60px]">
        <div className="container">
          <h4 className="text-[var(--sec-color)] text-[60px] font-black">
            الخدمات
          </h4>
          <p className="text-[#566983] text-[16px] font-normal leading-[1.6] w-[100%] md:w-[80%]">
            تقدم المستشفى لكم نطاقًا واسعًا من خدمات الرعاية الطبية عالية الجودة
            للمرضى لتلبية جميع الاحتياجات
          </p>
        </div>
      </div>
      <div className="container">
        <div className="services-boxs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[60px] md:mt-[80px]">
          {servicesBox.map((item) => {
            return (
              <Link
                to={"/services/service"}
                key={item.id}
                id={item.id}
                className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
              >
                <div
                  className={`services-box-icon ${styles.flex} justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full`}
                >
                  <figure>
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className="w-[38px] h-[38px]"
                    />
                  </figure>
                </div>
                <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
                  {item.title}
                </h4>
                <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
                  {item.pargraph}
                </p>
                <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
                  اقرأ المزيد..
                </span>
              </Link>
            );
          })}
          {servicesBox2.map((item) => {
            return (
              <Link
                to={"/services/service"}
                key={item.id}
                id={item.id}
                className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
              >
                <div
                  className={`services-box-icon ${styles.flex} justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full`}
                >
                  <figure>
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className="w-[38px] h-[38px]"
                    />
                  </figure>
                </div>
                <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
                  {item.title}
                </h4>
                <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
                  {item.pargraph}
                </p>
                <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
                  اقرأ المزيد..
                </span>
              </Link>
            );
          })}
          {/* <div className={`buttons ${styles.flex} gap-5 mt-[25px]`}>
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
          </div> */}
        </div>
      </div>
    </section>
    // END SERVICES PAGES
  );
};

export default Services;
