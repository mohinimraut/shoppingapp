import React,{useState, useEffect}from 'react'
import { Text, View,ImageBackgroundProps,Image,ScrollView,Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { BoxShadow } from "react-native-shadow";
import { Avatar,  Card, Title, Paragraph } from 'react-native-paper';
// import { FAB } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function HomeScreen({navigation}) {
  const orders=[
    {
        id:1,       
        amount:15000 ,
        Pending_Orders:25,
        Confirmed_Orders:10,
        last_order:2,
        Sales:4025

    }
    
]

const level=[
  {
      id:1,       
      total:270 ,
      level:1,
      target:300,      

  }]

  const customer=[
    {
        id:1,       
        amount:43500 ,
        customers:18     
          
    }
  
]

const visits=[
  {
      id:1,       
      totalvisits:102,
      
        
  }

]
    const shadowOpt = {
        width: 50,
        height: 50,
        color: "#000",
        border: 2,
       
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
      };

      const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

    return (
<ScrollView>
  <View style={{marginTop:10}}>
    <Text>Hello,Motabhaai!</Text>
  </View>
<View style={{ backgroundColor: "#00022e",
    height: 90,
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
   
    margin:10,
    borderRadius:10,
    marginTop:8,flexDirection:"row"

}}>
  <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
  <View style={{width:70,marginLeft:10,flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:8}}>
  
<Image source={require('../assets/addnewproduct3.png')}  style={{width:20, height:20,shadowColor: '#202020',elevation: 12
 }} /> 
  
<Text style={{color:"#fff",marginLeft:15}}>Add New Product</Text>
</View>
  </TouchableOpacity>


  <TouchableOpacity>
  <View style={{width:60,marginLeft:55,flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:8}}>
  
<Image source={require('../assets/rupees2.png')}  style={{width:20, height:20,shadowColor: '#202020',elevation: 12
 }} /> 
  
<Text style={{color:"#fff",marginLeft:15}}>View Transactions</Text>
</View>
  </TouchableOpacity>

{/* <View style={{backgroundColor:"red",width:60,marginLeft:55}}>
<Text style={{color:"#fff"}}>View Transactions</Text>
</View> */}

<TouchableOpacity>
  <View style={{width:70,marginLeft:55,flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:8}}>
  
<Image source={require('../assets/ledger1.jpg')}  style={{width:20, height:20,shadowColor: '#202020',elevation: 12
 }} /> 
  
<Text style={{color:"#fff",marginLeft:15}}>Ledger Entry</Text>
</View>
  </TouchableOpacity>
{/* 
<View style={{backgroundColor:"red",width:60,marginLeft:55}}>
<Text style={{color:"#fff"}}>Ledger Entry</Text>
</View>
				 */}
			</View>
<View style={{ flex: 1,marginTop:20}}>

          <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}>
         
{/* <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   style = {{ width: 50, height: 50,marginHorizontal:10}}
   /> */}
       <Image source={require('../assets/purchase1.png')}  style={{width:50, height:50,}} />     
          
   <View style={{marginLeft:30}}>
   <Text>Pending Orders</Text>
   <Text style={{fontSize:12,color:"gray"}}>Check your order status here</Text>
   </View>
  <View style={{marginLeft:30}}>
 
      <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightarrow.png')}  style={{width:50, height:50,shadowColor: '#202020',elevation: 12
 }} />    
      </TouchableOpacity>
     
  </View>
          </View>
      
          <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}>
         
         {/* <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
            style = {{ width: 50, height: 50,marginHorizontal:10}}
            /> */}
             
                   
            <View style={{marginLeft:10,marginLeft:5}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Store Sales</Text>           
            </View>

           <View style={{marginLeft:60}}>
           <Text>Today, {currentDate}</Text>   

<View style={{flexDirection:'row'}}>
           <Text style={{fontWeight:"bold"}}>Today</Text>     
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/downarrow.png')}  style={{width:20, height:20,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>


           </View>
                   </View>





                <View>
      {orders.map((order) =>
        <Card style={{width:'95%',margin:10,borderRadius:10}}>
        

          <View style={{flexDirection:"row",marginTop:10}}>
          <View>
      <Text style={{fontWeight:"bold",fontSize:20,marginLeft:15}}>{order.amount}</Text>
          </View>
       <View>
       <Text style={{fontWeight:"bold",fontSize:20}}>  {'\u20B9'} </Text>
       </View>
          </View>
         
        <Card.Content>
          {/* <Title>Card title</Title> */}
          {/* <Paragraph>Card content</Paragraph> */}
        <View style={{flexDirection:"row"}}>

        <View style={{flexDirection:"column"}}>
          <Text style={{color:"#1b7e79"}}>Pending Orders</Text>
            <View>
            <Text style={{color:"#1b7e79"}}>{order.Pending_Orders} orders</Text>
            </View>
          </View>

          <View style={{flexDirection:"column",marginLeft:20}}>
          <Text style={{color:"#1b7e79"}}>Pending Orders</Text>
            <View>
            <Text style={{color:"#1b7e79"}}>{order.Pending_Orders} orders</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',marginLeft:20}}>
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/plus.png')}  style={{width:50, height:50,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>


        </View>
        
         
        <View style={{flexDirection:"row"}}>
        <View style={{marginLeft:-27,marginBottom:-38}}>
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightarrow.png')}  style={{width:35, height:35,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>  
<View style={{marginLeft:20}}>
  <Text style={{color:"gray"}}>Your last Order - {order.last_order}</Text>
    
  </View>

  <View style={{marginLeft:20}}>
<Text style={{color:"gray"}}>Sales - {order.Sales}</Text>
    
  </View>
  
</View>

        </Card.Content>
      
      </Card>
      )}
    </View>





   <View>
      {level.map((level) =>
        <Card style={{width:'95%',margin:10,borderRadius:10}}>
        

        
        <Card.Content>
          {/* <Title>Card title</Title> */}
          {/* <Paragraph>Card content</Paragraph> */}
        <View style={{flexDirection:"row"}}>

        <View style={{flexDirection:"row"}}>
         
            <View>
            <Text style={{color:"black",fontWeight:"bold"}}>{level.total}</Text>
            </View>
            <Text>bv</Text>
          </View>

          <View style={{flexDirection:"row",marginLeft:80}}>
          <Text style={{color:"black",fontSize:25}}>Level</Text>
            <View>
            <Text style={{color:"black",fontWeight:"bold",fontSize:40}}> {level.level} </Text>
            </View>
          </View>
        
          <View style={{flexDirection:'row',marginLeft:20}}>
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightarrow.png')}  style={{width:35, height:35,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>




        </View>
        <View style={{flexDirection:"row"}}>
        <View
  style={{
    width:"20%",
    borderBottomColor: 'orange',
    
    borderBottomWidth: 5,
  }}
/>
<View
  style={{
    width:"40%",
    borderBottomColor: 'gray',
    
    borderBottomWidth: 5,
  }}
/>       
        </View>
       
        <View style={{flexDirection:"row"}}>
        {/* <View style={{marginLeft:-27,marginBottom:-38}}>
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightarrow.png')}  style={{width:35, height:35,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>   */}

<View style={{marginLeft:20}}>
  <Text style={{color:"gray"}}>Target - {level.target} bv</Text>
    
  </View>

 
  
</View>

        </Card.Content>
      
      </Card>
      )}
    </View>







       <View >
         <Text style={{fontSize:20}}>Store ledger</Text>

<View style={{flexDirection:"row"}}>
<View style={{width:"50%"}}>
      {customer.map((customer) =>
        <Card style={{width:'95%',margin:10,borderRadius:10}}>
        
        <View style={{flexDirection:'row',marginLeft:20}}>
<View style={{marginLeft:20}}>
  <Text style={{color:"black"}}>You will get </Text>
    
  </View>

  <View >
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightbrown.png')}  style={{width:30, height:20,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>
</View>
        
        
        <Card.Content>
          {/* <Title>Card title</Title> */}
          {/* <Paragraph>Card content</Paragraph> */}
        <View style={{flexDirection:"row"}}>

        <View style={{flexDirection:"row"}}>
         
            <View>
            <Text style={{color:"black",fontWeight:"bold"}}>{customer.amount}</Text>
            </View>
            <View>
           <Text style={{fontWeight:"bold",fontSize:20}}>  {'\u20B9'} </Text>
            </View>
          </View>

         
        
         



        </View>
     
       
        <View style={{flexDirection:"row"}}>
        
<View style={{marginLeft:0}}>
  <Text style={{color:"gray"}}>From - {customer.customers} customers</Text>
    
  </View>

 
  
</View>

        </Card.Content>
      
      </Card>
      )}
    </View>



    <View style={{width:"50%"}}>
      {visits.map((visit) =>
        <Card style={{width:'95%',margin:10,borderRadius:10,height:80}}>
        
        <View style={{flexDirection:'row',marginLeft:20}}>
<View style={{marginLeft:20}}>
  <Text style={{color:"black"}}>Total visits</Text>
    
  </View>

  <View >
           
           <TouchableOpacity style={{ 
     }}>
      <Image source={require('../assets/rightbrown.png')}  style={{width:30, height:20,shadowColor: '#202020',elevation: 12,marginLeft:10
 }} />    
      </TouchableOpacity>
</View>
</View>
        
        
        <Card.Content>
          {/* <Title>Card title</Title> */}
          {/* <Paragraph>Card content</Paragraph> */}
        <View style={{flexDirection:"row"}}>

        <View style={{flexDirection:"row"}}>
         
            <View>
            <Text style={{color:"black",fontWeight:"bold"}}>{visit.totalvisits} visits</Text>
            </View>
            <View>
          
            </View>
          </View>

         
        
         



        </View>
     
       
        <View style={{flexDirection:"row"}}>
        
<View style={{marginLeft:20}}>
  <Text style={{color:"gray"}}>Check statistics</Text>
    
  </View>

 
  
</View>

        </Card.Content>
      
      </Card>
      )}
    </View>




</View>

       










         </View>  
         <View style={{flexDirection:"row",}}>
<View>
<TouchableOpacity
          style={{ 
            justifyContent:"center",
          alignItems:"center",
            width:"100%",
             marginTop:10,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:20,
            marginRight:30,
            backgroundColor:"#72A0C1",
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'}}
          activeOpacity = { .5 }
         
       >
 
            <Text style={{}}>Scan Bar Code</Text>
            
      </TouchableOpacity>
</View>
         

<View>
<TouchableOpacity
          style={{justifyContent:"center",
          alignItems:"center",
            width:"100%",
            marginTop:10,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:50,
            marginRight:30,
            backgroundColor:"#72A0C1",
            borderRadius:10,
            borderWidth: 1,
            borderColor: '#fff'}}
          activeOpacity = { .5 }
         
       >
 
            <Text style={{}}>Learn More</Text>
            
      </TouchableOpacity>
</View>

            

           </View> 
       




      </View>
</ScrollView>
      
    );
  }

export default HomeScreen
