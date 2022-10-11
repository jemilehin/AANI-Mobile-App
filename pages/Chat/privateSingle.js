import { View, Text , Image, TextInput, FlatList, KeyboardAvoidingView} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

import MessageField from '../../components/chat/MessageField'
import ChatsCard from '../../components/chat/ChatsCard'
import TobBar from '../../components/topBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RequestCall } from '../../connection/actions/user.actions'


const PrivateSingle = ({navigation,route}) => {
    const data =[
        {id:1,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:2,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:3,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:4,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:5,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:6,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:7,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
      ]
    const currentuser_id = route.params.id
    const recipient = route.params.recipient
    const room_name = Number(currentuser_id) > Number(recipient.user) ? currentuser_id+'and'+recipient.user : recipient.user+'and'+currentuser_id;
    const [message,setMessage] = useState({
      send_user_id: currentuser_id,
      is_group: false
    })
    const [allmessages, setAllmessages] = useState([])
    var ws = new WebSocket('ws://rel8backend.herokuapp.com/ws/chat/aani/'+room_name+'/')
    const inputRef = useRef()

    useEffect(() => {
      RequestCall('get',null,callback,errcallback,`chat/?room_name=${room_name}`)
      ws.onopen = (e) => {
        // connection opened
        console.log('connecting',e)
      };

      ws.onmessage = (e) => {
        // a message was received
        const response = JSON.parse(e.data)
        setAllmessages(prevState => [...prevState, response])
        inputRef.current.clear()
      };

      ws.onclose = (e) => {
        console.log('err',e)
      }
    },[])

    const callback = (response) => {
      console.log(response)
      setAllmessages(response.data)
    }

    const errcallback = (err) => {
      console.log(err.response)
    }

    const sendMessage = () => {
      try{
       ws.send(JSON.stringify(message))
        setMessage({...message, message: ''})
      }
      catch(e){
        console.log('catch',e)
      }
    }


  return (
    <SafeAreaView style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw` flex-row`}>
            <Ionicon name='ios-chevron-back' size={30} onPress={()=>navigation.goBack()}/>
            {/* <Image style={tw`h-10 w-10 ml-5 rounded-full`} source={require('../../images/onboarding/phone.png')}/> */}
            <Text style={tw` mx-2 font-bold my-auto`}>{
              recipient.member_info.find(x => x.name === 'Name')['value']
            }</Text>
          </View>
        }
      />
      <KeyboardAvoidingView behavior='position' style={tw`flex bg-green-100 absolute top-5 left-0 right-0 rounded-lg mx-3 h-5/6 mt-20 justify-start `}>
      
        <FlatList
            data={allmessages}
            keyExtractor={ (item, index) => index }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatsCard 
                    // name={item.name}
                    // image={item.picture}
                    message={item.message}
                    isme={item.user__id !== undefined ? item.user__id : item.send_user_id}
                    currentuser_id={currentuser_id}
                    item={item}
            />    
                )}
        />
        </KeyboardAvoidingView>
        {/* <KeyboardAvoidingView style={tw`absolute bottom-2 left-1 w-full`} behavior='position'> */}
            <View style={tw`absolute bottom-2 left-1 w-full`}>
              <MessageField sendMessage={sendMessage}
              inputRef={inputRef}
                    setMessage={setMessage}
                    message={message}/></View>
        {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  )
}

export default PrivateSingle