import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,ScrollView} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';
// import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
// import { RadioGroup } from 'react-native-btr';

import { FAB,RadioButton} from 'react-native-paper';
export default class BarCodeDisplay extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
          data:[],
          fullData:[],
          loading:false,
          error:null
        }
      }
  
  componentDidMount(){
    this.requestAPIPhotos()
  }

  requestAPIPhotos=()=>{
    this.setState({loading:true})
    const apiURL="https://jsonplaceholder.typicode.com/photos"
    fetch(apiURL).then((res)=>res.json()).then((resJson)=>{
      this.setState({
        loading:false,
        data:resJson,
        fullData:resJson,
        query:''
      })
    }).catch(error=>{
      this.setState({error,loading:false})
    })

  }


  
 
  render(){  
    // const { navigation } = this.props;
    // const data = navigation.getParam('da','NO-ID');

    const { data,type} = this.props.route.params;
    return (
      
<ScrollView>

<View style={{backgroundColor:"#fff"}}>
<View style={{flexDirection:'row',margin:10,paddingTop:30}}>
<Text style={{fontSize:20}}>Feature Images</Text>
<Text style={{color:'gray',paddingLeft:155}}>See all</Text>
      </View> 

     


<ScrollView horizontal={true}>
<View style={{flexDirection:"row",flex:1,marginTop:10}}>
<View>
<FAB
    style={{ width:120,height:150,
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:'#cfebfd',alignItems:"center",justifyContent:"center",alignContent:"center",borderRadius:4,size:100
  }}
    small
   
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
</View>

  <Image source={require('../assets/amulmilk1.jpg')}  style={{width:120, height:150,shadowColor: '#202020',marginLeft:5,marginTop:16,borderRadius:4
  }} />    

<Image source={require('../assets/amulmilk1.jpg')}  style={{width:120, height:150,shadowColor: '#202020',marginLeft:16,marginTop:16,borderRadius:4
 }} />   

<Image source={require('../assets/amulmilk1.jpg')}  style={{width:120, height:150,shadowColor: '#202020',marginLeft:16,marginTop:16,borderRadius:4
 }} />  

</View>

</ScrollView>
 
      <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Product Name</Text>
          <Text>data: {JSON.stringify(data)}</Text>
          {/* <Text>{JSON.stringify(this.props.route.params.barcode)}</Text> */}
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



<View style={styles.inputView} >
          <Text style={{color:"gray"}}>Barcode</Text>
          <Text>Barcode: {JSON.stringify(data)}</Text>
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



<View style={styles.inputView} >
          <Text style={{color:"gray"}}>Category Name</Text>
          <Text>type: {JSON.stringify(type)}</Text>
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


<View style={{flexDirection:"row",flex:1,paddingTop:120}}>
    <TouchableOpacity>
        <View style={{backgroundColor: "#e5e4e2",height:55,width:175,alignItems:"center",alignContent:"center",justifyContent:"center"}}>
        <Text style={{color:"gray",fontSize:22}}>Previous</Text>
        </View>
    </TouchableOpacity>
    

    <TouchableOpacity>
        <View style={{backgroundColor: "#03396c",height:55,width:175,alignItems:"center",alignContent:"center",justifyContent:"center"}}>
        <Text style={{color:"#fff",fontSize:22}}>Next</Text>
        </View>
    </TouchableOpacity>
    
</View>




        </View>




</ScrollView>

        
       


      
    )

}

}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
  
      
    // },
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