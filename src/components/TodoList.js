import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ name, color, icon }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState("");

  // const baseUrl = `https://api.airtable.com/v0/appLte9Qn0EfdVeWS/${name}`;
  // const getTodos = async () => {
  //   try {
  //     const todoData = await fetch(baseUrl, {
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer keyoEwqyVTDLqOGKs`,
  //       },
  //     });

  //     const todoJson = await todoData.json();
  //     setTodos(todoJson.records);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(todos);

  // useEffect(() => {
  //   getTodos();
  // }, [todo]);

  const addButtonHandler = () => {
    console.log("addButtonHandler");
    console.log(todo);
    if (todo.length > 0) {
      setTodos([
        {
          id: todos.length,
          title: todo,
          completed: false,
        },
        ...todos,
      ]);
      console.log(todos);
      setTodo("");
    }
  };
  const data = Array.from(todos);

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{ background: color }}>
          <i className={icon} />
        </CategoryIcon>
        <Title>{name}</Title>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={addButtonHandler} />
      </TodoCategoryHeader>
      {data.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          color={color}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;
const Wrapper = styled.div`
  background-color: #20212d;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;
const TodoCategoryHeader = styled.div`
  background-color: #272833;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;
const CategoryIcon = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`;
const TodoInput = styled.input`
  height: 20px;
  font-size: 15px;
  outline: none;
  border: none;
  background-color: #20212d;
  border-radius: 4px;
  color: white;
  padding: 4px 10px;
  margin-right: 4px;
`;
const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #20212d;
    transition: 0.3s;
    cursor: pointer;
  }
`;
