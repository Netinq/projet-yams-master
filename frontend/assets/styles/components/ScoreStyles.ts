import { StyleSheet } from "react-native";

export const SCORE_STYLES = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    score: {
        width: "45%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1.5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#54C2EB",
    },
    scoreTitle: {
        fontSize: 15,
        color: "#000",
    },
    scoreValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    scoreRed: {
        backgroundColor: "#F76380",
    },
});