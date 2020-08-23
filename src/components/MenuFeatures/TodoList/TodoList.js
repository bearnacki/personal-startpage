import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../../utils/local-data"
import AddTodoListItem from "./AddTodoListItem"
import TodoListItem from "./TodoListItem"

const TodoListWrapper = styled.div`
  margin: 80px 5px 0 5px;
  width: 500px;
  height: 100%;
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

const TodoListHeader = styled.p`
  font-size: 1.5em;
  display: block;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 10px 0;
  width: 90%;
  font-weight: bold;
  z-index: 2;
`

const ShowAddInputButton = styled.button`
  font-size: 1.5em;
  display: block;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: inherit;
  margin: 0;
  width: 10%;
  border: none;
  font-weight: bold;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  z-index: 2;
`

const TodoItem = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  display: block;
  margin: 0;
  padding: 5px 30px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: left;
  width: 100%;
  z-index: 2;
`

const TodoList = () => {
  const initialTodoList = () => getLocalStorageData("todoList") || []
  const [todoList, setTodoList] = useState(initialTodoList)
  const [addInputVisible, setAddInputVisibility] = useState(false)

  const showAddItemInput = () => {
    setAddInputVisibility(true)
  }

  const addItemToList = item => {
    if (item) {
      let list = [...todoList]
      list.push(item)
      setLocalStorageData("todoList", list)
      setTodoList(list)
    }
    setAddInputVisibility(false)
  }

  const removeItemFromList = itemIndex => {
    if (itemIndex > -1) {
      let list = [...todoList]
      list.splice(itemIndex, 1)
      setLocalStorageData("todoList", list)
      setTodoList(list)
    }
  }

  return (
    <TodoListWrapper>
      <TodoListHeader>To do:</TodoListHeader>
      <ShowAddInputButton onClick={showAddItemInput}>+</ShowAddInputButton>
      {todoList &&
        todoList.map((todo, index) => (
          <TodoListItem
            index={index}
            removeItemFromList={removeItemFromList}
            todo={todo}
          />
        ))}
      {addInputVisible && <AddTodoListItem addItemToList={addItemToList} />}
    </TodoListWrapper>
  )
}

export default TodoList
