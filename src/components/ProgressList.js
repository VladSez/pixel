import React from 'react'
import Progress from './Progress'

function ProgressList({ progress }) {
  return (
    <React.Fragment>
      {progress.map((progress) => (
        <Progress {...progress} />
      ))}
    </React.Fragment>
  )
}

export default ProgressList
