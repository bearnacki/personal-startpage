import React, { useState, useEffect } from "react"
import styled from "styled-components"
import LoadingSpinner from "./Loading/LoadingSpinner"

const BoredWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  background: inherit;
  padding: 5px 0 5px 0;

  &::before {
    content: "";
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
    filter: blur(5px);
  }
`

const BoredHeader = styled.h3`
  font-size: 1.2em;
  display: block;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 10px 0;
  width: 90%;
  font-weight: bold;
  z-index: 2;
`

const ToDoIdea = styled.p`
  font-size: 1em;
  font-weight: bold;
  display: block;
  margin: auto 0;
  padding: 15px 30px 5px 30px;
  height: 100%;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 90%;
  z-index: 2;
`

const Bored = () => {
  const [toDoIdea, setToDoIdea] = useState("")

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(({ activity }) => {
        setToDoIdea(activity)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <BoredWrapper>
      <BoredHeader>Don't know what to do today?</BoredHeader>
      <ToDoIdea>{toDoIdea ? <>{toDoIdea}</> : <LoadingSpinner />}</ToDoIdea>
    </BoredWrapper>
  )
}

export default Bored
