import {View, Text, FlatList,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'
import { MemberCard } from '../../components/members/MemberCard'


export const Members  =({navigation})=>{
    const data =[
        {id:1,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:2,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:3,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:4,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:5,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:6,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:7,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:8,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:9,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:10,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        {id:11,name: 'LSteve Job', dept:'Accounting', year:'1998'},
        
      ]
    return (
        <SafeAreaView>
            <View style={tw`flex-row justify-between bg-green-100 p-3 mx-4 my-3`}>
                <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
                <TextInput
                placeholder='Search by date'
                style={tw`w-9/12`}
                />
                <Feather name='sliders' style={tw`my-auto`} size={20} color='#365C2A'/>
            </View>
            <FlatList
                data={data}
                keyExtractor={ (item, index) => item.id }
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({item}) => (
                        <MemberCard
                            name={item.name}
                            dept={item.dept}
                            year={item.year}
                            navigation={navigation}
                        />
                    )}
                    
            />
            <View style={tw`bg-white `}>
                <Text>Members</Text>
            </View>
        </SafeAreaView>

    )
}