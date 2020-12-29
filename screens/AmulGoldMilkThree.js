import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,ScrollView} from 'react-native';
// import { Container, Header, Item, Input, Icon, Button,Content, List, ListItem, Left, Body, Right, Thumbnail,Card,CardItem,Fab } from 'native-base';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
import PickerC from './PickerC'
import { FAB } from 'react-native-paper';
export default class AmulGoldMilkThree extends React.Component {
  constructor(props){
      super(props);
      this.state={
      
 
    
    }
    

  } 
  omponentDidMount(){
    
  }

 
 
  render(){
      const amulmilk=[
           {
            name:'Amul Gold Milk',
            categoryname:'Milk & Dairy products',
            barcode:'1245789463124578',
            price:'55',
            quantity:'1 Packet',
          weight:"1 Litre",
          productdescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text",
          
          stockavailability:"",
          
           }
      ]
    const { navigation } = this.props;
    // const {location,geocode, errorMessage } = this.state

    
    return (
        <ScrollView style={{backgroundColor:"#fff"}}>

      <View style={styles.container}>
          
      {amulmilk.map((amulmilk)=><View>
<View style={{flexDirection:"row"}}>
<Image source={require('../assets/amulmilk1.jpg')}  style={{width:120, height:200,shadowColor: '#202020',marginLeft:5,marginTop:16,borderRadius:10
 }} />    
     <View>
     <View style={styles.inputView} >
          <Text style={{color:"black",fontSize:20,fontWeight:'bold'}}>{amulmilk.name}</Text>           

        </View>   
        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Category Name</Text>
          <TextInput  
            style={styles.inputText}
            placeholder={amulmilk.categoryname}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({categoryname:text})}/>
            
      

        </View>

        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Barcode</Text>
          <TextInput  
            style={styles.inputText}
            placeholder={amulmilk.barcode}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({barcode:text})}/>
            
      

        </View>


        <View style={{flexDirection:"row"}}>
<View style={{paddingLeft:20}} >
        <Text style={{color:"gray"}}>Price</Text>
        <View>
 <TextInput  
            style={styles.inputText}
            placeholder={amulmilk.price}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({price:text})}/>
          
        </View>
        </View>

        <View style={{paddingLeft:20}} >
        <Text style={{color:"gray"}}>Quantity</Text>
        <View>
 <TextInput  
            style={styles.inputText}
            multiline={true}
            placeholder={amulmilk.quantity}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({price:text})}/>
          
        </View>
        </View>

        <View style={{paddingLeft:20}} >
        <Text style={{color:"gray"}}>Weight</Text>
        <View>
 <TextInput  
            style={styles.inputText}
            placeholder={amulmilk.weight}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({weight:text})}/>
          
        </View>
        </View>
        
        

</View>



     </View>
     

</View>

       
       
        
       






       
        


     
            
       
        <View style={styles.inputView} >
          <Text style={{color:"gray"}}>Product Description</Text>
          <TextInput  
            style={{height:50,
                color:"black",width:'80%'}}
            placeholder={amulmilk.productdescription}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({productdescription:text})}/>
        </View>
       
        
<View style={styles.inputView} >
          <Text style={{color:"gray"}}>Stock Availabilty</Text>
          <PickerC/>
          
        </View>
       
       
        
       
       


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

</View>)}










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


