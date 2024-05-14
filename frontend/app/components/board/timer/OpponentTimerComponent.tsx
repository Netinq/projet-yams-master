import { SocketContext } from "@/app/contexts/Socket";
import { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Socket } from "socket.io-client";
import { BOARD_STYLES as STYLES } from "@/assets/styles/components/board/BoardStyles";
import TIMER from "@/assets/images/timer.png";

export const OpponentTimerComponent = () => {

    const socket: Socket = useContext(SocketContext);
    const [opponentTimer, setOpponentTimer] = useState<string>("30 secondes");
    const [displayTimer, setDisplayTimer] = useState<boolean>(false);
    const [tickets, setTickets] = useState<number>(12);
  
    useEffect(() => {
      socket.on("game.timer", (data) => {
        setOpponentTimer(`${data['opponentTimer']} secondes`)
        if (data['opponentTimer'] == 0 || data['opponentTimer'] == undefined) {
          setDisplayTimer(false)
        } else {
          setDisplayTimer(true)
        }
      });
      socket.on("game.tickets", (data) => {
        setTickets(data['tickets']);
      });
    }, []);
  
    if (displayTimer) {
      return (
        <View style={STYLES.titleContainer}>
            <Image source={TIMER} style={STYLES.timerImage} />
            <View style={STYLES.titleText}>
                <Text style={STYLES.title}>{opponentTimer}</Text>
                <Text style={STYLES.subTitle}>{tickets} Tickets restants</Text>
            </View>
        </View>
      );
    } else {
      return <></>
    }
  };

export default OpponentTimerComponent;