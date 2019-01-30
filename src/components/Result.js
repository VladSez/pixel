import React from "react";
import styled from "styled-components/macro";
import { Check } from "styled-icons/boxicons-regular/Check";
import { Flag } from "styled-icons/fa-solid/Flag";
import { Clock } from "styled-icons/fa-regular/Clock";
import { Circle } from "styled-icons/feather/Circle";

function Result({ text, status }) {
  return (
    <Container>
      {status === "approved" && <StyledCheck />}
      {status === "error" && <StyledFlag />}
      {status === "waiting" && <StyledClock />}
      {status === "notSubmitted" && <StyledCircle />}
      <Status status={status}>{text}</Status>
    </Container>
  );
}

export default Result;

const StyledCircle = styled(Circle)`
  color: gray;
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  margin-right: 10px;
`;
const StyledCheck = styled(Check)`
  color: lightgreen;
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  margin-right: 10px;
`;
const StyledFlag = styled(Flag)`
  color: tomato;
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  margin-right: 10px;
`;
const StyledClock = styled(Clock)`
  color: orange;
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  margin-right: 10px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Status = styled.p`
  text-align: start;
  color: ${props => {
    if (props.status === "error") {
      return "red";
    }
    if (props.status === "approved") {
      return "#8ABF49";
    }
    if (props.status === "waiting") {
      return "orange";
    }
    if (props.status === "notSubmitted") {
      return "gray";
    }
  }};
`;
