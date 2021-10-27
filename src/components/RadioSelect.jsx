import styled from "styled-components";

const Wrapper = styled.div`
  pointer-events: none;

  label {
    margin-left: 1.2rem;
    font-size: 18px;
  }
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 2rem;
  width: 2rem;
  border: ${(props) =>
    props.checked
      ? "2px solid var(--primary)"
      : " 1px solid var(--grey_light)"};
  border-radius: 50%;
  background-color: #ffffff;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    height: 1.2rem;
    width: 1.2rem;
    background-color: var(--primary);
    border-radius: 50%;
    display: ${(props) => (props.checked ? "block" : "none")};
  }

  input {
    display: none;
  }

  .checkedIcon {
    height: 0.8rem;
    pointer-events: none;
  }
`;

const RadioSelect = ({
  className,
  name,
  label,
  required,
  checked,
  onClick,
}) => {
  return (
    <Wrapper className="flexRow alignCenter" onClick={onClick}>
      <Radio checked={checked} className={className}>
        <input
          type="radio"
          name={name}
          id={`radio_${name}}`}
          data-name={name}
          checked={checked}
          readOnly
          required={required}
        />
      </Radio>
      {label && <label htmlFor={`radio_${name}`}>{label}</label>}
    </Wrapper>
  );
};

export default RadioSelect;
