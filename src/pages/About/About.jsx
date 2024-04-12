import "./About.css";
import styles from "../../style";
import { exam } from "../../assets/index";
import { AboutUs, Question, MainTitle } from "../../components/index";
import { aboutBox } from "../../constants/index";

const AboutPage = () => {
  return (
    // START WHO PAGE
    <section id="about">
      <div className="container">
        <AboutUs />
        <MainTitle
          title="نهدف الى تحقيق"
          content="مجموعة من الاهداف نسعي الى تحقيقها فى مستشفي قدرات الوادي "
          text="text-[var(--sec-color)]"
          paragraph="text-[#808D9E]"
        />
        <div
          className={`about-boxs grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[50px]`}
        >
          {aboutBox.map((item) => {
            return (
              <div
                key={item.id}
                className={`about-box flex items-start flex-col md:flex-row gap-[20px] bg-[#fff] p-[20px] py-[25px] rounded-[8px] cursor-pointer`}
              >
                <figure
                  className={`${styles.flexCenter} bg-[var(--main-color)] p-[15px] rounded-full`}
                >
                  <img
                    src={item.img}
                    alt={item.img}
                    className="w-[25px]"
                  />
                </figure>
                <div className="about-box-content max-w-[400px]">
                  <h4 className="text-[var(--third-color)] text-[20px] font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-[#566983] text-[16px] leading-[28.8px]">
                    {item.pargraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`about-box hidden md:flex md:${styles.flex} gap-[20px] bg-[#fff] p-[20px] py-[25px] mt-[25px] rounded-[8px] cursor-pointer`}
        >
          <figure
            className={`${styles.flexCenter} bg-[var(--main-color)] p-[15px] rounded-full`}
          >
            <img src={exam} alt="exam" />
          </figure>
          <div className="about-box-content max-w-[90%]">
            <h4 className="text-[var(--third-color)] text-[20px] font-semibold">
              واجبات المرضى وذويهم
            </h4>
            <p className="text-[#566983] text-[16px] leading-[28.8px]">
              جب على المريض وذويه تقديم كل المعلومات الخاصة بحالته الصحية بما في
              ذلك الأدوية, والأمراض التي قد سبق علاجه منها والأمراض المعدية
              وحالات الحساسية وتردده للعلاج في أي مستشفى. يجب على المريض وذويه
              إبلاغ الطبيب المعالج ..
            </p>
          </div>
        </div>
        <Question />
      </div>
    </section>
    // END WHO PAGE
  );
};

export default AboutPage;
