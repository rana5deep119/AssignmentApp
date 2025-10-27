import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const explore = () => {
  return (
    <View >
      <View style={styles.head}>
        <AntDesign name="arrow-left" size={24} color="white" />
        <Text style={{color:'white' }}>Phones</Text>
      </View>
      
      <View style={styles.cart}>
        <View style={styles.left}>
          <Image 
          style={styles.image}
          source={{uri:"https://sm.pcmag.com/pcmag_au/photo/a/asus-proar/asus-proart-p16_wkez.jpg"}} />
        </View>
        <View style={styles.right}>
          <View > 
          <Text style={styles.Text}>Item Name</Text>
          <Text style={styles.Text}>$750</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row',gap:5}}>  
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex', flexDirection:'row',justifyContent:'center'}}>-</View>
            <Text style={{color:'white'}}>1</Text>
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex',flexDirection:'row', justifyContent:'center'}}>+</View>
          </View>
        </View>
      </View>

      <View style={styles.cart}>
        <View style={styles.left}>
          <Image 
          style={styles.image}
          source={{uri:"https://sm.pcmag.com/pcmag_au/photo/a/asus-proar/asus-proart-p16_wkez.jpg"}} />
        </View>
        <View style={styles.right}>
          <View > 
          <Text style={styles.Text}>Item Name</Text>
          <Text style={styles.Text}>$750</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row',gap:5}}>  
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex', flexDirection:'row',justifyContent:'center'}}>-</View>
            <Text style={{color:'white'}}>1</Text>
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex',flexDirection:'row', justifyContent:'center'}}>+</View>
          </View>
        </View>
      </View>
      <View style={styles.cart}>
        <View style={styles.left}>
          <Image 
          style={styles.image}
          source={{uri:"https://sm.pcmag.com/pcmag_au/photo/a/asus-proar/asus-proart-p16_wkez.jpg"}} />
        </View>
        <View style={styles.right}>
          <View > 
          <Text style={styles.Text}>Item Name</Text>
          <Text style={styles.Text}>$750</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row',gap:5}}>  
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex', flexDirection:'row',justifyContent:'center'}}>-</View>
            <Text style={{color:'white'}}>1</Text>
            <View style={{width:20, height:20 , backgroundColor:'gray', display:'flex',flexDirection:'row', justifyContent:'center'}}>+</View>
          </View>
        </View>
      </View>

<View style={styles.last}>
  <Text style={{color:'white'}}>Total</Text>
  <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>$3562</Text>
</View>

<View style={{marginTop:20}}>
  <Button title="Pay Now"/>
 
</View>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  last:{
display:'flex',
flexDirection:'row',
backgroundColor:"gray",
borderRadius:10,
width:'90%',
justifyContent:'space-between',
padding:10,
marginTop:20,
marginLeft:'auto',
marginRight:'auto'
},


  head: {
    display:'flex',
    flexDirection:'row',
    paddingTop:20,
    gap:95,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
  },
  cart:{
  // backgroundColor:'blue',
  paddingTop:10,
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
  },
  left:{
  width:'45%',
  height:100,
  // backgroundColor:'red'
  },
  right:{
  width:'45%',
  height:100,
  color:"white",
  // backgroundColor:'yellow',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  // alignItems:'center'
  },
  Text:{
    color:'white',
    fontWeight:'bold',
    fontSize:15
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
  }
})