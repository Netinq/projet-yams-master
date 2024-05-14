import { StyleSheet } from "react-native";

export const BUTTON_STYLES = StyleSheet.create({

    buttonContainer: {
        width: "100%",
        overflow: 'hidden',
        height: 75,
        borderRadius: 25,
        borderColor: "#222121",
        borderWidth: 1.5,
        borderBottomWidth: 7,
    },
    button: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        position: 'absolute',
        resizeMode: 'contain',
        left: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "#222121",
    },

});