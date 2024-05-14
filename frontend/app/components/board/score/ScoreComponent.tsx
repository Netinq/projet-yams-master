import { Text, View } from "react-native";
import { SCORE_STYLES as STYLES } from "@/assets/styles/components/ScoreStyles";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/app/contexts/Socket";
import ScoreComponentTemplate from "./ScoreComponentTemplate";

export const ScoreComponent = () => {

    const socket = useContext(SocketContext);

    const [player, setPlayer] = useState<string>("player:1");
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [opponentScore, setOpponentScore] = useState<number>(0);

    useEffect(() => {
        socket.on("game.score", (data) => {
            setPlayerScore(data['playerScore']);
            setOpponentScore(data['opponentScore']);
            setPlayer(data['player']);
        });
    }, []);

    return (
        ScoreComponentTemplate({ player, playerScore, opponentScore })
    )

}

export default ScoreComponent;