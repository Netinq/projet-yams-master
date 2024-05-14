import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BUTTON_STYLES as STYLES } from "@/assets/styles/components/ButtonStyles";

type ButtonComponentProps = {
    title: string;
    icon?: any;
    backgroundColor: string;
    onPress: () => void;
}

export const ButtonComponent = (props: ButtonComponentProps) => {

    return (
        <View style={STYLES.buttonContainer}>
            <TouchableOpacity
                style={[STYLES.button, { backgroundColor: props.backgroundColor }]}
                onPress={props.onPress}>
                {
                    props.icon ? <Image style={STYLES.buttonIcon} source={props.icon} /> : null
                }
                <Text style={STYLES.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )

}