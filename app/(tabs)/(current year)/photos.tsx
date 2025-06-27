import { icons } from "@/constants";
import { currentYear, lastYear } from "@/constants/data";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	ActivityIndicator,
	DimensionValue,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

const Photos = () => {
	// the list of pictures (empty array by default)
	const [pictures, setPictures] = useState<string[]>([]);
	// loading
	const [isLoading, setIsLoading] = useState<boolean>(true);
	// settings for each view (1,2, or 3 columbs)
	const [viewStyle, setViewStyle] = useState<{
		numColumbs: number;
		imageHeight: number;
		imageWidth: DimensionValue;
	}>({ numColumbs: 1, imageHeight: 250, imageWidth: "100%" });

	useEffect(() => {
		async function setPictureData() {
			// load the pictures
			setPictures(await getData());
			// turn off loading indicator
			setIsLoading(false);
		}
		setPictureData();
	}, []);

	function changeImageView() {
		if (viewStyle.numColumbs === 1) {
			setViewStyle({ numColumbs: 2, imageHeight: 150, imageWidth: "50%" });
		} else if (viewStyle.numColumbs === 2) {
			setViewStyle({ numColumbs: 3, imageHeight: 100, imageWidth: "33%" });
		} else if (viewStyle.numColumbs === 3) {
			setViewStyle({ numColumbs: 1, imageHeight: 250, imageWidth: "100%" });
		}
	}

	return (
		<SafeAreaView className="flex-1 bg-black">
			<View className="bg-black pb-3">
				<Link href={"/"}>
					<View className="flex-row items-center py-4">
						<Image
							source={icons.backIcon}
							className="size-6"
							tintColor={"#E1AD6F"}
						/>
						<Text className="text-main-text font-roboto text-lg">Back</Text>
					</View>
				</Link>
				<View className="flex-row justify-between">
					<View className="flex-row items-center gap-2">
						<Text className="text-main-text font-robotoBold text-3xl">
							{currentYear.year} Photos
						</Text>
						<Image
							source={icons.picturesIcon}
							className="size-7"
							tintColor={"#E1AD6F"}
						/>
					</View>
					<TouchableOpacity onPress={changeImageView}>
						<View className="items-end justify-center pr-3">
							{/* change the squares on the top right depending on what view is selected */}
							{viewStyle.numColumbs === 1 ? (
								<SquaresOneColumb />
							) : viewStyle.numColumbs === 2 ? (
								<SquaresTwoColumbs />
							) : (
								<SquaresThreeColumbs />
							)}
						</View>
					</TouchableOpacity>
				</View>
			</View>
			{isLoading ? (
				// while its loading show loading graphic
				<View className="w-full h-[75%] bg-black items-center justify-center">
					<ActivityIndicator />
				</View>
			) : (
				// when its done loading show images
				<FlatList
					className="bg-black"
					data={pictures}
					key={viewStyle.numColumbs}
					numColumns={viewStyle.numColumbs}
					keyExtractor={(_, i) => i.toString()}
					renderItem={(item) => (
						<View
							onStartShouldSetResponder={() => true}
							className={`p-1`}
							style={{
								height: viewStyle.imageHeight,
								width: viewStyle.imageWidth,
							}}>
							<TouchableWithoutFeedback onPress={changeImageView}>
								<View>
									<Image
										source={{ uri: item.item }}
										className="w-full h-full"
										resizeMode="cover"
									/>
								</View>
							</TouchableWithoutFeedback>
						</View>
					)}
				/>
			)}
		</SafeAreaView>
	);
};

// code for the squares (view indicator)
const SquaresOneColumb = () => {
	return (
		<View>
			<View className="h-[10px] w-[25px] border-2 border-main-text rounded-sm mb-1"></View>
			<View className="h-[10px] w-[25px] border-2 border-main-text rounded-sm"></View>
		</View>
	);
};
const SquaresTwoColumbs = () => {
	return (
		<View className="flex-row">
			<View className="mr-1">
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm mb-1"></View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm"></View>
			</View>
			<View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm mb-1"></View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm"></View>
			</View>
		</View>
	);
};
const SquaresThreeColumbs = () => {
	return (
		<View className="flex-row">
			<View className="mr-1">
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm mb-1"></View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm"></View>
			</View>
			<View className="mr-1">
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm mb-1"></View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm"></View>
			</View>
			<View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm mb-1"></View>
				<View className="h-[10px] w-[10px] border-2 border-main-text rounded-sm"></View>
			</View>
		</View>
	);
};

async function getData() {
	// add picures from all three sections (recap, preaching, and skits) into one array of pictures
	let photoList: string[] = [];
	if (currentYear.recap?.photos) {
		const res = await fetch(currentYear.recap.photos);
		const data = await res.json();
		for (let x of data) {
			photoList.push(x.path);
		}
	}
	if (currentYear.preaching?.photos) {
		const res = await fetch(currentYear.preaching.photos);
		const data = await res.json();
		for (let x of data) {
			photoList.push(x.path);
		}
	}
	if (currentYear.skit?.photos) {
		const res = await fetch(currentYear.skit.photos);
		const data = await res.json();
		for (let x of data) {
			photoList.push(x.path);
		}
	}
	return photoList;
}

const styles = StyleSheet.create({});

export default Photos;
