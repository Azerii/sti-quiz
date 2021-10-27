import styled from "styled-components";
import med_kit from "assets/med_kit.png";
import cross_pattern from "assets/cross_pattern.png";
import Spacer from "components/Spacer";
import FormGroup from "components/FormGroup";
import Button from "components/Button";
import { useState } from "react";
import { useEffect } from "react";
// import { useDetectAdBlock } from "adblock-detect-react";

const Wrapper = styled.div`
  position: relative;
  background-color: var(--secondary);
  min-height: 100vh;
  overflow: hidden;

  .content {
    position: relative;
    width: 50%;
    padding-left: 7.2rem;
    z-index: 1;
  }

  .heading {
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }

  .subHeading {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    max-width: 56rem;
  }

  .description {
    font-size: 18px;
    font-weight: 450;
    line-height: 24px;
  }

  ol {
    width: 43rem;
    margin-left: 2.4rem;

    li {
      margin-bottom: 1.2rem;
    }
  }

  .medKit {
    position: absolute;
    top: 0;
    right: 0;
    width: 45%;
  }

  br.mb {
    display none;
  }

  @media screen and (max-width: 768px) {
    .content {
      width: 100%;
      padding: 0 2.4rem;
    }

    ol {
      width: 90%;
    }

    .medKit,
    br {
      display: none;
    }

    br.mb {
      display: inline;
    }

    .heading {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;

const FormWrapper = styled.form`
  width: 43.2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Message = styled.div`
  width: 56rem;
  padding: 4.8rem;
  position: fixed;
  top: -14.4rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  z-index: 10;
  background-color: #ffffff;
  border-radius: 3rem;
  opacity: 0;
  pointer-events: none;
  transition: all 500ms ease-in;
  color: var(--primary);
  overflow: hidden;

  &.open {
    top: 9.6rem;
    opacity: 1;
  }

  .crossPattern {
    position: absolute;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const GetKits = () => {
  // const adBlockDetected = useDetectAdBlock();
  const [atRisk, setAtRisk] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    document.querySelector(".successMessage").classList.add("open");
    setTimeout(() => {
      document.querySelector(".successMessage").classList.remove("open");
    }, 5000);
  };

  useEffect(() => {
    // console.log(adBlockDetected);
    // if (adBlockDetected) {
    //   window.alert("ad block detected");
    // }

    let tempAtRisk = localStorage.getItem("atRisk");

    if (tempAtRisk === "true") {
      setAtRisk(true);
    } else {
      setAtRisk(false);
    }

    document.title = "Get test kits";
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <img src={med_kit} alt="Med kit illustration" className="medKit" />

      <Message className="successMessage flexRow alignCenter justifyCenter">
        <img src={cross_pattern} alt="Cross pattern" className="crossPattern" />
        <span className="description textCenter">
          {" "}
          Request Sent Successfully.
          <br />
          <br className="mb" />
          We will begin processing your order and get back to you shortly
        </span>
      </Message>

      <div className="content">
        <Spacer y={9.6} />
        {atRisk && (
          <h1 className="heading">
            Request at-home discreet STI test <br />
            kits
          </h1>
        )}
        {!atRisk && (
          <h4 className="subHeading">
            You may not be at risk of getting an STI due to unprotected sex.
            However, you may get infected by other means. You can still rule out
            any STI infection by requesting an at-home testing kit below:
          </h4>
        )}
        <Spacer y={4.8} />
        <FormWrapper onSubmit={handleSubmit}>
          <FormGroup label="Full name" name="full_name" required />
          <Spacer y={2.4} />
          <FormGroup type="email" label="Email address" name="email" required />
          <Spacer y={4.8} />
          <Button text="Get test kits" type="submit" fullWidth />
        </FormWrapper>
        <Spacer y={9.6} />
        <h4 className="subHeading">
          Safety practices you should follow to <br />
          reduce your chances of getting an STI.
        </h4>
        <Spacer y={2.4} />
        <ol className="description">
          <li>Practice safe sex by using protection always</li>
          <li>Wash up before and after sexual intercourse</li>
          <li>Get hepatitis vaccination</li>
          <li>Avoid sharing towels and other underclothings.</li>
          <li>Limit the number of your sexual partners </li>
          <li>
            Do regular STI Testing (see how to discretely get easy-to-use STI
            home kits delivered to you)
          </li>
          <li>Abstinence is the surest way to avoid getting an STI</li>
        </ol>
        <Spacer y={9.6} />
      </div>
    </Wrapper>
  );
};

export default GetKits;
