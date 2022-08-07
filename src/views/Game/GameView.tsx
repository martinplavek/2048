import React, { useEffect } from "react";
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

export const GameView: React.FC = () => {
    const {score, game, moveLeft, moveRight, moveUp, moveDown} = useGame();

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
                            <div>0</div>
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
