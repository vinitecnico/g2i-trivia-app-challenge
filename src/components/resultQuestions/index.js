import React from "react";
import { decode } from "html-entities";
import Button from "@material-ui/core/Button";

const ResultQuestions = ({ questions = [], playAgain }) => {
  const Right = () => <span style={{ color: "green" }}>✔ </span>;
  const Wrong = () => <span style={{ color: "red" }}>✘ </span>;

  const score = questions?.reduce(
    (acc, curr) => (curr.correct_answer === curr.selected ? acc + 1 : acc),
    0
  );

  return (
    <>
      <div className="card">
        <h1>You Scored {score} / 10</h1>
      </div>
      <div className="card">
        {questions?.map((question, idx) => (
          <h1 key={idx}>
            {question.correct_answer === question.selected ? (
              <Right />
            ) : (
              <Wrong />
            )}
            {decode(question.question)}
          </h1>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={playAgain}>
        PLAY AGAIN ?
      </Button>
    </>
  );
};

export default ResultQuestions;
