import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../components/button/RoundedButton'
import { ValidateMember } from '../connection/actions/authentication/authentication'

const Register = ({ navigation }) => {

  const [loading, setLoading] = useState(false)
  const [sigUpData, setSignUpData] = useState({
    firstname: null,
    lastname: null,
    email: '',
    password: '',
    phone: '',
    graduation_year: '',
    department: '',
    chapter: ''
  })

  const callback = () => {
    setLoading(false)
    navigation.navigate('accountCreated')
  }

  const errCallback = (err) => {
    setLoading(false);
    console.log(err)
  }

  const handleSignUp = () => {
    if (setSignUpData.firstname !== null && setSignUpData.lastname !== null) {
      setLoading(true)
      ValidateMember(setSignUpData, 'aani', callback, errCallback)
    }
  }


  return (
    <View>
      <Image style={tw`mx-auto my-8`} source={require('../images/Logo/ANNILogo.png')} />
      <View style={tw`mx-10`}>
        <Text style={tw`text-base font-bold`}>Register</Text>
        <Text>Input details to register</Text>
      </View>

      <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>

        <View>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>First Name</Text>
              <TextInput
                placeholder='First Name'
                style={tw`py-1.5`}
                onChangeText={(text) => setSignUpData({ ...sigUpData, 'firstname': text })}
              />
            </View>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Last Name</Text>
              <TextInput
                placeholder='Last Name'
                style={tw`py-1.5`}
                onChangeText={(text) => setSignUpData({ ...sigUpData, 'lastname': text })}
              />
            </View>
          </View>

          <View style={tw`my-2 border-b`}>
            <Text>Email Address</Text>
            <TextInput
              style={tw`py-1.5`}
              placeholder='email Address'
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'email': text })}
            />
          </View>
          <View style={tw`my-2 border-b`}>
            <Text>Password</Text>
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              style={tw`py-1.5`}
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'password': text })}
            />
          </View>
        </View>

        <View style={tw`flex-row justify-between`}>
          <View style={tw`my-2 w-5/12 border-b`}>
            <Text>Phone Number</Text>
            <TextInput
              placeholder='Phone Number'
              style={tw`py-1.5`}
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'phone': text })}
            />
          </View>
          <View style={tw`my-2 w-5/12 border-b`}>
            <Text>Graduation Year</Text>
            <TextInput
              placeholder='graduation Year'
              style={tw`py-1.5`}
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'graduation_year': text })}

            />
          </View>
        </View>

        <View style={tw`flex-row justify-between`}>
          <View style={tw`my-2 w-5/12 border-b`}>
            <Text>Department</Text>
            <TextInput
              placeholder='Department'
              style={tw`py-1.5`}
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'department': text })}
            />
          </View>
          <View style={tw`my-2 w-5/12 border-b`}>
            <Text>Chapter</Text>
            <TextInput
              placeholder='Chapter'
              style={tw`py-1.5`}
              onChangeText={(text) => setSignUpData({ ...sigUpData, 'chapter': text })}

            />
          </View>
        </View>

        <View style={tw`mt-1 justify-between`}>
          {loading ? (<ActivityIndicator size='large' color='#365C2A' />) : (<RoundedButton
            text='Register'
            pressed={() => handleSignUp()}
          />)
          }

        </View>

        {/* <Text>Forgot Password?</Text> */}
        <View style={tw`flex-row mx-auto py-2`}>
          <Text>Already have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={tw`text-green-800 font-bold`}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register