import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import RoomFormScreen from './Screens/RoomFormScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Hotel App',
            headerStyle: { backgroundColor: '#822f3a' },
            headerTitleStyle: { color: '#ffffff' },
            // headerRight: () => (   //se quitó el new por falta de tiempo para los cuartos
            //    <TouchableOpacity
            //      onPress={() => navigation.navigate("RoomFormScreen")}>
            //     <Text style={{color: '#ffffff', marginRight: 20, fontSize: 20}}>New</Text>
            //    </TouchableOpacity>

            // ),

          })}
        />
        <Stack.Screen name="RoomFormScreen" component={RoomFormScreen} 
          options={{
            title: 'New Room',
            headerStyle: { backgroundColor: '#822f3a' },
            headerTitleStyle: { color: '#ffffff'},
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;