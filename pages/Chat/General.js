import { View, Text , TextInput, FlatList, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MessageField from '../../components/chat/MessageField'
import ChatsCard from '../../components/chat/ChatsCard'

const General = () => {
    const data =[
        {id:1,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:2,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:3,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:4,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:5,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:6,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        
      ]
  return (
    <View style={tw`h-full`}>
      <KeyboardAvoidingView behavior='height' style={tw`flex bg-purple-50 rounded-lg mx-3 h-full justify-end `}>
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatsCard 
                    name={item.name}
                    image={item.picture}
                    message={item.message}
                    time={item.time}
                    isme={item.isme}
            />    
                )}
        />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior='padding'>
            <MessageField/> 
        </KeyboardAvoidingView>
    </View>
  )
}

export default General