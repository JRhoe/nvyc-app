import React, { useState } from "react";
import { Dimensions, FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

const ImageCarousel = ({
	data,
}: {
	data: (ImageSourcePropType | undefined)[];
}) => {
	const [activeItem, setActiveItem] = useState<number | null>(0)
	return (
		<View className="h-[80%] w-full relative">
			{/* display the carousel */}
			<FlatList
				data={data}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				onViewableItemsChanged={(viewableItems) => setActiveItem(viewableItems.viewableItems[0].index)}
				renderItem={(item) => (
					<View style={{width:Dimensions.get("window").width-48}} className="overflow-hidden">
						<Image
							source={item.item}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
				)}
			/>
			<View className="absolute flex bottom-4 items-center w-full">
				<FlatList
					data={data}
					horizontal
					renderItem={(item) => (
						<View className={`h-[5px] w-[5px] rounded-full mx-1 ${item.index === activeItem ? "bg-white" : "bg-white/50"}`} ><Text>hello</Text></View>
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageCarousel;
