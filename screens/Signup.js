import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';

import { FAB } from 'react-native-paper';
export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      hidePassword: true 
      
    }

}
  
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Signup</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({name:text})}/>
            
        </View>
        <View style={styles.inputView} >
          
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        
         <View style={styles.SectionStyle} >
         <TextInput  
          
          secureTextEntry={this.state.hidePassword} 
          style={{ height:50,
            color:"black",margin:15}}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>
{/* <Image source={require('./assets/show.png')} style={styles.ImageStyle} /> */}


<TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('../assets/hide.png') : require('../assets/eye3.png')} style={{
      height: 30,
      width: 30,backgroundColor:"black",marginRight:15}} />
          </TouchableOpacity>
           </View> 
     
            
       
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Phone Number" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({phonenumber:text})}/>
        </View>


        
      
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>SIGNUP</Text>
        </TouchableOpacity>
   
       
        <TouchableOpacity >
          <Text style={styles.signupText}>Don't have an account?Signup</Text>
        </TouchableOpacity>

       
        {/* <View style={styles.textBoxContainer}>
          <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox} />
          <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
            <Image source={(this.state.hidePassword) ? require('./assets/hide.png') : require('./assets/show.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
    */}
       


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    
    fontSize:30,
    color:"black",
    marginBottom:40,
    fontWeight:'100',
    marginLeft:-170
  },
  inputView:{
    width:"80%",
    borderRadius:5,
    backgroundColor:"white",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    
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
});
