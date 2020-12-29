import React from "react";
import { View, Button, Text, StyleSheet,TextInput,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const Categories = ({ navigation }) => {
  const products=[
    {
        id:1,       
        poroduct1:"Fruits & Vegetables",
        product2:"Dairy & Bakery",
        product3:"Snacks & Branded Foods",
      
        product4:'Beverages',
        product5:'Staples',
        product6:'Personal Care',
        
        product7:"sample",
      
            
    }
    
]
  return (
    <View style={styles.center}>
   {products.map((product) =>
   <View>

       
  

          

            <View style={{
              margin:20
            }}>


<View style={{flexDirection:"row",marginLeft:40,marginTop:20}}>

<View style={{width:70,}}>
  <View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
  <Image source={require('../assets/fruitvegetable.png')} style={{width:70, height:70,borderRadius:70,}} />

  </View>
<Text>{product.poroduct1}</Text>

</View>

<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>
</View>

<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>


<Text>{product.poroduct1}</Text>
</View>

</View>


<View style={{flexDirection:"row",marginLeft:40,marginTop:20}}>

<View style={{width:70}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>

</View>

<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>
</View>

<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>
</View>

</View>

<View style={{flexDirection:"row",marginLeft:40,marginTop:20}}>

<View style={{width:70}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>

</View>

<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>
</View>
<View style={{width:70,marginLeft:25}}>

<View style={{backgroundColor:"#f0f5f5",elevation:10,shadowOpacity:0.5,shadowRadius:20,width:70, height:70,borderRadius:70,}}>
<Image source={require('../assets/fruitvegetable.png')}  style={{width:70, height:70,borderRadius:70,}} />
</View>

<Text>{product.poroduct1}</Text>
</View>

</View>

          </View>

        





   </View>)}
  
  
  


  

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    backgroundColor:"#f0f5f5"
  },
  searchSection: {
    elevation:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width:'60%',
    borderRadius:10,
    margin:10
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    width:'60%',borderRadius:10
},
button: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10
},
});

export default Categories;
