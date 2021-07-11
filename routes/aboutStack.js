
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default AboutStack = (props) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='About' component={About} options={
          { headerStyle:{backgroundColor: 'aquamarine'},
          navigationOption: ({navigation})=>{
            return{
              headerTitle: () => <Header navigation={props}/>
            }}}}/>
      </Stack.Navigator>
  );
}
/*    <NavigationContainer initialRouteName='Home'   screenOptions={{
    headerStyle: {
        backgroundColor: "#aaa",
        header: 60,

      },
  headerTintColor: "#444",
      </NavigationContainer>
}}>
*/