import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder17: "rounded-radius17",
};
const variants = {
  OutlineBlack90019: "bg-gradient  shadow-bs1 text-white_A700",
  OutlineBlack900191_2: "bg-white_A700 shadow-bs1 text-indigo_A100",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  OutlineGray300: "border border-gray_300 border-solid text-gray_900",
  OutlineBlack9000c: "bg-gradient  shadow-bs text-white_A700",
  OutlineBlack9000c1_2: "bg-white_A700 shadow-bs text-indigo_A100",
  icbFillWhiteA700: "bg-white_A700",
  icbGradientIndigoA100DeeppurpleA200: "bg-gradient ",
  icbOutline: "bg-light_blue_900_7f",
  icbFillIndigoA200: "bg-indigo_A200",
  icbFillIndigoA2007f: "bg-indigo_A200_7f",
};
const sizes = {
  sm: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  md: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  smIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder20", "icbCircleBorder17"]),
  variant: PropTypes.oneOf([
    "OutlineBlack90019",
    "OutlineBlack900191_2",
    "FillIndigoA200",
    "OutlineGray300",
    "OutlineBlack9000c",
    "OutlineBlack9000c1_2",
    "icbFillWhiteA700",
    "icbGradientIndigoA100DeeppurpleA200",
    "icbOutline",
    "icbFillIndigoA200",
    "icbFillIndigoA2007f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
