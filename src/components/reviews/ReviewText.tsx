import React from "react";

interface ReviewTextProps {
  text: string;
}

const ReviewText = (props: ReviewTextProps): JSX.Element => {
  const { text } = props;
  const len = text.length;
  return len <= 100 ? <span>{text}</span> : <span>{text.slice(0, 85)}...</span>;
};

export default ReviewText;
