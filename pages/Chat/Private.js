import { View, Text, FlatList } from 'react-native'
import React,{useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ChatsCard from '../../components/chat/ChatsCard'
import ChatList from '../../components/chat/ChatList'

const Private = ({navigation}) => {
  const [chats, setChats] = useState([])

    // const data =[
    //     {id:1,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
    //     {id:2,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
    //     {id:3,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
    //     {id:4,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
    //     {id:5,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
    //     {id:6,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
    //     {id:7,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
    //     {id:8,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
    //   ]
  return (
    <View style={tw`bg-white`}>
        <View style={tw`flex-row  px-2 py-2 bg-green-100 rounded-lg mx-5 my-2`}>
            <Ionicon  name='search' style={tw`text-gray-500`} size={24}/>
            <Text  style={tw`my-auto px-4 text-gray-500`}>Search</Text>
          </View>
      <FlatList
            data={chats}
            keyExtractor={ (item, index) => item.id }
            
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatList 
              name={item.name}
              image={item.picture}
              message={item.message}
              time={item.time}
              navigation={navigation}
            />   
                )}
        />
    </View>
  )
}

export default Private