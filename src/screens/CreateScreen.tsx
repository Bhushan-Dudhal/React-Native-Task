import { Pressable, StyleSheet, Text, TextInput, View,FlatList, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'

const CreateScreen = ({data,setData}:any) => {
  const [ItemName,setItemName]=useState('')
  const [stockAmt,setStockAmt]=useState('')
  const [isEdit,setIsEdit]=useState(false)
  const [editItemId,setEditItemId]=useState(null)

const addItemHandlear=()=>{
 if (!ItemName.trim() || !stockAmt.trim()) {
  Alert.alert("Error", "All fields are required");
  return;
}else{
  const newItem={
    id:Date.now(),
    name:ItemName,
    stock:stockAmt
  }
   setData([...data,newItem]),
   setItemName('')
   setStockAmt('')
   setIsEdit(false)
 }
  
 }
const deleteItemHandler = (id: any) => {
  setData((prevData:any) =>
    prevData.filter((item:any) => item.id !== id)
  );
};

const editItemHandler=(item:any)=>{
  setIsEdit(true)
setItemName(item.name)
setStockAmt(item.stock)
setEditItemId(item.id)
}

const updateItemHandler=()=>{
 setData(data.map((item:any)=>(
  item.id===editItemId?{...item,name:ItemName,stock:stockAmt}:item
 )))
 setItemName('')
 setStockAmt('')
 setIsEdit(false)
}
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter an Item name...'
      placeholderTextColor={'#999'}
      style={styles.input}
      value={ItemName}
       onChangeText={(item)=>setItemName(item)}

      />

        <TextInput
      placeholder='Enter an Stock amount...'
      placeholderTextColor={'#999'}
      style={styles.input}
      keyboardType="number-pad"
      value={stockAmt}
       onChangeText={(item)=>setStockAmt(item)}

      />
      <TouchableOpacity  style={styles.btn} onPress={()=> isEdit?updateItemHandler():addItemHandlear()}>
        <Text style={styles.btnText}>{isEdit?"EDIT ITEM IN STOCK":"ADD ITEM IN STOCK"}</Text>
      </TouchableOpacity>



         <View style={{marginTop:10}}>
         
            <Text style={styles.headingText}>All Items in the stock</Text>

            <FlatList
            contentContainerStyle={{gap:10}}
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
              return(
                  <View style={[styles.itemContainer,{backgroundColor:item.stock<20?"#FFCCCC":"#D7F6BFFF"}]}>
                      <Text style={styles.ItemsHeadingText}>{item.name}</Text>

                      <View style={{flexDirection:'row',gap:20}}>
                      <Text style={styles.ItemsHeadingText}>{item.stock}</Text>
                        <TouchableOpacity  onPress={()=>editItemHandler(item)}>

                         <Text style={[styles.ItemsHeadingText,{color:"purple"}]}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Alert.alert(
                          "Delete Item",
                          "Are you sure?",
                          [
                            { text: "Cancel" },
                            {
                              text: "Delete",
                              onPress: () => deleteItemHandler(item.id)
                            }
                          ]
                        )}>
                      <Text style={[styles.ItemsHeadingText,{color:"red"}]}>Delete</Text>

                        </TouchableOpacity>
                      </View>
      
                  </View>
              )
            }}
            />
          </View>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container:{
    paddingVertical:"4%",
    gap:10
  },
  input:{
    borderColor:'#d7f6bf',
    borderWidth:1.5,
    borderRadius:7,
    paddingVertical:10,
    paddingHorizontal:15,
  },
  btn:{
    backgroundColor:"#CABFEEFF",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
    color:"black"
  },
  btnText:{
    fontSize:15,
    color:"white",
    fontWeight:'700'
  },
   headingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10
    },
    headingText:{
        fontWeight:"500",
        fontSize:16,
        marginVertical:10
    },
    itemContainer:{
          flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:7
        
    },
    ItemsHeadingText:{
        fontWeight:"500",
        fontSize:15,
    },
})