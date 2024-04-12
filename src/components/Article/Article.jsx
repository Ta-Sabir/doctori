import "./Article.css";
import styles from "../../style";
import { back, instgramBlog, xBlog, facebookBlog } from "../../assets/index";
import { Link } from "react-router-dom";
import { MainTitle, Button } from "../index";
import { blogBox } from "../../constants/index";
const Blog = () => {
  return (
    // START BLOG COMPONENT
    <section className="article">
      <div className="article-title">
        <div className="container">
          <div className={`${styles.flex} gap-[15px] pt-[360px] sm:pt-[270px]`}>
            <Link to={"../blog"}>
              <button
                className={`bg-[var(--main-color)] ${styles.flexCenter} text-[var(--white-color)] text-[23px] font-bold w-[50px] h-[50px] rounded-[8px]`}
              >
                <figure>
                  <img src={back} alt="back vectore image" />
                </figure>
              </button>
            </Link>
            <p className="text-[var(--white-color)] text-[18px]font-medium">
              رجوع للخلف
            </p>
          </div>
        </div>
      </div>
      <div className="article-content py-[10px] mt-[60px]">
        <div className="container">
          <div
            className={`${styles.flexColumn} md:flex-row md:justify-between title `}
          >
            <h1 className="text-[var(--paragraph-color)] max-w-[600px] text-[35px] font-bold leading-[1.8] mt-[20px]">
              في هذه المقالة سوف نوضح تكلفة عملية غضروف الركبة{" "}
            </h1>
            <div
              className={`scoials-media ${styles.flex} justify-end gap-2 my-[15px]`}
            >
              <button
                className={`${styles.flexCenter} border-[1px] border-[var(--main-color)] text-[var(--white-color)] text-[23px] font-bold w-[45px] h-[45px] rounded-[8px]`}
              >
                <figure>
                  <img src={instgramBlog} alt="back vectore image" />
                </figure>
              </button>
              <button
                className={`${styles.flexCenter} border-[1px] border-[var(--main-color)] text-[var(--white-color)] text-[23px] font-bold w-[45px] h-[45px] rounded-[8px]`}
              >
                <figure>
                  <img src={xBlog} alt="back vectore image" />
                </figure>
              </button>
              <button
                className={`${styles.flexCenter} border-[1px] border-[var(--main-color)] text-[var(--white-color)] text-[23px] font-bold w-[45px] h-[45px] rounded-[8px]`}
              >
                <figure>
                  <img src={facebookBlog} alt="back vectore image" />
                </figure>
              </button>
              <button
                className={`${styles.flexCenter} border-[1px] border-[transparent] bg-[var(--main-color)] text-[var(--white-color)] text-[16px] font-medium	 w-[150px] h-[50px] rounded-[8px]`}
              >
                <p> نسخ رابط المقالة</p>{" "}
              </button>
            </div>
          </div>
          <div className="pargraph">
            <p className="text-[#333F51] text-[16px] md:text-[18px] font-medium leading-[40px] mt-[20px]">
              زاد السؤال عن اسعار عمليات العظام في مصر، إذ تعتبر جراحات العظام
              هي التخصص المسئول عن علاج إصابات الجهاز العضلي الهيكلي في الجسم،
              الذي يتضمن العظام والمفاصل والأربطة والأوتار والعضلات والأعصاب،
              يعد ذلك التخصص من أكثر التخصصات المهمة الذي يلجأ إليه جميع الفئات
              العمرية وذلك لأن اصابات العظام تسبب آلاما شديدة وتمنع صاحبها من
              ممارسة حياته بشكل طبيعي، لذلك في هذه المقالة سوف نقوم بتوضيح اسعار
              عمليات العظام في مصر وأكثر الإصابات المنتشرة.
              <br />
              <span className="text-[var(--main-color)] text-[20px] font-semibold block my-[8px]">
                عملية تغيير مفصل الركبة
              </span>
              الكثير من الناس يعانون من آلام في مفصل الركبة تجعلهم يخضعون إلى
              عملية تغيير مفصل الركبة واستبدال المفصل الطبيعي بآخر صناعي، ويتم
              ذلك من خلال عملية جراحية يتم فيها وصل قطعة من الركبة الصناعية بعظم
              الفخذ وذلك للتخلص من هذه الآلام المزعجة التي تسبب عائق كبير للمريض
              وتمنعه من ممارسة الأنشطة اليومية البسيطة مثل المشي والذهاب إلى
              العمل وغيرها من الأنشطة
              <span className="text-[var(--main-color)] text-[20px] font-semibold block my-[8px]">
                ما هي أسباب تغيير مفصل الركبة ؟
              </span>
              هناك العديد من الأسباب التي تؤدي إلى تغيير مفصل الركبة والتي
              يحددها الطبيب المتخصص بعد عمل الاشعة والفحوصات اللازمة، من أهم هذه
              الأسباب الآتي: 1. هشاشة العظام وخشونة الركبة يعد السبب الرئيس
              لإجراء عملية تغيير مفصل الركبة هو الإصابة بهشاشة العظام وخشونة
              الركبة، تؤثر خشونة الركبة على غضروف المفصل فيُصبح غير قادر على
              امتصاص الصدمات. 2. آلام غير محتملة في الركبة الألم الشديد الذي
              يشعر به المريض ويمنعه من ممارسة حياته بشكل طبيعي يعد من أكثر
              الشكاوى الشائعة بين المرضى الذين يُعانون من تآكل في مفصل الركبة
              ويكون في أغلب الحالات في الركبة نفسها. 3. التيبس والتصلب في المفصل
              يحدث التيبس أثناء الليل ويزيد بشكل تدريجي، حيث يُسبب للمريض صعوبة
              في الحركة، ويُؤثر أيضًا على أنشطته اليومية المختلفة. 4. صعوبات في
              المشي عندما يُصبح التآكل في الركبة في مرحلة متقدمة يجد المريض
              صعوبة في المشي وألم في الطرف السفلي بالكامل، وبعد مرور الوقت يُصبح
              المريض بحاجة لمساعدة خارجية. هناك أسباب أخرى لتغيير مفصل الركبة،
              مثل: · الإصابة بالسمنة. · التقدم في العمر. · التهاب المفاصل
              الروماتويدي. · الكسور وبعض العوامل الخلقية. كل هذه الأسباب تحتاج
              إلى استشارة طبيب عظام متخصص لعمل الفحوصات اللازمة وتحديد سبب ظهور
              المشكلة والعلاج المناسب لها وفي حال كان المريض بحاجة إلى التدخل
              الجراحي يقوم الطبيب بتوضيح نوع العملية والنتائج المتوقعة منها،
              لذلك تختلف اسعار عمليات العظام في مصر حسب كل حالة والطبيب المعالج
            </p>
          </div>
          <MainTitle
            title="مقالات متشابهة"
            text="text-[var(--sec-color)]"
            paragraph="text-[#808D9E]"
          />
          <div className="blog-boxs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px] mt-[45px]">
            {blogBox.map((item) => {
              return (
                <div key={item.id} className="blog-box">
                  <figure>
                    <img src={item.img} alt={item.img} />
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
            <Link to={"/blog"}>
              <Button
                title="عرض جميع المقالات"
                bg="bg-[var(--main-color)]"
                text="text-[var(--white-color)]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
    // END BLOG COMPONENT
  );
};

export default Blog;
