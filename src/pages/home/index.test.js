import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

test("Should Home is function", () => {
  expect(typeof Home).toBe("function");
});

// test("should render Home", () => {
//     const { container } = render(<Home />);

//     expect(container.querySelector('header')).toBeTruthy()
//     expect(container.querySelector('h1')).toHaveTextContent('Welcome to the trivia challenge!')
// });