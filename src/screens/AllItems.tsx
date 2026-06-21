import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}:any) => {
    // const {name}=data.params;
  return (
    <View>
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>Items</Text>
      <Text style={styles.headingText}>Quantity</Text>
     </View>
      <FlatList
      contentContainerStyle={{gap:10}}
      data={data}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=>{
        return(
            <View style={[styles.itemContainer,{backgroundColor:item.stock<20?"#FFCCCC":"#D7F6BFFF"}]}>
                <Text style={styles.ItemsHeadingText}>{item.name}</Text>
                <Text style={styles.ItemsHeadingText}>{item.stock}</Text>

            </View>
        )
      }}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10
    },
    headingText:{
        fontWeight:"500",
        fontSize:16
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