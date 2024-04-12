import "./Services.css";
import { MainTitle, Buttons } from "../index";
import { servicesBox } from "../../constants/index";
// import { Ellipse } from "../../assets/index";
import styles from "../../style";
const Services = () => {
  return (
    // START SERVICES COMPONENT
    <div className="services container">
      {/* <figure>
        <img
          src={Ellipse}
          alt="Ellipse"
          className="absolute top-0 left-[-100px] z-10"
        />
      </figure> */}
      <MainTitle
        title="الخدمات"
        content="تقدم المستشفى لكم نطاقًا واسعًا من خدمات الرعاية الطبية عالية الجودة
        للمرضى لتلبية جميع الاحتياجات"
        text="text-[var(--sec-color)]"
        paragraph="text-[#808D9E]"
      />
      <div className="services-boxs grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-[40px] md:mt-[70px]">
        {servicesBox.map((item) => {
          return (
            <div
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
            </div>
          );
        })}
      </div>
      <Buttons />
    </div>
    // END SERVICES COMPONENT
  );
};

export default Services;
