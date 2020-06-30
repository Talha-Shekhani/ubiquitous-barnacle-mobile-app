import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme, useTheme, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import  IconAnt  from 'react-native-vector-icons/AntDesign'; 
import IconFont from 'react-native-vector-icons/Fontisto'; 
import IconAwe from 'react-native-vector-icons/FontAwesome'; 
import Home from './Component/Patient/Home'
import Connect from './Component/Patient/Connect'
import MyRecords from './Component/Patient/MyRecords'
import Setting from './Component/Patient/Setting'
import signUp from './Component/Patient/SignUp'
import Password from './Component/Patient/Password'
import FrontPage from './Component/Patient/FrontPage'
import SignPage from './Component/Patient/SignPage'
import SignIn from './Component/Patient/SignIn'
import ForgetPassword from './Component/Patient/ForgetPassword'
import ForgetPIn from './Component/Patient/ForgetPIn'
import TermsCondition from './Component/Patient/TermsAndCondition'
import UpcomingAppoinment from './Component/Patient/UpcomingAppoinment'
import BookingAppoinment from './Component/Patient/BookAppoinment'
// import Connect11 from './Component/Navigation/Contact11' 
import childAppoinment from './Component/Patient/ChildAppoinment'
import AppoinmentSomeone from './Component/Patient/AppoinmentSomeone'
import Preception from './Component/Patient/Preception'
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'
import MyAccount from './Component/Patient/P_MyAccount';
import { PersistGate } from 'redux-persist/es/integration/react'
import P_AccountInfo from './Component/Patient/P_AccountInfo';
import Footer from './Component/Patient/Footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import P_ChangePassword from './Component/Patient/P_ChangePassword';
import P_ChangePin from './Component/Patient/P_ChangePin';
import P_Deactivate from './Component/Patient/P_Deactivate';
import P_Thankyou from './Component/Patient/P_Thankyou';
import P_TechnicalSupport from './Component/Patient/P_TechnicalSupport';
import P_messageSupport from './Component/Patient/P_messageSupport';
import P_SharePage from './Component/Patient/P_SharePage';

const {persistor, store } = configureStore()
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const rootHome = () =>{
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, focused }) => {
          let iconName, iconName2, iconName3, iconName4;
          if (route.name === 'Home') {
            iconName = "home"
            color = 'yellow'
          } else if (route.name === 'Connect') {
            iconName2 = "world-o"
            color = 'blue'
          }else if (route.name === 'MyRecords') {
            iconName3 = "printer"
            color = 'green'
          }else if (route.name === 'Myaccount') {
            iconName4 = "user-o"
            color = 'red'
          }

          // You can return any component that you like here!
          return (
          <Text >
          <IconAnt name={iconName} size={26} color={focused ? color : 'grey' } /> 
          <IconFont name={iconName2} size={26} color={focused ? color : 'grey'} />
          <IconFont name={iconName3} size={26} color={focused ? color : 'grey'} />
          <IconAwe name={iconName4} size={26} color={focused ? color : 'grey'} />
          </Text>
          )

        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'grey',
        activeTintColor: 'grey',
      }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Connect" component={Connect} />
        <Tab.Screen name="MyRecords" component={MyRecords} />
        <Tab.Screen name="Myaccount" component={MyAccount} />
      </Tab.Navigator>
  ) 

}


export default function App() {
  return (
    <View style={{flex: 1}}  >
      {/* <StatusBar barStyle="dark-content" backgroundColor="#00aaff" /> */}
      <Provider store={store}>
        <PersistGate persistor={persistor} >
      <NavigationContainer > 
            <Stack.Navigator headerMode="none">
            <Stack.Screen name="FrontPage" component={FrontPage} />
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="password" component={Password} />
            <Stack.Screen name="RouteHome" component={rootHome} />
            <Stack.Screen name="SignPage" component={SignPage} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="forgetPassword" component={ForgetPassword} />
            <Stack.Screen name="forgetPin" component={ForgetPIn}/>
            <Stack.Screen name="termsCondition" component={TermsCondition}/>
            <Stack.Screen name="Upcoming" component={UpcomingAppoinment}/>
            <Stack.Screen name="BookingAppoinment" component={BookingAppoinment}/>
            {/* <Stack.Screen name="Connect" component={Connect}/> */}
            <Stack.Screen name="childAppoinment" component={childAppoinment}/>
            <Stack.Screen name="AppoinmentSomeone" component={AppoinmentSomeone}/>
            <Stack.Screen name="Preceptions" component={Preception}/>
            <Stack.Screen name='P_AccountInfo' component={P_AccountInfo} />
            <Stack.Screen name='P_ChangePassword' component={P_ChangePassword} />
            <Stack.Screen name='P_ChangePin' component={P_ChangePin} />
            <Stack.Screen name="Myaccount" component={MyAccount} />
            <Stack.Screen name="P_Deactivate" component={P_Deactivate} />
            <Stack.Screen name='P_Thankyou' component={P_Thankyou} />
            <Stack.Screen name='P_TechnicalSupport' component={P_TechnicalSupport} />
            <Stack.Screen name='P_messageSupport' component={P_messageSupport} />
            <Stack.Screen name='P_SharePage' component={P_SharePage} />

            {/* <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="Videoplayer" component={VideoPlayer} /> */}
          </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    </View>
  );
}

