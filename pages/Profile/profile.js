
import { View, SafeAreaView, Image,Text, ScrollView } from 'react-native'
import React from 'react'
import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../../components/button/RoundedButton'

export default function Profile({navigation}) {
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
                <View style={tw`bg-gray-200 mx-3 rounded-t-xl`}>
                    <Image  style={tw`h-28 w-28 rounded-full mx-auto my-2`} resizeMode='cover' source={require('../../images/onboarding/phone.png')}/>
                </View> 
                <View style={tw` pt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Name:</Text>
                    <Text>Bolaji Johnson</Text>
                </View>
                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Email Address:</Text>
                    <Text>BolajiJohnson@gmail.com </Text>
                </View>

                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={tw`text-green-900 pb-1`}>Address:</Text>
                    <Text>No 20, Kings Avenue, Ikoyi, Lagos.</Text>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Department:</Text>
                        <Text>Accounting</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Year:</Text>
                        <Text>2019</Text>
                    </View>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Occupation:</Text>
                        <Text>Accountant</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={tw`text-green-900 pb-1`}>Phone Number:</Text>
                        <Text>08023793847</Text>
                    </View>
                </View>

                <View style={tw`w-11/12 mx-5 my-3`}>
                    <Text style={tw`text-green-900 pb-1`}>Bio:</Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad 
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    </Text>
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
                <View style={tw`mt-4 mx-5`}>
                    <RoundedButton 
                        text='Edit'
                        pressed={()=>navigation.navigate('editProfile')}
                    />
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}