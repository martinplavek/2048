import styled from "styled-components";

export const ScoresContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 55px;
    width: 55px;
    margin: 0 5px;
    background: #bbada0;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border-radius: 2px;
`;

export const ScoreTitle = styled.div`
    font-size: 13px;
    color: #eee4da;
`;