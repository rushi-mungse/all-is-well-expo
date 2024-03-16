import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import { style as tw } from "twrnc";

export const Slider = () => {
  return (
    <Swiper
      style={tw("items-center justify-center h-[280px]")}
      showsButtons
      loop={true}
      autoplay={true}
      nextButton={<AntDesign name="right" size={14} color={colors.primary} />}
      prevButton={<AntDesign name="left" size={14} color={colors.primary} />}
      dotColor="white"
      activeDotColor={colors.primary}
    >
      <View style={tw("h-full items-center justify-center px-8")}>
        <Text style={tw("text-white font-bold text-[22px]")}>Rakesh K</Text>
        <Text style={tw("text-yellow-500 font-bold text-[18px]")}>
          Sports Psychologist
        </Text>
        <View style={tw("mt-3")}>
          <Text style={tw("text-gray-400 text-[16px] text-center")}>
            15+ year experience.
          </Text>
          <Text style={tw("text-gray-400 text-[16px] text-center")}>
            Trained by Surya Kumar Yadav, Shreyas Iyer and Mirabai Chanu
          </Text>
        </View>
      </View>

      <View style={tw("h-full items-center justify-center px-8")}>
        <Text style={tw("text-white font-bold text-[22px]")}>Rakesh K</Text>
        <Text style={tw("text-yellow-500 font-bold text-[18px]")}>
          Sports Psychologist
        </Text>
        <View style={tw("mt-3")}>
          <Text style={tw("text-gray-400 text-[16px] text-center")}>
            15+ year experience.
          </Text>
          <Text style={tw("text-gray-400 text-[16px] text-center")}>
            Trained by Surya Kumar Yadav, Shreyas Iyer and Mirabai Chanu
          </Text>
        </View>
      </View>
    </Swiper>
  );
};
