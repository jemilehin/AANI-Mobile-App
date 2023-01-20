import { View,FlatList, SafeAreaView,TextInput, Text, Pressable, ActivityIndicator } from 'react-native'
import React, {Component, useEffect, useState} from 'react'
import GalleryCard from '../../components/Gallery/GalleryCard'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'
import { GetGallery } from '../../connection/actions/user.actions'
import { LoadingData } from '../../components/utilitiyFunctions'


// const Gallery = ({navigation}) => {

class Gallery extends Component{

  constructor (props){
    super(props);
    this.state = {
      gallery: [],
      referesh: false,
      currentPage: null,
      totalPage: null,
      loading: true
    }
  }

  componentDidMount(){
    this.FetchData()
  }

  FetchData = () => {
    const unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({gallery: [],currentPage: null,totalPage: null,
        loading: true})
      GetGallery(false, this.callback,this.errcallback)
    });
    
    return unsubscribe;
  }

  callback = (res) =>{
      this.setState({
        referesh : false,
        gallery: [...this.state.gallery, ...res.data],
        currentPage: Number(res.current_page),
        totalPage: res.pages_number,
        loading: false
      })
    }

    errcallback = (err) => {
        this.setState({refresh: false, loading: false})
    }

  handleRefresh = () => {
     setTimeout(() => 
      { if(this.state.currentPage < this.state.totalPage){
        this.setState({
          referesh : true,
          currentPage: Number(this.state.currentPage) + 1,
        })
        GetGallery(false,this.callback, this.errcallback,`page=${this.state.currentPage}`)
      }}, 500)
  }
  
  
  render(){
  return (
    <SafeAreaView style={tw`px-4 h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>this.props.navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <Ionicon name='md-notifications' onPress={()=>this.props.navigation.navigate('notifications')} style={tw`text-green-800`} size={30}/>
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
      {/* <Gallery */}
      {this.state.gallery.length > 0 ? <FlatList
        data={this.state.gallery}
        keyExtractor={ (item, index) => item.id }
        refreshing={this.state.referesh}
        onEndReachedThreshold={0.01}
        onEndReached={this.handleRefresh}
        ListFooterComponent={this.state.referesh ? <ActivityIndicator /> : null}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={
            ({item}) => (
              <Pressable style={tw`w-1/2`}  onPress={()=>this.props.navigation.navigate('viewGallery', {data:item})}>
                <GalleryCard
                  image={item.photo_file}
                  head={item.name}
                  navigation ={this.props.navigation}
                />
              </Pressable>)}
      /> : <LoadingData Loading={this.state.loading} text="Gallery is empty"/>}
    </SafeAreaView>
  )
  } 
}

export default Gallery