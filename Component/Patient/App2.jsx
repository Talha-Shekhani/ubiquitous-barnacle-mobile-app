import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme, useTheme, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import { AntDesign , MaterialIcons,Fontisto} from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import Home from './Home'
import Contact from './Contact'
import MyRecords from './MyRecords'
import Setting from './Setting'
import SignIn from './SignIn'
import Password from './Password'
import FrontPage from './FrontPage'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const rootHome = ()=>{
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color }) => {
          let iconName, iconName2;

          if (route.name === 'Home') {
            iconName = "home"
          } else if (route.name === 'Contact') {
            iconName2 = "world-o"
          }else if (route.name === 'MyRecords') {
            iconName = "printer"
          }else if (route.name === 'Setting') {
            iconName = "setting"
          }

          // You can return any component that you like here!
          return (
          <Text>
          <AntDesign name={iconName} size={24} color={color} />
          <Fontisto name={iconName2} size={24} color={color} />
          </Text>
          )

        },
      })}
      tabBarOptions={{
        activeTintColor: '#bd1515',
        inactiveTintColor: 'grey',
      }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="MyRecords" component={MyRecords} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  ) 

}


export default function App() {
  return (
    <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
      <NavigationContainer > 
            <Stack.Navigator headerMode="none">
            <Stack.Screen name="password" component={Password} />
            <Stack.Screen name="RouteHome" component={rootHome} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="FrontPage" component={FrontPage} />
            
            

            {/* <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="Videoplayer" component={VideoPlayer} /> */}

          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
