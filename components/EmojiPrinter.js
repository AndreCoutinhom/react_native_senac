import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export const EmojiTranslator = () => {
const [text, setText] = useState('');

  return (
<View style={{padding: 10}}>
<TextInput 
style={{height: 40, padding: 5}}
placeholder="Digite aqui"
onChangeText={newText => setText(newText)}
defaultValue={text}
/>

<Text style={{padding: 10, fontSize: 42}}>
{text.split(' ').map(word => word && '🦊').join(' ')}
</Text>
</View>
  )
}
