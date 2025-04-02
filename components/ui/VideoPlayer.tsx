import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const VideoPlayer = ({ videoData }: { videoData: string[] }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	return (
		<View className="w-full rounded-xl overflow-hidden my-2">
			{/* while loading show loading graphic */}
			{isLoading && (
				<View className="h-[200px] w-full items-center justify-center">
					<ActivityIndicator className="text-white" />
				</View>
			)}
			{/* show a youtube or vimeo webview */}
			{videoData[0] === "youtube" && (
				<WebView
					source={{ uri: `https://www.youtube.com/embed/${videoData[1]}` }}
					allowsFullscreenVideo={true}
					onLoad={() => setIsLoading(false)}
					style={{
						flex: 1,
						height: 200,
						width: "100%",
						backgroundColor: "black",
					}}
				/>
			)}
			{videoData[0] === "vimeo" && (
				<WebView
					source={{ uri: `https://player.vimeo.com/video/${videoData[1]}` }}
					allowsFullscreenVideo={true}
					onLoad={() => setIsLoading(false)}
					style={{
						flex: 1,
						height: 200,
						width: "100%",
						backgroundColor: "black",
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({});

export default VideoPlayer;
