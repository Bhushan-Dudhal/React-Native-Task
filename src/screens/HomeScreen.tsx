import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';


const data=[
  {id:1,name:"Wheat",stock:5,unit:'kg'},
  {id:2,name:"Rice",stock:15,unit:'kg'},
  {id:3,name:"Basmati Rice",stock:25,unit:'kg'},
  {id:4,name:"Pulse",stock:50,unit:'kg'},
  {id:5,name:"Corn",stock:19,unit:'kg'},
  {id:6,name:"ilaychi",stock:25,unit:'kg'},

  


]

const HomeScreen = () => {
  const [view ,setView]=useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn,view===0 ?{ backgroundColor:"green",}:null]} onPress={()=>setView(0)}>
          <Text style={[styles.btnText,view===0?{color:"white"}:null]}>All Items</Text>
        </Pressable>
         <Pressable style={[styles.btn,view===1?{backgroundColor:"green"}:null]} onPress={()=>setView(1)}>
          <Text style={[styles.btnText,view===1?{color:"white"}:null]}>Low Stock</Text>
        </Pressable>
         <Pressable style={[styles.btn,view===2?{backgroundColor:'green'}:null]} onPress={()=>setView(2)}>
          <Text style={[styles.btnText,view===2?{color:"white"}:null]}> Create</Text>
        </Pressable>

      </View>

      {view===0&&<AllItems data={data}/>}
      {view===1&&<AllItems  data={data.filter((item)=>item.stock<20)}/>}
      {view===2&&<CreateScreen/>}             

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#ffffff",
    // backgroundColor:"orange",
    padding:"4%"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"#333"
  },
  btnContainer:{
    flexDirection:"row",
    gap:10,
    marginVertical:10
  },
  btn:{
    borderRadius:50,
    borderColor:'green',
    borderWidth:0.8,
    paddingHorizontal:10,
    paddingVertical:5,
    
  },
  btnText:{
    color:"green",
    fontWeight:"400",
    fontSize:13
  }
});
