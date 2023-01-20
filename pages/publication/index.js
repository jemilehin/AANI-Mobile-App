import { View, SafeAreaView, Text, FlatList, TextInput, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import NewsCard from '../../components/News/NewsCard'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TobBar from '../../components/topBar'
import { GetPublications } from '../../connection/actions/user.actions'
import { LoadingData } from '../../components/utilitiyFunctions'

const Publication = ({navigation}) => {
  const [data, setData]= useState(null)
  const [loading,setLoad] = useState(true)

  useEffect(()=>{
    GetPublications(callback)
  }, [data])

  const callback=(res)=>{
    setLoad(false)
    setData(res.data)
  }

  return (
    <SafeAreaView style={tw`px-2`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Publications</Text>
              <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row mx-4 justify-between bg-green-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='#365C2A'/>
      </View>
      <View style={tw` flex-row mt-0 justify-between`}>
        {data !== null ? <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
                  <NewsCard
                    item={item}
                    image={item.image}
                    head={item.name}
                    // body={item.paragraphs}
                    navigation={navigation}
                    to='viewPublication'
                  />
                  )}/> : <LoadingData Loading={loading} text="No publications" />}
        </View>
    </SafeAreaView>
  )
}

export default Publication