import { isEqual } from "lodash";
import { useState } from "react"


const ROW_LENGTH = 4;

export const useGame = () => {
    const [game, setGame] = useState<number[][]>(() => (
        [
            [0,0,0,0],
            [0,0,2,0],
            [0,0,0,0],
            [0,4,0,0],
        ]
    ));

    const [score, setScore] = useState<number>(0);

    const addNewTile = () => {
        while(true) {
            const column = Math.floor(Math.random() * ROW_LENGTH);
            const row = Math.floor(Math.random() * ROW_LENGTH);

            if(game[row][column] === 0) {
                setGame(prevGame => {
                    prevGame[row][column] = 2;

                    return prevGame;
                });
                return;
            }
        } 
    }

    const mergeNeighbors = (row: number[], left: boolean) => {
        let mergedRow: number[] = row;

        if(row.length <= 1) {
            return row;
        }

        if(left) {
            for(let colIndex = 0; colIndex < row.length - 1; colIndex++) {
                if(mergedRow[colIndex] === mergedRow[colIndex + 1]) {
                    mergedRow[colIndex] = mergedRow[colIndex] * 2;
                    mergedRow[colIndex + 1] = 0;
                    setScore(current => current + mergedRow[colIndex]);
                } 
            }
        } else {
            for(let colIndex = row.length - 1; colIndex > 0; colIndex--) {
                if(mergedRow[colIndex] === mergedRow[colIndex - 1]) {
                    mergedRow[colIndex] = mergedRow[colIndex] * 2;
                    mergedRow[colIndex - 1] = 0;
                    setScore(current => current + mergedRow[colIndex]);
                } 
            }
        }

        return mergedRow;
    }

    const rotate = (matrix: number[][]): number[][] => {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    const rotateBack = (matrix: number[][]): number[][] => {
        return rotate(rotate(rotate(matrix)));
    }

    const shiftLeft = (matrix: number[][]): number[][] => {
        return matrix.map((row) => {
            const nonZeroValueItems = row.filter(Boolean);
            const mergedRow = mergeNeighbors(nonZeroValueItems, true).filter(Boolean);
            const zeroValueItems = new Array(ROW_LENGTH - mergedRow.length).fill(0);

            return [...mergedRow, ...zeroValueItems];
        });
    }

    const shiftRight = (matrix: number[][]): number[][] => {
        return matrix.map((row) => {
            const nonZeroValueItems = row.filter(value => value);
            const mergedRow = mergeNeighbors(nonZeroValueItems, false).filter(Boolean);
            const zeroValueItems = new Array(ROW_LENGTH - mergedRow.length).fill(0);

            return [...zeroValueItems, ...mergedRow];
        });
    }

    // move only on x axis
    const moveLeft = () => {
        const newState = shiftLeft(game);
        if(isEqual(game, newState)) {
            return;
        }
        setGame(newState);
        addNewTile();
    }

    const moveRight = () => {
        const newState = shiftRight(game);
        if(isEqual(game, newState)) {
            return;
        }
        setGame(newState);
        addNewTile();
    }

    const moveUp = () => {
        const newState = rotate(shiftLeft(rotateBack(game)));
        if(isEqual(game, newState)) {
            return;
        }
        setGame(newState);
        addNewTile();
    }

    const moveDown = () => {
        const newState = rotate(shiftRight(rotateBack(game)));
        if(isEqual(game, newState)) {
            return;
        }
        setGame(newState);
        addNewTile();
    }

    return {
        score,
        game,
        moveLeft,
        moveRight,
        moveUp,
        moveDown,
    }
}