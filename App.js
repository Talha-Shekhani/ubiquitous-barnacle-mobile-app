import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme, useTheme, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import  IconAnt  from 'react-native-vector-icons/AntDesign'; 
import  IconMat  from 'react-native-vector-icons/MaterialIcons'; 
import IconFont from 'react-native-vector-icons/Fontisto'; 
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
import childAppoinment from './Component/Patient/ChildAppoinment'
import AppoinmentSomeone from './Component/Patient/AppoinmentSomeone'
import Preception from './Component/Patient/Preception'
// Doctor side navigation
import DrSingin from './Component/Doctor/Dr_SignIn'
import DrSingUp from './Component/Doctor/DrSignUp'
import DrForget from './Component/Doctor/Dr_ForgetPassword'
import DrSingpage from './Component/Doctor/Dr_SignPage'
import DrQualification from './Component/Doctor/DrQualification'
import DrSpecialityDetail from './Component/Doctor/SpecialityDetail'
import DrAboutYou from './Component/Doctor/AboutYou'
import DrUploadPitures from './Component/Doctor/UploadPitures'
import ReviewPage from './Component/Doctor/RewiewPage'
import DrTermsAndCondition from './Component/Doctor/DrTermsAndCondition'
import DrPassword from './Component/Doctor/DrPassword'
import Finish from './Component/Doctor/Finish'
import DrHome from './Component/Doctor/DrHome'
import DrConnect from './Component/Doctor/DrConnect'
import DrMyRecords from './Component/Doctor/Resources'
import DrMyAccount from './Component/Doctor/DrMyAccount'
import DrAppoinmentLog  from './Component/Doctor/DrAppoinmentLog'
import DrChatLog  from './Component/Doctor/DrChatlog'
import DrMemberFeedback  from './Component/Doctor/DrMemberFeedback'
import DrPayment from './Component/Doctor/DrPayment'
import ChangePasword from './Component/Doctor/D_ChangePassword'
import ChangePin from './Component/Doctor/D_ChangePin'
import Deactivate from './Component/Doctor/D_Deactivate'
import DrThanks from './Component/Doctor/D_Thankyou'
import DrSharePage from './Component/Doctor/D_SharePage'
import DrCounsultant from './Component/Doctor/ConsultantFee'
import DrChangeConsultant from './Component/Doctor/ChangeConsultantFee'

import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore'
import UploadPitures from './Component/Doctor/UploadPitures';
import RewiewPage from './Component/Doctor/RewiewPage';
import ChangeConsultant from './Component/Doctor/ChangeConsultantFee';
import DrHomePayment from './Component/Doctor/HomePaymentMethod'
import DrBank from './Component/Doctor/PaymentBank'
import DrPaypal from './Component/Doctor/PaymentPaypal'

const { store } = configureStore()
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const rootHome = ()=>{
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
          <IconAnt name={iconName4} size={26} color={focused ? color : 'grey'} />
          </Text>
          )
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
      }}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Connect" component={Connect} />
        <Tab.Screen name="MyRecords" component={MyRecords} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  ) 

}

const DrRootHome = ()=>{
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, focused }) => {
          let iconName, iconName2, iconName3, iconName4;
          if (route.name === 'Dr Home') {
            iconName = "home"
            color = 'yellow'
          } else if (route.name === 'Dr Connect') {
            iconName2 = "world-o"
            color = 'blue'
          }else if (route.name === 'RESOURCES') {
            iconName3 = "person-outline"
            color = 'green'
          }else if (route.name === 'DrMy account') {
            iconName4 = "account-circle"
            color = 'red'
          }

          // You can return any component that you like here!
          return (
          <Text >
              <IconAnt name={iconName} size={26} color={focused ? color : 'grey' } /> 
              <IconFont name={iconName2} size={26} color={focused ? color : 'grey'} />
              <IconMat name={iconName3} size={26} color={focused ? color : 'grey'} />
              <IconMat name={iconName4} size={26} color={focused ? color : 'grey'} />
          </Text>
          )
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
      }}
    >
        <Tab.Screen name="Dr Home" component={DrHome} />
        <Tab.Screen name="Dr Connect" component={DrConnect} />
        <Tab.Screen name="RESOURCES" component={DrMyRecords} />
        <Tab.Screen name="DrMy account" component={DrMyAccount} />
      </Tab.Navigator>
  ) 

}

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#00aaff" /> */}
      <Provider store={store}>
      <NavigationContainer > 
            <Stack.Navigator headerMode="none">
            <Stack.Screen name="FrontPage" component={FrontPage} />
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="password" component={Password} />
            <Stack.Screen name="RouteHome" component={rootHome} />
            <Stack.Screen name="SignPage" component={SignPage} />
            <Stack.Screen name="connect" component={Connect} />
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

                         {/* doctor navigation */}
            
            <Stack.Screen name="drsignup" component={DrSingUp}/>
            <Stack.Screen name="drsignin" component={DrSingin}/>
            <Stack.Screen name="drforget" component={DrForget}/>
            <Stack.Screen name="drsignpage" component={DrSingpage}/>
            <Stack.Screen name="drqualification" component={DrQualification}/>
            <Stack.Screen name="specialitydetail" component={DrSpecialityDetail}/>
            <Stack.Screen name="aboutyou" component={DrAboutYou}/>
            <Stack.Screen name="uploadpitures" component={UploadPitures}/>
            <Stack.Screen name="rewiewpage" component={RewiewPage}/>
            <Stack.Screen name="DrTerms" component={DrTermsAndCondition}/>
            <Stack.Screen name="drpassword" component={DrPassword}/>
            <Stack.Screen name="finish" component={Finish}/>
            <Stack.Screen name="drRootHome" component={DrRootHome}/>
            <Stack.Screen name="drAppinmentLog" component={DrAppoinmentLog}/>
            <Stack.Screen name="drChatLog" component={DrChatLog}/>
            <Stack.Screen name="drMemberFeedback" component={DrMemberFeedback}/>
            <Stack.Screen name="drPayment" component={DrPayment}/>
            <Stack.Screen name="DchangePassword" component={ChangePasword}/>
            <Stack.Screen name="DchangePin" component={ChangePin}/>
            <Stack.Screen name="deactivate" component={Deactivate}/>
            <Stack.Screen name="DrThanks" component={DrThanks}/>
            <Stack.Screen name="DrCounsultant" component={DrCounsultant}/>
            <Stack.Screen name="share" component={DrSharePage}/>
            <Stack.Screen name="changeConsultant" component={ChangeConsultant}/>
            <Stack.Screen name="HomePayment" component={DrHomePayment}/>
            <Stack.Screen name="bank" component={DrBank}/>
            <Stack.Screen name="paypal" component={DrPaypal}/>



            {/* <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="Videoplayer" component={VideoPlayer} /> */}

          </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
  );
}

