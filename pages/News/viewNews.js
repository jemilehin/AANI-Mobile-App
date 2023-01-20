import { View, SafeAreaView, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import TobBar from '../../components/topBar'
import { RequestCall } from '../../components/Modal/RequestCall'
import { LikeDisLikeNews } from '../../connection/actions/user.actions'
import { BodyParagraphs } from '../../components/utilitiyFunctions'


const ViewNews = ({ navigation, route }) => {
  const newsProps = route.params.props
  const paragraphs = newsProps.item.paragraphs
  const [comments, setComments] = useState([])
  const [likeOrDislike, setLikeOrDislike] = useState({...likeOrDislike,id: newsProps.item.id, like: false, dislike: false })
  const [loading,setLoading] = useState(false)

  const callback = (response) => {
    setLoading(false)
  }

  const errcallback = (err) => {
    setLoading(false)
  }

  return (
    <SafeAreaView style={tw`h-full`}>
      <RequestCall open={loading}/>
      <TobBar
        body={
          <View style={tw`flex-row pb-1 justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={() => navigation.goBack()} size={30} />
            <Text style={tw`my-auto font-bold text-base`}>News</Text>
            <View></View>
          </View>
        }
      />
      <ScrollView style={tw`h-5/6`}>

        <View style={tw`h-60 p-3`}>
          <Image
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={{ uri: route.params.props.image }}
          />
        </View>
        <View style={tw`px-4 py-2`}>
          <Text style={tw`text-base font-bold text-purple-800 py-1`}>
            {route.params.props.item.name}
          </Text>
          <Text style={tw`text-justify text-gray-800 py-1`}>
            {route.params.body}
          </Text>
          <Text style={tw`text-justify text-gray-400 py-1`}>{newsProps.item.likes === null ? "0" : newsProps.item.likes} Likes</Text>

          <View style={tw`border-t border-b flex-row justify-around border-gray-500 py-2`}>
            <View style={tw`flex-row pl-5`}>
              {newsProps.isLiked == 0 ? <MaterialIcon name='thumb-up-off-alt' color='purple' 
                onPress={() => {
                  setLoading(true)
                  LikeDisLikeNews({ ...likeOrDislike, like: true }, callback, errcallback)
                }} size={23} /> : <MaterialIcon name='thumb-up-alt' onPress={() => {
                  setLoading(true)
                  LikeDisLikeNews({ ...likeOrDislike, like: false })}} color='purple' size={23} />}
              <Text style={tw`my-auto px-2`}>Like</Text>
            </View>

            <View style={tw`flex-row px-5`}>
              <FontAwesome name='commenting-o' color='purple' size={23} />
              <Text style={tw`my-auto px-2`}>Comment</Text>
            </View>


          </View>
          {/* Display new comments here */}
          <View>
            {/* <CommentCard/>
          <CommentCard/>
          <CommentCard/> */}
          </View>

          {/* //Click to show More Comments */}
          {paragraphs.length < 1 ? null : <BodyParagraphs para={paragraphs} /> }
        </View>

        {/* Write Comments Here */}
        {/* <View>
          <WriteCommentCard />
        </View> */}
        {/* <View style={tw`h-20`}></View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ViewNews