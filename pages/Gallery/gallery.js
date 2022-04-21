import { View,FlatList, SafeAreaView,TextInput, Text, Pressable } from 'react-native'
import React from 'react'
import GalleryCard from '../../components/Gallery/GalleryCard'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'


const Gallery = ({navigation}) => {
  const data =[
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
  ]
  return (
    <SafeAreaView style={tw`px-4`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
    />
      <View style={tw`flex-row mx-4 justify-between bg-purple-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      {/* <Galler */}
      <FlatList
        data={data}
        keyExtractor={ (item, index) => item.id }
        // contentContainerStyle={styles.container}
        numColumns={2}
        // style={tw`bg-red-300 w-full`}
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        // contentOffset={1}
        renderItem={
            ({item}) => (
              <Pressable style={tw`w-1/2`}  onPress={()=>navigation.navigate('viewGallery')}>
                <GalleryCard
                  image={item.image}
                  head={item.title}
                  navigation ={navigation}
                />
              </Pressable>)}
      />
    </SafeAreaView>
  )
}

export default Gallery