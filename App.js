import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme, useTheme, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import  IconAnt  from 'react-native-vector-icons/AntDesign'; 
import IconFont from 'react-native-vector-icons/Fontisto'; 
import Home from './Component/Navigation/Home'
import Contact from './Component/Navigation/Contact'
import MyRecords from './Component/Navigation/MyRecords'
import Setting from './Component/Navigation/Setting'
import signUp from './Component/Navigation/SignUp'
import Password from './Component/Navigation/Password'
import FrontPage from './Component/Navigation/FrontPage'
import SignPage from './Component/Navigation/SignPage'
import SignIn from './Component/Navigation/SignIn'
import ForgetPassword from './Component/Navigation/ForgetPassword'
import ForgetPIn from './Component/Navigation/ForgetPIn'
import TermsCondition from './Component/Navigation/TermsAndCondition'
import UpcomingAppoinment from './Component/Navigation/UpcomingAppoinment'
import BookingAccount from './Component/Navigation/BookAppoinment'
import BookingAppoinment from './Component/Navigation/BookAppoinment';

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
          <IconAnt name={iconName} size={24} color={color} />
          <IconFont name={iconName2} size={24} color={color} />
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
    <View style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#00aaff" /> */}
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
            

            {/* <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="Videoplayer" component={VideoPlayer} /> */}

          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}





// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// // import Home from './Component/Navigation/Home'
// import Check from './check'
// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
//       <View style={{flexDirection: "row", justifyContent: "space-around"}}>
//       <Text>Hello World</Text>
//       <Text>
//         kldfjklfjkljjfz
//       </Text>
//       {/* <Home/> */}
//       <Check/>
//       </View>
//      </>
//   );
// };

// export default App;
