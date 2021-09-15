import React from "react";
import { render } from "@testing-library/react";
import ResultQuestions from "./";

const playAgain = jest.fn();

const payload = {
  questions: [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.",
      correct_answer: "True",
      incorrect_answers: ["False"],
      selected: "True"
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      correct_answer: "True",
      incorrect_answers: ["False"],
      selected: "False"
    },
  ],
  playAgain
};

let wrapper = null

test("Should ResultQuestions is function", () => {
  expect(typeof ResultQuestions).toBe("function");
});

describe("getQuestions", () => {
  beforeEach(() => {
    const { container } = render(<ResultQuestions {...payload} />);
    wrapper = container
  })

  test("should render Questions", () => {
    expect(wrapper.querySelectorAll('h1')[0]).toHaveTextContent("You Scored 1 / 10")
    expect(wrapper.querySelectorAll('h1')[1]).toHaveTextContent("✔ The retail disc of Tony Hawk's Pro Skater 5 only comes with the tutorial.")
    expect(wrapper.querySelectorAll('h1')[2]).toHaveTextContent("✘ Unturned originally started as a Roblox game.")
  });
});
