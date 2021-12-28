import clsx from "clsx";

const Container = (props) => {
  const { maxWidth, children, className } = props;
  const classes = clsx(className, "mx-2", {
    ["sm:max-w-screen-xs sm:mx-auto"]: maxWidth === "sm",
    ["md:max-w-screen-sm lg:mx-auto"]: maxWidth === "md",
    ["lg:max-w-screen-md lg:mx-auto"]: maxWidth === "lg",
    ["xl:max-w-screen-lg xl:mx-auto"]: maxWidth === "xl",
    ["2xl:max-w-screen-xl 2xl:mx-auto"]: maxWidth === "2xl",
  });
  return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
  maxWidth: "sm",
};

export default Container;
