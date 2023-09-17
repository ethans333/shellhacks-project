import React, { useState, useEffect } from "react";
import Select from "react-select";
import leftarrow from "../src/assets/arrow-left-solid.svg";
import rightarrow from "../src/assets/arrow-right-solid.svg";
import languages from "../src/assets/languages.json";

const options = languages;

export default function Onboarding() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState({});
  const nSlides = 4;

  const setGoal = (event) => {
    setData((d) => {
      return {
        ...d,
        Goal: event.target.innerHTML.replace(/[^a-zA-Z\s]/g, ""),
      };
    });
    setSlide((s) => s + 1);
  };

  const setExplanation = (val) => {
    setData((d) => {
      return {
        ...d,
        Explanation: val,
      };
    });
    setSlide(0);
  };

  const renderSlide = () => {
    switch (slide) {
      case 0:
        return (
          <div>
            <h1 className="pt-4 w-64 text-center">
              What language do you speak? 🌎
            </h1>
            <Select
              isScrollable
              className="mt-12"
              options={options}
              onChange={(v) => {
                setData((d) => {
                  return { ...d, Language: v.value };
                });
              }}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <h1 className="pt-4 w-64 text-center">What is your name? 😊</h1>
            <input
              className="w-full mt-12"
              placeholder="Name"
              onChange={(event) => {
                setData((d) => {
                  return { ...d, Name: event.target.value };
                });
              }}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className="pt-4 w-64 text-center">What is your age? 🕗</h1>
            <input
              type="number"
              className="w-full mt-12"
              placeholder="Age"
              onChange={(event) => {
                setData((d) => {
                  return { ...d, Age: event.target.value };
                });
              }}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className="pt-4 w-64 text-center">
              What are some of your goals? 🏆
            </h1>
            <div className="mt-12">
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Build an Emergency Fund ⚒️
              </div>
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Pay off Debt 💳
              </div>
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Purchase a Home 🏠
              </div>
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Invest in Education 🏫
              </div>
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Grow Wealth 📈
              </div>
              <div className="select-box" onClick={(event) => setGoal(event)}>
                Other 🖊️
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h1 className="pt-4 lg:w-96 text-center">
              Based on your level financial literacy, which explanation style do
              you prefer? 🤖
            </h1>
            <div className="mt-12">
              <div
                className="select-box-color text-green-600 border-green-200 bg-green-100 hover:opacity-70"
                onClick={() => setExplanation("Layman")}
              >
                Layman Explanations
              </div>
              <div
                className="select-box-color text-yellow-600 border-yellow-200 bg-yellow-100 hover:opacity-70"
                onClick={() => setExplanation("Intermediate")}
              >
                Intermediate Explanations
              </div>
              <div
                className="select-box-color text-red-600 border-red-200 bg-red-100 hover:opacity-70"
                onClick={() => setExplanation("Expert")}
              >
                Expert Explanations
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  if (slide > nSlides) {
    console.log(data);
  }

  return (
    <div className="center-page mt-[30vh]">
      <div className="flex">
        {slide > 0 && (
          <img
            className="w-4 cursor-pointer"
            onClick={() => setSlide(slide - 1)}
            src={leftarrow}
          />
        )}
        <div className="px-12 lg:w-min-[35vw] lg:w-fit lg:h-[35vh] lg:mx-12">
          {renderSlide()}
        </div>
        <img
          className="w-4 cursor-pointer"
          onClick={() => setSlide(slide + 1)}
          src={rightarrow}
        />
      </div>
    </div>
  );
}
