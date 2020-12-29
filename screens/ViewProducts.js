import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList,Button,} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';

export default class ViewProducts extends React.Component {
    constructor(props){
      super(props);
    this.state={
      imgstore:[]
    }
  }
  
//   storedata=async=>{
// await AsyncStorage.setItem(imgcontainer)
//   }
componentDidMount(){
    
}
    render(){
        var imgcontainer=[]
        const {photo} = this.props.route.params;
        imgcontainer.push(photo)
      

        console.log(imgcontainer)
      
      return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          

          <TouchableOpacity
      style={styles.button}
       onPress={() =>this.props.navigation.navigate('UploadProductImage')}
        >
         <Text style={styles.text}>Add Product Images</Text>
        </TouchableOpacity>

        <FlatList
 
        data={imgcontainer}
        keyExtractor={(imgcontainer, index) => imgcontainer.uri}

        renderItem={({item})=>(
            <View>
                <Image 
              source={item}
              style={{
                  width:260,
                  height:300,
                  borderWidth:2,
                  borderColor:'#d35647',
                  resizeMode:'contain',
                  margin:8
              }}
          />
            </View>
          
      )}
        
        />
     
       </View>
           
           
        );
};
}
const styles =StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center'
    },
    button: {
      backgroundColor: "#DDDDDD",
      padding: 10,
      margin:30,
    }
    
    });