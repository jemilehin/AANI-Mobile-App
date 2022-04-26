import { View, Text, TextInput, FlatList,SafeAreaView, ScrollView, Image, StatusBar, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NewsCard from '../components/News/NewsCard'
import TobBar from '../components/topBar'
import TodoList from '../components/committee/todoList'

const Home = ({navigation, route}) => {
  const data =[
    {id:1,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:2,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:3,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:4,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:5,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
  ]

  const todoData=[
    {day:'27th', month:'May', body:'Lorem ipsum dolor sit amet, consectetur adipiscing '},
    {day:'27th', month:'May', body:'Lorem ipsum dolor sit amet, consectetur adipiscing '},
    {day:'27th', month:'May', body:'Lorem ipsum dolor sit amet, consectetur adipiscing '},
  ]

  const UpperComponent=()=>{
    return(
      <View>
          {/* <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
          <View>
            <Image style={tw`h-32 w-full rounded-lg`} source={require('../images/onboarding/network.png')}/>
          </View> */}

          <Text style={tw`text-base font-bold my-2 mt-6`}> Feeds </Text>
          <View style={tw`flex-row justify-between px-5`}>
            <Pressable onPress={()=>navigation.navigate('events')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Events</Text>
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

          <View style={tw`flex-row my-3 bg-green-800 mt-7 justify-between p-2 rounded-lg`}>
            <Text style={tw`font-bold text-white`}>News</Text>
            <Text style={tw`text-xs text-white`}>See All (500)</Text>
          </View>
          <View style={tw` flex-row mt-0 `}></View>
      </View>
    )
    }


  return (
    <SafeAreaView style={tw`mx-3`}>
      <StatusBar backgroundColor={'#365C2A'} showHideTransition='slide'/>
      {/* <Text>home</Text> */}
      <TobBar
        body={
          <View style={tw`flex-row justify-between `}>
            <Ionicon  name='menu' onPress={()=>navigation.toggleDrawer()} size={34}/>
            <Text  style={tw`my-auto px-4`}>Welcome Rasheed</Text>
            <Pressable onPress={()=>navigation.navigate('profile')}>
              <Image style={tw`h-8 w-8 rounded-full`} source={require('../images/onboarding/phone.png')}/>
            </Pressable>
            <Ionicon name='notifications' onPress={()=>navigation.navigate('notifications')} size={28} color='#365C2A'/>
          </View>
        }
      />
      {/* <ScrollView> */}
      <View style={tw`flex-row bg-green-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search'
          style={tw`w-9/12`}
        />
      </View>

      {/* <View> */}
        
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            ListFooterComponent={<View style={tw`h-32`}></View>}
            ListHeaderComponent={
              <View>
                {!route.params || route.params.type != 'committee' ?
                <View>
                  <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
                  <Image style={tw`h-32 w-full rounded-lg`} source={require('../images/onboarding/network.png')}/>
                </View>   : 
                 <TodoList data={todoData}/>}

                  
              <UpperComponent/>
              </View>
            }
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.picture}
                        head={item.title}
                        body={item.body}
                        navigation = {navigation}
                        to='viewNews'
                  />
                  )}/>
        {/* </View> */}
      {/* // </View> */}
      
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default Home