import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image} from 'react-native';
import { FAB } from 'react-native-paper';
export default class Login extends React.Component {
  constructor(props){
    super(props);
  this.state={
    email:"",
    password:""
  }
}
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome,Motabhaai !</Text>
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
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')} >
          <Text style={styles.loginText}>Don't have an account?Signup</Text>
        </TouchableOpacity>

        <View style={{flexDirection:"row",marginTop:50}}>
        <View style={{marginLeft:30}}>
 
 <TouchableOpacity style={{ 
}}>
 <Image source={require('../assets/facebook.png')}  style={{width:60, height:60,shadowColor: '#202020',elevation: 12,borderRadius:10
}} />    
 </TouchableOpacity>

</View>
<View style={{marginLeft:30}}>
 
 <TouchableOpacity style={{ 
}}>
 <Image source={require('../assets/google.png')}  style={{width:60, height:60,shadowColor: '#202020',elevation: 12,borderRadius:10
}} />    
 </TouchableOpacity>

</View>

        </View>

      
       


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
    
    fontSize:25,
    color:"black",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    borderRadius:5,
    backgroundColor:"white",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#A3A9AB",
    fontSize:11
  },
  loginBtn:{
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
  loginText:{
    color:"#A3A9AB"
  }
});
