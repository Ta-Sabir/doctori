

const MainTitle = (props) => {
  return (
    <div className="main-title mt-[60px] md:mt-[80px]">
      <h4 className={`${props.text} text-[40px] md:text-[50px] font-black`}>
        {props.title}
      </h4>
      <p className={`${props.paragraph} text-[16px] ${props.margin} font-normal leading-[1.6] md:w-[80%] mt-[5px]`}>
        {props.content}
      </p>
    </div>
  );
};

export default MainTitle;
