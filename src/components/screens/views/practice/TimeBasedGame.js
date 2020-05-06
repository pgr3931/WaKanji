import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";

const TimeBasedGame = ({next, kanji, translations, finish}) => {
    const {colors, font} = useTheme();
    const style = getStyle(colors, font);

    const onChoice = (translation) => {
        if (translation === kanji.translation) {
            next();
        } else {
            finish()
        }
    };

    return (
        <View style={{flex: 15}}>
            <View style={style.kanjiContainer}>
                <Text style={style.kanji}>{kanji.kanji}</Text>
            </View>
            <View style={style.buttonContainer}>
                <View style={style.row}>
                    <TouchableOpacity style={style.button} onPress={() => onChoice(translations[0])}
                                      activeOpacity={0.5}>
                        <Text style={style.buttonText}>{translations[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={() => onChoice(translations[1])}
                                      activeOpacity={0.5}>
                        <Text style={style.buttonText}>{translations[1]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.row}>
                    <TouchableOpacity style={style.button} onPress={() => onChoice(translations[2])}
                                      activeOpacity={0.5}>
                        <Text style={style.buttonText}>{translations[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={() => onChoice(translations[3])}
                                      activeOpacity={0.5}>
                        <Text style={style.buttonText}>{translations[3]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TimeBasedGame

const getStyle = (colors, font) => {
    return StyleSheet.create({
        kanjiContainer: {
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: colors.border,
            backgroundColor: colors.card,
            borderWidth: 2,
            borderRadius: 10,
            margin: 10,
            marginTop: 5
        },
        kanji: {
            fontSize: 100,
            fontFamily: font.fontFamily,
            color: colors.text
        },
        buttonContainer: {
            flex: 10,
            margin: 5,
            marginBottom: 5,
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            marginBottom: 5
        },
        button: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderRadius: 10,
            borderColor: colors.border,
            backgroundColor: colors.card,
            margin: 5,
            marginTop: 0
        },
        buttonText: {
            color: colors.primary,
            fontFamily: font.fontFamily,
            fontSize: font.large
        }
    })
};