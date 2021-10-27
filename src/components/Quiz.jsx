import styled from "styled-components";
import Options from "./Options";
import Spacer from "./Spacer";
import cancel from "assets/cancel.png";
import arrow_left from "assets/arrow_left.png";
import arrow_right from "assets/arrow_right.png";
import { useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: #00000090;
  z-index: 10;
  height: 100vh;
  overflow: auto;
`;

const Card = styled.div`
  width: 56rem;
  margin: 9.6rem auto;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 9.6rem 4.8rem 2.4rem 4.8rem;
  display: none;
  position: relative;

  &.show {
    display: block;
  }

  .cancel {
    position: absolute;
    top: 4.8rem;
    right: 4.8rem;

    .icon {
      height: 2rem;
    }
  }

  .question {
    font-size: 24px;
    font-style: normal;
    font-weight: 450;
    line-height: 24px;

    i {
      color: var(--grey_dark);
    }
  }

  .previousbtn {
    background-color: #f4f5f8;
    color: var(--text);
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 9.6rem 2.4rem 2.4rem 2.4rem;

    .actionBtns {
      width: 100%;
    }
  }
`;

const Steps = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1.2rem;

  .step {
    dislpay: block;
    height: 5px;
    background-color: var(--secondary);
    border-radius: 2rem;

    &.active {
      background-color: var(--primary);
    }
  }
`;

const questions = [
  {
    text: "Select your gender?",
    options: ["Male", "Female", "Other", "Prefer not to say"],
    selectType: "single",
  },
  {
    text: "Which of the following symptoms are you displaying or have you recently noticed?",
    options: [
      "Itchy genitals or anus",
      "Warts around your anus or genitals",
      "Pain when peeing",
      "Unusual discharge from your anus or genitals",
      "Unusual vaginal bleeding",
      "Lumps our unusual skin growth around the anus or genitals",
      "Warts around your mouth",
      "I haven’t noticed any of these symptoms",
    ],
    selectType: "multiple",
  },
  {
    text: "Have you had unprotected oral, anal or vaginal sex with one or more than one partner in the last year?",
    desc: "(*unprotected sex includes sex without a condom or if a condom broke or slid off)",
    options: ["Yes", "No"],
    selectType: "single",
  },
  {
    text: "Have you had sex with someone who told you they were HIV positive?",
    options: ["Yes", "No"],
    selectType: "single",
  },
  {
    text: "Does your partner show symptoms of an STI? (as named in 2 above)",
    options: ["Yes", "No"],
    selectType: "single",
  },
  {
    text: "Does your sexual partner have multiple sexual partners?",
    options: ["Yes", "No"],
    selectType: "single",
  },
  {
    text: "Have you ever been forced into having sex against your wishes?",
    options: ["Yes", "No"],
    selectType: "single",
  },
  {
    text: "Have you ever received a tattoo or piercing from an unlicensed artist or used unsterilised equipment?",
    options: ["Yes", "No"],
    selectType: "single",
  },
];

const Quiz = ({ setShowQuiz }) => {
  const router = useHistory();
  const [step, setStep] = useState(0);
  const [allSelected, setAllSelected] = useState(new Map());
  const [update, forceUpdate] = useState("");

  const next = () => {
    if (questions[step + 1]) {
      setStep(step + 1);
    } else {
      let rand = Math.floor(Math.random() * 8);
      forceUpdate(update + rand);

      let step = 3;
      let i = 0;
      let arr = [];

      while (step < 8) {
        arr[i] = allSelected.get(step);

        i++;
        step++;
      }

      if (arr.includes("Yes")) {
        localStorage.setItem("atRisk", true);
      } else {
        localStorage.setItem("atRisk", false);
      }

      router.push("/get-test-kits");
    }
  };

  const previous = () => {
    if (questions[step - 1]) {
      setStep(step + -1);
    } else {
      return false;
    }
  };

  return (
    <Wrapper>
      {questions?.map((question, index) => (
        <Card
          key={`${step}_${index}`}
          className={`question ${index === step ? " show" : ""}`}
        >
          <button
            type="button"
            className="cancel"
            onClick={() => setShowQuiz(false)}
          >
            <img src={cancel} alt="Close" className="icon" />
          </button>
          <Steps>
            <li className={`step${step >= 0 ? " active" : ""}`}></li>
            <li className={`step${step >= 1 ? " active" : ""}`}></li>
            <li className={`step${step >= 2 ? " active" : ""}`}></li>
            <li className={`step${step >= 3 ? " active" : ""}`}></li>
            <li className={`step${step >= 4 ? " active" : ""}`}></li>
            <li className={`step${step >= 5 ? " active" : ""}`}></li>
            <li className={`step${step >= 6 ? " active" : ""}`}></li>
            <li className={`step${step >= 7 ? " active" : ""}`}></li>
          </Steps>
          <Spacer y={4.8} />
          <p className="question">
            {question.text}
            {question.desc ? <i>&nbsp;{question.desc}</i> : ""}
          </p>
          <Spacer y={2.4} />
          <Options
            list={question.options}
            step={step}
            selectType={question.selectType}
            allSelected={allSelected}
            setAllSelected={setAllSelected}
          />
          <Spacer y={4.8} />
          <div className="flexRow alignCenter justifyCenter actionBtns">
            {questions[step - 1] && (
              <Button
                text="Previous"
                className="previousbtn"
                icon={arrow_left}
                question
                onClick={() => previous()}
              />
            )}
            {questions[step - 1] && <Spacer x={4.8} xMobile={2.4} />}

            <Button
              text="Next"
              icon={arrow_right}
              onClick={() => next()}
              iconRight
              question
            />
          </div>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Quiz;
