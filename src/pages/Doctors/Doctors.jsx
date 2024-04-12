import "./Doctors.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainTitle, Search, Button } from "../../components/index";
import {
  doctorUser,
  student,
  stars1,
  doctor2,
  close,
  closeMenu,
  reserve1,
  reserve2,
} from "../../assets/index";
import { doctorsPageBox, doctorsdates } from "../../constants/index";
import styles from "../../style";

const Doctors = () => {
  const [showDoctorBox, setshowDoctorBox] = useState(false);
  const [showDateBox, setshowDateBox] = useState(false);
  const [showFilterBox, setshowFilterBox] = useState(false);
  return (
    // START DOCTORS PAGE
    <section id="doctors">
      <div className="container">
        <MainTitle
          title="احجز موعدك مع أفضل الأطباء"
          content="احجز الآن مع مستشفى الوادي ، صرح طبي مجهز على أعلى مستوى لتقديم الخدمات الطبية"
          text="text-[var(--sec-color)]"
          paragraph="text-[#808D9E]"
        />
        <div>
          <Search />
        </div>
        <div className="xl:flex gap-[25px]">
          <div className="filter-box hidden xl:block bg-[#fff] p-[15px] rounded-[14px] w-fit mt-[20px]">
            <h4 className="text-[var(--third-color)] text-[18px] font-semibold">
              فلترة نتائج البحث
            </h4>
            <div className="w-[227px] h-[2px] bg-[#F0F0F0] mt-[15px]" />
            <div className={` ${styles.flexColumn} gap-[10px] mt-[10px]`}>
              <div className={`doctor-name ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={student} alt="student" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  لقب الدكتور
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  طبيب عام
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  استشاري
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أخصائى
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أستاذ دكتور
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  خبير
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  طبيب امتياز
                </label>
              </div>
              <div className="w-[227px] h-[2px] bg-[#F0F0F0] mt-[15px]" />
              <div className={`doctor-nationality ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={doctorUser} alt="doctorUser" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  الجنسية
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  عربي
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أجنبي
                </label>
              </div>
              <div className="w-[227px] h-[2px] bg-[#F0F0F0] mt-[15px]" />
              <div className={`doctor-type ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={doctorUser} alt="doctorUser" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  النوع
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  ذكر
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أنثى
                </label>
              </div>
            </div>
          </div>
          <div
            className=" text-center mt-[25px] xl:hidden"
            onClick={() => {
              setshowFilterBox(true);
            }}
          >
            <Button
              bg="transparent"
              text="text-[var(--main-color)]"
              title="فلترة نتائج البحث"
              border="border-[1px]"
              borderColor=" border-[var(--main-color)]"
            />
          </div>
          <div className="doctors-box grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-[20px] mt-[20px]">
            {doctorsPageBox.map((item) => {
              return (
                <div
                  key={item.id}
                  className="doctors-box w-[100%] xl:w-[100%] mx-auto bg-[#fff] p-[12px] rounded-[12px]"
                >
                  <figure>
                    <img src={item.img} alt={item.img} className="w-[100%]" />
                  </figure>
                  <h4 className="text-[var(--third-color)] text-[17px] font-bold text-center mt-[10px]">
                    {item.title}
                  </h4>
                  <p className="text-[#515151] text-[15px] font-semibold text-center mt-[8px]">
                    {item.pargraph}
                  </p>
                  <figure>
                    <img
                      src={stars1}
                      alt="Star"
                      className="w-[120px] h-[20.73px] my-[15px] mx-auto"
                    />
                  </figure>
                  <Link
                    onClick={() => {
                      setshowDoctorBox(true);
                    }}
                    className="block text-center"
                  >
                    <Button
                      title="احجز موعد"
                      bg="bg-[var(--main-color)]"
                      text="text-[var(--white-color)]"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <div className="text-center">
            <Button
              title="عرض الأطباء"
              bg="bg-[var(--main-color)]"
              text="text-[var(--white-color)]"
            />
          </div> */}
        </div>
      </div>
      {showDoctorBox && (
        <div
          className={`${styles.flexCenter} doctor-Box bg-[#333333b8] fixed inset-0 z-50 `}
        >
          <div className="doctor-Box-content relative bg-[var(--white-color)] rounded-[18px] w-[85%] md:w-[60%] p-[20px] animation">
            <div
              className="close-icon absolute left-[12px] md:left-[30px] top-[25px]"
              onClick={() => {
                setshowDoctorBox(false);
              }}
            >
              <img src={close} alt="close-icon" className="w-[40px] h-[40px]" />
            </div>
            <div
              className={`doctor-info ${styles.flexColumn} md:flex-row md:flex-start gap-[18px]`}
            >
              <figure>
                <img
                  src={doctor2}
                  alt="doctor2"
                  className="w-[190px] h-[190px]"
                />
              </figure>
              <div className={`${styles.flexColumn} gap-[15px] mt-[20px]`}>
                <h2 className="text-[var(--third-color)] text-[20px] font-bold">
                  د. محمد المصري
                </h2>
                <p className="text-[#808D9E] text-[17px] font-semibold">
                  استشاري جراحات وعلاج آلام العمود الفقري والعظام
                </p>
                <figure>
                  <img src={stars1} alt="stars1" className="mt-[5px]" />
                </figure>
              </div>
            </div>
            <div className="doctor-dates mt-[20px]">
              <h4 className="text-[#2B2F4E] text-[17px] font-bold mb-[15px]">
                المواعيد المتاحة{" "}
              </h4>
              <div className="doctors-dates-boxs hidden md:grid grid-cols-3 gap-[15px]">
                {doctorsdates.map((item) => {
                  return (
                    <div
                      className="doctors-dates-box border-[1px] border-[#EFEFEF] rounded-[16px] p-[12px]"
                      key={item.id}
                    >
                      <div className={`date ${styles.flexBetween} gap-[15px]`}>
                        <p className="text-[#2B2F4E] text-[17px] font-medium">
                          {item.day}
                        </p>
                        <div className="bg-[#EBEBEB] w-[1px] h-[36px]" />
                        <p className="text-[#2B2F4E] text-[17px] font-medium">
                          {item.date}
                        </p>
                      </div>
                      <div className="bg-[#EBEBEB] w-[100%] h-[1px] mt-[8px]" />
                      <p className="text-[#566983] text-[15px] text-center mt-[10px]">
                        {item.hour}
                      </p>
                    </div>
                  );
                })}
                <div className="doctors-dates-box border-[1px] border-[#EFEFEF] rounded-[16px] p-[15px]">
                  <div className="text-[#C9C9C9] text-[18px] text-center mt-[25px]">
                    إجازة
                  </div>
                </div>
              </div>
              <div
                className={`doctors-dates-buttons ${styles.flexBetween} gap-[10px] mt-[20px]`}
              >
                <div
                  onClick={() => {
                    setshowDateBox(true);
                  }}
                >
                  <Button
                    bg="bg-[#C9C9C9]"
                    text="text-[var(--white-color)]"
                    title="احجز موعد"
                  />
                </div>
                <Button
                  bg="bg-[#C9C9C9]"
                  text="text-[var(--white-color)]"
                  title="السابق"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {showDateBox && (
        <div
          className={`${styles.flexCenter} doctor-Box bg-[#333333b8] fixed inset-0 z-50 `}
        >
          <div className="doctor-Box-content relative bg-[var(--white-color)] rounded-[18px] w-[90%] xl:w-[60%] p-[20px] animation">
            <div
              className="close-icon absolute left-[30px] top-[25px]"
              onClick={() => {
                setshowDateBox(false);
              }}
            >
              <img src={close} alt="close" />
            </div>
            <div className="relative ">
              <img
                src={reserve1}
                alt="reserve1"
                className="mt-[40px] mx-auto w-[450px] h-[200px]"
              />
              <img
                src={reserve2}
                alt="reserve2"
                className="mx-auto w-[150px] h-[150px] absolute top-[50%] right-[-50%] left-[-50%] translate-y-[-50%]"
              />
            </div>
            <h4 className="text-[#2B2F4E] text-[25px] font-bold my-[15px] text-center">
              لقد تم حجز ميعادك بنجاح
            </h4>
            <p className="text-[#808D9E] text-[17px] font-medium my-[15px] text-center">
              سوف يتم التواصل معك لتأكيد الحجز من قبل فريقنا
            </p>
            <span className="bg-[#F6F6F6] text-[#808D9E] text-[18px] py-[14px] px-[23px] rounded-[10px] my-[20px] block w-fit mx-auto cursor-pointer">
              رقم الحجز : 269598401
            </span>
            <div
              className="button text-center"
              onClick={() => {
                setshowDateBox(false);
              }}
            >
              <Button
                title="اغلاق"
                bg="bg-[var(--main-color)]"
                text="text-[var(--white-color)]"
              />
            </div>
          </div>
        </div>
      )}
      {showFilterBox && (
        <div
          className={`${styles.flexCenter} doctor-Box bg-[#333333b8] fixed inset-0 z-50 `}
        >
          <div className="filter-box relative bg-[#fff] p-[15px] py-[18px] rounded-[14px] w-[80%] mt-[20px] animation">
            <div>
              <h4 className="text-[var(--third-color)] text-[18px] font-semibold">
                فلترة نتائج البحث
              </h4>
              <div
                className="close-icon absolute left-[15px] top-[10px]"
                onClick={() => {
                  setshowFilterBox(false);
                }}
              >
                <img src={closeMenu} alt="closeMenu" />
              </div>
            </div>
            <div className="w-[100%] h-[2px] bg-[#F0F0F0] mt-[15px]" />
            <div className={` ${styles.flexColumn} gap-[10px] mt-[10px]`}>
              <div className={`doctor-name ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={student} alt="student" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  لقب الدكتور
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  طبيب عام
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  استشاري
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أخصائى
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أستاذ دكتور
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  خبير
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  طبيب امتياز
                </label>
              </div>
              <div className="w-[100%] h-[2px] bg-[#F0F0F0] mt-[15px]" />
              <div className={`doctor-nationality ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={doctorUser} alt="doctorUser" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  الجنسية
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  عربي
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أجنبي
                </label>
              </div>
              <div className="w-[100%] h-[2px] bg-[#F0F0F0] mt-[15px]" />
              <div className={`doctor-type ${styles.flex} gap-[8px]`}>
                <figure>
                  <img src={doctorUser} alt="doctorUser" />
                </figure>
                <h4 className="text-[var(--main-color)] text-[16px] mt-[5px] font-bold">
                  النوع
                </h4>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  ذكر
                </label>
              </div>
              <div className={`${styles.flex} gap-[8px]`}>
                <input type="checkbox" className="text-[#808D9E]" />
                <label
                  htmlFor="#"
                  className="text-[14px] text-[#515151] font-semibold"
                >
                  أنثى
                </label>
              </div>
            </div>
            <div
              className="text-center mt-[10px]"
              onClick={() => {
                setshowFilterBox(false);
              }}
            >
              <Button
                bg="bg-[var(--main-color)]"
                text="text-white"
                title="تطبيق الفلتر"
              />
            </div>
          </div>
        </div>
      )}
    </section>
    // END DOCTORS PAGE
  );
};

export default Doctors;
