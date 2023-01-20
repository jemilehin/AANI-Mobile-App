import {Text, ActivityIndicator,View} from 'react-native'
import tw from 'tailwind-react-native-classnames'

export const ConvertObjectToArray = (object) => {
    const arr = []
    for (const key in object) {
        arr.push({name: key, property: object[key]})
    }
    return arr;
}

export const LoadingData = (loading) => {
    // console.log(loading)
    return(
        <View  style={tw`mx-auto`}>
           {loading.Loading ? <ActivityIndicator size={30} color='#365C2A' /> : <Text>{loading.text}</Text>}
        </View>
    )
}

export const BodyParagraphs = (para) => {
    // console.log('bodypara',para)
    return (
      <View>
        {
          para.para.length > 0 ? para.para.map((text,i) => (
            <Text key={i}>{text.paragragh}</Text>
          )) : null
        }
      </View>
    )
  }