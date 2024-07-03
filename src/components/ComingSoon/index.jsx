import React from "react";

import "./style.css";

const ComingSoon = ({
  image,
  bgColor,
  textColor,
  illustration,
  title,
  subtitle,
  children,
}) => {
  return (
    <section
      className="fullpage"
      style={{
        backgroundImage: image ? `url(${image})` : "",
        backgroundColor: bgColor ? bgColor : "#fff",
        color: textColor ? textColor : "#000",
      }}
    >
      <div className="content">
        <div>
          <img src={illustration} />
          <h1>{title ? title : "Coming Soon"}</h1>
          <p>{subtitle}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
