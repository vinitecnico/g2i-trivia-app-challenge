import React from "react";
import axiosMock from "axios";
import { getQuestions } from "./";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("getQuestions", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("getQuestions successfully data from an API", async () => {
    const data = {
      data: {},
    };
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(
      getQuestions({ amount: 10, difficulty: "hard", type: false })
    ).resolves.toEqual(data);
  });

  it("getQuestions erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getQuestions()).rejects.toThrow(errorMessage);
  });
});
