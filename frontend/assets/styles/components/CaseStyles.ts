import { Dimensions, StyleSheet } from "react-native";

export const CASE_STYLES = StyleSheet.create({

    caseContainer: {
        width: (Dimensions.get('window').width * 0.8) / 5 - 10 ,
        height: (Dimensions.get('window').width * 0.8) / 5 - 10 ,
        overflow: 'hidden',
        borderRadius: 20,
        borderColor: "#222121",
        borderWidth: 1.5,
    },
    case: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    caseText: {
        fontSize: 15,
        color: "#222121",
    },
    caseLock: {
        backgroundColor: '#FEF868',
    },
    caseLockIcon: {
        position: 'absolute',
        top: -16,
        height: 20,
        left: 20,
        width: 20,
        resizeMode: 'contain',
    },
    caseColored: {
        backgroundColor: "#54C2EB"
    },
    canBeCheckedCell: {
        backgroundColor: "#63F7BC"
    },
    playerOwnedCell: {
        backgroundColor: "#54C2EB"
    },
    opponentOwnedCell: {
        backgroundColor: "#F76380"
    }

});