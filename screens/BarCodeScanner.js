import React, {Component} from 'react';
import { StyleSheet,Text,View,Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import { Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class BarcodeScanner extends Component{
constructor(props){
  super(props);
  this.state = {
    CameraPermissionGranted: null,  
    barcode:''
  }
}
 
  async componentDidMount() {
    // Ask for camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ CameraPermissionGranted: status === "granted" ? true : false });
  }


  barCodeScanned = ({data,type}) => {
    //Access the Data
    
        alert(data,type);
      //  this.setState({barcode:data})
      //  console.log(this.state.barcode)
// this.props.navigation.navigate('AmulGoldMilk',{
//   data: data,
            
// })
this.props.navigation.navigate('BarCodeDisplay',{
  data: data,type:type
});

  }

  render(){
   
    const { CameraPermissionGranted } = this.state;
    if(CameraPermissionGranted === null){
      // Request Permission
      return(
        <View style={styles.container}>
            <Text>Please grant Camera permission</Text>
        </View> 
      );
    }
    if(CameraPermissionGranted === false){
        // Permission denied
      return ( 
        <View style={styles.container}>
         <Text>Camera Permission Denied.</Text>
        </View> 
      );
    }
    if(CameraPermissionGranted === true){
      // Got the permission, time to scan
      return (
        <ScrollView>
  <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <BarCodeScanner
          onBarCodeScanned = {this.barCodeScanned }
          style = {{
              height:  DEVICE_HEIGHT/1.1,
              width: DEVICE_WIDTH,
          }}
          >
             
          </BarCodeScanner>
          {/* <Button title="Go To BarcodeScreen" onPress={()=>navigation.navigate('BarCodeScanner')}/> */}
        
        </View>

        </ScrollView>
      
      );
      
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});