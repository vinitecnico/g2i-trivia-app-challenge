import React from "react";
import { render } from "@testing-library/react";
import HeaderQuestions from "./";

const handleChangeDifficulty = jest.fn();
const startQuestions = jest.fn();

const payload = {
  difficulty: 'hard',
  handleChangeDifficulty,
  startQuestions
};

let wrapper = null

test("Should HeaderQuestions is function", () => {
  expect(typeof HeaderQuestions).toBe("function");
});

describe("getQuestions", () => {
  beforeEach(() => {
    const { container } = render(<HeaderQuestions {...payload} />);
    wrapper = container
  })

  test("should render Questions", () => {
    expect(wrapper.querySelector('h1')).toHaveTextContent("You will be presented with 10 True or False questions.")
    expect(wrapper.querySelector('h2')).toHaveTextContent("Can you score 100% ?")
    expect(wrapper.querySelector('button')).toHaveTextContent("BEGIN")
  });
});
