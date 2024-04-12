import { MainTitle, Buttons } from "./index";
import styles from "../style";
import { testimonialsBox } from "../constants/index";
import { favourite } from "../assets/index";

const Testimonials = () => {
  return (
    // START TESTIMONIALS COMPONENT
    <div className="testimonials relative">
      <figure>
        <img
          src={favourite}
          alt="favourite"
          className="absolute w-[140px] left-[80px]"
        />
        <img
          src={favourite}
          alt="favourite"
          className="absolute w-[35px] left-[320px] top-[-30px]"
        />
        <img
          src={favourite}
          alt="favourite"
          className="absolute w-[70px] right-[130px] top-[100px] rotate-[35deg]"
        />
        <img
          src={favourite}
          alt="favourite"
          className="absolute w-[45px] right-[130px] top-[10px]"
        />
      </figure>
      <div className="container">
        <div className="text-center">
          <MainTitle
            title="اراء المرضى في مقدمة أولوياتنا"
            content="إن أفضل مقياس لنجاحنا هو درجة الرضى للمراجعين عن خدماتنا"
            margin="mx-auto"
            text="text-[var(--sec-color)]"
            paragraph="text-[#808D9E]"
          />
        </div>
        <div
          className={`testimonials-boxs grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] mt-[35px] md:mt-[80px]`}
        >
          {testimonialsBox.map((item) => {
            return (
              <div
                key={item.id}
                className="testimonials-box relative h-[220px] bg-[#fff] p-[24px] rounded-[16px] cursor-pointer"
              >
                <p className="text-[var(--third-color)] text-[16px] font-semibold leading-[40.45px]">
                  {item.pargraph}
                </p>
                <figure>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="absolute bottom-[30px]"
                  />
                </figure>
              </div>
            );
          })}
        </div>
        <Buttons />
      </div>
    </div>
    // END TESTIMONIALS COMPONENT
  );
};

export default Testimonials;
