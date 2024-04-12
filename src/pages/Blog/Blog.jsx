import styles from "../../style";
import { MainTitle } from "../../components/index";
import { blogPageBox } from "../../constants/index";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    // START BLOG PAGE
    <section id="blog">
      <div className="container">
        <MainTitle
          title="المدونـة الطبيـة"
          content="صفحة المدونة الطبية داخل موقع المستشفى تُعتبر مركزًا متكاملاً للمعلومات الطبية والصحية التي تقدم خدمة مستدامة للمرضى والزوار. تتيح هذه الصفحة للزوار فرصة الوصول إلى محتوى غني بالمعلومات، مصمم لتوفير التوجيه والتثقيف حول مختلف جوانب الصحة والعلاج.
"
          text="text-[var(--sec-color)]"
          paragraph="text-[#808D9E]"
        />
        <div className="bg-[#DBDBDB] w-[100%] h-[2px] mt-[50px]"></div>
        <div className="blogBoxs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[50px]">
          {blogPageBox.map((item) => {
            return (
              <Link to={"article"} key={item.id} className="blog-box">
                <figure>
                  <img src={item.img} alt={item.img} className="w-[100%]" />
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    // END BLOG PAGE
  );
};

export default Blog;
