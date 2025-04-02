import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SectionHeader = ({
	iconURL,
	text,
	textSize,
	iconSize,
	accentColor,
}: {
	iconURL: any;
	text: string;
	textSize?: number;
	iconSize: number;
	accentColor: string;
}) => {
	return (
		<View className="flex-row justify-center items-center my-[32px]">
			<Image
				source={iconURL}
				style={{ height: iconSize, width: iconSize }}
				tintColor={accentColor}
			/>
			<View className="ml-4">
				<Text className="text-white font-robotoBold" style={{ fontSize: textSize ? textSize : iconSize }}>
					{text}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SectionHeader;
