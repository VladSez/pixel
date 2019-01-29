import React from 'react'
import Result from './Result'
import styled from 'styled-components'

function Progress({ title, text, icon, results }) {
  return (
    <Container>
      <DotContainer>
        <Dot results={results} />
      </DotContainer>
      <LeftColumn>
        <Image src={icon} alt="icon" />
        <TextContainer>
          <p>{title}</p>
          <Text>{text}</Text>
        </TextContainer>
      </LeftColumn>
      <ResultsContainer>
        {results.map((result, id) => (
          <Result {...result} key={id} /> //bad practice putting id in key
        ))}
      </ResultsContainer>
    </Container>
  )
}

export default Progress

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 1164px;
  max-width: 100%;
`
const DotContainer = styled.div`
  display: flex;
  align-items: center;
`
const Dot = styled.div`
  background: ${props => {
    return props.results.map(({ status }) => {
      console.log(status)
      if (status === 'error') {
        return `red`
      }
      if (status === 'approved') {
        return `#8ABF49`
      }
      if (status === 'waiting') {
        return `orange`
      }
      if (status === 'notSubmitted') {
        return `gray`
      }
    })
  }};
  border-radius: 100%;
  height: 20px;
  width: 20px;
  position: relative;
  right: 18px;
`
const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
`
const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: baseline;
  margin-left: 25px;
`
const Text = styled.p`
  text-align: start;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  margin-left: 30px;
`
