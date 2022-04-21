import React, {useState} from 'react';
import { View, Image,SafeAreaView, Text, Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='purple'
            key={props.id}
            style={tw`${props.bg}`}
                label={props.label}
                onPress={() => handlePress(props)}
                icon={({ focused, color, size }) => (props.icon) }
            />
    )
}
export default function CustomDrawerList({navigation}) {
    // const navigation = useNavigation();
    const [selected, setSelected] = useState(1)
    const [visible, setVisible] = useState(false)
    const [showDropdown, setshowDropdown] = useState(false)
    const drawerData=[
        {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={'grey'} size={22}/>)},
        {id:3, label:'News', to:'news', icon:<MaterialCom name="message-alert" size={22} color={'grey'}
        />}
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        {id:5, label:'Gallery', to:'gallery', icon:<FontAwesome name="photo" size={22} color={'grey'}
        /> },
        {id:6, label:'Election', to:'election', icon:<MaterialIcon name="how-to-vote" size={22} color={'grey'}
        />},
        {id:7, label:'Subscribe', to:'subscribe', icon:<MaterialIcon name="subscriptions" size={22} color={'grey'}
        />},
        {id:8, label:'Support', to:'support', icon:<MaterialIcon name="headset-mic" size={22} color={'grey'}
     /> },
    ]

    const options =[
        {id:9, label:'Exco', to:'exco'},
        {id:10, label:'Publications', to:'publication'},
        {id:11, label:'Minutes', to:'minutes'},
       
    ]

    const handleSub=(to)=>{
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }
  return (
        <SafeAreaView style={{flex:1}}>
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />
            <View style={tw`border-b  flex-row justify-around border-gray-400 mx-4 py-4 mb-6 w-10/12`}>
                  
                  <Image style={tw`h-20 w-20 rounded-full `} source={require('../../../images/onboarding/phone.png')}/>
                  <View style={tw`my-auto`}>
                    <Pressable>
                      <Text style={tw`py-1 text-base font-bold`}>Rasheed Johnson</Text>
                      <Text style={tw`py-0.5`}> Member Platform</Text>
                    </Pressable>
                    
                    
                  </View>
            </View>
            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-purple-200':''}
                    icon={e.icon}
                />)}
            
            
            <Pressable onPress={()=>setshowDropdown(!showDropdown)} style={tw`my-4 flex-row mx-5`}>
                <Ionicon name='ios-file-tray-full' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={tw`text-gray-500`}>Resources</Text>
            </Pressable>
            { showDropdown ? options.map(e=>
            <Pressable key={e.id} onPress={()=>handleSub(e.to)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                label={e.label}
                navigation={navigation}
                id={e.id}s
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-purple-200':''}
                icon={e.icon}
            />)}
            
            <Pressable onPress={()=>setVisible(true)} style={tw`my-4 flex-row mx-5`}>
                <MaterialIcon name='logout' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text>Logout</Text>
            </Pressable>
            {/* s */}
        </SafeAreaView>
  );
}
