import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import RoundedButton from '../../components/button/RoundedButton'
import ModalTemplate from '../../components/Modal'



const ViewEvent = () => {
  const [register, setRegister] = useState(false)
  const [status, setStatus] = useState(false)
  return (
    <ScrollView style={tw`h-full`}>
      <ModalTemplate 
        visible={register}
        body={<ModalRegisterComponent setVisible={setRegister} setStatus={setStatus}/>}
      />

      <ModalTemplate 
        visible={status}
        body={<ModalSucess setVisible={setStatus}  setStatus={setStatus}/>}
      />

        <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-green-800 py-1`}>24th Annual Anniversary Celebration</Text>
            
          <View style={tw`border-t border-b border-gray-500 my-2 py-2`}>
            <View style={tw`flex-row`}> 
              <MaterialIcon name='event' size={25} color='#365C2A'/>
              <Text style={tw`ml-3`}>12th March, 2022. 8 A.M to 3 P.M</Text>
            </View>
            
            <View style={tw`flex-row my-2 pr-2`}> 
              <MaterialIcon name='location-on' color='#365C2A' size={25}/>
              <Text style={tw`ml-3`}>No 5, KPMG tower, Abode Avenue, Lagos, Nigeria P .O Box 236478</Text>
            </View>

          </View>

            
          <CommentCard/>

            <Text style={tw`text-justify text-gray-400 py-1`}>5 Likes</Text>

        <View style={tw`border-t border-b border-gray-500 py-2`}>
          <Text style={tw`text-green-800 font-bold`}>Details</Text>

          <Text style={tw`text-justify text-gray-800 py-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Et lacus lacus, proin proin egestas. Augue 
            scelerisque pellentesque nullam montes, pretium. 
            Nisl, in netus Et lacus lacus, proin proin egestas. 
            Augue scelerisque pellentesque nullam montes,
             pretium. Nisl, in netus 
          </Text>
          
        </View>
       

        {/* //View More */}
        <Text style={tw`text-green-800 pt-2 font-bold`}>Gate Fee</Text>
        <Text style={tw`text-black font-bold`}>N5,000</Text>
        
        {/* Regiser Button */}
        <View style={tw`my-7 mx-5`}>
          <RoundedButton 
            text='Register'
            pressed={()=>setRegister(true)}
          />
        </View>
        </View>  
        
        
      
    </ScrollView>
  )
}


const ModalRegisterComponent =(props)=>{

  const [payFee, setPayFee] = useState(false)
  const handleStatus=(status)=>{
    if(status==true){
      props.setStatus(true);
      props.setVisible(false)

    }else{

    }

  }
  return(
    <View style={tw`bg-white m-auto w-11/12 py-5 rounded-xl`}>
      <Text style={tw`text-center font-bold py-3`}>REGISTER</Text>
      <Text style={tw`px-5 font-bold text-green-800`}>Name</Text>
      <Text style={tw`mx-5 font-bold py-1 border-b`}>Chigozie Nwachukwu</Text>

      <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-green-800`}>Email Address</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>chigy9@gmail.com</Text>
      </View>

      <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-green-800`}>Phone Number</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>08143678798</Text>
      </View>

      <View style={tw`py-2`}>
        <Text style={tw`px-5 font-bold text-green-800`}>Gate Fee</Text>
        <Text style={tw`mx-5 font-bold py-1 border-b`}>N 5,000</Text>
      </View>

      <View style={tw`py-2 flex-row`}>
        <View style={tw`py-2 flex-row`}>
          <Text style={tw`pl-5 font-bold text-green-800`}>Attire Fee:</Text>
          <Text style={tw` px-2 my-auto font-bold py-1 `}>N 5,000</Text>
        </View>
        {payFee ==false ?
        <MaterialIcon name='check-box-outline-blank' style={tw`my-auto`} size={23} onPress={()=>setPayFee(true)}/>
        :
        <MaterialIcon name='check-box' style={tw`my-auto`} size={23} onPress={()=>setPayFee(false)}/>

        }
      </View>

      <View style={tw`py-2 flex-row`}>
        <View style={tw`py-2 flex-row`}>
          <Text style={tw`pl-5 font-bold text-green-800`}>Delivery Fee:</Text>
          <Text style={tw` px-2 my-auto font-bold py-1 `}>N 5,000</Text>
        </View>
        {payFee ==false ?
        <MaterialIcon name='check-box-outline-blank' style={tw`my-auto`} size={23} onPress={()=>setPayFee(true)}/>
        :
        <MaterialIcon name='check-box' style={tw`my-auto`} size={23} onPress={()=>setPayFee(false)}/>

        }
      </View>
      
      <View style={tw`mx-8 flex-row mt-3 mx-auto`}>
        <View style={tw`w-3/6`}> 
          <RoundedButton text='Pay' pressed={()=>handleStatus(true)}/>
        </View>
        <TouchableOpacity onPress={()=>props.setVisible(false)} style={tw`my-auto px-5`}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>

      </View>
    
  )
}

const ModalSucess =(props)=>{
  return (
    <View style={tw`bg-white m-auto w-10/12 py-5 rounded-xl`}>
      <Text style={tw`text-center font-bold py-3`}>SUCCESS</Text>
      <MaterialIcon name='check-circle' size={55}  style={tw`text-center text-green-700 py-3`}/>
      
      <Text style={tw`text-center pb-7`}>Payment Succesfully made</Text>

      
      <View style={tw`mx-8 flex-row mt-3 mx-auto`}>
        <View style={tw`w-3/6`}> 
          <RoundedButton text='Go Back' pressed={()=>props.setVisible(false)}/>
        </View>
        {/* <TouchableOpacity onPress={()=>props.setVisible(false)} style={tw`my-auto px-5`}>
          <Text>Cancel</Text>
        </TouchableOpacity> */}
      </View>

      </View>
  )
}

export default ViewEvent