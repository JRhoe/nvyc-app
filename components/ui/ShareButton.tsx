import { icons } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const ShareButton = ({ accentColor }: { accentColor?: string }) => {
	return (
		<>
			<Link href={Platform.OS === "ios" ? "https://apps.apple.com/us/app/nv-youth-conference/id1628728422" : "https://play.google.com/store/apps/details?id=com.anonymous.nvyc"}>
				<View className="flex-row items-center justify-center w-full">
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
			</Link>
			<View className="h-[85px] w-full"></View>
		</>
	);
};

const styles = StyleSheet.create({});

export default ShareButton;
