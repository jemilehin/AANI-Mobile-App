import { View, FlatList,Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import NewsCard from '../../components/News/NewsCard'
import tw from 'tailwind-react-native-classnames'
import EventsCard from '../../components/Events/EventsCard'
import { GetEvents } from '../../connection/actions/user.actions'
import moment from 'moment/moment'


const National = ({navigation}) => {

  const [event, setEvent] = useState(null)
  

  const data =[
    {id:1,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
    {id:2,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
    {id:3,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
    {id:4,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
    {id:5,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
  ]

  useEffect(()=>{
    GetEvents(callback)
  },[])

  const callback =(res)=>{
    setEvent(res.data.data)
  }

  
  return (
    <View>
      <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={event}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            renderItem={
                ({item}) => (
                //   <Pressable style={tw`w-1/2`}>
                  <EventsCard 
                    image={item.picture}
                    head={item.name}
                    body={item.body}
                    startdate={moment(item.startDate).format("MMMM Do, YYYY")}
                    start_time={item.startTime.substring(0,5)}
                    item={item}
                    navigation={navigation}
                    to='viewEvents'
                    type='national'
                  />
                //   </Pressable>
                  )}/>
        </View>
    </View>
  )
}

export default National