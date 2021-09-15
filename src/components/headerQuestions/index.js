import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

const HeaderQuestions = ({
  difficulty,
  handleChangeDifficulty,
  startQuestions,
}) => {
  return (
    <>
      <h1>You will be presented with 10 True or False questions.</h1>
      <h2>Can you score 100% ?</h2>
      <article>
        <FormControl component="fieldset">
          <FormLabel component="legend">difficulty</FormLabel>
          <RadioGroup
            aria-label="difficulty"
            name="difficulty"
            value={difficulty}
            onChange={handleChangeDifficulty}
          >
            <FormControlLabel value="easy" control={<Radio />} label="easy" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="medium"
            />
            <FormControlLabel value="hard" control={<Radio />} label="hard" />
          </RadioGroup>
        </FormControl>
      </article>
      <Button variant="contained" color="primary" onClick={startQuestions}>
        BEGIN
      </Button>
    </>
  );
};

export default HeaderQuestions;
