import React, {useState} from 'react';
import { View, SafeAreaView,Text, FlatList, Pressable  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'

import TobBar from '../../components/topBar';
import SupportCard from '../../components/support/SupportCard';
import ModalTemplate from '../../components/Modal';
import SupportChat from '../../components/support/SupportChat';

export default function Support({navigation}) {
    const [visible, setVisible] = useState(false)
    const data = [
        {id:1, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:2, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:3, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:4, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:5, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:6, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:7, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:8, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:9, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:10, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:11, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:12, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:13, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:14, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
        {id:15, title:'How to Connect to Live email', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.'},
    ]
  return (
    <SafeAreaView style={tw`h-full`}>
        <ModalTemplate visible={visible} body={<SupportChat setVisible={setVisible}/>}/>
        <TobBar
            body={
                <View style={tw`flex-row justify-between px-3`}>
                    <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
                    <Text style={tw`my-auto font-bold text-base`}>Support</Text>
                    <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
                </View>
            }
        />
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            ListFooterComponent={<View style={tw`h-8`}></View>}
            renderItem={
                ({item})=>
                <SupportCard title={item.title} body={item.body} id={1}/>

            }
        // {data.map(e=>
        //     <SupportCard title={e.title} body={e.body} id={1}/>
        // )}
        />
        <Pressable onPress={()=>setVisible(true)} style={tw`h-14 shadow-lg w-14 bg-purple-800 absolute bottom-10 right-6 rounded-full`}>
            <Ionicon name="ios-chatbox-ellipses" style={tw`m-auto`} size={22} color={'white'}/>
        </Pressable>
     </SafeAreaView>
  );
}
