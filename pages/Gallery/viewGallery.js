import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ViewGallery = () => {
  return (
    <View style={tw`h-full`}>
        <View style={tw`h-1/2 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>Monthly Exco Meeting</Text>
            <Text style={tw`text-justify text-purple-800 py-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et l</Text>
        </View>  
      
    </View>
  )
}

export default ViewGallery