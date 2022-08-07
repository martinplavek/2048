import gql from "graphql-tag";

export const topPlayersQuery = gql`
    query topPlayersQuery(
        $first: Int
        $sortBy: [SortScoresBy!]
        $where: ScoreWhereInput
    ) {
        allScores(first: $first, sortBy: $sortBy, where: $where) {
            player {
                name
            }
            score
        }
    }
`;
