import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { topPlayersQuery } from "../../api/queries/getLeaderBoardQuery";
import { LoginButton, RegisterButton } from "../../components/Button";
import { ControlsContainer, LeaderBoardContainer, LeaderBoardContent, LeaderBoardHeader, LeaderBoardItem, LeaderBoardTitle } from "../../components/LeaderBoard";
import { Dialog } from "../../components/Modal/Dialog";
import { CenteredParagraph } from "../../components/Typography";
import { LoginForm } from "../Login/LoginForm";

interface TopPlayersQueryItem {
    player: {
        name: string;
    },
    score: number;
}

export interface TopPlayersQueryResponse {
    allScores: TopPlayersQueryItem[];
};

export const LeaderBoardView: React.FC = () => {
    const [isLoginOpened, setLoginOpened] = useState<boolean>(false);
    const {data, loading} = useQuery<TopPlayersQueryResponse>(topPlayersQuery, {
        variables: {
            first: 10,
            sortBy: "score_DESC",
            where: {
                score_gte: 0
            }
        }
    });

    const navigate = useNavigate();

    const onLogin = () => {
        setLoginOpened(true);
    }

    const onCloseDialog = () => {
        setLoginOpened(false);
    }

    const onRegister = () => {
        navigate("/register");
    }
    if(loading) {
        return null
    }

    return (
        <LeaderBoardContainer>
            <LeaderBoardHeader>2048</LeaderBoardHeader>
            <LeaderBoardTitle>Leaderboard</LeaderBoardTitle>
            <LeaderBoardContent>
                {data?.allScores.map((item, index) => (
                    <LeaderBoardItem>
                        <span>{index + 1}</span>
                        <span>{item.player.name.split(" ")[0]}</span>
                        <span>{Intl.NumberFormat("en-US").format(item.score)}</span>
                    </LeaderBoardItem>
                ))}
            </LeaderBoardContent>
            <ControlsContainer>
                <LoginButton onClick={onLogin}>Login</LoginButton>
                <RegisterButton onClick={onRegister}>Register</RegisterButton>
            </ControlsContainer>
            <CenteredParagraph>Login or register to start new game.</CenteredParagraph>
            {isLoginOpened && (
                <Dialog onCloseDialog={onCloseDialog}>
                    <LoginForm />
                </Dialog>
            )}
        </LeaderBoardContainer>
    )
}