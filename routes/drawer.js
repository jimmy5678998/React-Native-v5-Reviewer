import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import About from "../screens/about";
import AboutStack from "./aboutStack";
import HomeStack from "./homestack";
import 'react-native-gesture-handler';

const DrawerNavigator = createDrawerNavigator();

export default function Navigator() {
  console.log({HomeStack});
  return (
    <NavigationContainer>
      <DrawerNavigator.Navigator >
        <DrawerNavigator.Screen name="Home" component={HomeStack} />
        <DrawerNavigator.Screen name="About" component={AboutStack} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
}
