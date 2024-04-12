import styles from "../style";
import { footerlogo } from "../assets/index";
import { navLinks, socialMedia } from "../constants/index";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  const footerBox1 = [
    {
      id: "box1",
      pargraph:
        "تتسم مهمتنا الرئيسية بالسعي الــجــاد للـرعـايـة الفــعّـالــة لـصـحـة وسـلامـة المـرضـى، حـيـث نتـطـلع إلى تحقيق هذا الهدف من خلال رفع مستوى الخدمة الطبية واعتمادنـا على أحـدث التـقـنيات الطـبية العالمية. نـلتزم بتوفير بيـئـة آمنة ومتقدمة للمرضى، مع التركيز على تحسين الجـودة الشاملة للرعاية الصحية..",
      title: "تابع تيم سوفت",
    },
  ];
  const footerBox2 = [
    {
      id: "box2-1",
      title: "UIUX@elfayomy.com",
    },
    {
      id: "box2-2",
      title: "+201091158519",
    },
    {
      id: "box2-3",
      title: "طريق التحرير، قسم أول 6 أكتوبر، قسم الجيزة",
    },
    {
      id: "box2-4",
      title: "اتصل الآن واتساب",
    },
    {
      id: "box2-5",
      title: "أوقات العمل : 09:00 صباحًا إلى 18:00 مساءً ",
    },
  ];
  return (
    // START FOOTER COMPONENT
    <div className="footer bg-[var(--main-color)] pt-[60px] pb-[20px] mt-[80px]">
      <div className="container grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-start gap-4 lg:gap-10">
        {footerBox1.map((item) => {
          return (
            <div key={item.id} className="box">
              <figure>
                <img src={footerlogo} alt="teamsoftlogo" />
              </figure>
              <p className="text-[var(--white-color)] text-[15px] font-normal leading-[1.8] mt-[15px]">
                {item.pargraph}
              </p>
              <h5 className="text-[var(--main-color)] text-[19px] font-bold">
                {item.title}
              </h5>
              <div className={`scoials-media ${styles.flexCenter} gap-4`}>
                {socialMedia.map((item) => {
                  return (
                    <Link to={item.link} target="_blank" key={item.id}>
                      <figure>
                        <img src={item.icon} alt={item.icon} className="" />
                      </figure>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="box">
          <h5 className="text-[var(--white-color)] text-[18px] font-bold mr-[12px] my-[12px]">
            روابط مختصرة
          </h5>
          <div className={`links ${styles.flexColumn} gap-1`}>
            {navLinks.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.id === "home" ? "/" : item.id}
                  className="text-[var(--white-color)] text-[16px] font-normal py-[8px] px-[12px]"
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="box">
          <h5 className="text-[var(--white-color)] text-[18px] font-bold mr-[12px] my-[12px]">
            تواصل معنا
          </h5>
          {footerBox2.map((item) => {
            return (
              <ul key={item.id}>
                <li
                  className={`${
                    item.id === "box3-3" || item.id === "box3-5"
                      ? "text-[var(--main-color)]"
                      : "text-[var(--white-color)]"
                  } text-[16px] font-normal py-[8px] px-[12px] cursor-pointer`}
                >
                  {item.title}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-[90%] h-[1px] mt-[30px] mx-auto" />
      <p className="text-[#ffffffb4] text-[16px] pt-[15px] text-center">
        <span> تم تصميم الموقع من طرف</span>
        <Link
          to={"https://elfayomy.com/"}
          target="_blank"
          className="text-[#FFFFFF]"
        >
          <span> أحمد الفيومي</span>
        </Link>
        <span> و برمجته من طرف</span>
        <Link
          to={"https://talhaoui-saber.vercel.app/"}
          target="_blank"
          className="text-[#FFFFFF]"
        >
          <span> طلحاوي صابر</span>
        </Link>
      </p>
    </div>
    // END FOOTER COMPONENT
  );
};

export default Footer;
