import { View, Text, FlatList, Pressable, Modal,ActivityIndicator,Keyboard, ScrollView, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState,useCallback, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import Ionicon from "react-native-vector-icons/AntDesign";
// import Chapterchip from "../../components/onboarding/chapterchip";
import { TextInput } from "react-native-gesture-handler";
import RoundedButton from "../../components/button/RoundedButton";
import { ValidateMember } from "../../connection/actions/authentication/authentication";
import ModalTemplate from "../../components/Modal";

export default function Chapters({ navigation }) {
  const [showState, setShowState] = useState(false);
  const [email, setEmail] = useState({});
  const [mem, setMem] = useState({});
  const [show, setShow] = useState(false);

  const inputEl = useRef(null)

  const callback = (response) => {
    setShowState(false);
    if (response !== null) {
      setMem(response);
      setShow(true);
    }else{
      alert("Details does not Exist.")
    }
  }

  const errCallback = (err) => {
    setShowState(false);
    alert("Email does not exist:check if email is correct.")
  };

  const validateMemberByEmail = () => {
    if (email.email !== undefined) {
      setShowState(true);
      ValidateMember(email, callback, errCallback);
    }
  };

  let memObjArr = []
  for (const key in mem) {
    memObjArr.push({ name: key, value: mem[key] });
  }

  const ModalBody = ({arr,user,setUser}) => {
    let arrMem = arr;

    const handleInputSubmit = useCallback((ev,prop,name,index) => {
      const input =  ev.nativeEvent.text;
      user[name] = input
      for(const key in arrMem[index]){
        if(key === 'prop'){
          arrMem[index][key] = input
        }
      }
    },[]);
  
    return (
      <ScrollView style={tw`flex-1`}>
      <View style={tw`flex-1 bg-red-50 py-3 px-4`}>
        <View style={tw`flex flex-row justify-end mb-5`}>
          <Ionicon
            name="closesquareo"
            size={30}
            onPress={() => setShow(false)}
          />
        </View>
        <Text style={tw`text-4xl font-bold tracking-wide`}>Verify Details</Text>
        <Text style={tw`text-sm`}>
          Check details is correct before continue.
        </Text>
        <View style={tw`flex-row justify-between my-4`}>
          <View style={tw`w-full`}>
            {arrMem.map((val,i) => (
              <View style={tw`my-1 w-11/12 border-b`} key={i}>
                <Text style={tw`font-light`}>{val.name}</Text>
                <TextInput
                  ref={inputEl}
                  defaultValue={val.value === null || val.value === "NA" ? `Type ${val.name}` : val.value.toString()}
                  style={tw`py-1.5 font-semibold`}
                  onEndEditing={(e)=> handleInputSubmit(e,val.prop,val.name,i) }
                />
              </View>
            ))}
          </View>
        </View>
        <View style={tw`mx-auto w-6/12 mt-5`}>
          <RoundedButton
            text="Continue"
            pressed={() => {
              setShow(false)
              navigation.navigate("register", { user: user })
            }}
          />
        </View>
      </View>
      </ScrollView>
    );
  };

  return (
    <View style={tw`h-full`}>
      <ModalTemplate visible={show} body={<ModalBody arr={memObjArr} user={mem} setUser={setMem} />} />
      <Image style={tw`h-24 m-auto`} resizeMode='contain' source={require('../../images/Logo/AANI-Splash.png')}/>  
      <View style={tw` m-auto w-10/12 `}>
        <Text style={tw`text-lg text-center text-green-800 font-bold `}>
          Welcome to Alumni Assocation of National Institute{'\n'}(Lagos Chapter)
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

          {showState ? <ActivityIndicator color='purple' size='large' /> : <RoundedButton
            text="Submit"
            pressed={() =>
              // navigation.navigate("login")
              validateMemberByEmail()
            }
          />}
        </View>
        <View style={tw`flex-row mx-auto py-2`}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={tw`text-green-800 font-bold`}> Login</Text>
            </TouchableOpacity>
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
