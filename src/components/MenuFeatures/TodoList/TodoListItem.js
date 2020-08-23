import React from "react"
import styled from "styled-components"

const TodoItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: inherit;
  border: none;
  width: 100%;
  height: 3em;
`

const TodoItem = styled.p`
  font-size: 1em;
  font-weight: bold;
  display: block;
  margin: auto 0;
  padding: 15px 30px 5px 30px;
  height: 100%;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: left;
  width: 90%;
  z-index: 2;
`

const RemoveItemButton = styled.button`
  visibility: hidden;
  font-size: 2em;
  display: block;
  color: red;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: none;
  width: 10%;
  border: none;
  font-weight: bold;
  z-index: 2;

  ${TodoItemWrapper}:hover & {
    visibility: visible;
  }
`

const TodoListItem = ({ removeItemFromList, todo, index }) => {
  const handleRemove = () => {
    removeItemFromList(index)
  }

  return (
    <TodoItemWrapper>
      <TodoItem>{todo}</TodoItem>
      <RemoveItemButton onClick={handleRemove}>-</RemoveItemButton>
    </TodoItemWrapper>
  )
}

export default TodoListItem
