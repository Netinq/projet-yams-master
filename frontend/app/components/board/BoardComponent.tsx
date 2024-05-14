import HEADER from "@/assets/images/header.jpg";
import { BOARD_STYLES as STYLES } from "@/assets/styles/components/board/BoardStyles";
import React from "react";
import { ImageBackground, View } from 'react-native';
import PlayerDeck from "./decks/DeckComponent";
import OpponentDeck from "./decks/OpponentDeckComponent";
import Grid from "./grid/GridComponent";
import PlayerTimerComponent from "./timer/PlayerTimerComponent";
import OpponentTimerComponent from "./timer/OpponentTimerComponent";
import ScoreComponent from "./score/ScoreComponent";

type BoardComponentProps = {
    gameViewState: any;
};

export const BoardComponent = ( props: BoardComponentProps ) => {
  return (
    <View style={STYLES.container}>
        <ScoreComponent />
        <PlayerTimerComponent />
        <OpponentTimerComponent />
      <Grid />
      <PlayerDeck />
      <OpponentDeck />
    </View>
  );
};

export default BoardComponent;