import {View, FlatList} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { NotificationCard } from '../../components/notification/NoificationCard'

export const Messages =()=>{

    const data = [
        {id:1,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:2,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:3,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:4,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:5,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:6,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:7,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:8,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        {id:9,name: 'New message from Michael Ayinde ', time:'2 hours ago'},
        
        ]

    return(
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={tw`h-20`}></View>}
            renderItem={
                ({item}) => (
            <NotificationCard
                heading={item.name}
                time={item.time}
            />
                )}
        />
    )
}