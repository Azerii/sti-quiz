import React, { Suspense, lazy } from "react";
import Button from "components/Button";
import styled from "styled-components";
import Spacer from "components/Spacer";
import double_helix from "assets/double_helix.png";
import cross_pattern from "assets/cross_pattern.png";
import cross_pattern_mb from "assets/cross_pattern_mb.png";
import { useState } from "react";
import Loader from "components/Loader";

const Quiz = lazy(() => import("../components/Quiz"));

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--secondary);
  position: relative;
  overflow: hidden;

  .content {
    position: relative;
    z-index: 5;
    width: 56.2rem;
    margin-left: 7.2rem;
  }

  .heading {
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }

  .subHeading {
    font-size: 24px;
    font-style: normal;
    font-weight: 450;
    line-height: 26px;
  }

  .doubleHelix {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 1;
  }

  .crossPattern {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
  }

  .crossPatternMb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .doubleHelix,
    .crossPattern {
      display: none;
    }

    .crossPatternMb {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }

    .content {
      width: 100%;
      margin: 0;
      padding: 2.4rem;
    }

    .heading {
      text-align: center;
      font-size: 36px;
      line-height: 36px;
    }

    .subHeading {
      text-align: center;
      font-size: 18px;
      line-height: 20px;
    }

    .takeQuiz {
      margin: auto;
    }
  }
`;

const Header = styled.div`
  height: 9.6rem;
  background-color: var(--primary);
  position: relative;

  @media screen and (max-width: 768px) {
    height: 5.6rem;
  }
`;

const Landing = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <Wrapper>
      <img src={double_helix} alt="Double Helix" className="doubleHelix" />
      <img src={cross_pattern} alt="Cross pattern" className="crossPattern" />
      <img
        src={cross_pattern_mb}
        alt="Cross pattern"
        className="crossPatternMb"
      />
      <Header />
      <Spacer y={14.4} />
      <div className="content">
        <h1 className="heading">
          Are you at risk of getting an STI? Not sure you need to get tested?
        </h1>
        <Spacer y={2.4} />
        <p className="subHeading">Take this quick STI quiz to know.</p>
        <Spacer y={4.8} />
        <Button
          text="Take STI quiz"
          width="24rem"
          className="takeQuiz"
          onClick={() => setShowQuiz(true)}
        />
        <Spacer y={4.8} />
      </div>

      {/* Quiz */}
      {showQuiz && (
        <Suspense fallback={<Loader />}>
          <Quiz setShowQuiz={setShowQuiz} />
        </Suspense>
      )}
    </Wrapper>
  );
};

export default Landing;
