import { useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import RadioSelect from "./RadioSelect";

const Wrapper = styled.div`
  .option {
    padding: 1.6rem 2.4rem;
    border: 1px solid #f4f5f8;
    border-radius: 1rem;
    margin-bottom: 1.2rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    &.selected {
      border-color: var(--secondary);
    }
  }
`;

const Options = ({
  list,
  selectType,
  step = 0,
  allSelected,
  setAllSelected,
}) => {
  const [singleSelected, setSingleSelected] = useState("");
  const [multipleSelected, setMutipleSelected] = useState([]);

  const selectOption = (option, index) => {
    if (selectType === "single") {
      setAllSelected(allSelected.set(step, option));
      setSingleSelected(option);
    } else if (selectType === "multiple") {
      let selected = allSelected.get(step);
      let temp = {};

      if (selected) {
        temp = { ...selected };
      }

      if (temp[index]) {
        delete temp[index];
      } else {
        temp[index] = option;
      }

      setAllSelected(allSelected.set(step, temp));
      setMutipleSelected(temp);
    }
  };

  return (
    <Wrapper>
      {list?.map((option, index) =>
        selectType === "multiple" ? (
          <button
            type="button"
            className={`option${
              multipleSelected[index] === option ||
              (allSelected.get(step) && allSelected.get(step)[index])
                ? " selected"
                : ""
            }`}
            key={index}
            onClick={() => selectOption(option, index)}
          >
            <CheckBox
              className="checkbox"
              name={`${step}_${index}`}
              label={option}
              checked={
                multipleSelected[index] === option ||
                (allSelected.get(step) ? allSelected.get(step)[index] : false)
              }
            />
          </button>
        ) : (
          <button
            type="button"
            className={`option${
              option === singleSelected || option === allSelected.get(step)
                ? " selected"
                : ""
            }`}
            key={index}
            onClick={() => selectOption(option, index)}
          >
            <RadioSelect
              className="radio"
              name={`${step}_${index}`}
              label={option}
              checked={
                option === singleSelected || option === allSelected.get(step)
              }
            />
          </button>
        )
      )}
    </Wrapper>
  );
};

export default Options;
