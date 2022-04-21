import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'

export default function SplashScreen({navigation}) {

    useEffect(()=>{
        setTimeout(
            function() {
            //  setisChecked(id)
            navigation.navigate('home')
            }, 200);
    },[])
  return (
    <View style={tw` h-full`}>
      <Image style={tw`h-24 m-auto`} resizeMode='contain' source={require('../images/Logo/AANI-Splash.png')}/>  
      {/* <Text>SplashScreen</Text> */}
      <View style={tw`mx-auto mb-5`}>
        <ActivityIndicator style={tw`absolute bottom-0`} size={30} color='#365C2A' />
      </View>
    </View>
  )
}