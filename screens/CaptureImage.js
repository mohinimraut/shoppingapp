
import * as React from 'react';
import {View, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CaptureImage ({route}){
    const navigation = useNavigation();
    const {photo} = route.params;
    return(
     <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <View style ={{
        borderStyle: 'dotted',
        borderWidth: 2, 
        borderRadius: 2,
        alignItems:'center',
        justifyContent:'center',
        padding:2
        }}>
       <Image
           source={{ uri:photo.uri}}
           style={{width:380, height:480, alignItems:'center', justifyContent:'center'}}
        /> 
        
        </View>
        <View style={{flexDirection: "row", alignItems:'center', justifyContent:'center', marginTop:'10%',}}>
        <Button
        title="Cancel"
        disabled
        onPress={() => {}}
         />
       <Button
        title="Done"
        color="rgb(44,69,99)"
        onPress={() => navigation.navigate('ViewProducts',{'photo':photo})}

        // onPress={() => navigation.navigate('AsyncStorageImage',{'photo':photo})}

        />
        </View>
    </View>

    );
}


