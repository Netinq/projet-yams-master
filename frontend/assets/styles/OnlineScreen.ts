import { StyleSheet } from "react-native";

export const ONLINE_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        paddingTop: 50,
    },
    header: {
        height: '25%',
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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
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
    waitImage: {
        height: '35%',
        resizeMode: "contain"
    },
    waitText: {
        fontSize: 18,
        color: '#222121',
        marginTop: 10,
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
    }
});

export default ONLINE_STYLES;