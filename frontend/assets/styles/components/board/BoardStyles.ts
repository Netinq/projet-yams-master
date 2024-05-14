import { Dimensions, StyleSheet } from "react-native";

export const BOARD_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
        height: '100%',
    },
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: '#FCEDD8',
        borderColor: '#222121',
        borderWidth: 1.5,
        borderRadius: 25,
        overflow: 'hidden',
    },
    headerImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        width: '100%',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        columnGap: 40,
    },
    timerImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    titleText: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222121',
    },
    subTitle: {
        fontSize: 18,
        color: '#222121',
    },
    buttons: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20
    },
    dices: {
        position: 'absolute',
        bottom: 125,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        columnGap: 5,
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    opponentInfosContainer: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: 'black',
      backgroundColor: "lightgrey"
    },
    opponentTimerScoreContainer: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "lightgrey"
    },
    opponentTimerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    opponentScoreContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deckOpponentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "black"
    },
    gridContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        borderColor: '#222121',
        borderWidth: 1.5,
        borderRadius: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 5,
        columnGap: 5,
        padding: 5,
        paddingVertical: 10,
        backgroundColor: '#FCEDD8',
        borderBottomWidth: 7,
    },
    choicesContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deckPlayerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    playerInfosContainer: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: 'black',
      backgroundColor: "lightgrey"
    },
    playerTimerScoreContainer: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "lightgrey"
    },
    playerTimerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "lightgrey"
    },
    playerScoreContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "lightgrey"
    },
  });

export default BOARD_STYLES;