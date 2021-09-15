import React from "react";
import { decode } from "html-entities";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "./styles.scss";

const FormQuestions = ({
  questions,
  handleChange,
  finishQuestions,
  disabledButton,
}) => {
  return (
    <>
      {questions?.map(
        ({ category, question, difficulty, selected = "" }, index) => (
          <article key={index}>
            <FormControl component="fieldset">
              <FormLabel component="legend">{decode(question)}</FormLabel>
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
        disabled={disabledButton}
      >
        finish
      </Button>
    </>
  );
};

export default FormQuestions;
