import { servicesBox } from "../../constants/index";
import styles from "../../style";
import { Link } from "react-router-dom";
import { MainTitle, Search, Button } from "../../components/index";
import { eye, instgramBlog, xBlog, facebookBlog } from "../../assets/index";

const Service = () => {
  return (
    // START SERVICE SECTION
    <section id="service">
      <div className="container">
        <div className={`${styles.flexBetween}`}>
          <div className={`${styles.flex} gap-[20px]`}>
            <div className="service-img bg-[var(--main-color)] rounded-full p-[14px] mt-[80px]">
              <img src={eye} alt="eye-img" />
            </div>
            <MainTitle
              title="قسم القلب"
              content="امراض القلب و الاوعية الدموية"
              text="text-[var(--sec-color)]"
              paragraph="text-[#808D9E]"
            />
          </div>
          <div
            className={`scoials-media ${styles.flex} justify-end gap-2 mt-[200px]`}
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
          </div>
        </div>
        <Search />
        <div className="service-content mt-[50px]">
          <p className="text-[#333F51] text-[19px] font-medium leading-[50px] mt-[20px]">
            تقديم الرعاية القلبية المتقدمة: مركز القلب الشامل على مدار الساعة في
            مركزنا الريادي لأمراض القلب، نضع رهانًا على تقديم أعلى مستويات
            الرعاية الطبية. يعد قسم أمراض القلب قلباً حيوياً في هذا المركز، حيث
            يتم توفير جميع التدخلات القلبية على مدار الساعة وطوال أيام الأسبوع.
            يشمل ذلك التدخلات التاجية، المحيطية، الانسيابية، والخلقية، مع
            استخدام أحدث التكنولوجيا الطبية واعتماداً على أحدث المبادئ التوجيهية
            الأوروبية.
            <br />
            في سعينا لتقديم رعاية فائقة، يأخذ قسمنا لأمراض القلب بعين الاعتبار
            التحديات الفريدة للحالات التي تشمل آلام الصدر الحادة. ندرك تماماً أن
            هذه الآلام قد تكون ناتجة عن أسباب متنوعة، ولذلك قمنا بتطوير خدمة
            متكاملة جديدة خاصة لمرضى آلام الصدر منخفضة الخطورة.
            <br />
            في إطار هذه الخدمة، يتم قبول المرضى في وحدة آلام الصدر بشكل فوري،
            ويتم تشخيص حالتهم في أقل من 12 ساعة. يتضمن عملية التشخيص استخدام
            تقنيات تصوير الأوعية التاجية متعددة المواقع غير الجراحية، مما يسمح
            بتحديد الحالة بشكل دقيق وتوجيه العلاج بشكل سريع وفعال.
            <br />
            في مركزنا، نلتزم بتقديم الرعاية القلبية التي تتجاوز التوقعات، حيث
            يجتمع التميز الطبي بالتكنولوجيا المتقدمة لضمان صحة ورفاهية مرضانا في
            كل لحظة.
          </p>
        </div>
        <MainTitle
          title="المزيد من الخدمات"
          content="تقدم المستشفى لكم نطاقًا واسعًا من خدمات الرعاية الطبية عالية الجودة للمرضى لتلبية جميع الاحتياجات"
          text="text-[var(--sec-color)]"
          paragraph="text-[#808D9E]"
        />
        <div className="service-boxs grid grid-cols-3 gap-[30px] mt-[80px]">
          {servicesBox.map((item) => {
            return (
              <div
                key={item.id}
                id={item.id}
                className="services-box bg-[#fff] border-[1px] border-[#F2F2F2] rounded-[16px] p-[15px] cursor-pointer"
              >
                <div
                  className={`services-box-icon ${styles.flex} justify-center bg-[var(--main-color)] w-[48px] h-[48px] rounded-full`}
                >
                  <figure>
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className="w-[38px] h-[38px]"
                    />
                  </figure>
                </div>
                <h4 className="text-[var(--sec-color)] text-[20px] font-bold my-[15px]">
                  {item.title}
                </h4>
                <p className="text-[#546883] text-[15px] font-normal leading-[1.6]">
                  {item.pargraph}
                </p>
                <span className="text-[var(--main-color)] text-[16px] font-medium mt-[15px] block">
                  اقرأ المزيد..
                </span>
              </div>
            );
          })}
        </div>
        <div className="service-button mt-[35px] text-center">
          <Link to={"/services"}>
            <Button
              title="عرض جميع الخدمات"
              bg="bg-[var(--main-color)]"
              text="text-[var(--white-color)]"
            />
          </Link>
        </div>
      </div>
    </section>
    // END SERVICE SECTION
  );
};

export default Service;
