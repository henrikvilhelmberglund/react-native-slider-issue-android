import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export default function App() {
  const [sliderValue, setSliderValue] = useState(5);
  const [sliderValueStart, setSliderValueStart] = useState();
  const handleSlidingStart = (initialSliderValue) => {
    console.log("handleSlidingStart", handleSlidingStart);
    setSliderValueStart(initialSliderValue);
  };

  const handleSlidingChange = (sliderValue) => {
    console.log("handleSliderChange", handleSlidingChange);
    setSliderValue(sliderValue);
    console.log("after set slider value in change", sliderValue);
  };

  const handleSlidingComplete = (sliderValue) => {
    console.log("handleSlidingComplete", handleSlidingComplete);
    if (sliderValue !== sliderValueStart) {
      setSliderValue(sliderValue);
    } else {
      console.log("sliderValue and sliderValueStart are the same");
      // set slider value to 5
      setSliderValue(5);
      console.log("after set slider value in complete", sliderValue);
    }
  };

  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 400, height: 40 }}
        minimumValue={0}
        maximumValue={23}
        step={1}
        thumbTintColor="#000000"
        minimumTrackTintColor="#222222"
        value={sliderValue}
        onSlidingStart={handleSlidingStart}
        onSlidingComplete={handleSlidingComplete}
        onValueChange={handleSlidingChange}
        tapToSeek={true}
        // maximumTrackTintColor="#000000"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
