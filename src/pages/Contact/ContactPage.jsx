import "./Contact.css";
import styles from "../../style";
import { Question, Contact } from "../../components/index";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    // START CONTACT PAGE
    <section id="contact">
      <div className="container">
        <Contact />
      </div>
      <div className="contact-boxs bg-[var(--main-color)] py-[15px] my-[100px]">
        <div className={`container ${styles.flexStart} flex-col lg:flex-row gap-[20px]`}>
          <div
            className={`contact-box ${styles.flex} gap-[15px] p-[5px] pt-[30px] md:p-[30px] cursor-pointer`}
          >
            <div className="contact-box-icon relative">
              <span
                className={`icon-mail text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}
              ></span>
            </div>
            <div className="contact-box-info text-[#fff]">
              <h4 className="text-[18px] font-semibold">البريد الإلكتروني</h4>
              <p className="mt-[8px]">UIUX@elfayomy.com</p>
            </div>
          </div>
          <div
            className={`contact-box ${styles.flex} gap-[15px] p-[5px] md:p-[30px] cursor-pointer`}
          >
            <div className="contact-box-icon relative">
              <span
                className={`icon-map text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}
              ></span>
            </div>
            <Link
              to={
                "https://www.google.com/maps/place/%D9%82%D8%B3%D9%85+%D8%A3%D9%88%D9%84+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9%D8%8C+%D9%85%D8%B5%D8%B1%E2%80%AD/@29.9977487,30.9892936,12z/data=!3m1!4b1!4m6!3m5!1s0x14585124598fb2d1:0xc62ce20809bbdff7!8m2!3d29.9955479!4d31.0220422!16s%2Fg%2F11hdy1drxr?entry=ttu"
              }
              target="_blanck"
            >
              <div className="contact-box-info text-[#fff]">
                <h4 className="text-[18px] font-semibold">العنوان</h4>
                <p className="mt-[8px]">
                  طريق التحرير، قسم أول 6 أكتوبر، قسم الجيزة
                </p>
              </div>
            </Link>
          </div>
          <div
            className={`contact-box ${styles.flex} gap-[15px] p-[5px] pb-[30px] md:p-[30px] cursor-pointer`}
          >
            <div className="contact-box-icon relative">
              <span
                className={`icon-call text-[var(--main-color)] text-[30px] bg-[#fff] w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}
              ></span>
            </div>
            <div className="contact-box-info text-[#fff]">
              <h4 className="text-[18px] font-semibold">الهاتف</h4>
              <p className="mt-[8px]">+201091158519</p>
            </div>
          </div>
        </div>
      </div>
      <Question />
    </section>
    // END CONTACT PAGE
  );
};

export default ContactPage;
