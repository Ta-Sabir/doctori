import styles from "../style";
import { MainTitle, Button } from "../components/index";
import { egypt, user } from "../assets/index";
const Contact = () => {
  return (
    <div className="contact">
      <div className={` ${styles.flex} container flex-col md:flex-row gap-[60px] md:gap-[60px]`}>
        <div className="contact-map w-[93vw] md:w-[45%]">
          <iframe
            className="mt-[100px] rounded-[16px]"
            width="100%"
            height="757px"
            src="https://maps.google.com/maps?width=100%25&amp;height=657px&amp;hl=en&amp;q=%D9%85%D8%AF%D9%8A%D9%86%D8%A9%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1+(%D9%85%D8%AF%D9%8A%D9%86%D8%A9%206%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="contact-content">
          <MainTitle
            title="اتــصــل بــنــا"
            content="قم بملأ بياناتك و سنقوم بالرد عليك في أقرب وقت .."
            text="text-[var(--sec-color)]"
            paragraph="text-[#808D9E]"
          />
          <form action="#" className="mt-[20px]">
            <div className={`user-name relative ${styles.flexColumn}`}>
              <label
                htmlFor="#"
                className="text-[var(--third-color)] text-[17px] font-bold"
              >
                الاسم
              </label>
              <input
                type="text"
                placeholder="احمد محمد"
                className="md:w-[100%] bg-[transparent] mt-[15px] mr-[35px]"
              />
              <figure>
                <img src={user} alt="user" className="absolute top-[45px]" />
              </figure>
              <div className="w-[100%] sm:w-[500px] h-[2px] bg-[#9E9E9E] mt-[15px]" />
            </div>
            <div
              className={`user-phone relative ${styles.flexColumn} mt-[20px]`}
            >
              <label
                htmlFor="#"
                className="text-[var(--third-color)] text-[17px] font-bold"
              >
                رقم الهاتف
              </label>
              <input
                type="text"
                placeholder="+213"
                className="md:w-[100%] bg-[transparent] mt-[15px] mr-[35px]"
              />
              <figure>
                <img src={egypt} alt="egypt" className="absolute top-[45px]" />
              </figure>
              <div className="w-[100%] sm:w-[500px] h-[2px] bg-[#9E9E9E] mt-[15px]" />
            </div>
            <div className={`user-message ${styles.flexColumn} mt-[20px]`}>
              <label
                htmlFor="#"
                className="text-[var(--third-color)] text-[17px] font-bold"
              >
                الرسالة
              </label>
              <textarea
                placeholder="محتوى الرسالة"
                cols="10"
                rows="8"
                className="bg-[transparent] text-[16px] mt-[15px] mr-[5px]"
              ></textarea>
              <div className="w-[100%] sm:w-[500px] h-[2px] bg-[#9E9E9E] mt-[15px]" />
            </div>
          </form>
          <div className="btn mt-[35px]">
            <Button
              title="ارسال"
              bg="bg-[var(--main-color)]"
              text="text-[var(--white-color)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
