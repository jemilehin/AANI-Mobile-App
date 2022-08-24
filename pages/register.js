import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import RoundedButton from "../components/button/RoundedButton";
import { RegisterAsMember } from "../connection/actions/authentication/authentication";
import { GestureDetector } from "react-native-gesture-handler";
import Animated,{ useSharedValue,useAnimatedStyle,withSpring  } from 'react-native-reanimated';

const Register = ({ navigation, route }) => {
  const newMember = route.params.user;

  const [loading, setLoading] = useState(false);
  const [sigUpData, setSignUpData] = useState({
    firstname: newMember !== undefined ? newMember["First Name"] : null,
    lastname: newMember !== undefined ? newMember["Last Name"] : null,
    email: newMember !== undefined ? newMember["email"] : "",
    password: "",
    phone: newMember !== undefined ? newMember["Phone"].toString() : "",
    graduation_year:
      newMember !== undefined ? newMember["Graduation Year"] : "",
    department: newMember !== undefined ? newMember["Department"] : "",
    chapter: "",
  });

  const offsetVertical = useSharedValue(0);

  const callback = () => {
    navigation.navigate("dashboard");
    setLoading(false);
  };

  const errCallback = (res) => {
    alert("One or more fields is empty");
    setLoading(false);
  };

  const handleSignUp = () => {
    if (setSignUpData.firstname !== null && setSignUpData.lastname !== null) {
      setLoading(true);
      RegisterAsMember(sigUpData, callback, errCallback);
    }
  };

  const styles = StyleSheet.create({
    dragup:{
      flex: 1
    }
  })

  const scrollUp = useAnimatedStyle(() => {
    return{
      transform: [{translateY: withSpring(offsetVertical.value)}]
    }
  })


  return (
    <GestureDetector>
      <Animated.View style={[styles.dragup, scrollUp]}>
        <Image
          style={tw`mx-auto my-8`}
          source={require("../images/Logo/ANNILogo.png")}
        />
        <View style={tw`mx-10`}>
          <Text style={tw`text-base font-bold`}>Register</Text>
          <Text>Input details to register</Text>
        </View>

        <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
          <View>
            <View style={tw`flex-row justify-between`}>
              <View style={tw`my-2 w-5/12 border-b`}>
                <Text>First Name</Text>
                <TextInput
                  placeholder="First Name"
                  style={tw`py-1.5`}
                  defaultValue={sigUpData.firstname}
                  onChangeText={(text) =>
                    setSignUpData({ ...sigUpData, firstname: text })
                  }
                />
              </View>
              <View style={tw`my-2 w-5/12 border-b`}>
                <Text>Last Name</Text>
                <TextInput
                  placeholder="Last Name"
                  defaultValue={sigUpData.lastname}
                  style={tw`py-1.5`}
                  onChangeText={(text) =>
                    setSignUpData({ ...sigUpData, lastname: text })
                  }
                />
              </View>
            </View>

            <View style={tw`my-2 border-b`}>
              <Text>Email Address</Text>
              <TextInput
                style={tw`py-1.5`}
                defaultValue={newMember["email"]}
                placeholder="email Address"
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, email: text })
                }
              />
            </View>
            <View style={tw`my-2 border-b`}>
              <Text>Password</Text>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, password: text })
                }
              />
            </View>
          </View>

          <View style={tw`flex-row justify-between`}>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Phone Number</Text>
              <TextInput
                placeholder="Phone Number"
                style={tw`py-1.5`}
                defaultValue={newMember["Phone"].toString()}
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, phone: text })
                }
              />
            </View>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Graduation Year</Text>
              <TextInput
                placeholder="graduation Year"
                style={tw`py-1.5`}
                defaultValue={newMember["Graduation Year"].toString()}
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, graduation_year: text })
                }
              />
            </View>
          </View>

          <View style={tw`flex-row justify-between`}>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Department</Text>
              <TextInput
                placeholder="Department"
                defaultValue={newMember["Department"]}
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, department: text })
                }
              />
            </View>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Chapter</Text>
              <TextInput
                placeholder="Chapter"
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...sigUpData, chapter: text })
                }
              />
            </View>
          </View>

          <View style={tw`mt-3`}>
            {loading ? (
              <ActivityIndicator color="purple" size="large" />
            ) : (
              <RoundedButton text="Register" pressed={() => handleSignUp()} />
            )}
          </View>

          {/* <Text>Forgot Password?</Text> */}
          <View style={tw`flex-row mx-auto py-2`}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={tw`text-green-800 font-bold`}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Register;
