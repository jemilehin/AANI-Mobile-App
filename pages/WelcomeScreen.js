import { Image, ImageBackground, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import RoundedButton from "../components/button/RoundedButton";

import bg_image from '../images/bgimage.png'

const AppWelcomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
        <View style={[tw`flex-auto`,{backgroundColor: "#EBEBEB"}]}>
          <Image
            style={tw`m-auto`}
            source={require("../images/Logo/AANI-Splash.png")}
          />
        </View>
      <View style={tw`my-10`}>
        <View style={tw`px-4 mb-3`}>
          <Text style={[tw`text-4xl font-bold`,{color: "#365C2A"}]}>Lagos Chapter</Text>
          <Text style={tw`text-base tracking-wide`}>Already have an account?</Text>
        </View>
        <View style={tw`px-4 `}>
          <RoundedButton
            text="Login"
            style={tw`p-4`}
            textStyle={tw`text-xl font-semibold`}
            pressed={() => navigation.navigate("login")}
          />
          <RoundedButton
            text="Verify"
            borderWidth={2}
            borderColor="#365C2A"
            bgColor="transparent"
            style={tw`p-4`}
            textStyle={tw`text-xl font-semibold`}
            textColor="#365C2A"
            pressed={() => navigation.navigate("verification")}
          />
        </View>
      </View>
    </View>
  );
};

export default AppWelcomeScreen;
