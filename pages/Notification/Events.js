import {Text, FlatList, View} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { MoneyCard } from '../../components/account/MoneyCard'
import { EventCard } from '../../components/notification/EventCard'
import { NotificationCard } from '../../components/notification/NoificationCard'

export const EventsNotice =()=>{
    const data = [
        {id:1,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:2,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:3,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:4,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:5,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:6,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:7,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:8,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        {id:9,name: 'You have an upcoming event on the 24th of March ', time:'2 days to go'},
        ]
    return(
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={tw`h-20`}></View>}
            renderItem={
                ({item}) => (
            <EventCard
                heading={item.name}
                time={item.time}
            />
                )}
        />
    )
}