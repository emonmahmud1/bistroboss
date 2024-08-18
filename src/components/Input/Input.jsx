import { useEffect, useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";

const Input = ({
  type,
  placeholder,
  register,
  error,
  label,
  required,
}) => {
  const [showHide, setShowHide] = useState(true);

  const handleShowHide = () => {
    setShowHide(!showHide);
  };

  return (
    <div>
      <div className="relative mb-2">
        <label className=" text-sm md:text-base font-semibold">
          {label} {required && <sup className="text-red-600">*</sup>}
        </label>
        <input
          type={type === "password" && showHide ? "password" : "text"}
          placeholder={placeholder}
          {...register}
          // register
          className='input input-bordered w-full'
          
        />
        {type === "password" &&
          (showHide ? (
            <IoEyeOffOutline
              onClick={handleShowHide}
              className="absolute bottom-[13%] right-3 text-lg cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={handleShowHide}
              className="absolute bottom-[13%] right-3 text-lg cursor-pointer"
            />
          ))}
      </div>

      {error && (
        <span className="font-light text-red-700 italic text-xs md:text-sm">
          {error.message || `${label} is required`}
        </span>
      )}
    </div>
  );
};

export default Input;
