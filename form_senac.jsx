import React, { useEffect, useState } from 'react';
import {
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList, 
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform, 
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@contacts';
const EMPTY_FORM = {name: '', email: '', phone: ''};

const colors = {
  background: '#EEF2F6',
  surface: '#FFFFFF',
  text: '#1C2B39',
  lightText: '#5B6B7B',
  border: '#C9D3DD',
  primary: '#1F5C8B',
  warning: '#B3261E',
}

export default function app(){
    const [form, setForm] = useState(EMPTY_FORM);
    const [contacts, setContacts] = useState([]);
    const [editing, setEditing] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       loadContacts();
    }, []);

    async function loadContacts(){
      try{
        setLoading(true)
        const json = await AsyncStprage.getItems(STORAGE_KEY);
        setContacts(json ? JSON.parse(json): []);
      }catch(e){
        Alert.alert('Erro', 'Não foi possivel carregar dados de contato');
      }finally{
        setLoading(false)
      }
    }

    const renderContact = ({item}) => (
        <View>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemove(item.id)}>
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>

        </View>
    );

    return(
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : undefined}  >
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContact}
          ListHeaderComponent={header}
          ListEmptyComponent={
            <Text style="">
              Nenhum contato ainda. Preencha o Formulario acima!
            </Text>
          }
          contentContainerStyle={}
          keyboardShouldPersistTaps="handled"
        />
      <KeyboardAvoidingView>
      </SafeAreaView>
    );
}

}

