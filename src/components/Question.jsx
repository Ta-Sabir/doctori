import { MainTitle } from "./index";
import { arrowUp, arrowUp2, Ellipse } from "../assets/index";
import styles from "../style";
import { useState } from "react";
import { questionBox } from "../constants/index";

const Question = () => {
  const [ActiveBox, setActiveBox] = useState(null);
  const handleBoxClick = (index) => {
    setActiveBox((prevActiveBox) => (prevActiveBox === index ? null : index));
  };

  return (
    // START QUESTION COMPONENT
    <div className="question relative ">
      <img
        src={Ellipse}
        alt="Ellipse"
        className="absolute w-[265px] object-cover top-[-165px] left-0 z-[-1]"
      />
      <div className="container">
        <div className="text-center">
          <MainTitle
            title="الأسئلة الشائعة"
            content="التساؤلات المتكررة أو الأسئلة الشائعة المتوفره من المستخدمين"
            margin="mx-auto"
            text="text-[var(--sec-color)]"
            paragraph="text-[#808D9E]"
          />
          <div
            className={`question-boxs ${styles.flexColumn} justify-center gap-[40px] mt-[45px] md:mt-[100px]`}
          >
            {questionBox.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`question-box ${
                    ActiveBox === index ? "active" : ""
                  } bg-[#fff] ${
                    styles.flexBetween
                  } px-[20px] md:px-[40px] py-[30px] rounded-[9px] cursor-pointer`}
                >
                  <div className="title">
                    <h4 className="text-[#2B2F4E] text-[15px] md:text-[17px] font-semibold mt-[8px] text-right">
                      {item.title}
                    </h4>
                    {ActiveBox === index && (
                      <p className="text-[#808D9E] text-[14px] md:text-[16px] mt-[7px] text-right w-[95%] md:w-[80%]">
                        {item.pargraph}
                      </p>
                    )}
                  </div>
                  <figure>
                    <img
                      src={ActiveBox === index ? arrowUp : arrowUp2}
                      alt="arrowUp"
                      className="max-w-none"
                      onClick={() => handleBoxClick(index)}
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // END QUESTION COMPONENT
  );
};

export default Question;
