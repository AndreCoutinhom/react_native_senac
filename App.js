import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import { EmojiTranslator } from './components/EmojiPrinter.js';
import { ScrollImages } from './components/ScrowViewShowcase';
import { Infinite } from './components/FlatListShowcase';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <Image
          source={{
            uri: 'https://media.tenor.com/jMC7h98WHakAAAAj/giggling-nick-wilde.gif',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Wilde,</Text>

        <View>
          <Text>Nick Wilde</Text>
        </View>

        <EmojiTranslator />

        <ScrollImages />

        <Infinite />

      </ScrollView>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
