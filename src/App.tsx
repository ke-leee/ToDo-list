import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import ToDoList from "./ToDoList";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
