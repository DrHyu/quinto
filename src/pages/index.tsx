// import  from "react"
import React, { useState } from "react";
import styled from "styled-components";
import "../global.css";

const index = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelected = (idx: number) => {
    if (selected.includes(idx)) {
      setSelected(selected.filter((s) => s != idx));
    } else {
      setSelected([...selected, idx]);
    }
  };
  return (
    <Container>
      <Grid>
        {[...Array(90).keys()].map((idx) => (
          <div className="" key={idx} onClick={() => toggleSelected(idx)}>
            {idx + 1}
            {selected.includes(idx) && <Circle></Circle>}
          </div>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 90px);
  grid-template-rows: repeat(9, 90px);

  border-top: 1px solid black;
  border-left: 1px solid black;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid black;
    border-right: 1px solid black;
    user-select: none;
    position: relative;
    font-size: 30px;
  }
`;

const Circle = styled.div`
  position: absolute;
  background-color: transparent;
  z-index: -100;
  width: 75px;
  height: 75px;
  border-radius: 75px;
  border: 4px solid red;
`;
export default index;
