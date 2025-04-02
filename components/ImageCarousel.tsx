import React from "react";
import { Dimensions, FlatList, Image, ImageSourcePropType, StyleSheet, View } from "react-native";

const ImageCarousel = ({
	data,
}: {
	data: (ImageSourcePropType | undefined)[];
}) => {
	return (
		<View className="h-[80%] w-full">
			{/* display the carousel */}
			<FlatList
				data={data}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToAlignment="start"
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("window").width}
				renderItem={(item) => (
					<Image
						source={item.item}
						className="w-[100vw] h-full"
						resizeMode="cover"
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageCarousel;
