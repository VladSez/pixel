import React from 'react'
import Result from './Result'
import styled from 'styled-components'

function Progress({ title, id, text, icon, results }) {
  return (
    <Container>
      <LeftColumn>
        <img src={icon} alt="icon" style={{ width: '50px', height: '50px' }} />
        <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'baseline', marginLeft: '25px' }}>
          <p>{title}</p>
          <p style={{ textAlign: 'start' }}>{text}</p>
        </div>
      </LeftColumn>
      <div style={{ display: 'flex', flexFlow: 'column', width: '50%', marginLeft: '30px' }}>
        {results.map((result) => (
          <Result {...result} />
        ))}
      </div>
    </Container>
  )
}

export default Progress

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  `
