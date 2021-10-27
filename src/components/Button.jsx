import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.iconRight ? "row-reverse" : "row")};
  border-radius: 1rem;
  height: 5.6rem;
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ?? "fit-content"};
  padding: 0 3.6rem;
  background-color: var(--primary);
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  transition: background 250ms ease-in;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -12px;
    height: 5.6rem;
    width: 100%;
    background: transparent;
    border: 1px solid
      ${(props) => (props.question ? "var(--secondary)" : "#ffffff")};
    border-radius: 1rem;
  }

  .icon {
    height: 1.2rem;
  }

  &.bordered {
    border: 1px solid var(--secondary);
    color: var(--secondary);
    background-color: #ffffff;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2.4rem;
  }
`;

const Button = ({
  className,
  bg,
  type = "button",
  fullWidth,
  width,
  text,
  disabled,
  color,
  icon,
  iconRight,
  as,
  href,
  onClick,
  question,
}) => {
  const styleProps = {
    className,
    bg,
    type,
    fullWidth,
    width,
    text,
    disabled,
    color,
    as,
    href,
    onClick,
    iconRight,
    question,
  };
  return (
    <Wrapper {...styleProps}>
      {icon && <img src={icon} alt="icon" className="icon" />}
      {icon && <Spacer x={1.2} />}
      <span>{text}</span>
    </Wrapper>
  );
};

export default Button;
