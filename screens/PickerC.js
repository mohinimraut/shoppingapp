import React, {Component} from 'react';
import { StyleSheet,Text,View,} from 'react-native';
import {Picker} from '@react-native-community/picker';
export default class PickerC extends Component{
    state={
        language:'english'
    }
    render(){
        
        return(
            <View>
         <Picker style={{widht:'100%'}}
         selectedValue={this.state.language}
         onValueChange={(itemValue,itemIndex)=>this.setState({language:itemValue})}
         >
             <Picker.item  label="Spanish" value="spanish"/>
             <Picker.item  label="English" value="english"/>
             <Picker.item  label="In Stock" value="instock"/>

         </Picker>
            </View>
        )
    }
}