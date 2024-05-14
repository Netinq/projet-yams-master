import { Image, LogBox, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CASE_STYLES as STYLES } from "@/assets/styles/components/CaseStyles";
import { useState } from "react";

type CaseComponentProps = {
    value: string;
    colored?: boolean;
    style: any;
    onPress: () => void;
}

export const CaseComponent = (props: CaseComponentProps) => {

    const handlePress = () => {
        props.onPress();
    }

    return (
        <View style={STYLES.caseContainer}>
            <TouchableOpacity
                style={[STYLES.case, props.colored && STYLES.caseColored, props.style && props.style]}
                containerStyle={{ overflow: 'visible' }}
                onPress={handlePress}>
                <Text style={STYLES.caseText}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )

}