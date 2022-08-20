import React, { useEffect, useRef } from "react";
import { Animated, Image,Text } from "react-native";

const SplashScreen = ({navigation}) => {



const animation=useRef(new Animated.Value(0)).current;

useEffect(()=>{

setTimeout(() => {
  Animated.sequence([
Animated.timing(animation, {
  toValue: 100,
  useNativeDriver:true
}
  
)

  ]).start();

navigation.replace('Home')
}, 500);

},[])
return(
    <Animated.View style={{
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,
      backgroundColor: '#606060', 
      height: '100%',
     
    }}>
    
      <Animated.View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        transform:[{
          translateY:animation
  
        }]
      }}>
        <Image source={require('../assets/movieLogo.png')} style={{
          width:250,
          height:250,
        }} />
        <Text style={{
         fontSize:25,
         fontWeight:'bold',
         color:'white'
        

        }}>Aflami</Text>
      
      
      </Animated.View>
      
   
    </Animated.View>
    
)

}
export default SplashScreen;