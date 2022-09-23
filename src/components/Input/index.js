import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray500: "bg-white_A700 border-bw15 border-gray_500 border-solid",
  FillWhiteA700: "bg-white_A700",
  OutlineGray500: "bg-white_A700 border border-gray_500 border-solid",
};
const shapes = { srcRoundedBorder10: "rounded-radius10" };
const sizes = {
  smSrc:
    "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px]",
  sm: "lg:pb-[10px] xl:pb-[11px] pb-[13px] 3xl:pb-[15px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder10"]),
  variant: PropTypes.oneOf([
    "srcOutlineGray500",
    "FillWhiteA700",
    "OutlineGray500",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
