import React, { useState, useEffect } from "react"
import styled from "styled-components"

const WelcomeWrapper = styled.div`
  flex: 1 0 200px;
  text-align: center;
  color: #FFF;
`

const TimeParagraph = styled.p`
  font-size: 3em;
  display: block;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 10px 0;
`

const DateParagraph = styled.p`
  font-size: 1.5em;
  display: block;
  height: 30px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
`

const Clock = () => {
  const [time, setTime] = useState(new Date())

  function tick() {
    setTime(new Date())
  }

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(interval)
    }
  })

  return (
    <WelcomeWrapper>
      <TimeParagraph>{time.toLocaleTimeString()}</TimeParagraph>
      <DateParagraph>{time.toLocaleDateString()}</DateParagraph>
    </WelcomeWrapper>
  )
}

export default Clock