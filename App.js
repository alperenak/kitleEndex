// onPress={() => this.props.navigation.navigate('MultiplayerTTT')}

import React from 'react';
import { View, Text,Button,TouchableHighlight,SafeAreaView,StyleSheet,ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CalculateIndeks from './screens/calculateIndex.js'
import CalculateThins from "./screens/calculateThins"
import Icon from "react-native-vector-icons/AntDesign"
import {

  Colors,

} from 'react-native/Libraries/NewAppScreen';
class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={{width:"100%",height:"100%", position: 'relative', 
      top: 0,
      left: 0}} source={require("./background.jpg")}>
      
        <View style={{ backgroundColor: "transparent", height: 200, justifyContent: "center", alignItems: "center" }}>
          <View style={{ marginTop: 75, height:50,justifyContent: "center", alignItems: "center",borderWidth:2,borderRadius:20,borderColor:"white",backgroundColor:"red",marginRight:5}}>
<View style={{justifyContent:"center", alignItems:"center",marginRight:7}}>
<Text style={{ color: "white", fontSize: 30,fontWeight:"bold" }}> BMI
          </Text>
           
</View>
         
           
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" , backgroundColor:"transparent"}}>
          <Text style={{color:"white",fontSize:30 ,marginTop:20}}>Cinsiyetiniz ?</Text>
        <View style={{ backgroundColor: "transparent", height: 200, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <View>
              <Text style={{ color: "white", marginLeft: 5, fontWeight: "bold", fontSize: 15 }}>ERKEK</Text>
            </View>
            <View style={styles.box}>
            <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center',borderRadius:20,width:50,height:50}} 
                underlayColor="gray"
                onPress={() => this.props.navigation.navigate('CalculateIndeks')}
                >
              <Icon name="man" size={40} color="blue" />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View>
              <Text style={{ color: "white", marginLeft: 53, fontWeight: "bold", fontSize: 15 }}>KADIN</Text>
            </View>

            <View style={[styles.box, { marginLeft: 50 }]}>
                <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center',borderRadius:20,width:50,height:50}} 
                underlayColor="gray"
                onPress={()=>{this.props.navigation.navigate('CalculateIndeks')}}
                >
                   
                <Icon name="woman" size={40} color="pink" />
                        
                



                </TouchableHighlight>



            </View>
          </View>

        </View>
        </View>
      
        <View style={{ flex: 1, backgroundColor: "transparent" }} />
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  startOnText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.transparent,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  CalculateIndeks: {screen: CalculateIndeks},
  CalculateThins:{screen:CalculateThins}
  
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AppS = createAppContainer(MainNavigator);
export default AppS
