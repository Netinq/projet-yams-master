import { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Socket } from "socket.io-client";
import { SocketContext } from "../contexts/Socket";
import { HOME_STYLES as STYLES } from "@/assets/styles/HomeStyles";
import HEADER from "@/assets/images/header.jpg";
import { ButtonComponent } from "../components/ButtonComponent";
import ONLINE from "@/assets/images/online.png";
import OFFLINE from "@/assets/images/offline.png"
import REPLAY from "@/assets/images/replay.png";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/App";
import { StackNavigationProp } from "@react-navigation/stack";

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {

    const socket: Socket = useContext(SocketContext);
    const [hasConnection, setConnection] = useState<boolean>(false);
    const [time, setTime] = useState<string>("");
    const navigation = useNavigation<homeScreenProp>();

    useEffect(() => {
        socket.on("connect", () => setConnection(true));
        socket.on("disconnect", () => setConnection(false));
        socket.on("time-msg", (data) => setTime(new Date(data.time).toString()));

        return () => {
            socket.disconnect();
            socket.removeAllListeners();
        };
    }, [socket]);

    return (
        <View style={STYLES.container}>
            <ImageBackground style={STYLES.header} imageStyle={STYLES.headerImage} source={HEADER}>
            </ImageBackground>
            <View style={STYLES.titleContainer}>
                <Text style={STYLES.title}>Yam Master</Text>
                <Text style={STYLES.subTitle}>Lancer une nouvelle partie</Text>
            </View>
            <View style={STYLES.buttons}>
                <ButtonComponent backgroundColor="#54C2EB" title="En ligne" onPress={() => navigation.navigate('Online')} icon={ONLINE} />
                <ButtonComponent backgroundColor="#FD68C6" title="Affronter un robot" onPress={() => {}} icon={OFFLINE} />
                {/* <ButtonComponent backgroundColor="#FEF868" title="Rejouer une partie" onPress={() => {}} icon={REPLAY} /> */}
            </View>
        </View>
    );
}

export default HomeScreen;