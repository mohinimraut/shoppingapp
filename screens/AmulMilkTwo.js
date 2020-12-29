import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,ScrollView} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
import PickerC from './PickerC'
import { FAB } from 'react-native-paper';
export default class AmulGoldMilkTwo extends React.Component {
   constructor(props){
       super(props);
       this.state={
        quantity:'',
        weight:'',
        price:'',
        productdescription:'',
        stockavailability:'',
      firstname:"",
      email:"",
      password:"",
      hidePassword: true ,
      location:null,
      geocode:null,
      errorMessage:"",
   
      
    }
   }
 
  componentDidMount(){
    // this.getLocationAsync()
  }

 
 
  render(){
    const { navigation } = this.props;
    // const {location,geocode, errorMessage } = this.state

    
    return (
        <ScrollView style={{backgroundColor:"#fff"}}>
      <View style={styles.container}>
     
     
       
        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Quantity</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({quantity:text})}/>
            
      

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
          <Text style={{color:"gray"}}>Weight</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({weight:text})}/>
            
      

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
        <Text style={{color:"gray"}}>Price</Text>
        <View>
 <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({price:text})}/>
          
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
          <Text style={{color:"gray"}}>Product Description</Text>
          <TextInput  
            style={styles.inputText}
            placeholder="" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productdescription:text})}/>
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
          <Text style={{color:"gray"}}>Stock Availabilty</Text>
          <PickerC/>
          
        </View>
       
        <View
  style={{
    width:"80%",
    borderBottomColor: 'gray',
    marginLeft:20,
    borderBottomWidth: 1,
  }}
/>    
       
        
       
       


       <View style={{flexDirection:"row",flex:1,paddingTop:120}}>
    <TouchableOpacity>
        <View style={{backgroundColor: "#e5e4e2",height:55,width:175,alignItems:"center",alignContent:"center",justifyContent:"center"}}>
        <Text style={{color:"gray",fontSize:22}}>Previous</Text>
        </View>
    </TouchableOpacity>
    

    <TouchableOpacity  onPress={() => this.props.navigation.navigate('AmulGoldMilkThree')} >
        <View style={{backgroundColor: "#03396c",height:55,width:175,alignItems:"center",alignContent:"center",justifyContent:"center"}}>
        <Text style={{color:"#fff",fontSize:22}}>Next</Text>
        </View>
    </TouchableOpacity>
    
</View>

      </View>
     


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40
    
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


