import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,ScrollView} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { FAB } from 'react-native-paper';
export default class ProfileScreen extends React.Component {
   
  state={
    firstname:"",
    email:"",
    password:"",
    hidePassword: true ,
    location:null,
    geocode:null,
    errorMessage:""
    
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
    const { navigation } = this.props;
    const {location,geocode, errorMessage } = this.state
    return (
        <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View>
          <Text style={styles.logo}>Profile</Text>

          </View>
        <View style={{paddingLeft:100,paddingTop:80,alignItems:"center",justifyContent:"center"}}>
<FAB
    style={{ width:90,height:90,
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#cfebfd',alignItems:"center",justifyContent:"center",alignContent:"center"
  }}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
</View>

        </View>
        
       
        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Name</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
            
      

        </View>
        
        <View
  style={{
    width:"80%",
    borderBottomColor: 'gray',
    marginLeft:20,
    borderBottomWidth: 1,
  }}
/>    
        <View style={{paddingLeft:20,height:100}} >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddressScreen')}><Text style={{color:"gray"}}>Your current location</Text></TouchableOpacity>
        <View style={styles.overlay}>
          <Text style={styles.heading3}>{geocode  ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` :""}</Text>
          <Text style={styles.heading3}>{geocode ? geocode[0].street :""}</Text>
          <Text style={styles.heading3}>{location ? `${location.latitude}, ${location.longitude}` :""}</Text>
          <Text style={styles.heading3}>{errorMessage}</Text>

        </View>
          {/* <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({address:text})}/> */}
        </View>

        <View
  style={{
    width:"80%",
    borderBottomColor: 'gray',
    marginLeft:20,
    borderBottomWidth: 1,
  }}
/>    
        <View style={{paddingLeft:20}} >
        <Text style={{color:"gray"}}>Store Details</Text>
        <View>
 <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
            <View style={{marginLeft:240}}>
 
 <TouchableOpacity style={{ width:10,height:40
}}>
 <Image source={require('../assets/downloadarrow.png')}  style={{width:50, height:50,borderRadius:10,
}} />    
 </TouchableOpacity>

</View>
        </View>
         

        </View>
        
        <View
  style={{
    width:"80%",
    borderBottomColor: 'gray',
    marginLeft:20,
    borderBottomWidth: 1,
  }}
/>    
     
            
       
        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Phone Number</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({phonenumber:text})}/>
        </View>
        <View
  style={{
    width:"80%",
    borderBottomColor: 'gray',
    marginLeft:20,
    borderBottomWidth: 1,
  }}
/>    
        
      
       
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Create Account</Text>
        </TouchableOpacity>
   
       
        
       
        {/* <View style={styles.textBoxContainer}>
          <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} />
          <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./assets/hide.png') : require('./assets/show.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
    */}
       


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


