import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Products from "../screens/Products";
import ProductScreen from "../screens/ProductScreen";

import Categories from "../screens/Categories";
import CameraScreen from "../screens/CameraScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddressScreen from "../screens/AddressScreen";
import BarCodeScanner from "../screens/BarCodeScanner";
import BarCodeDisplay from "../screens/BarCodeDisplay";

import AmulGoldMilkTwo from "../screens/AmulMilkTwo";
import AmulGoldMilkThree from "../screens/AmulGoldMilkThree";
import UploadProductImage from "../screens/UploadProductImage";
import CaptureImage from "../screens/CaptureImage";
import ViewProducts from "../screens/ViewProducts";
import AsyncStorageImage from "../screens/AsyncStorageImage";

import PickerC from "../screens/PickerC";


import Signup from "../screens/Signup";
import Login from "../screens/Login";

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "#fff",
  headerBackTitle: "white",
};


const AsyncStorageImageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AsyncStorageImage" component={AsyncStorageImage} options={{backgroundColor:"red"}}/>
    
    </Stack.Navigator>
  );
}

// const ProductScreenStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="ProductScreen" component={ProductScreen} options={{backgroundColor:"red"}}/>
    
//     </Stack.Navigator>
//   );
// }


const ProductScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{
          title:'ProductScreen',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}


const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="Home" component={Home} options={{
          title:'Dashboard',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
             <Stack.Screen name="ProductScreen" component={ProductScreen} options={{
          title:'ProductScreen',
          headerLeft:()=>(
            <Icon.Button name="arrow-back" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.goBack()}}></Icon.Button>
          
           )}}/>
           
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const CategoriesStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="Categories" component={Categories} options={{
          title:'Categories',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}


const BarCodeScannerStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} options={{
          title:'BarCodeScanner',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
           <Stack.Screen name="BarCodeDisplay" component={BarCodeDisplay} options={{
          title:'BarCodeDisplay',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}




const UploadProductImageStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="UploadProductImage" component={UploadProductImage} options={{
          title:'UploadProductImage',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
           <Stack.Screen name="CaptureImage" component={CaptureImage} options={{
          title:'Capture Image',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>

<Stack.Screen name="ViewProducts" component={ViewProducts} options={{
          title:'ViewProducts',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}




const AmulGoldMilkTwoStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="AmulGoldMilkTwo" component={AmulGoldMilkTwo} options={{
          title:'AmulGoldMilk',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
           <Stack.Screen name="PickerC" component={PickerC} options={{
          title:'PickerC',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}


const AmulGoldMilkThreeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="AmulGoldMilkThree" component={AmulGoldMilkThree} options={{
          title:'AmulGoldMilk',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
           <Stack.Screen name="PickerC" component={PickerC} options={{
          title:'PickerC',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const BarCodeDisplayStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="BarCodeDisplay" component={BarCodeDisplay} options={{
          title:'BarCodeDisplay',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
           <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} options={{
          title:'BarCodeDisplay',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const ProfileDetailScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} options={{
          title:'Profile Detail',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const ProfileScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          title:'',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const CameraScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{
          title:'CameraScreen',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}


const AddressScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="AddressScreen" component={AddressScreen} options={{
          title:'',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}


const SignupScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
       <Stack.Screen name="Login" component={Login} options={{
          title:'Login',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
      <Stack.Screen name="Signup" component={Signup} options={{
          title:'Signup',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const LoginScreenStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}>
      <Stack.Screen name="Login" component={Login} options={{
          title:'Login',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           )}}/>
    </Stack.Navigator>
  );
}

const ProductsStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Products" component={Products} options={{
          title:'Products',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           ),
           headerCentre:()=>(
            <Icon.Button name="ios-search" size={25} color={'black'} 
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           ),
           headerRight:()=>(
            <Icon.Button name="ellipsis-vertical-outline" size={20} color={'black'} 
            backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
           ),
        //    headerRight:()=>(
        //     <Icon.Button name="ios-dots-three-verticle" size={25} color={'black'}
        //     backgroundColor="#fff" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
          
        //    )
          
                      }}
        />
         {/* <Stack.Screen name="ProductScreen" component={ProductScreen} options={{
          title:'Product Screen',
          headerLeft:()=>(
            <Icon.Button name="arrow-back" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.goBack()}}></Icon.Button>
          
           )}}/> */}
          {/* <Stack.Screen name="Categories" component={Categories} options={{
          title:'Categories',
          headerLeft:()=>(
            <Icon.Button name="arrow-back" size={25} color={'black'}
            backgroundColor="#fff" onPress={()=>{navigation.goBack()}}></Icon.Button>
          
           )}}/> */}
      </Stack.Navigator>
    );
  }

export { MainStackNavigator, ContactStackNavigator,ProductsStackNavigator,CategoriesStackNavigator,CameraScreenStackNavigator,ProfileDetailScreenStackNavigator,ProfileScreenStackNavigator,AddressScreenStackNavigator,SignupScreenStackNavigator,BarCodeScannerStackNavigator,BarCodeDisplayStackNavigator,LoginScreenStackNavigator,AmulGoldMilkTwoStackNavigator,AmulGoldMilkThreeStackNavigator,UploadProductImageStackNavigator,AsyncStorageImageStackNavigator,ProductScreenStackNavigator};