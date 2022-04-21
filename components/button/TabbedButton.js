import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const TabbedButton = (props) => {
  return (
    <TouchableOpacity 
        style={props.index==props.selected ? tw`bg-purple-900 py-2.5 my-2 px-5 rounded-full` : tw` py-2.5 my-2 rounded-full`} 
        onPress={props.pressed}
    >
      <Text style={props.index==props.selected ? tw`text-white text-center` : tw`text-purple-900 font-bold text-center`}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TabbedButton