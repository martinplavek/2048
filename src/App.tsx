import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./api/client";
import { LeaderBoardView } from "./views/LeaderBoard/LeaderBoardView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterView } from "./views/Register/RegisterView";
import { GameView } from "./views/Game/GameView";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ApolloProvider client={apolloClient}>
                <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<LeaderBoardView />}/>
                      <Route path="/register" element={<RegisterView />}/>
                      <Route path="/play" element={<GameView />}/>
                    </Routes>
                </BrowserRouter>
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default App;
