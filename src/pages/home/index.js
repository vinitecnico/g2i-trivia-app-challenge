import React, { useState } from "react";
import { getQuestions } from "../../clients";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import {
  HeaderQuestions,
  FormQuestions,
  ResultQuestions,
} from "../../components";

import "./styles.scss";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [difficulty, setDifficulty] = useState("hard");

  const loadingQuestions = async () => {
    const response = await getQuestions({ difficulty });
    setQuestions(response?.data?.results);
  };

  const startQuestions = () => {
    setStarted(true);
    loadingQuestions();
  };

  const handleChange = (event, index) => {
    questions[index].selected = event.target.value;
    setQuestions([...questions]);
  };

  const handleChangeDifficulty = (event) => setDifficulty(event?.target?.value);

  const finishQuestions = () => {
    setShowResult(true);
  };

  const playAgain = () => {
    setStarted(false);
    setShowResult(false);
    loadingQuestions();
  };

  const numberOfResponses = questions?.reduce(
    (acc, curr) => (curr.selected ? acc + 1 : acc),
    0
  );

  return (
    <>
      <Container fixed>
        <Card>
          <CardContent>
            {!started && (
              <HeaderQuestions
                difficulty={difficulty}
                handleChangeDifficulty={handleChangeDifficulty}
                startQuestions={startQuestions}
              />
            )}

            {started && !showResult && (
              <FormQuestions
                questions={questions}
                handleChange={handleChange}
                finishQuestions={finishQuestions}
                disabledButton={numberOfResponses < 10}
              />
            )}

            {showResult && (
              <ResultQuestions questions={questions} playAgain={playAgain} />
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Home;
