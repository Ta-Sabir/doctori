import "./Doctors.css";
import { MainTitle, Button } from "../index";
import { stars1 } from "../../assets/index";
import { doctorsBox } from "../../constants/index";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    // START DOCTORS COMPONENT
    <div className="doctors pt-[20px] pb-[70px] mt-[80px]">
      <div className="text-center">
        <MainTitle
          title="برنامج الأطباء الزائرين"
          content="اكفأ الأطباء حول العالم في مختلف التخصصات الطبية"
          margin=" mx-auto"
          text="text-[#fff]"
          paragraph="text-[#fff]"
        />
      </div>
      <div className="doctors-boxs container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] my-[80px]">
        {doctorsBox.map((item) => {
          return (
            <div
              key={item.id}
              className="doctors-box bg-[#fff] p-[12px] rounded-[12px]"
            >
              <figure>
                <img src={item.img} alt={item.img} className="w-[100%]" />
              </figure>
              <h4 className="text-[var(--third-color)] text-[17px] font-bold text-center mt-[10px]">
                {item.title}
              </h4>
              <p className="text-[#566983] text-[15px] font-semibold text-center mt-[8px]">
                {item.pargraph}
              </p>
              <figure>
                <img
                  src={stars1}
                  alt="Star"
                  className="w-[120px] h-[20.73px] my-[15px] mx-auto"
                />
              </figure>
              <Link to={"best-doctors"} className="block text-center">
                <Button
                  title="احجز موعد"
                  bg="bg-[var(--main-color)]"
                  text="text-[var(--white-color)]"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={"best-doctors"} className="block text-center">
        <Button
          title=" عرض جميع الأطباء"
          bg="bg-[var(--white-color)]"
          text="text-[var(--main-color)]"
        />
      </Link>
    </div>
    // START DOCTORS COMPONENT
  );
};

export default Doctors;
