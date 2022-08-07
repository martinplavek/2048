import styled from "styled-components";


export const LeaderBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
    margin-top: 100px;
`;

export const LeaderBoardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    font-weight: 700;
    color: #776e65;
    margin-bottom: 5px;
`;

export const LeaderBoardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 400;
    color: #776e65;
    margin-bottom: 40px;
`;

export const LeaderBoardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export const LeaderBoardItem = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    line-height: 32px;
    flex: 1 0 auto;
    width: 100%;
    justify-content: flex-start;

    :first-child {
        border-top: 1px solid black;
    }

    span:nth-child(1) {
        display: flex;
        margin: 0 10px;
        width: 80px;
    }

    span:nth-child(2) {
        display: flex;
        margin: 0 10px;
    }

    span:nth-child(3) {
        display: flex;
        flex-grow: 2;
        margin: 0 10px 0 40px;
        justify-content: flex-end;
    }
`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;