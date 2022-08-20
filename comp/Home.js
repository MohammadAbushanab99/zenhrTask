import { useEffect, useState } from "react";
import { View,Text,Image, ScrollView } from "react-native";
import { Appbar } from 'react-native-paper';
export default function Home(){

const [movies,setMovies]=useState([])


var indents = [];
const fetchData = () => {
  return fetch("https://reactnative.dev/movies.json")
        .then((response) => response.json())
        .then((data) => setMovies(data.movies));}
useEffect(()=>{
    fetchData();
},[])
for (var i = 0; i < movies.length; i++) {
  var n=require('../assets/movieLogo.png');
  indents.push(
    <><Text>{movies[i].title + "    " + movies[i].releaseYear}</Text>
    <Image source= {n} style={{
      width: 200,
      height: 200,
      flex:1,
    }} /></>);
  
}

return(
<View>
<AppBar></AppBar>
<ScrollView>{indents}</ScrollView>
</View>
)
}

function AppBar() {
    return <>
 <Appbar.Header style={{backgroundColor: '#606060'}}>
    <Appbar.Content title="Aflami" />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
      </>;
  }
  

  