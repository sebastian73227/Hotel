
import React, { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import { TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { saveRoom, getRoom, updateRoom } from '../api'

const RoomFormScreen = ({ navigation, route }) => {

  const [room, setRoom] = useState({
    name: '',
    numberPeople: '',
    room: '',
    entryDate: '',
    outputDate: '',
  })

  const [editing, setEditing] = useState(false)


  const handleChange = (name, value) => setRoom({ ...room, [name]: value });

  const hoy = new Date();
  function formatoFecha(fecha, formato) {
    const map = {
      dd: fecha.getDate(),
      mm: fecha.getMonth() + 1,
      yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
  }

  

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveRoom(room)
      } else {
        await updateRoom(route.params.id, room)
      }

      navigation.navigate('HomeScreen')
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {

    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Updating room: " + route.params.id });
      setEditing(true);

      (async () => {
        var room = await getRoom(route.params.id);
        var room = room[0];
        setRoom({ name: room.name, room: room.room, numberPeople: room.numberPeople, entryDate: room.entryDate, outputDate: room.outputDate });
      })();
    }
  }, []);

  return (
    <Layout>
      {/* <TextInput
        placeholder="Numero de cuarto"
        keyboardType='numeric'
        style={styles.textInput}
        onChangeText={text => handleChange('room', text)}
        value={room.room}//se cambio el tipo de dato a texto
      /> */}
      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        onChangeText={text => handleChange('name', text)}
        value={room.name}
      />
      <TextInput
        placeholder="Numero de personas"
        keyboardType='numeric'
        style={styles.textInput}
        onChangeText={text => handleChange('numberPeople', text)}
        value={room.numberPeople}//se cambio el tipo de dato a texto
      />
      <TextInput
        placeholder={"Fecha de entrada (" + formatoFecha(hoy, 'dd-mm-yyyy') + ")"}
        keyboardType='numeric'
        style={styles.textInput}
        onChangeText={text => handleChange('entryDate', text)}
        value = {room.entryDate}
        
      />
      <TextInput
        placeholder={"Fecha de salida (" + formatoFecha(hoy, 'dd-mm-yyyy') + ")"}
        keyboardType='numeric'
        style={styles.textInput}
        onChangeText={text => handleChange('outputDate', text)}
        value={room.outputDate}//se cambio el tipo de dato a texto
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Update room</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 7,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    paddingStart: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    borderRadius: 10,
    padding: 5,
    paddingVertical: 10,
    marginTop: 20,
    marginButton: 10,
    backgroundColor: 'black',
    width: '80%',
  },
  textButton: {
    color: '#ffffff',
    textAlign: 'center',
  }
})

export default RoomFormScreen;