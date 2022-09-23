import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray500: "bg-white_A700 border border-gray_500 border-solid",
};

const sizes = {
  sm: "lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  md: "lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[24px] xl:pt-[27px] pt-[31px] 3xl:pt-[37px] lg:px-[24px] xl:px-[27px] px-[31px] 3xl:px-[37px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineGray500"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  variant: "OutlineGray500",
  size: "md",
};
export { TextArea };
