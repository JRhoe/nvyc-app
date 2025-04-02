import { icons } from '@/constants';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Game = () => {
    return (
        <View
            className="flex-1 items-center justify-center bg-black">
            <Image source={icons.game} className="size-10"/>
            <Text className="text-2xl mt-2 font-robotoBold text-white">Game</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Game;
