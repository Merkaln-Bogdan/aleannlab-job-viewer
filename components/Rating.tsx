import React, { useState } from "react";

import { Rating } from "react-simple-star-rating";

type RateProps = {
  rate: number;
  // className: string;
};

export function Rate(props: RateProps) {
  const { rate } = { ...props };
  const [rating, setRating] = useState(rate);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <Rating
      onClick={handleRating}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      size={12}
      fillStyle={{ display: "flex" }}
      emptyStyle={{ display: "flex", margin: "0" }}
    />
  );
}
