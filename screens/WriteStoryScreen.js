import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Header , Text, View, TouchableOpacity, TextInput, Image ,KeyboardAvoidingView ,ToastAndroid ,Alert} from 'react-native';


export default class WriteStoryScreen extends React.Component{
    render(){
        return(<View>
            <View style={ { backgroundColor:"yellow"}}>
  <view style={ { backgroundColor:"yellow"}}>
      <Text style={styles.design }>Story Hub</Text>
      </view>
</View>
<View style = {styles.inputVeiw }>
   <TextInput style = { styles.InputBox }
                placeholder = "Story Title"></TextInput> 
       <TextInput style = { styles.InputBox }
                placeholder = "Author"></TextInput>    
                <TextInput style = { styles.InputBox1 }
                placeholder = "Write your story"></TextInput>
                <TouchableOpacity style={styles.Scanbutton}>
                    <Text style={styles.displaytext}>Submit</Text>
                    </TouchableOpacity>       
</View>

</View>
        )
    }

}
const styles = StyleSheet.create({
    design : {
   padding:700,
     textAlign:'center',
    fontSize:30,
  alignSelf:'center'
    },
    InputBox: {
        marginTop:30,
        width: 500,
        height: 40,
        borderWidth: 3,
        fontSize: 20

    },
    Scanbutton: {
        width: 100,
        height: 50,
        backgroundColor: "red",
        marginTop:30,
       marginLeft:200
    },
    InputBox1: {
        marginTop:30,
        width: 500,
        height: 200,
        borderWidth: 3,
        fontSize: 20,
        
    },
    displaytext: {
        fontSize: 24


    },
    inputVeiw: {
        flexDirection: 'columnn',
        margin: 20
    },
  })