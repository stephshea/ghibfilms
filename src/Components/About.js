import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
  // setTimeout(() => {
  //   props.history.push('/Weather')
  // }, 2000);
  return (
    <div className="container">
      <h4 className="center">About</h4>
    </div>
  )

}

export default Rainbow(About)