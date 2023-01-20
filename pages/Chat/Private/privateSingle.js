import { View, Text , Image, FlatList, KeyboardAvoidingView,Keyboard} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'

import MessageField from '../../../components/chat/MessageField'
import ChatsCard from '../../../components/chat/ChatsCard'
import TobBar from '../../../components/topBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RequestCall } from '../../../connection/actions/user.actions'
import { ScrollView } from 'react-native-gesture-handler'


const PrivateSingle = ({navigation,route}) => {
    const currentuser_id = route.params.id
    const recipient = route.params.recipient
    const room_name = Number(currentuser_id) > Number(recipient.user) ? currentuser_id+'and'+recipient.user : recipient.user+'and'+currentuser_id;
    const [message,setMessage] = useState({
      send_user_id: currentuser_id,
      is_group: false
    })
    const [allmessages, setAllmessages] = useState([])
    const [ws,setWs] = useState(null)
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    const url = new WebSocket(`wss://aani-backend-production.up.railway.app/ws/chat/aani/${room_name}/`)
    


    const inputRef = useRef()
    const flatListRef = useRef()

    useEffect(() => {
      setWs(url)
      RequestCall('get',null,callback,errcallback,`chat/?room_name=${room_name}`)
      const keyboardListener = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
        flatListRef.current.scrollToEnd({animated: false})
      });
  
      const removeKeyboardListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setKeyboardStatus(false);
          flatListRef.current.scrollToEnd({animated: false})
        }
      );
  
      return () => {
        keyboardListener.remove();
        removeKeyboardListener.remove();
      };
    },[])

    useEffect(() => {
      if(ws !== null){
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
      }
    },[allmessages])

    const callback = (response) => {
      setAllmessages(response.data)
      flatListRef.current.scrollToEnd({animated: false})
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
    <SafeAreaView style={tw`h-full bg-green-100`}>
      <TobBar
        body={
          <View style={tw` flex-row`}>
            <Ionicon name='ios-chevron-back' size={30} onPress={()=>navigation.goBack()}/>
            {/* <Image style={tw`h-10 w-10 ml-5 rounded-full`} source={require('../../images/onboarding/phone.png')}/> */}
            <Text style={tw` mx-2 font-bold my-auto`}>
              {
              recipient.member_info.find(x => x.name === 'Name')['value']
            }</Text>
          </View>
        }
      />
      <ScrollView 
        ref={flatListRef}
        onContentSizeChange={()=> 
          setTimeout(() => flatListRef.current.scrollToEnd({animated: false}), 200)}
      >
        {allmessages.length>0 ?
          allmessages.map((item,index)=> (
            <ChatsCard 
                    // name={item.name}
                    // image={item.picture}
                    key={index}
                    message={item.message}
                    isme={item.user__id !== undefined ? item.user__id : item.send_user_id}
                    currentuser_id={currentuser_id}
                    item={item} />
          )) : null
        }
      </ScrollView>
       {/* <FlatList
            ref={flatListRef}
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
                // getItemLayout={(_, index) => (
                //   {length: allmessages.length, offset: allmessages.length * index, index}
                // )}
        /> */}
        <KeyboardAvoidingView behavior='position' contentContainerStyle={tw`top-0`}>
        <View style={tw`left-1 w-full`}>
              <MessageField 
              sendMessage={sendMessage}
              inputRef={inputRef}
              setMessage={setMessage}
              message={message}
              />
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PrivateSingle