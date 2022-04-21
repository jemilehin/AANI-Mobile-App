import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames';
import RoundedButton from '../../components/button/RoundedButton';


export default function Elections({navigation}) {
  return (
    <View style={tw`h-full`}>
        <View style={tw`m-auto`}>
            <Ionicon name='heart-dislike-circle' style={tw`text-gray-400 text-center`} size={70} />
            <Text style={tw`text-gray-500 pb-3`}>Contact your admin to Subscribe for Elections </Text>
          <View style={tw`mx-5`}>
            <RoundedButton text='Back to Home' pressed={()=>navigation.navigate('HomeScreen')}/>
          </View>
        </View>
     </View>
  );
}
