import React from "react";
import Result from "./Result";
import styled from "styled-components/macro";

function Progress({ title, text, icon, results, status }) {
  return (
    <Container>
      <DotContainer>
        <Dot status={status} />
      </DotContainer>
      <LeftColumn>
        <Image src={icon} alt="icon" />
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
        {status === "notSubmitted" && (
          <Badge>
            <BadgeText>Новый</BadgeText>
          </Badge>
        )}
      </LeftColumn>
      <ResultsContainer>
        {results.map((result, id) => (
          <Result {...result} key={id} status={status} /> //bad practice putting id in key
        ))}
      </ResultsContainer>
    </Container>
  );
}

export default Progress;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 1164px;
  max-width: 100%;
  height: 100px;
`;
const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Dot = styled.div`
  background: ${props => {
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
  border-radius: 100%;
  height: 20px;
  width: 20px;
  position: relative;
  right: 18px;
`;
const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
  position: relative;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: baseline;
  margin-left: 25px;
`;
const Text = styled.p`
  text-align: start;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Badge = styled.div`
  background: #2895f2;
  position: absolute;
  right: 7px;
  top: 7px;
  padding: 5px;
  border-radius: 3px;
`;
const BadgeText = styled.span`
  color: white;
`;
const ResultsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  margin-left: 30px;
`;
