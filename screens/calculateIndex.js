/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  TextInput,
} from 'react-native';

import CalculateThins from "./calculateThins"
  import AsyncStorage from '@react-native-community/async-storage';
export default class CalculateIndeks extends Component {
  constructor(props){
super(props)
this.state={
weight:0,
height:0,

}



this.calculator=this.calculator.bind(this)
this.renderCalculateValue=this.renderCalculateValue.bind(this)
  }

  


  componentDidMount(){


  }
  storeData = async () => {
    try {
        // value previously stored
let calculatess=String(parseFloat(this.state.weight/(this.state.height*this.state.height/10000)).toFixed(2))
let calculatess1=
      await AsyncStorage.setItem("calculate", calculatess)
    } catch (e) {
      // saving error
    }
  }
  
 
  calculator(){
    this.setState({
      isRender:true
    })

  

}


  renderCalculateValue(){
  
    if(this.state.isRender===true)  {

      return(
        <View style={{justifyContent:"center",alignItems:"center"}}>
  <Text style={{fontSize:20}}>{this.state.weight/(this.state.height*this.state.height/10000)  }</Text>
        </View>
      )
  

    }

    

 
   

  }
  
  render() {

    return (
      <ImageBackground style={{width:"100%",height:"100%", position: 'relative', 
      top: 0,
      left: 0}} source={require("./background1.jpg")}>
      
         <View>
             <View style={{marginLeft:20,marginTop:25 }}>
             <Text style={{fontWeight:"900",fontSize:24,color:"white"}}>Boyunuz:</Text>

             </View>
             
             <View style={{justifyContent: "center",alignItems:"center"}}>
    <TextInput style={{marginTop:25,width:"95%",borderWidth:1,borderRadius:30,paddingLeft:15,borderColor:"white",color:"white"}}placeholder="Boyunuzu giriniz (cm)" onChangeText={(v)=>{this.setState({height:v})}} placeholderTextColor="#B03300" keyboardType="number-pad" maxLength={4}/>
</View>


<View style={{marginLeft:20,marginTop:25 }}>
             <Text style={{fontWeight:"900",fontSize:24,color:"white"}}>Kilonuz:</Text>

             </View>
         <View style={{justifyContent: "center",alignItems:"center"}}>
    <TextInput style={{marginTop:25,width:"95%",borderWidth:1,borderRadius:30,paddingLeft:15,borderColor:"white",color:"white"}}placeholder="Kilonuzu giriniz (kg)"placeholderTextColor="#B03300" onChangeText={(v)=>{this.setState({weight:v})}} keyboardType="number-pad" maxLength={4}/>
</View>


         </View>
         <View style={{justifyContent:"center",alignItems:"center"}}>

         <View style={[{justifyContent:"center",alignItems:"center", marginTop:100,borderRadius:12,borderWidth:0.5,width:120,height:35,backgroundColor:"#1DD15D",borderColor:"gray"},styles.box]}>
           <TouchableHighlight underlayColor="gray" style={{width:120,height:35,borderRadius:12,justifyContent:"center",alignItems:"center"}} onPress={()=> {this.props.navigation.navigate('CalculateThins');this.storeData()}} >
           <Text style={{fontSize:20,color:"black"}}>

HESAPLA

</Text>

           </TouchableHighlight>

</View>

{this.renderCalculateValue()}
         </View>
     </ImageBackground>
    );
  }

};
 
const styles={
box:{
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: 24,

},



}


