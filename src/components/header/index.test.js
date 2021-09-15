import React from "react";
import { render } from "@testing-library/react";
import Header from "./";

test("Should Header is function", () => {
  expect(typeof Header).toBe("function");
});

test("should render header", () => {
    const { container } = render(<Header />);

    expect(container.querySelector('header')).toBeTruthy()
    expect(container.querySelector('h1')).toHaveTextContent('Welcome to the trivia challenge!')
});