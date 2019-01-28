import React from 'react'
import styled from 'styled-components'

function Result({ text, icon, status }) {
  return (
    <Container>
      <Image src={icon} alt="status" />
      <Status status={status}>{text}</Status>
    </Container>
  )
}

export default Result

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
const Status = styled.p`
  text-align: start;
  color: ${(props) => {
    if (props.status === 'error') {
      return 'red'
    }
    if(props.status === 'approved'){
        return '#8ABF49'
    }
    if(props.status === 'waiting'){
        return 'orange'
    }
    if(props.status === 'notSubmitted'){
        return 'gray'
    }
  }};
`
