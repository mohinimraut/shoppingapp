import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, ProductsStackNavigator,CategoriesStackNavigator,CameraScreenStackNavigator,ProfileDetailScreenStackNavigator,ProfileScreenStackNavigator,AddressScreenStackNavigator,BarCodeScannerStackNavigator,BarCodeDisplayStackNavigator,AmulGoldMilkTwoStackNavigator,AmulGoldMilkThreeStackNavigator,UploadProductImageStackNavigator,AsyncStorageImageStackNavigator,ProductScreenStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="ProductScreen" component={ProductScreenStackNavigator} />
      <Drawer.Screen name="Products" component={ProductsStackNavigator} />    
      <Drawer.Screen name="Categories" component={CategoriesStackNavigator} />    
      {/* <Drawer.Screen name="CameraScreen" component={CameraScreenStackNavigator} />     */}
      <Drawer.Screen name="Profiledetail" component={ProfileDetailScreenStackNavigator} />    
      <Drawer.Screen name="ProfileScreen" component={ProfileScreenStackNavigator} />    
      <Drawer.Screen name="AddressScreen" component={AddressScreenStackNavigator} />    
      <Drawer.Screen name="BarCodeScanner" component={BarCodeScannerStackNavigator} />    
      {/* <Drawer.Screen name="BarCodeDisplay" component={BarCodeDisplayStackNavigator} />     */}
      <Drawer.Screen name="AmulGoldMilkTwo" component={AmulGoldMilkTwoStackNavigator} />    
      <Drawer.Screen name="AmulGoldMilkThree" component={AmulGoldMilkThreeStackNavigator} />    
      <Drawer.Screen name="UploadProductImage" component={UploadProductImageStackNavigator} />    
      <Drawer.Screen name="AsyncStorageImage" component={AsyncStorageImageStackNavigator} />    

        
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;