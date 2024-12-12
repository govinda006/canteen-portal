import PropTypes from "prop-types";
import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  const cardClass = `card ${classes.cardShadow} ${props.className || ""}`;
  const titleClass = `card-title ${classes.cardGFTitle}`;

  return (
    <div
      className={cardClass}
      style={{
        maxWidth: props.width || "100%",
        backgroundColor: props.background,
        color: props.textColor,
      }}
      role="region"
      aria-label={props.title}
    >
      <div className="card-body">
        <h5
          className={`${
            props.useTitleClass ? titleClass : "card-title text-center"
          }`}
          style={{ textTransform: "uppercase" }}
        >
          {props.title}
        </h5>
        {props.children || <p>Loading content...</p>}
      </div>
    </div>
  );
}

Card.defaultProps = {
  background: "#ffffff",
  textColor: "#000000",
  title: "Default Title",
  useTitleClass: false,
};

Card.propTypes = {
  background: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  useTitleClass: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default React.memo(Card);
