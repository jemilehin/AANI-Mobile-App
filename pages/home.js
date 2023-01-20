import { View, Text, TextInput, FlatList,SafeAreaView, ScrollView,ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NewsCard from '../components/News/NewsCard'
import TobBar from '../components/topBar'
import TodoList from '../components/committee/todoList'
import {
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { GetGallery, GetNews, GetPublications, LikeDisLikeNews, GetProfile, MultipleRequest } from '../connection/actions/user.actions'
import localStorage from "react-native-sync-localstorage";
import { RequestCall } from '../components/Modal/RequestCall'
import api from '../connection/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation, route}) => {

  const [news, setNews] = useState(null)
  const [publications,setPublications] = useState([]);
  const [gallery,setGallery] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [name,setName] = useState({})
  const [open,setOpen] = useState(false)
  const [load,setLoad] = useState(undefined)
  const [newsTotalLenght, setNewsLenght] = useState(0)
  const [publicationsTotalLenght,setPublicationsLenght] = useState(0)

  const offsetHorizontal = useSharedValue(0);
  let is_load = route.params === undefined ? false : route.params.is_load;
  let query = route.params === undefined ? null : route.params.query;
  let value = route.params === undefined ? 0 : route.params.val

  const arr = query !== null ? [
    api.get(`tenant/aani/tenant/news/newsview/get_news/?${query.type}=${query.value}`),
    api.get(`tenant/aani/tenant/publication/getyourpublication/?${query.type}=${query.value}`)
  ] : []

  const mErrCallback = (res) => {
    setOpen(false)
    alert(res)
  }

  const mCallback = (res) => {
    setOpen(false)
  }

  useEffect(() => {
    if(is_load){
      setOpen(true)
      MultipleRequest(arr,mCallback,mErrCallback)
    }
  }, [value])

  useEffect(()=>{
    setRefresh(!refresh);
    const unsubscribe = navigation.addListener('focus', () => {
        GetNews(callback)
        GetPublications(pCallback)
        GetGallery(false, gcallback,gerrcallback)
        GetProfile(profileCall)
    });
    return unsubscribe;
  },[])

  
  const profileCall =(res) => {
    let index = res.more_info.length > 0 ? res.more_info.find(i => i.name === "Name") : null
    let user_email = res.more_info.find(i => i.name === 'email')['value']
    setName(index)
    localStorage.setItem('user_email', user_email)
    localStorage.setItem('currentUser', res)
  }

  const gcallback = (res) => {
    const reverseArr = res.data.reverse()
    setGallery(reverseArr)
  }

  const gerrcallback = (res) => {
    console.log(res.response)
  }

  // const errcallback = (res) => {
  //   setOpen(false)
  //   alert(res)
  // }

  const likeNews=(data) =>{
    LikeDisLikeNews({id: data.id, like:'true', dislike:'false'})
  }

  const callback=(res)=>{
    setNewsLenght(res.data.length)
    setNews(res.data.slice(2))
  }
  const pCallback= (res) => {
    setPublicationsLenght(res.data.length)
    setPublications(res.data.slice(2))
  }

  const scrollHorizontal = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetHorizontal.value }],
    };
  }, []);
  const glength = gallery.length;

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event,context) => {
      context.translateX = offsetHorizontal.value
    },
    onActive: (event,context) => {
        offsetHorizontal.value = event.translationX + context.translateX
    },
    onEnd: (event,context) => {
      const end = (-332 * glength) + 332
      if(offsetHorizontal.value > 0){
        offsetHorizontal.value = withSpring(0)
      }
      if(end > offsetHorizontal.value){
        offsetHorizontal.value = withSpring(end)
      }
    }
  })


  const UpperComponent=(props)=>{
    return(
      <View>
        {props.show ? <View>
          <Text style={tw`text-base font-bold my-2 mt-6`}> Feeds </Text>
          <View style={tw`flex-row justify-between px-5`}>
            <Pressable onPress={()=>navigation.navigate('events')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Events</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('meetings')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Meetings</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('gallery')}>
              <FontAwesome name='photo' style={tw`text-center pb-2`} color='#C4C4C4' size={30} />
              <Text style={tw`text-xs`}>Gallery</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('publication')}>
              <Ionicon name='book' style={tw`text-center pb-2`} color='#C4C4C4' size={30}/>
              <Text style={tw`text-xs`}>Publications</Text>
            </Pressable>
          </View>
          </View> : null}

          <View style={tw`flex-row my-3 bg-green-800 mt-7 justify-between p-2 rounded-lg`}>
            <Text style={tw`font-bold text-white`}>{props.textTitle}</Text>
            <Text style={tw`text-xs text-white`}>See All ({props.count})</Text>
          </View>
          <View style={tw` flex-row mt-0 `}></View>
      </View>
    )
    }


  return (
    <SafeAreaView style={tw`mx-3`}>
      <RequestCall open={open} />
      <StatusBar backgroundColor={'#365C2A'} showHideTransition='slide'/>
      {/* <Text>home</Text> */}
      <TobBar
        body={
          <View style={tw`flex-row justify-between `}>
            <View>
              <Ionicon  name='menu' onPress={()=>navigation.toggleDrawer()} size={34}/>
            </View>
            <View style={{flexGrow: 2}}></View>
            <Text  style={tw`my-auto px-4`}>Welcome {name.value}</Text>
            <Pressable style={{flexGrow: 0.1}} onPress={()=>navigation.navigate('profile')}>
              <Image style={tw`h-8 w-8 rounded-full`} source={require('../images/user.png')}/>
            </Pressable>
            <Ionicon name='notifications' onPress={()=>navigation.navigate('notifications')} size={28} color='#365C2A'/>
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`flex-row bg-green-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search'
          style={tw`w-9/12`}
        />
      </View>

      {/* <View> */}
        
        <FlatList
            data={news}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            // ListFooterComponent={<View style={tw`h-32`}></View>}
            ListHeaderComponent={
              <View>
                {!route.params || route.params.query.type != 'is_exco' ?
                <>
                    <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
                  <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[tw`flex-row`,scrollHorizontal]}>
                      {gallery.map((image,index) => <Image resizeMode='stretch' resizeMethod='auto' key={index} style={tw`h-56 mx-3 w-11/12 rounded-lg`} source={{uri: image.photo_file}}/>)}
                    </Animated.View>
                  </PanGestureHandler>
                  </>
                 : 
                 null
                 }

                 {/* feeds: quick links */}
                <UpperComponent textTitle='News' show={true} count={news !== null ? newsTotalLenght : 0}/>
              </View>
            }
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.image}
                        head={item.name}
                        // body={item.body}
                        item={item}
                        navigation = {navigation}
                        isLiked={item.likes}
                        pressLike={()=>likeNews(item)}
                        pressDisLike={()=>alert('like')}
                        to='viewNews'
                  />
                  )}/>

        <FlatList
            data={publications}
            // style={{borderStyle: 'solid', borderWidth: 1,}}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            ListFooterComponent={<View style={tw`h-12`}></View>}
            ListHeaderComponent={
              <View>
                {/* {!route.params || route.params.type != 'committee' ?
                <View>
                  <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
                  <Image style={tw`h-32 w-full rounded-lg`} source={require('../images/onboarding/network.png')}/>
                </View> 
                 : 
                 <TodoList data={todoData}/>} */}

                 {/* feeds: quick links */}
                <UpperComponent textTitle='Publications' show={false} count={publications !== null ? publicationsTotalLenght : 0}/>
              </View>
            }
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.image}
                        head={item.name}
                        // body={item.body}
                        item={item}
                        navigation = {navigation}
                        isLiked={item.likes}
                        pressLike={()=>likeNews(item)}
                        pressDisLike={()=>alert('like')}
                        to='viewPublication'
                  />
                  )}/>
        {/* </View> */}
      {/* // </View> */}
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home