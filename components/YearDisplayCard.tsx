import { icons } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const YearDisplayCard = ({
	year,
	accentColor,
}: {
	year: any;
	accentColor: string;
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	return (
		<Link href={year.link}>
			<View className="px-4 py-3 flex flex-row w-full items-center">
				<View className="h-[85px] w-[85px] overflow-hidden rounded-2xl mr-4 justify-center items-center">
					<Image
						source={year.displayImage}
						className={`h-full w-full ${isLoading && "absolute opacity-0"}`}
						resizeMode="cover"
						onLoad={() => setIsLoading(false)}
					/>
					{isLoading && <ActivityIndicator />}
				</View>
				<View className="flex-row items-center border-b-[0.5px] border-gray-400 py-5">
					<View className="w-[74%]">
						<Text
							className="text-xl font-robotoBlack"
							style={{ color: accentColor }}>
							{year.titleText}
						</Text>
						<Text className="text-white text-sm" numberOfLines={2}>
							{year.paraText}
						</Text>
					</View>
					<View className="px-2">
						<Image source={icons.forwardIcon} className="size-4"/>
					</View>
				</View>
			</View>
		</Link>
	);
};

const styles = StyleSheet.create({});

export default YearDisplayCard;
