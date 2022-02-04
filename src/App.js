import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const todoList = [
    {
      name: "Personal",
      color: "#fd76a1",
      icon: "fas fa-user",
    },
    {
      name: "Work",
      color: "#70c4be",
      icon: "fas fa-briefcase",
    },
    {
      name: "Profit with React",
      color: "#ab6ddf",
      icon: "fas fa-file-code",
    },
  ];
  return (
    <Wrapper>
      <Header
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <Main>
        <Sidebar sideBarToggle={sideBarToggle} todoList={todoList} />
        <MainContent
          style={{
            width: `calc(100vw - (${sideBarToggle ? "200px" : "70px"}) )`,
          }}
        >
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Daniel</Greeting>

            {todoList.map((category) => (
              <TodoList
                key={category.name}
                name={category.name}
                color={category.color}
                icon={category.icon}
              />
            ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;
// const Header = styled.div``;
const Main = styled.div`
  display: flex;
`;
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-top: -20px;
`;

const TodoContent = styled.div`
  max-width: 600px;
  width: 100%;
`;
const Title = styled.div`
  margin-top: -30px;
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;
`;

const Greeting = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 800;
`;
