import React, { useState } from "react";
import Span from "../../utils/Span";

interface ReviewTextProps {
  text: string;
}

const ReviewText = (props: ReviewTextProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { text } = props;
  const len = text.length;

  const toggle = (): void => {
    setIsClicked((isClicked) => !isClicked);
  };

  return len <= 100 ? (
    <Span fontSize="0.8rem">{text}</Span>
  ) : (
    <Span fontSize="0.8rem">
      {isClicked === true ? `${text}` : `${text.slice(0, 85)}`}
      <button
        style={{ display: "inline", padding: "0" }}
        onClick={(): void => toggle()}
      >
        <Span fontSize="0.8rem" fontWeight="bold">
          {isClicked === true ? `접기` : `...더보기`}
        </Span>
      </button>
    </Span>
  );
};

export default ReviewText;
