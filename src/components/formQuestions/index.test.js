import React from "react";
import { render } from "@testing-library/react";
import FormQuestions from "./";

const handleChange = jest.fn();
const finishQuestions = jest.fn();

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
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
  handleChange,
  finishQuestions,
  disabledButton: false,
};

let wrapper = null

test("Should FormQuestions is function", () => {
  expect(typeof FormQuestions).toBe("function");
});

describe("getQuestions", () => {
  beforeEach(() => {
    const { container } = render(<FormQuestions {...payload} />);
    wrapper = container
  })

  test("should render Questions", () => {
    const question = wrapper.querySelectorAll('legend')
    expect(question[0]).toHaveTextContent("The retail disc of Tony Hawk's Pro Skater 5 only comes with the tutorial.")
  });
});
