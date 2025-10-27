import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const GridImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
        <Image
        source={{uri: 'https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?s=612x612&w=0&k=20&c=bPf3XxUZJZ6HRw7BE75ur1wBMCm_r4QAr-_lajERIyU=' }}
        style={styles.image}/>
    </View>
    <View style={styles.box}>
          <Image
            source={{uri:'https://techterms.com/img/xl/laptop_586.png' }}
      style={styles.image}/>
    </View>
    </View>
      <View style={styles.row}>
      <View style={styles.box}>
        <Image source={{ uri: 'https://www.livemint.com/lm-img/img/2025/02/21/600x338/best_laptop_under_Rs_30000_1740122015828_1740122045813.jpg' }}
        style={styles.image}/>
        </View>
        <View style={styles.box}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInwp3KwXrDSLlYu5VB6A5wwEG-yblJD_EOw&s' }}
            style={styles.image}/>
        </View>
 </View>
 </View>
 )
}

export default GridImage;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0b1120',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  row:{
    flexDirection:'row',
    marginBottom:20,
  },
  box:{
    width:140,
    height:140,
    backgroundColor:'#1e293b',
    borderRadius:12,
    marginHorizontal:10,
    overflow:'hidden',
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
  },
});
