import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { getQuestions } from "../../clients";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "./styles.scss";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [difficulty, setDifficulty] = useState('hard')

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await getQuestions();
    setQuestions(response?.data?.results);
  };

  const startQuestions = () => setStarted(true);
  const handleChange = (event, index) => {
    questions[index].selected = event.target.value;
    setQuestions([...questions]);
  };

  const handleChangeDifficulty = event => setDifficulty(event.target.value)

  const finishQuestions = () => {
    setShowResult(true);
  };

  const playAgain = () => {
    setStarted(false);
    setShowResult(false);
    init();
  };

  const Right = () => <span style={{ color: "green" }}>✔ </span>;
  const Wrong = () => <span style={{ color: "red" }}>✘ </span>;

  const score = questions?.reduce(
    (acc, curr) => (curr.correct_answer === curr.selected ? acc + 1 : acc),
    0
  );

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
              <>
                <h1>You will be presented with 10 True or False questions.</h1>
                <h2>Can you score 100% ?</h2>
                <FormControl component="fieldset">
                  <FormLabel component="legend">difficulty</FormLabel>
                  <RadioGroup
                    aria-label="difficulty"
                    name="difficulty"
                    value={difficulty}
                    onChange={handleChangeDifficulty}
                  >
                    <FormControlLabel
                      value="easy"
                      control={<Radio />}
                      label="easy"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="medium"
                    />
                    <FormControlLabel
                      value="hard"
                      control={<Radio />}
                      label="hard"
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={startQuestions}
                >
                  BEGIN
                </Button>
              </>
            )}

            {started && !showResult && (
              <>
                {questions?.map(
                  (
                    { category, question, difficulty, selected = "" },
                    index
                  ) => (
                    <article key={index}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          {decode(question)}
                        </FormLabel>
                        <FormLabel>
                          {category} - {difficulty}
                        </FormLabel>
                        <RadioGroup
                          aria-label={`question-${index}`}
                          name={`question-${index}`}
                          value={selected}
                          onChange={(event) => handleChange(event, index)}
                        >
                          <FormControlLabel
                            value="True"
                            control={<Radio />}
                            label="True"
                          />
                          <FormControlLabel
                            value="False"
                            control={<Radio />}
                            label="False"
                          />
                        </RadioGroup>
                      </FormControl>
                    </article>
                  )
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={finishQuestions}
                  disabled={numberOfResponses < 10}
                >
                  finish
                </Button>
              </>
            )}

            {showResult && (
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
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Home;
