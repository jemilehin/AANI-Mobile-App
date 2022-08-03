import { View, SafeAreaView,Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import TobBar from '../../components/topBar'

const ViewNews = ({navigation, route}) => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row pb-1 justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>News</Text>
            <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`h-5/6`}>
      
        <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>{route.params.item.name}</Text>
            <Text style={tw`text-justify text-gray-800 py-1`}>
            {route.params.item.body}
            </Text>
            <Text style={tw`text-justify text-gray-400 py-1`}>5 Likes</Text>

        <View style={tw`border-t border-b flex-row justify-around border-gray-500 py-2`}>
          <View style={tw`flex-row pl-5`}>
            <MaterialIcon name='thumb-up-off-alt' color='purple' size={23}/>
            <Text style={tw`my-auto px-2`}>Like</Text>
          </View>

          <View style={tw`flex-row px-5`}>
            <FontAwesome name='commenting-o' color='purple' size={23}/>
            <Text style={tw`my-auto px-2`}>Like</Text>
          </View>

          
        </View>
        <View>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </View>

        {/* //View More */}
        <Text style={tw`text-purple-800 font-bold`}>View 3 More Comments</Text>
        </View>  
        <View>
          <WriteCommentCard/>
        </View>
        {/* <View style={tw`h-20`}></View> */}
    </ScrollView>
    </SafeAreaView>
  )
}

export default ViewNews