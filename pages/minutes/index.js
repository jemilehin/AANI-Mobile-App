//import liraries
import React, { Component } from 'react';
import { View, StatusBar,SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TobBar from '../../components/topBar';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MinuteCard from '../../components/minute/MinuteCard';

// create a component
const Minutes = ({navigation}) => {

    const data =[
        {id:1, name:'Exco Meeting '},
        {id:2, name:'Exco Meeting '},
        {id:3, name:'Exco Meeting '},
        {id:4, name:'Exco Meeting '},
        {id:5, name:'Exco Meeting '},
        {id:6, name:'Exco Meeting '},
    ]

    return (
        <SafeAreaView style={tw`bg-white px-4`}>
            <StatusBar style={tw`bg-purple-900`}/>
            <TobBar
                body={
                <View style={tw`flex-row justify-between`}>
                    <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
                    <Text style={tw`my-auto font-bold text-base`}>Subscribe</Text>
                    <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
                </View>
                }
            />

            <Text style={tw`text-purple-900 text-base font-bold px-4 pt-4`}>
                Upload Minutes
            </Text>

            <Text style={tw`text-gray-500 text-xs font-bold px-4 `}>
            Select file you will like to upload
            </Text>

            <View style={[tw`py-5 my-4 mx-auto  w-11/12 `,{borderWidth:1,borderColor:'purple', borderStyle: 'dotted',
                borderRadius: 1, borderStyle:'dashed',}]}>
                <Ionicon name="ios-cloud-upload" style={tw`m-auto text-purple-400`} size={50}/>
                <Text style={tw`text-center text-gray-400`}>Upload Meeting</Text>
            </View>
            <Text style={tw`font-bold text-base pt-2 pb-2`}>All Minutes</Text>
            <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({item}) => (
                        <View style={tw`flex-row m-1`}>
                            <MinuteCard name={item.name}/>
                        </View>
                )}
            />
            
        </SafeAreaView>
    );
};


//make this component available to the app
export default Minutes;
