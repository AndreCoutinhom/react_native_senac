import {Text, TextInput, View, ScrollView, Image} from 'react-native';

export const ScrollImages = () => {
  return (
     <ScrollView
     style={{height: 400}}
     >
  <Image
  source={{uri: 'https://static.wikia.nocookie.net/zootopia/images/3/39/Judy_Hopps_Z2.PNG/revision/latest?cb=20250129161215'}}
  style={{width: 500, height: 1248}}  />
       
       <Text>I'm Judy Hopps, ZPD </Text>

  </ScrollView>
  )
}