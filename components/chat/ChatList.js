import { View, Text, Image,Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ChatList = (props) => {
  return (
    <Pressable onPress={()=>props.navigation.navigate('private-single')} style={tw`flex-row my-2 py-1 w-9/12 `}>
      { props.image ?
      <Image style={tw`h-10  w-10 ml-2 rounded-full`} source={props.image}/>
      :''
    }
      <View style={tw`border-gray-300 w-full border-b pb-2 px-2`}> 
          <Text style={tw`font-bold`}>{props.name}</Text>
          <Text numberOfLines={1} style={tw`my-auto`}>{props.message}</Text>
      </View>
      <Text style={tw`my-auto text-xs text-gray-500`}>3:30</Text>
    </Pressable>
  )
}

export default ChatList