import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {

    state = {
        fontLoaded: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { style, color, onPress } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff'

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }
        return (
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
                <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                                {this.props.children}
                            </Text>
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        position: 'absolute',
        bottom: 32,
        right: 32,
    },
    circleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 32,
    },
});

export default CircleButton;