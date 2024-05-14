import { SocketContext } from "@/app/contexts/Socket";
import React, { useState, useContext, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { CaseComponent, CaseValue } from "@/app/components/CaseComponent";
import { DiceComponent, DiceValue } from "../../DiceComponent";
import { ButtonComponent } from "../../ButtonComponent";
import BOARD_STYLES from "@/assets/styles/components/board/BoardStyles";

const OpponentDeck = () => {

  const socket = useContext(SocketContext);
  const [displayOpponentDeck, setDisplayOpponentDeck] = useState(false);
  const [dices, setDices] = useState(Array(5).fill(false));
  const [displayRollButton, setDisplayRollButton] = useState(false);
  const [rollsCounter, setRollsCounter] = useState(0);
  const [rollsMaximum, setRollsMaximum] = useState(3);

  useEffect(() => {

    socket.on("game.deck.view-state", (data) => {
      setDisplayOpponentDeck(data['displayOpponentDeck']);
      if (data['displayOpponentDeck']) {
        setDisplayRollButton(data['displayRollButton']);
        setRollsCounter(data['rollsCounter']);
        setRollsMaximum(data['rollsMaximum']);
        setDices(data['dices']);
      }
    });
  }, []);

  return (
    <>
    {
      displayOpponentDeck && (
        <>
        <View style={BOARD_STYLES.dices}>
            {dices.map((diceData, index) => (
              <DiceComponent
                key={diceData.id}
                index={index}
                value={diceData.value}
                locked={diceData.locked}
                onPress={() => {}}
              />
            ))}
        </View>
        <View style={BOARD_STYLES.buttons}>
            <ButtonComponent backgroundColor="#fff" title="Tour de l'adversaire" onPress={() => {}} />
        </View>
        </>
      )
    }
    </>
  );
};

export default OpponentDeck;