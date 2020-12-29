import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator,ProductsStackNavigator,SignupScreenStackNavigator,BarCodeDisplayStackNavigator,BarCodeScannerStackNavigator,LoginScreenStackNavigator } from "./StackNavigator";
import BarCodeDisplay from "../screens/BarCodeDisplay";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="BarCodeScanner" component={BarCodeScannerStackNavigator} />
      {/* <Tab.Screen name="Login" component={LoginScreenStackNavigator} /> */}

      <Tab.Screen name="Products" component={ProductsStackNavigator} />
      <Tab.Screen name="Signup" component={SignupScreenStackNavigator} />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;