import { icons } from "@/constants";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ShareButton = ({ accentColor }: { accentColor?: string }) => {
	const shareButtonFunc = () => {
		alert("No store page yet");
	};

	return (
		<>
			<Pressable onPress={shareButtonFunc}>
				<View className="flex-row items-center justify-center">
					<Image
						source={icons.ShareIcon}
						className="size-8"
						tintColor={accentColor ? accentColor : "white"}
					/>
					<Text
						className="text-white uppercase text-xl ml-3"
						style={{ color: accentColor ? accentColor : "white" }}>
						Share NVYC APP
					</Text>
				</View>
			</Pressable>
			<View className="h-[85px] w-full"></View>
		</>
	);
};

const styles = StyleSheet.create({});

export default ShareButton;
