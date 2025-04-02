import { currentYear } from '@/constants/data';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ShareButton from './ui/ShareButton';

const Footer = ({accentColor}:{accentColor?:string}) => {
    return (
        <>
            <View className='items-center mt-[32px]'>
                <Image source={currentYear.logo} className='w-[80%] h-[200px]' resizeMode='contain'/>
                <Text className="text-white text-sm">Coppyright North Valley Baptist Church</Text>
                <Text className="text-white text-sm">All Right Reserved</Text>
                <Text className="text-white text-sm">Special Thanks to NV Media Team</Text>
                <View className='h-[1px] w-[60%] bg-white opacity-45 my-8'></View>
            </View>
            <ShareButton accentColor={accentColor}/>
        </>
    );
}

const styles = StyleSheet.create({})

export default Footer;
