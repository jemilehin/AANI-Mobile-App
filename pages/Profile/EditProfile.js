
import { View, SafeAreaView, TextInput, Image,Text, ScrollView } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'

export default function EditProfile({navigation}) {
    const [image, setImage] =useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      //   console.log(result.uri)
      }
    }
  return (
    <SafeAreaView>
        <ScrollView>
            <TobBar
                body={
                    <View style={tw`flex-row justify-between`}>
                        <Ionicon onPress={()=>navigation.goBack()} name='ios-chevron-back' size={30}/>
                        <Text style={tw`font-bold my-auto text-center`}>My Profile</Text>
                        <View style={tw`w-8`}></View>
                    </View>
                }/>
                {/* <View style={tw`bg-gray-200 mx-3 rounded-t-xl`}> */}
                <Pressable onPress={()=>pickImage()} style={tw`bg-gray-200 mx-3 rounded-t-xl`}>
                    {   image ?
                        <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={{uri:image}}/>:
                        <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={require('../../images/onboarding/phone.png')}/>
                    }
            
                        <Text style={[tw`font-bold mx-auto`,{color:'#0092ED'}]}>Click to change image</Text>
                
                </Pressable> 
                {/* </View>  */}
                <View style={tw` pt-3 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Name:</Text>
                    {/* <Text>Bolaji Johnson</Text> */}
                    <TextInput
                        placeholder='Name'  
                        style={tw`border-b border-gray-600`}
                    />
                </View>
                <View style={tw` mt-3 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Email Address:</Text>
                    {/* <Text>BolajiJohnson@gmail.com </Text> */}
                    <TextInput
                        placeholder='Email Address'  
                        style={tw`border-b border-gray-600`}
                    />
                </View>

                <View style={tw` mt-3  py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Address:</Text>
                    <Text>No 20, Kings Avenue, Ikoyi, Lagos.</Text>
                    <TextInput
                        placeholder='Address'  
                        style={tw`border-b border-gray-600`}
                    />
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Department:</Text>
                        <TextInput
                        placeholder='Department'  
                        style={tw`border-b border-gray-600`}
                    />
                    </View>
                    <View style={tw` mt-3 w-4/12 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Year:</Text>
                        {/* <Text>2019</Text> */}
                        <TextInput
                        placeholder='Year'  
                        style={tw`border-b border-gray-600`}
                    />
                    </View>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Occupation:</Text>
                        {/* <Text>Accountant</Text> */}
                        <TextInput
                        placeholder='Account'  
                        style={tw`border-b border-gray-600`}
                    />
                    </View>
                    <View style={tw` mt-3 w-4/12 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Phone Number:</Text>
                        <TextInput
                        placeholder='Phone'  
                        keyboardType='phone-pad'
                        style={tw`border-b border-gray-600`}
                    />
                    </View>
                </View>

                <View style={tw`w-11/12 mx-5 my-3`}>
                    <Text style={tw`text-green-900 pb-1`}>Bio:</Text>
                    {/* <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad 
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    </Text> */}
                    <TextInput
                        placeholder='Bio'  
                        style={tw`border border-gray-600 px-2 py-1`}
                        numberOfLines={3}
                        multiline={true}
                    />
                </View>
                <View style={tw`w-full mx-5 pb-1 mt-3`}>
                    <Text style={tw`text-green-900`}>Pictures</Text>
                </View>
                <View style={tw`flex-row mx-5 justify-between`}>
                    
                    <Image  style={tw`h-20 w-20 rounded-lg mx-1`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                </View>
                <View style={tw`h-20 w-20 border rounded-lg mx-5 my-2`}></View>

                <View style={tw`mt-4 mx-5`}>
                    <RoundedButton text='Update'/>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}