import styled from "styled-components";

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    border-radius: 5px;
    margin-top: 40px;
    background-color: Gainsboro;
`;

export const Tile = styled.div`
    display: "flex";
    width: 80px;
    height: 80px;
    font-size: 40px;
    color: #8f7866;
    justify-content: center;
    align-items: center;
    border: 2px solid DimGray;
    background: #c6b9af;
`;

export const EmptyTile = styled(Tile)`
    background: #dbd3cd;
`;

export const Playground = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    margin: 0 25px 25px 25px;
    border-radius: 4px;
`;

export const GridRow = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;