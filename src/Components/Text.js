import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Love", "Trust", "Imagine", "Think"];
const style = {
  fontSize: "60px"
};

const Text = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        style={style}
        springConfig={presets.gentle}
      />
    </h1>
  );
};

export default Text;
