import { View, Text , Image, TextInput, FlatList, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

import MessageField from '../../components/chat/MessageField'
import ChatsCard from '../../components/chat/ChatsCard'
import TobBar from '../../components/topBar'
import { SafeAreaView } from 'react-native-safe-area-context'


const PrivateSingle = ({navigation}) => {
    const data =[
        {id:1,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:2,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:3,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:4,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:5,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:6,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:7,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        
      ]
  return (
    <SafeAreaView style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw` flex-row`}>
            <Ionicon name='ios-chevron-back' size={30} onPress={()=>navigation.goBack()}/>
            <Image style={tw`h-10 w-10 ml-5 rounded-full`} source={require('../../images/onboarding/phone.png')}/>
            <Text style={tw` mx-2 font-bold my-auto`}>Ayinde Micheal</Text>
          </View>
        }
      />
      <KeyboardAvoidingView behavior='position' style={tw`flex bg-green-100 absolute top-5 left-0 right-0 rounded-lg mx-3 h-5/6 mt-20 justify-start `}>
      
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatsCard 
                    // name={item.name}
                    // image={item.picture}
                    message={item.message}
                    time={item.time}
                    isme={item.isme}
            />    
                )}
        />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={tw`absolute bottom-2 left-1 w-full`} behavior='position'>
            <MessageField/> 
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PrivateSingle