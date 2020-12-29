import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,ScrollView} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
// import { RadioGroup } from 'react-native-btr';

import { FAB,RadioButton} from 'react-native-paper';
export default class ProfileScreen extends React.Component {
   
  state={
    firstname:"",
    email:"",
    password:"",
    hidePassword: true ,
    location:null,
    geocode:null,
    errorMessage:"",
   
    checked: 'first',

    
  }
  componentDidMount(){
    this.getLocationAsync()
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.BestForNavigation});
    const { latitude , longitude } = location.coords
    this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});

  };
  getGeocodeAsync= async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location)
    this.setState({ geocode})
  }
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

 
  render(){
    const { checked } = this.state;
  

    const {location,geocode, errorMessage } = this.state;
    return (
        <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View>
          <Text style={styles.logo}>Address</Text>

          </View>
       
        </View>
        
       
        
        <View style={{paddingRight:100,height:250}} >
          <View style={{flex:1,flexDirection:"row"}}>
          <View style={{paddingLeft:15}} >
          <Text style={{color:"black",margin:5}}>{geocode  ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` :""}</Text>

          <Text style={styles.heading3}>{geocode ? geocode[0].street :""}</Text>
          <Text style={styles.heading3}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
          <Text style={styles.heading3}>{errorMessage}</Text>

        </View>
        <View>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
      </View>

          </View>
        

        <View style={{flexDirection:"row"}}>

        <View style={{paddingLeft:15,marginTop:5}} >
          <Text style={{color:"black",margin:5}}>{geocode  ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` :""}</Text>

          <Text style={styles.heading3}>{geocode ? geocode[0].street :""}</Text>
          <Text style={styles.heading3}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
          <Text style={styles.heading3}>{errorMessage}</Text>

        </View>
        <View>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
      </View>

        </View>
        
        </View>           

           <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.AddBtn}>
          <Text style={{color:"blue"}} >Add Address</Text>
        </TouchableOpacity>               
                     
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.signupBtn}>
          <Text style={styles.signupText}>Continue to Profile Page</Text>
        </TouchableOpacity> 
   
       
        
      
       


      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
  logo:{
    
    fontSize:30,
    color:"black",
    marginBottom:40,
    fontWeight:'100',
    paddingTop:100,
    paddingLeft:25
    
  },
  inputView:{
   paddingLeft:20
  
    
  
    
    
    
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#A3A9AB",
    fontSize:11
  },
  signupBtn:{
    width:"80%",
    backgroundColor:"#4D467F",
    marginLeft:20,
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    elevation:6,shadowOpacity: 0.27,
    shadowRadius: 4.65,shadowColor: "black",shadowOffset: {
      width: 0,
      height: 3,
    },

  },

  AddBtn:{
    width:"80%",
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor:"#fff",
    marginLeft:20,
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    elevation:6,shadowOpacity: 0.27,
    shadowRadius: 4.65,shadowColor: "black",shadowOffset: {
      width: 0,
      height: 3,
    },

  },

  signupText:{
    color:"white"
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width:"80%",
    height:50,
    marginBottom:20,
 
    borderRadius: 5 ,
  
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
overlay:{
  backgroundColor:"#fff",
  height:"100%",
  width:"100%",
  justifyContent:"center",
  alignItems:"center"
},
heading1:{
  color:"#fff",
  fontWeight:"bold",
  fontSize:30,
  margin:20
},
heading2:{
  color:"#fff",
  margin:5,
  fontWeight:"bold",
  fontSize:15
},
heading3:{
  color:"black",
  margin:5
}
});


