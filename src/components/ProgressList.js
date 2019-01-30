import React from 'react'
import Progress from './Progress'
import styled from 'styled-components/macro'

function ProgressList({ progress }) {
  return (
    <Container>
      <Line1 />
      <Line2 />
      <Line3 />
      <Line4 />
      {progress.map(progress => (
        <Progress {...progress} key={progress.id} />
      ))}
    </Container>
  )
}

export default ProgressList

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

const Line1 = styled.div`
  width: 6px;
  height: 27%;
  position: absolute;
  left: -11px;
  top: 45px;
  background: linear-gradient(180deg, rgba(98,193,57,1) 0%, rgba(235,110,22,1) 100%);
`
const Line2 = styled.div`
  width: 6px;
  height: 28%;
  background-color: blue;
  position: absolute;
  left: -11px;
  top: 147px;
  background: linear-gradient(180deg, rgba(235,110,22,1) 0%, rgba(254,218,71,1) 100%);
`
const Line3 = styled.div`
  width: 6px;
  height: 28%;
  background-color: lightgreen;
  position: absolute;
  left: -11px;
  bottom: 55px;
  background: linear-gradient(180deg, rgba(254,218,71,1) 0%, rgba(76,143,224,1) 100%);
`
const Line4 = styled.div`
  width: 6px;
  height: 20%;
  background-color: gray;
  position: absolute;
  left: -11px;
  bottom: -20px;
`
