import { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Socket } from "socket.io-client";
import { SocketContext } from "../contexts/Socket";
import { END_STYLES as STYLES } from "@/assets/styles/EndStyles";
import HEADER from "@/assets/images/header.jpg";
import { ButtonComponent } from "../components/ButtonComponent";
import ONLINE from "@/assets/images/online.png";
import OFFLINE from "@/assets/images/offline.png"
import REPLAY from "@/assets/images/replay.png";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import { StackNavigationProp } from "@react-navigation/stack";
import ScoreComponentTemplate from "../components/board/score/ScoreComponentTemplate";

type EndScreenProp = StackNavigationProp<RootStackParamList, 'End'>;

export const EndScreen = () => {

    const socket: Socket = useContext(SocketContext);
    const navigation = useNavigation<EndScreenProp>();

    const [winner , setWinner] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const [opponentScore, setOpponentScore] = useState<number>(0);
    const [player, setPlayer] = useState<string>("");

    useEffect(() => {
        socket.on("game.resumeData", (data) => {
            setWinner(data['winner']);
            setScore(data['score']);
            setOpponentScore(data['opponentScore']);
            setPlayer(data['player']);
            console.log(data);
        });
    }, []);

    return (
        <View style={STYLES.container}>
            <ImageBackground style={STYLES.header} imageStyle={STYLES.headerImage} source={HEADER}>
            </ImageBackground>
            <View style={STYLES.titleContainer}>
                <Text style={STYLES.title}>Résumé de la partie</Text>
                {
                    winner === "You" && <Text style={STYLES.subTitle}>Vous avez gagné !</Text>
                }
                {
                    winner != "You" && <Text style={STYLES.subTitle}>Vous avez perdu...</Text>
                }
            </View>
            <ScoreComponentTemplate player={player} playerScore={score} opponentScore={opponentScore} />
            <View style={STYLES.buttons}>
                <ButtonComponent backgroundColor="#FEF868" title="Rejouer" onPress={() => navigation.navigate('Home')} icon={REPLAY} />
            </View>
        </View>
    );
}

export default EndScreen;