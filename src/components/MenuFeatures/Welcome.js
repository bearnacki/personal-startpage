import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Clock from './Clock'

const WelcomeWrapper = styled.div`
  flex-basis: 550px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${"" /* box-shadow: inset 0px 0px 1000px 1px rgba(0,0,0,0.5); */}
`
const InitialWelcome = styled.p`
  font-size: 3em;
  display: block;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
`

const CheeringWelcome = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  display: block;
  margin: 0;
  padding: 10px 0;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 100%;

  &::after {
    position: relative;
    content: "";
    width: 60%;
    left: 20%;
    display: block;
    margin-bottom: 10px;
    margin-top: 20px;
    border-bottom: 2px solid #fff;
  }
`

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <InitialWelcome>Hello Patryk</InitialWelcome>
      <CheeringWelcome>Hope you have a great day</CheeringWelcome>
      <Clock />
    </WelcomeWrapper>
  )
}

export default Welcome
