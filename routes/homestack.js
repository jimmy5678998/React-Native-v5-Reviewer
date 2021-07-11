import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { NavigationContainer } from "@react-navigation/native";
import { NavigationActions } from '@react-navigation/compat';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();
export default HomeStack = (props) => {
  return(    
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={
          { headerStyle:{backgroundColor: 'aquamarine', height: 70},
          headerTitle: () => (         
            <Header navigation={props}/>) }} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ 
          title: 'Review Details', headerStyle: {backgroundColor: 'gray'},  
          }} />
      </Stack.Navigator>
  );
}
//<NavigationContainer initialRouteName='Home'>
//</NavigationContainer>
// home stack navigator screens


/* second newest
{
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='GameZone' navigation={navigation} />
        }
      },
    },
  },
  {
    ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {
        title: 'Review Details',
      }
    },
  }
}
*/
/*
        navigationOption: ({navigation})=>{
          return{
            headerTitle: () => <Header navigation={navigation}/>
          }
        } 
*/
/*
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import 'react-native-gesture-handler';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
*/


/* newest

import React from "react";
import {Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import Home from "../screens/home";
import 'react-native-gesture-handler';
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import { defineAnimation } from "react-native-reanimated";

const Stack = createStackNavigator()

export const AppNavigator = (props) => {
  const {navigation} = props;
  
  //this line no need
  screenOptions={{
      headerStyle: {
        backgroundColor: 'aquamarine'
      },
      headerTintColor: "#444",}}
  //this line after need
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={
          { headerStyle:{backgroundColor: 'aquamarine', height: 70},
          headerTitle: () => (         
            <Header navigation={navigation}/>) }} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ 
          title: 'Review Details', headerStyle: {backgroundColor: 'gray'},  
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



*/