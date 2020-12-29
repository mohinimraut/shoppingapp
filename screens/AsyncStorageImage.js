import React from "react";
import { View, StyleSheet, Text,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {Appbar,TextInput,Button,Card,List} from 'react-native-paper'
export default class AsyncStorageImage extends React.Component {
  arr=[]
  id=0
  state={
    text:'',
    item:[{id:1,data:"loading"}]
  };
  storedata=async()=>{
    this.arr.push({id:this.id,data:this.state.text})
    this.id++;
   await AsyncStorage.setItem("mylist",JSON.stringify(this.arr))
   this.setState({
     item:JSON.parse(await AsyncStorage.getItem("mylist"))
   })


   console.log(this.state)
  
  }
 
async componentDidMount(){
  this.setState({
    item:JSON.parse(await AsyncStorage.getItem("mylist"))
  })
  this.arr=JSON.parse(await AsyncStorage.getItem("mylist"))
}
render(){

if(this.state.item.length>0){
 renderList=this.state.item.map(item=>{
  return(
    <Card style={{margin:10}}> 
<Text></Text>
<List.Item
key={item.id}
    title={item.data}
    description="Item description"
    right={() => <List.Icon icon="delete" />}
  />
    </Card>
  ) 
})
}else{
  renderList= <Text>No Items</Text>
}
  return(
<View>
    <Appbar.Header>
      <Appbar.Content
      title="ADD TODO"
      />
  
    </Appbar.Header>
    <TextInput
      label="Email"
      value={this.state.text}
      
      onChangeText={text => this.setState({text})}
    />
    <Button mode="contained" onPress={this.storedata}>
    Press me
  </Button>
   <View>{renderList}</View>

  </View>
  )
  
}
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

