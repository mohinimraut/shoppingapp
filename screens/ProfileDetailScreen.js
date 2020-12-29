import React from 'react'
import { StyleSheet, Text, View,Button,Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
export default class ProfileScreen extends React.Component {
  
render(){
    const profile=[
        {
            id:1,       
            fname:"Prachi",
            storedetail:"General Store",
            mname:"Saurabh",
            lname:"Sawant",
            products:1200,
            categories:99,
            ordersdelivered:101,
            poroduct1:"Fruits & Vegetables",
            product2:"Dairy & Bakery",
            product3:"Snacks",
            address:"Dahisar East",
            phonenmber:9845789456
                
        }
        
    ]
    return (
        <ScrollView style={{}}>
        <View style={{height:'100%',backgroundColor:'white',marginTop:-100}}>
        <View style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
            
        <FAB
    style={{top:150,width:60,height:60,left:80,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}    
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />

<FAB
    style={{top:60,right:75,width:50,height:50,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}    
    small
    icon="message"
    onPress={() => console.log('Pressed')}
  />
  <FAB
    style={{width:20,height:20,top:150,right:85,alignItems:"center",justifyContent:"center",backgroundColor:"#00FF00"}}    
    small
    
    onPress={() => console.log('Pressed')}
  />
        <Image source={require('../assets/girl3.png')}  style={{width:190, height:190,borderRadius:190,}} /> 

        </View>
    <View>{profile.map((data)=>



    <View>

        <View style={{flexDirection:"column"}}>

        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:40,color:"#431D1D"}}>{data.fname}</Text>
        </View>

      
      <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

      <View style={{width:30,height:30,borderRadius:30,backgroundColor:"orange",justifyContent:"center",alignItems:"center",marginRight:60}}>
      <Text style={{color:"#fff"}}>1</Text>
        </View>

        <View style={{marginRight:120}}>
        <Text style={{color:"gray"}}>{data.storedetail}</Text>
        </View>

        <View>
        
        </View>
      </View>
        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <Image source={require('../assets/star.png')}  style={{width:20, height:20,borderRadius:190,}} /> 
        <Image source={require('../assets/star.png')}  style={{width:20, height:20,borderRadius:190,marginLeft:5}} /> 
        <Image source={require('../assets/star.png')}  style={{width:20, height:20,borderRadius:190,marginLeft:5}} /> 
        <Image source={require('../assets/star.png')}  style={{width:20, height:20,borderRadius:190,marginLeft:5}} /> 
        <Image source={require('../assets/star2.png')}  style={{width:18, height:18,borderRadius:190,marginLeft:5}} /> 
        </View>



        </View>
        
   

<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>

        <View >
       
        <Text>{data.products}</Text>
        <Text style={{color:'gray',fontSize:12}}>Products</Text>
        </View>

        <View style={{width:1,height:30,backgroundColor:"gray",justifyContent:"center",alignItems:"center",marginLeft:15}}>
   
   </View>


        <View style={{marginLeft:5}}>
             <Text>{data.categories}</Text>
        <Text style={{color:'gray',fontSize:12}}>Categories</Text>
        </View>


        <View style={{width:1,height:30,backgroundColor:"gray",justifyContent:"center",alignItems:"center",marginLeft:15}}>
   
        </View>

        <View style={{marginLeft:5}}>
        <Text>{data.ordersdelivered}</Text>
        <Text style={{color:'gray',fontSize:12}}>Orders</Text>
        <Text style={{color:'gray',fontSize:12}}>delivered</Text>

        </View>
        

        <View style={{width:30,height:30,borderRadius:30,backgroundColor:"orange",justifyContent:"center",alignItems:"center",marginLeft:5}}>
      <Text style={{color:"#fff"}}>2</Text>
        </View>
</View>


<View style={{flexDirection:"row"}}>
<ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  pagingEnabled={true}
>


<View style={{width:80,height:150,backgroundColor:"#4e5180",justifyContent:"center",alignItems:"center",marginLeft:15,borderRadius:5,marginTop:15}}>
   <Text style={{color:'#e0e0e9',fontSize:30}}>99</Text>
   <Text style={{color:'#e0e0e9',padding:5}}>Categories</Text>
   </View>

 
   {/* <Image source={require('../assets/pumkin.png')}  style={{width:60,height:60,borderRadius:80,elevation:10}} />  */}
  
  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  <FAB
    style={{ 
        width:80,height:80,borderRadius:80,elevation:10,
    margin: 16,
    right: 0,
    bottom: 0,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}
    small
    icon="apple"
    onPress={() => console.log('Pressed')}
  ></FAB>
<View style={{width:53}}>
<Text>{data.poroduct1}</Text>

</View>

  </View>
  

  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

<FAB
    style={{ 
        width:80,height:80,borderRadius:80,elevation:10,
    margin: 16,
    right: 0,
    bottom: 0,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}
    small
    icon="apple"
    onPress={() => console.log('Pressed')}
  ></FAB>
  <View style={{width:53}}>
<Text>{data.poroduct1}</Text>

</View>

  </View>
  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  <FAB
    style={{ 
        width:80,height:80,borderRadius:80,elevation:10,
    margin: 16,
    right: 0,
    bottom: 0,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}
    small
    icon="apple"
    onPress={() => console.log('Pressed')}
  ></FAB>
   <View style={{width:53}}>
<Text>{data.poroduct1}</Text>

</View>


  </View>
  </ScrollView>

</View>




<View style={{margin:15}}>
<View style={{flexDirection:"row",marginTop:10,margin:15,justifyContent:"center",alignItems:"center"}}>

  <Text style={{fontWeight:"bold"}}>Profile Details</Text>

  <TouchableOpacity>
  <Image source={require('../assets/edit1.jpg')}  style={{width:40, height:40,marginLeft:180}} /> 
    </TouchableOpacity>

</View>

<View style={{flexDirection:"row",padding:10}}>
  <Text style={{color:'gray'}}>Name</Text>
  
  <Text style={{paddingLeft:95}}>{data.fname}</Text>
  <Text style={{marginLeft:8}}>{data.mname}</Text>
  <Text style={{marginLeft:8}}>{data.lname}</Text>
</View>

<View style={{width:'90%',height:1,backgroundColor:"gray"}}>
   
   </View>
 
<View style={{flexDirection:"row",padding:10}}>
  <Text style={{color:'gray'}}>Address Lane</Text>
  <Text  style={{paddingLeft:45}}>{data.address}</Text>
</View>

<View style={{width:'90%',height:1,backgroundColor:"gray"}}>
   
   </View>
 

<View style={{flexDirection:"row",padding:10}}>
  <Text style={{color:'gray'}}>Store Details</Text>
  <Text style={{paddingLeft:50}}>{data.storedetail}</Text>
</View>

<View style={{width:'90%',height:1,backgroundColor:"gray"}}>
   
   </View>
 

<View style={{flexDirection:"row",padding:10}}>
  <Text style={{color:'gray'}}>Phone Number</Text>
  <Text style={{paddingLeft:38}}>{data.phonenmber}</Text>
</View>

<View style={{width:'90%',height:1,backgroundColor:"gray"}}>
   
   </View>
 

</View>






    </View>    





    )}
    
    
    </View>

       
        </View>
        </ScrollView>
    )
}
}
