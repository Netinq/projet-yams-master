import { StyleSheet } from "react-native";

export const DICE_STYLES = StyleSheet.create({

    diceContainer: {
        width: 60,
        overflow: 'visible',
        height: 60,
        borderRadius: 25,
        borderColor: "#222121",
        borderWidth: 1.5,
        borderBottomWidth: 7,
    },
    dice: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 22,
    },
    diceIcon: {
        height: 40,
        resizeMode: 'contain',
    },
    diceLock: {
        backgroundColor: '#FEF868',
    },
    diceLockIcon: {
        position: 'absolute',
        top: -16,
        height: 20,
        left: 20,
        width: 20,
        resizeMode: 'contain',
    }

});