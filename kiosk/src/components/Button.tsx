import { ButtonProps } from "../types";

const Button = ({ label, type, className, onclick }: ButtonProps) => {
  const defaultClass = "bg-pink-600 px-12 py-3 rounded-t-full uppercase shadow-lg hover:bg-pink-700 cursor-pointer transition-colors duration-300";
  const classes = className || defaultClass;

  return (
    <button className={classes} type={type} onClick={onclick}>
      <label className="text-xl font-bold text-white cursor-pointer whitespace-nowrap">
        {label}
      </label>
    </button>
  );
};

export default Button;
