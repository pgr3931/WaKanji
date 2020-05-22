import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {useTheme} from "@react-navigation/native";

/**
 * Animated progress bar to display remaining time
 * @param duration Duration of the animation
 * @param delay Delay after which the animation starts
 * @param setRemainingTime Callback to send back the remaining time in order to calculate a score
 * @param onFinish Callback that executes whenever the time reaches 0
 * @param stop Stops the animation when true
 * @param text Text to display inside the progress bar e.g. a score
 */
export const ProgressBar = ({duration, delay, setRemainingTime, onFinish, stop, text}) => {
    const [time, setTime] = useState(duration);
    const animation = useRef(new Animated.Value(100)).current;

    const {colors, font} = useTheme();
    const style = getStyle(colors, font);

    // Starts the animation on initial render
    useEffect(() => {
        Animated.timing(animation, {
            toValue: 0,
            easing: Easing.out(Easing.ease),
            duration: duration,
            delay: delay
        }).start(({finished}) => {
            if (finished) {
                onFinish();
            }
        });
    }, []);

    useEffect(() => {
        if (!stop && time > 0) {
            const to = setTimeout(() => setTime(time - 1000), 1000);
            return () => clearTimeout(to);
        }
    }, [time])

    // Stops the animation and sends the remaining time back to the caller
    useEffect(() => {
        if (stop) {
            Animated.timing(
                animation, {}
            ).stop();
            setRemainingTime(animation.__getValue())
        }
    }, [stop]);

    return (
        <View style={{flex: 2, margin: 10, alignSelf: 'stretch'}}>
            <Text style={{...style.scoreText, textAlign: 'center'}}>Score: {text}</Text>
            <View style={style.progressBar}>
                <Animated.View style={[style.absoluteFill, {
                    backgroundColor: animation.interpolate({
                        inputRange: [0, 50, 100],
                        outputRange: ['#f2291d', '#FF851B', '#2ECC40'],
                    }),
                    width: animation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%'],
                    }),
                    top: animation.interpolate({
                        inputRange: [0, 10, 100],
                        outputRange: [15, 0, 0],
                    }),
                    bottom: animation.interpolate({
                        inputRange: [0, 10, 100],
                        outputRange: [15, 0, 0],
                    })
                }]}/>
                <Text style={{...style.scoreText, fontWeight: 'bold'}}>{(time / 1000).toFixed(0)}</Text>
            </View>
        </View>
    );
};

const getStyle = (colors, font) => {
    return StyleSheet.create({
        progressBar: {
            flex: 1,
            backgroundColor: colors.backgroundDark,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        absoluteFill: {
            borderRadius: 20,
            position: 'absolute',
            left: 0,
            right: 0
        },
        scoreText: {
            color: colors.text,
            fontFamily: font.fontFamily,
            fontSize: font.medium
        }
    })
};
