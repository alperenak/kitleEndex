
import React,{Component} from "react"
import {

  View,
  Text,
  ImageBackground,
  LayoutAnimation, 
  TouchableHighlight

} from 'react-native';
import CalculateIndex from "./calculateIndex"
import CalculateIndeks from './calculateIndex';
import AsyncStorage from '@react-native-community/async-storage';

export default class CalculateThins extends Component {
constructor(props){

super(props)

this.state={
 height:0,
weight:0,
result:this.value,
backgroundPics:require("./backgroundBlue.jpg"),
color:"white",
marginTop:25,
text:"",
bottomText:"",
isRender:false,
background:"transparent"
}
this.loop=this.loop.bind(this)
this.value=0
this.renderItems=this.renderItems.bind(this)
}
componentDidMount(){
 
    this.timer=setInterval(this.loop,10000/60)

    
}

componentWillUnmount(){
clearInterval(this.timer)

}
loop(){
    if(this.state.kerem>=0 && this.state.kerem<=18.4){

        this.setState({
            backgroundPics:require("./backgroundJokerjpg.jpg"),
            text:"Çok zayıfsın",
            bottomText:"Uzunluğunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz."
        })

    }
    else if(this.state.kerem>=18.5&&this.state.kerem<=24.9){
        this.setState({

            backgroundPics:require("./backgroundBlue.jpg"),
            text:"Normal kilodasın",
            bottomText:"Uzunluğunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz."
        })
    }
    else if(this.state.kerem>=25&&this.state.kerem<=29.9){

        this.setState({

            backgroundPics:require("./backgroundRed.jpg"),
            text:"Çok kilolusun!",
            bottomText:"Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        })
    }
    else if(this.state.kerem>=30&&this.state.kerem<=34.9){

        this.setState({

            backgroundPics:require("./dangerBackground.jpg"),
            text:"I. Dereceden Obez!",
            bottomText:"Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."

        })  
    }

    else if(this.state.kerem>=35&&this.state.kerem<39.9){

        this.setState({
            backgroundPics:require("./backgroundFat.jpg"),
            color:"black",
            marginTop:425,
            text:"II.dereceden Obez!",
            bottomText:"Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        })
    }
    else if(this.state.kerem>=40){

        this.setState({
            backgroundPics:require("./DieBackground.jpg"),
            color:"#19E419",
            marginTop:370,
            text:"III. Dereceden Obez!",
            bottomText:"Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz."
        })
    }


this.getData()

}
getData = async () => {
    
    try {
     const value = await AsyncStorage.getItem('calculate')
      if(value !== null) {
        // value previously stored
    this.setState({
        kerem:value
    })
    }
    else{alert("burada öyle birşey yok")}

    } catch(e) {
      // error reading value
      alert("error")
    }
  }
  renderItems(){
//this.state.kerem >0&&<18.4 0=> zayıf #D32F10
//this.state.kerem >18.5&&<24.9 0=> normal
//this.state.kerem >25.0&&<29.9 0=> fazla kilolu
//this.state.kerem >30.0&&<34.9 0=> şişman obez I.sınıf
//this.state.kerem >35.0.0&&<44.9 0=> şişman obez II.sınıf
//this.state.kerem >45.0 aşırı obez (şişman) III.sınıf

return(
  
   <View style={{width:"100%",justifyContent:"center",alignItems:"center"}} > 


<View style={{alignItems:"center",backgroundColor:"transparent ",borderRadius:10,width:"96%",paddingBottom:30,margin:0,borderTopLeftRadius:0,borderTopRightRadius:0}}>
         <View style={{  height:50,justifyContent: "center", alignItems: "center",borderWidth:2,borderRadius:20,borderColor:"white",backgroundColor:"red",marginRight:5,marginTop:20}}>
<View style={{justifyContent:"center", alignItems:"center",marginRight:7}}>
<Text style={{ color: "white", fontSize: 30,fontWeight:"bold" }}> BMI
          </Text>
           
</View>
         
           
          </View>
          <View style={{justifyContent:"center",alignItems:"center",marginTop:this.state.marginTop}}>


          <Text style={{fontSize:25,color:this.state.color,fontWeight:"bold"}}>
    Vücut Kitle Endeksiniz :
</Text>
<Text style={{fontSize:25,color:this.state.color,fontWeight:"bold"}}>
    {this.state.kerem}
</Text>


          </View>

    </View>

   </View>
  
)


  }


render(){

    return(
     
        <ImageBackground style={{width:"100%",height:"100%", position: 'relative', 
        top: 0,
        left: 0}} source={this.state.backgroundPics}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
            {this.renderItems()}
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:25,marginTop:25,color:"white",fontWeight:"bold"}}>
             {this.state.text}
        </Text>
        
        <View style={{height:1,width:"96%",alignSelf:"center",backgroundColor:"white",marginTop:10}}/>
       <View style={styles.button}>
        <TouchableHighlight style={{borderRadius:20,height:35,width:"100%",justifyContent:"center",alignItems:"center"}} underlayColor="gray" onPress={()=>{
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({isRender:!this.state.isRender,
                            background:"#1ED760"
                })
        }}>

        <Text style={{color:"white",fontSize:18}}>Peki Ne Yapmalıyım?</Text>
        </TouchableHighlight>
       </View>
       <View style={{justifyContent:"center",alignItems:"center", width:"98%",borderRadius:5, marginTop:10,backgroundColor:this.state.background}}>
       
        {this.state.isRender&& <Text style={{fontSize:20,color:"white",margin:8,marginTop:5}}>{ this.state.bottomText} </Text>}
       </View>

     
    
        </View>
        </ImageBackground>    )
}



}
const styles={
button:{
    justifyContent:"center",
    alignItems:"center",
    width:"96%",
    height:35
    ,marginTop:10,
    borderRadius:20
    ,backgroundColor:"#F23513",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,


}

}