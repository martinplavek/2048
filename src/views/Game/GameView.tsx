import { useQuery } from "@apollo/client";
import { max } from "lodash";
import React, { useEffect } from "react";
import { topPlayersQuery } from "../../api/queries/getLeaderBoardQuery";
import { ButtonTitle, StartGameButton } from "../../components/Button";
import { EmptyTile, GameContainer, GridRow, Playground, Tile } from "../../components/Game";
import {
    Header,
    HeaderControlsContainer,
    HeadingTitle,
} from "../../components/Heading";
import {
    ScoreContainer,
    ScoresContainer,
    ScoreTitle,
} from "../../components/Scores";
import { useGame } from "../../hooks/useGame";
import { TopPlayersQueryResponse } from "../LeaderBoard/LeaderBoardView";

export const GameView: React.FC = () => {
    const {score, game, moveLeft, moveRight, moveUp, moveDown} = useGame();

    const {data} = useQuery<TopPlayersQueryResponse>(topPlayersQuery, {
        variables: {
            first: 1,
            sortBy: "score_DESC",
            where: {
                score_gte: 0
            }
        }
    });

    useEffect(() => {
        window.addEventListener("keyup", (event: KeyboardEvent) => {
            switch(event.key) {
                case "ArrowLeft": //left
                    moveLeft();
                    break;
                case "ArrowUp": // up
                    moveUp();
                    break;
                case "ArrowRight": // right
                    moveRight();
                    break;
                case "ArrowDown":
                    moveDown();
                    break; // down
            }
        }, {
            once: true,
        })
    }, [moveLeft, moveRight, moveUp, moveDown])

    return (
        <GameContainer id="game-container-id">
            <Header>
                <HeadingTitle>2048</HeadingTitle>
                <HeaderControlsContainer>
                    <ScoresContainer>
                        <ScoreContainer>
                            <ScoreTitle>Score</ScoreTitle>
                            <div>{score}</div>
                        </ScoreContainer>
                        <ScoreContainer>
                            <ScoreTitle>High</ScoreTitle>
                            <div>{max([data?.allScores[0].score, score])}</div>
                        </ScoreContainer>
                    </ScoresContainer>
                    <StartGameButton>
                        <ButtonTitle>New Game</ButtonTitle>
                    </StartGameButton>
                </HeaderControlsContainer>
            </Header>
            <Playground>
                {game.map((row, rowIndex) => (
                    <GridRow key={`key-row-${rowIndex}`}>
                        {row.map((item, itemIndex) => {
                            return item ? <Tile key={`key-${rowIndex}-${itemIndex}`}>{item}</Tile> : <EmptyTile key={`key-${rowIndex}-${itemIndex}`}/>
                        })}
                    </GridRow>
                ))}
            </Playground>
        </GameContainer>
    );
};
