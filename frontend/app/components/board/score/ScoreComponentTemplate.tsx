import { Text, View } from "react-native";
import { SCORE_STYLES as STYLES } from "@/assets/styles/components/ScoreStyles";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "@/app/contexts/Socket";

type ScoreComponentProps = {
    player: string;
    playerScore: number;
    opponentScore: number;
}

export const ScoreComponentTemplate = (props: ScoreComponentProps) => {

    return (
        <View style={STYLES.container}>
            <View style={[STYLES.score, props.player == 'player:2' && STYLES.scoreRed]}>
                <Text style={STYLES.scoreTitle}>Votre score</Text>
                <Text style={STYLES.scoreValue}>{ props.playerScore}</Text>
            </View>
            <View style={[STYLES.score, props.player == 'player:1' && STYLES.scoreRed]}>
                <Text style={STYLES.scoreTitle}>Score opposant</Text>
                <Text style={STYLES.scoreValue}>{props.opponentScore}</Text>
            </View>
        </View>
    )

}

export default ScoreComponentTemplate;