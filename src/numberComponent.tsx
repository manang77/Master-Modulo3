import React from "react";
import { getRandomNumbers } from "./randomService";
const classes = require("./numberComponentStyles.scss").default;

export const NumberComponent: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = React.useState(0);

  React.useEffect(() => {
    setSelectedNumbers(getRandomNumbers(Math.ceil(Math.random() * 5)));
  }, []);

  return (
    <div className={classes.greeting}>
      <span>Today's selected number {selectedNumbers.length === 1 ? 'is' : 'are'} {Array.from(selectedNumbers).join(" - ")}</span>
    </div>
  );
};
