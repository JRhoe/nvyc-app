import { icons } from "@/constants";
import { currentYear } from "@/constants/data";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
	FadeInUp,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

const Accorion = ({ title, details }: { title: string; details: string }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// arrow animation variables and functions
	const arrowRotation = useSharedValue(0);
	const animatedArrowStyles = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${arrowRotation.value}deg` }],
		};
	});

	function toggleAccordian() {
		setIsOpen((prev) => !prev);
	}

	useEffect(() => {
		"worklet";
		if (isOpen) {
			arrowRotation.value = withSpring(90);
		} else {
			arrowRotation.value = withSpring(0);
		}
	}, [isOpen]);

	return (
		<Pressable onPress={toggleAccordian} className="my-2">
			<View className="bg-gray-900 w-full p-4">
				<View className="py-2 flex-row justify-between items-center w-full">
					<Text className="text-main-text text-xl">{title}</Text>
					<Animated.View style={animatedArrowStyles}>
						<Image
							source={icons.forwardIcon}
							className={`size-5`}
							tintColor={"#c7c4b7"}
						/>
					</Animated.View>
				</View>
				<View className="overflow-hidden">
					{/* if its open show the details */}
					{isOpen && (
						<Animated.View className="mt-2 p-2" entering={FadeInUp}>
							<Text className="text-white text-lg/7 mb-4">{details}</Text>
							
							{/* accordian footer */}
							<View className="pt-4 border-t border-white/5 flex-row justify-between items-center">
								<Text className="text-main-text font-bold">
									Youth Conference {currentYear.year}
								</Text>
								<Link href={"https://nvbc.org/yc/25/"}>
									<View className="flex-row justify-end items-center gap-2">
										<View className="bg-main-text rounded-full p-1">
											<Image
												source={icons.linkIcon}
												className="size-4 rotate-[-45deg]"
												tintColor={"#000000"}
											/>
										</View>
										<Text className="text-main-text">More Info</Text>
									</View>
								</Link>
							</View>
						</Animated.View>
					)}
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({});

export default Accorion;
