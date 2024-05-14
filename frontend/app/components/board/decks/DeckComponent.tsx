import { SocketContext } from "@/app/contexts/Socket";
import BOARD_STYLES from "@/assets/styles/components/board/BoardStyles";
import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ButtonComponent } from "../../ButtonComponent";
import { DiceComponent } from "../../DiceComponent";

const PlayerDeck = () => {

  const socket = useContext(SocketContext);
  const [displayPlayerDeck, setDisplayPlayerDeck] = useState(false);
  const [dices, setDices] = useState(Array(5).fill(false));
  const [displayRollButton, setDisplayRollButton] = useState(false);
  const [rollsCounter, setRollsCounter] = useState(0);
  const [rollsMaximum, setRollsMaximum] = useState(3);

  useEffect(() => {
    socket.on("game.deck.view-state", (data) => {
      setDisplayPlayerDeck(data['displayPlayerDeck']);
      if (data['displayPlayerDeck']) {
        setDisplayRollButton(data['displayRollButton']);
        setRollsCounter(data['rollsCounter']);
        setRollsMaximum(data['rollsMaximum']);
        setDices(data['dices']);
      }
    });
  }, []);

  const toggleDiceLock = (locked: boolean, index: number) => {
    const newDices = [...dices];
    if (newDices[index].value !== '' && displayRollButton) {
        socket.emit("game.dices.lock", newDices[index].id);
    }
  };

  const rollDices = () => {
    if (rollsCounter <= rollsMaximum) {
      socket.emit("game.dices.roll");
    }
  };

  return (
    <>
    {
      displayPlayerDeck && (
        <>
        <View style={BOARD_STYLES.dices}>
            {dices.map((diceData, index) => (
              <DiceComponent
                key={diceData.id}
                index={index}
                value={diceData.value}
                locked={diceData.locked}
                onPress={toggleDiceLock}
              />
            ))}
        </View>
        <View style={BOARD_STYLES.buttons}>
            {
                displayRollButton && <ButtonComponent backgroundColor="#63F7BC" title="Lancer les dés" onPress={rollDices} />
            }
        </View>
        </>
      )
    }
    </>
  );
};

export default PlayerDeck;