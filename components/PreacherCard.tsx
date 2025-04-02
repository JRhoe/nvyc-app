import { preacher } from "@/constants";
import React from "react";
import {
	Image,
	Modal,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

const PreacherCard = ({
	preacher,
	setPreacherActive,
	cardActive,
}: {
	preacher: preacher;
	setPreacherActive: (arg0: boolean) => void;
	cardActive: boolean;
}) => {
	return (
		<Modal animationType="slide" transparent={true} visible={cardActive}>
			<View className="w-full h-full bg-black/90 px-[16px] pb-16px">
				<ScrollView
					className="w-full h-[90%]"
					showsVerticalScrollIndicator={false}>
					<Image
						source={preacher.portrait}
						className="w-full h-[350px] mt-[88px]"
						resizeMode="cover"
					/>
					<View className="bg-gray-800/90">
						<Text className="text-main-text uppercase font-robotoBold text-center text-2xl mt-[32px]">
							{preacher.displayName}
						</Text>
						<Text className="text-white text-center text-lg mt-[32px] px-2">
							{preacher.about}
						</Text>
						<Pressable onPress={() => setPreacherActive(false)}>
							<Text className="text-main-text text-center text-lg py-[16px]">
								Close Window
							</Text>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({});

export default PreacherCard;
