const Button = (props) => {
  return (
    <button
      className={`${props.bg} ${props.text} ${props.border} ${props.borderColor} text-[14px] font-bold w-[150px] h-[50px] rounded-[8px]`}
    >
      {props.title}
    </button>
  );
};

export default Button;
