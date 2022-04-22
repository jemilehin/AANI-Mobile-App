import { View, Text, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Chapterchip from '../../components/onboarding/chapterchip'

export default function Chapters({navigation}) {
    const [showState, setShowState] = useState(false);
    const data =[
        {id:1, name:'Lagos'},
        {id:2, name:'Anambra'},
        {id:3, name:'Ogun'},
        {id:4, name:'Jos'},
        {id:5, name:'Kaduna'},
        {id:6, name:'Cross River'},
    ]
  return (
    <View style={tw`h-full`}>
        <View style={tw`m-auto w-10/12 `}>
            <Text style={tw`text-lg text-center text-green-800 font-bold `}>Welcome to Alumni Assocation of National Institute</Text>  

            <Pressable onPress={()=>navigation.navigate('login')} style={tw`mx-auto my-2 px-3 flex-row py-2 bg-green-800 rounded-lg`}>
                <Text style={tw`text-white`}>Continue to National Platform  </Text>
                <Ionicon name='md-arrow-forward-circle' style={tw`my-auto`} size={22} color='white'/>
            </Pressable>
            <Text style={tw`mx-auto text-base`}>OR</Text>
            
            
            <Text style={tw`mx-auto mt-1 mb-2`}>Choose Chapter</Text>

            <Pressable onPress={()=>setShowState(!showState)} style={tw`bg-gray-200 rounded-lg flex-row justify-between px-3 py-2.5 mb-3`}>
                <Text style={tw`text-gray-700`}>Chapter</Text>
                <Ionicon size={14} name='md-caret-down-outline' style={tw`my-auto text-gray-500`}/>
            </Pressable>
            { showState ?
            <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                style={tw`mx-auto`}
                numColumns={3}
                renderItem={
                    ({item})=>(
                        <Chapterchip name={item.name} navigation= {navigation}/>
                    
                    )
                }
            /> :<></>
}                       

        </View>  

      
    </View>
  )
}