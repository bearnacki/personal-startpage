import React, { useState } from "react"
import styled from "styled-components"

const AddTodoListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: inherit;
  border: none;
  margin-top: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`

const AddInput = styled.input`
  font-size: 1em;
  font-weight: bold;
  display: block;
  margin: 0;
  background: none;
  border: 1px #fff solid;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  text-align: left;
  width: 80%;
  height: 2.5em;
  z-index: 2;
`

const SubmitItemButton = styled.button`
  font-size: 1em;
  display: block;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  border: 1px #fff solid;
  background: none;
  margin: 0;
  width: 20%;
  border: 1px #fff solid;
  border-left: none;
  font-weight: bold;
  z-index: 2;
`

const AddTodoListItem = ({ addItemToList }) => {
  const [inputText, setInputText] = useState("")

  const handleChange = event => {
    setInputText(event.target.value)
  }

  const handleSubmit = () => {
    addItemToList(inputText)
  }

  return (
    <AddTodoListItemWrapper>
      <AddInput value={inputText} onChange={handleChange} />
      <SubmitItemButton onClick={handleSubmit}>Submit</SubmitItemButton>
    </AddTodoListItemWrapper>
  )
}

export default AddTodoListItem
