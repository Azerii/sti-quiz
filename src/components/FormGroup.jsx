import styled from "styled-components";

const Wrapper = styled.div`
  .fieldWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 4.8rem;
    background-color: #ffffff;
    position: relative;

    &.error {
      border-color: var(--danger);
    }
  }

  input {
    display: block;
    color: ${(props) => props.color ?? "var(--text)"};
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Label = styled.label`
  display: block;
  color: var(--grey_dark);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 0.3rem;
  text-align: left;

  sup {
    color: var(--danger);
  }
`;

const FormGroup = ({
  className,
  type,
  name,
  label,
  defaultValue,
  color,
  ...props
}) => {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="fieldWrapper">
        <input
          className="textSmall"
          id={name}
          type={type || "text"}
          defaultValue={defaultValue}
          {...props}
        />
      </div>
    </Wrapper>
  );
};

export default FormGroup;
