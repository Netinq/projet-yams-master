import { Image, ImageBackground, Text, View } from "react-native";
import { ONLINE_STYLES as STYLES } from "@/assets/styles/OnlineScreen";
import { ButtonComponent } from "../components/ButtonComponent";
import HEADER from "@/assets/images/header.jpg";
import CANCEL from "@/assets/images/cancel.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/App";
import { useNavigation } from "@react-navigation/native";
import WAIT from "@/assets/images/wait.png";
import { useEffect, useState } from "react";
import { socket } from "../contexts/Socket";
import BoardComponent from "../components/board/BoardComponent";

type onlineScreenProp = StackNavigationProp<RootStackParamList, 'Online'>;

export const OnlineScreen = () => {

    const navigation = useNavigation<onlineScreenProp>();
    const [ waitText, setWaitText ] = useState<string>("Recherche de joueur en cours ...");
    const [isInQueue, setInQueue] = useState<boolean>(false);
    const [isInGame, setInGame] = useState<boolean>(false);

    useEffect(() => {

        if (isInGame) {
            return;
        }
        
        const interval = setInterval(() => {
            if (waitText === "Recherche de joueur en cours ...") {
                setWaitText("Recherche de joueur en cours    ");
            } else {
                setWaitText("Recherche de joueur en cours ...");
            }
        }, 100);

        if (!isInQueue) { 
            setInQueue(true);
            socket.emit("queue.join");
        }

        return () => {
            clearInterval(interval);
        };
    }, [waitText]);

    useEffect(() => {
      socket.on("game.start", (data) => {
        setInQueue(false);
        setInGame(true);
      });

      socket.on("game.end", (data) => {
        navigation.navigate("End");
      });
    }, []);

    const handleCancel = () => {
        socket.emit("queue.leave");
        navigation.goBack();
    }

    return (
        <View style={STYLES.container}>
            {
                isInQueue && (
                    <>
                        <ImageBackground style={STYLES.header} imageStyle={STYLES.headerImage} source={HEADER}>
                        </ImageBackground>
                        <View style={STYLES.titleContainer}>
                            <Text style={STYLES.title}>Yam Master</Text>
                            <Text style={STYLES.subTitle}>Matchmaking en ligne</Text>
                        </View>
                        <Image source={WAIT} style={STYLES.waitImage} />
                        <Text style={STYLES.waitText}>{waitText}</Text>
                        <View style={STYLES.buttons}>
                            <ButtonComponent backgroundColor="#F76380" title="Annuler la recherche" onPress={handleCancel} icon={CANCEL} />
                        </View>
                    </>
                )
            }
            {
                isInGame && (
                    <BoardComponent gameViewState={{}} />
                )
            }
        </View>
    );
}

export default OnlineScreen;