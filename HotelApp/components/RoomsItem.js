import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RoomsItem = ({ room, handleDelete }) => {
    const navigation = useNavigation();
    return (


        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('RoomFormScreen', { id: room.room })}>

                <Text style={styles.itemTitle}>Cuarto: {room.room}</Text>
                <Text style={styles.itemTitle}>Nombre de la persona: {room.name}</Text>
                <Text style={styles.itemTitle}>Numero de personas: {room.numberPeople}</Text>
                <Text style={styles.itemTitle}>Fecha de entrada: {room.entryDate}</Text>
                <Text style={styles.itemTitle}>Fecha de salida: {room.outputDate}</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: '#822f3a', borderRadius: 10, padding: 5 }}
                onPress={() => handleDelete(room.room)}
            >
                <Text style={{ color: '#ffffff' }}>Clear</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#ffffff',
    },
});

export default RoomsItem
