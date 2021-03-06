import React from "react";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";

/**
 * Loading Screen to display whenever a async call is loading
 * @param text Text to display below the loading icon
 */
export const LoadingScreen = ({text}) => {
    const {colors, font} = useTheme();
    const style = getStyle(colors, font);

    return (
        <View style={style.container}>
            <ActivityIndicator size={"large"} color={colors.text}/>
            {text !== undefined &&
            <Text style={style.text}>{text}</Text>
            }
        </View>
    )
}

const getStyle = (colors, font) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontFamily: font.fontFamily,
            color: colors.text,
            fontSize: font.medium,
            textAlign: 'center'
        }
    })
}
