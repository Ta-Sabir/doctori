import { MainTitle, Button } from "./index";
import styles from "../style";
import { blogBox } from "../constants/index";
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
    // START BLOG COMPONENT
    <div className="blog container">
      <MainTitle
        title="المدونـة الطبيـة"
        content="صفحة المدونة الطبية داخل موقع المستشفى تُعتبر مركزًا متكاملاً للمعلومات الطبية والصحية التي تقدم خدمة مستدامة للمرضى والزوار. تتيح هذه الصفحة للزوار فرصة الوصول إلى محتوى غني بالمعلومات، مصمم لتوفير التوجيه والتثقيف حول مختلف جوانب الصحة والعلاج.
        "
        text="text-[var(--sec-color)]"
        paragraph="text-[#808D9E]"
      />
      <div className={`points ${styles.flex} justify-end gap-2 mt-[30px] hidden xl:flex`}>
        <div className="w-[56px] h-[17px] rounded-[12px] bg-[var(--main-color)] cursor-pointer"></div>
        <div className="w-[17px] h-[17px] rounded-[12px] bg-[#F1F1F1] cursor-pointer"></div>
        <div className="w-[17px] h-[17px] rounded-[12px] bg-[#F1F1F1] cursor-pointer"></div>
        <div className="w-[17px] h-[17px] rounded-[12px] bg-[#F1F1F1] cursor-pointer"></div>
      </div>
      <div className={`blog-boxs grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[25px] mt-[45px]`}>
        {blogBox.map((item) => {
          return (
            <div key={item.id} className="blog-box">
              <figure>
                <img src={item.img} alt={item.img} className="w-[100%]"/>
              </figure>
              <div className={`date ${styles.flexBetween} mt-[9px]`}>
                <p className="text-[#556987] text-[16px] font-normal leading-[22.24px]">
                  {item.date}
                </p>
                <p className="text-[var(--main-color)] text-[15px] font-semibold leading-[22.24px] mr-[40px]">
                  {item.title1}
                </p>
                <span className="w-[2px] h-[22px] bg-[#EBEBEB]"></span>
                <p className="text-[var(--main-color)] text-[15px] font-semibold leading-[22.24px]">
                  {item.title2}
                </p>
              </div>
              <h4 className="text-[#333F51] text-[18px] font-bold leading-[28.28px] mt-[8px] cursor-pointer">
                {item.pargraph}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="pt-[40px] text-center">
        <NavLink to={"/blog"}>
          <Button
            title="عرض جميع المقالات"
            bg="bg-[var(--main-color)]"
            text="text-[var(--white-color)]"
          />
        </NavLink>
      </div>
    </div>
    // END BLOG COMPONENT
  );
};

export default Blog;
