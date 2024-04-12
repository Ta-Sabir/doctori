import styles from "../style";
import { service, location, stethoscope } from "../assets/index";
import { Button } from "../components/index";
const Search = () => {
  return (
    <div className="searchBox pl-[14px]">
      <div
        className={`hero-boxs ${styles.flexColumn} w-[100%] items-center justify-start md:flex-row gap-[15px] md:gap-[10px] bg-[var(--white-color)] mt-[50px] ml-[13px] md:mr-[10px] md:ml-[20px] p-[30px] md:px-[50px] rounded-[14px]`}
      >
        <div
          className={`hero-box ${styles.flex} w-[100%] gap-3 md:divide-x-[2px] mt-[15px] md:mt-[0]`}
        >
          <div className="hero-box-icon md:w-[100%]">
            <figure>
              <img
                src={service}
                alt="service-img"
                className="w-[32px] h-[32px]"
              />
            </figure>
          </div>
          <div
            className={`hero-box-text ${styles.flexColumn} w-[100%] gap-2 md:pl-[30px]`}
          >
            <p className="text-[var(--sec-color)] text-[16px] font-bold">
              اختيار التخصص
            </p>
            <select
              className="bg-[transparent] text-[var(--main-color)] text-[16px] font-medium cursor-pointer"
              name=""
              id=""
            >
              <option selected hidden disabled>
                حدد التخصص المناسب
              </option>
              <option>الطب العام.</option>
              <option>طب الأسنان.</option>
              <option>طب الأطفال.</option>
              <option>جراحة القلب.</option>
              <option>الطب النفسي.</option>
              <option>الطب البصري.</option>
              <option>الطب البيطري.</option>
              <option>العلاج الطبيعي.</option>
              <option>طب الأمراض التنفُّسية.</option>
              <option>طب العظام والمفاصل .</option>
              <option>قسم التجميل .</option>
            </select>
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-[100%] h-[2px] md:hidden" />
        <div
          className={`hero-box ${styles.flex} w-[100%]  gap-3 md:divide-x-[2px] md:pr-[30px]`}
        >
          <div className="hero-box-icon md:w-[100%]">
            <figure>
              <img
                src={location}
                alt="location-img"
                className="w-[32px] h-[32px]"
              />
            </figure>
          </div>
          <div
            className={`hero-box-text ${styles.flexColumn} w-[100%] gap-2 md:pl-[30px]`}
          >
            <p className="text-[var(--sec-color)] text-[16px] font-bold">
              فرع المستشفي
            </p>
            <select
              className="bg-[transparent] text-[var(--main-color)] text-[16px] font-medium cursor-pointer"
              name=""
              id=""
            >
              <option selected hidden disabled>
                اختيار الفرع الاقرب لك
              </option>
              <option>الجزائر</option>
              <option>الشلف</option>
              <option>مستغانم</option>
              <option>وهران</option>
              <option>تيارت</option>
              <option>عين الدفلى</option>
              <option>تلمسان</option>
              <option>البليدة</option>
              <option>جيجل</option>
              <option>سطيف</option>
              <option>عنابة</option>
              <option>قسنطينة</option>
              <option>بسكرة</option>
              <option>الجلفة</option>
              <option>الأغواط</option>
              <option>تندوف</option>
            </select>
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-[100%] h-[2px] md:hidden" />
        <div
          className={`hero-box ${styles.flex} w-[100%] gap-3 md:divide-x-[2px] md:pr-[30px] mb-[25px] md:mb-[0]`}
        >
          <div className="hero-box-icon md:w-[100%]">
            <figure>
              <img
                src={stethoscope}
                alt="stethoscope-img"
                className="w-[32px] h-[32px]"
              />
            </figure>
          </div>
          <div
            className={`hero-box-text ${styles.flexColumn} w-[100%] gap-2 md:pl-[30px]`}
          >
            <p className="text-[var(--sec-color)] text-[16px] font-bold">
              اسم الدكتور
            </p>
            <input
              type="text"
              placeholder="اكتب اسم الدكتور "
              className="text-[808D9E] text-[16px] font-medium"
            />
          </div>
        </div>
        <div className="btn mr-[20px]">
          <Button
            title="بحث"
            bg="bg-[var(--main-color)]"
            text="text-[var(--white-color)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
