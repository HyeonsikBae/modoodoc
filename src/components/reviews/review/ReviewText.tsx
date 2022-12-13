import React from "react";
import Span from "../../utils/Span";

interface ReviewTextProps {
  text: string;
}

const ReviewText = (props: ReviewTextProps): JSX.Element => {
  const { text } = props;
  const len = text.length;
  return len <= 100 ? <Span>{text}</Span> : <Span>{text.slice(0, 85)}...</Span>;
};

export default ReviewText;
