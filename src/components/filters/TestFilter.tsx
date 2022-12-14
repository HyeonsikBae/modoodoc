import React from "react";

const TestFilter = (): JSX.Element => {
  const render = (): JSX.Element[] => {
    const sample = [];
    for (let i = 0; i < 13; i += 1) {
      sample.push(
        <div
          style={{ padding: "0 0.5rem", display: "flex", flexWrap: "nowrap" }}
        >
          <label key={i} htmlFor="1">
            <input style={{ display: "none" }} type="radio" />
            <span>test</span>
          </label>
        </div>
      );
    }
    return sample;
  };

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>
      {render()}
    </div>
  );
};

export default TestFilter;
