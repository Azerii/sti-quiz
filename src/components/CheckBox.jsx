import styled from "styled-components";
import check from "assets/check.svg";

const Wrapper = styled.div`
  pointer-events: none;

  label {
    margin-left: 1.2rem;
    font-size: 18px;
    color: var(--grey_light);
    text-align: left;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 2rem;
  width: 2rem;
  border: 1px solid
    ${(props) => (props.checked ? "var(--primary)" : "var(--grey_light)")};
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked ? "var(--primary)" : "#ffffff"};
  flex-shrink: 0;

  input {
    display: none;
  }

  .checkedIcon {
    height: 0.8rem;
    pointer-events: none;
  }
`;

const CheckBox = ({
  className,
  name,
  label,
  required,
  checked = false,
  onClick,
}) => {
  return (
    <Wrapper className="flexRow alignCenter" onClick={onClick}>
      <Box checked={checked} className={className}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox_${name}}`}
          data-name={name}
          checked={checked}
          readOnly
          required={required}
        />
        <img src={check} alt="check" className="checkedIcon" />
      </Box>
      {label && (
        <label htmlFor={`checkbox_${name}`} className="l3">
          {label}
        </label>
      )}
    </Wrapper>
  );
};

export default CheckBox;
