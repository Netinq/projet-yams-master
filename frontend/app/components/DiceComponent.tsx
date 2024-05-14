import { Image, LogBox, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DICE_STYLES as STYLES } from "@/assets/styles/components/DiceStyles";
import IMG1 from "@/assets/images/1.png";
import IMG2 from "@/assets/images/2.png";
import IMG3 from "@/assets/images/3.png";
import IMG4 from "@/assets/images/4.png";
import IMG5 from "@/assets/images/5.png";
import IMG6 from "@/assets/images/6.png";
import LOCK from "@/assets/images/lock.png";
import { useState } from "react";

export enum DiceValue {
    ONE = IMG1,
    TWO = IMG2,
    THREE = IMG3,
    FOUR = IMG4,
    FIVE = IMG5,
    SIX = IMG6,
}

type DiceComponentProps = {
    value: string | null;
    index: number;
    locked: boolean;
    onPress: (locked: boolean, index: number) => void;
}

export const DiceComponent = (props: DiceComponentProps) => {

    const img = () => {
        switch (props.value) {
            case "1":
                return DiceValue.ONE;
            case "2":
                return DiceValue.TWO;
            case "3":
                return DiceValue.THREE;
            case "4":
                return DiceValue.FOUR;
            case "5":
                return DiceValue.FIVE;
            case "6":
                return DiceValue.SIX;
            default:
                return DiceValue.ONE;
        }
    }

    const handlePress = () => {
        props.onPress(!props.locked, props.index);
    }

    return (
        <View style={STYLES.diceContainer}>
            {
                (props.locked) && (
                    <Image style={STYLES.diceLockIcon} source={LOCK} />
                )
            }
            <TouchableOpacity
                style={[STYLES.dice, (props.locked) && STYLES.diceLock]}
                containerStyle={{ overflow: 'visible' }}
                onPress={handlePress}>
                {
                    props.value !== null && (
                        <Image style={STYLES.diceIcon} source={img()} />
                    )
                }
            </TouchableOpacity>
        </View>
    )

}