import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'


const MessageField = () => {
  return (
    <View style={tw` mx-1 -my-1 py-3 `}>
        <View style={tw`bg-gray-100 flex-row rounded-xl my-auto w-11/12 mx-2 p-3`}>
        {/* <Text>WriteCommentCard</Text> */}
        <Ionicon name='attach' size={25}/>
        <TextInput placeholder='Write Comment' multiline style={tw`w-10/12`}/>
        <Ionicon name='md-send' size={25} style={tw`text-purple-700`}/>
    </View>
</View>
  )
}

export default MessageField