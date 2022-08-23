import { View, Text, FlatList, Pressable, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import Ionicon from "react-native-vector-icons/Ionicons";
import Chapterchip from "../../components/onboarding/chapterchip";
import { TextInput } from "react-native-gesture-handler";
import RoundedButton from "../../components/button/RoundedButton";
import { ValidateMember } from "../../connection/actions/authentication/authentication";
import ModalTemplate from "../../components/Modal";

export default function Chapters({ navigation }) {
  const [showState, setShowState] = useState(false);
  const [email, setEmail] = useState({});
  const [mem, setMem] = useState();
  const [show, setShow] = useState(false);
  //   const data = [
  //     { id: 1, name: "Lagos" },
  //     { id: 2, name: "Anambra" },
  //     { id: 3, name: "Ogun" },
  //     { id: 4, name: "Jos" },
  //     { id: 5, name: "Kaduna" },
  //     { id: 6, name: "Cross River" },
  //   ];

  const callback = (response) => {
    setMem(response);
    setShow(true);
  };

  const errCallback = (err) => {
    console.log(err);
  };

  const validateMemberByEmail = () => {
    ValidateMember(email, callback, errCallback);
  };

  const ModalBody = ({mem}) => {
    return (
      <View style={tw`flex-1 bg-red-50 pt-14 px-4`}>
        <Text style={tw`text-4xl font-bold tracking-wide`}>Verify Details</Text>
        <Text style={tw`text-sm`}>Check details is correct before continue.</Text>
        <View style={tw`flex-row justify-between my-8`}>
          <View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>name:</Text>
              {/* <Text style={tw`font-semibold`}>Temidayo</Text> */}
              <Text style={tw`font-semibold`}>{mem['First Name']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>Surname:</Text>
              {/* <Text style={tw`font-semibold`}>Jemilehin</Text> */}
              <Text style={tw`font-semibold`}>{mem['Surname']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>email:</Text>
              {/* <Text style={tw`font-semibold`}>Jemilehin@gmail.com</Text> */}
              <Text style={tw`font-semibold`}>{mem['email']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>age:</Text>
              {/* <Text style={tw`font-semibold`}>30</Text> */}
              <Text style={tw`font-semibold`}>{mem['age']}</Text>
            </View>
          </View>
          <View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>name:</Text>
              {/* <Text style={tw`font-semibold`}>Temidayo</Text> */}
              <Text style={tw`font-semibold`}>{mem['First Name']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>Surname:</Text>
              {/* <Text style={tw`font-semibold`}>Jemilehin</Text> */}
              <Text style={tw`font-semibold`}>{mem['Surname']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>email:</Text>
              {/* <Text style={tw`font-semibold`}>Jemilehin@gmail.com</Text> */}
              <Text style={tw`font-semibold`}>{mem['email']}</Text>
            </View>
            <View style={tw`my-2`}>
              <Text style={tw`font-light`}>age:</Text>
              {/* <Text style={tw`font-semibold`}>30</Text> */}
              <Text style={tw`font-semibold`}>{mem['age']}</Text>
            </View>
          </View>
        </View>
        <View style={tw`mx-auto w-6/12 mt-8`}>
            <RoundedButton text="Continue"  pressed={() => navigation.navigate('register', {user: mem})}/>
        </View>
      </View>
    );
  };

  return (
    <View style={tw`h-full`}>
      <ModalTemplate visible={show} body={<ModalBody mem={mem} />} />
      <View style={tw`m-auto w-10/12 `}>
        <Text style={tw`text-lg text-center text-green-800 font-bold `}>
          Welcome to Alumni Assocation of National Institute (Lagos Chapter)
        </Text>

        {/* <Pressable onPress={()=>navigation.navigate('login')} style={tw`mx-auto my-2 px-3 flex-row py-2 bg-green-800 rounded-lg`}>
                <Text style={tw`text-white`}>Continue to AANI Lagos Platform  </Text>
                <Ionicon name='md-arrow-forward-circle' style={tw`my-auto`} size={22} color='white'/>
            </Pressable> */}
        {/* <Text style={tw`mx-auto text-base`}>OR</Text> */}

        <Text style={tw`mx-auto mt-5 mb-2`}>Validate Your Details</Text>
        {/* <Text style={tw`mx-auto mt-1 mb-2`}>Got to Other Chapters</Text> */}

        <View style={tw`mt-5 mx-4 py-6 bg-white shadow-sm rounded-3xl px-5`}>
          <View>
            <View style={tw`my-2.5 border-b`}>
              <Text>Email Address</Text>
              <TextInput
                placeholder="email Address"
                onChangeText={(text) => setEmail({ ...email, email: text })}
              />
            </View>
          </View>

          <RoundedButton
            text="Submit"
            pressed={() =>
              // navigation.navigate("login")
              validateMemberByEmail()
            }
          />
        </View>

        {/* <Pressable onPress={()=>setShowState(!showState)} style={tw`bg-gray-200 rounded-lg flex-row justify-between px-3 py-2.5 mb-3`}>
                <Text style={tw`text-gray-700`}>Chapter</Text>
                {!showState ? <Ionicon size={14} name='md-caret-down-outline' style={tw`my-auto text-gray-500`}/>: <Ionicon size={14} name='md-caret-up-outline' style={tw`my-auto text-gray-500`}/>}
            </Pressable> */}
        {/* { showState ?
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                style={tw`mx-auto`}
                numColumns={3}
                renderItem={
                    ({item})=>(
                        <Chapterchip name={item.name} navigation= {navigation}/>
                    
                    )
                }
            /> :<></>
}                        */}
      </View>
    </View>
  );
}
