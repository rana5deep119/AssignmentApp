import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

const Other = () => {
  return (
        <View>

     
     <View style={styles.contain}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}
         contentContainerStyle={styles.scrollContent}>
     
         <TouchableOpacity style={styles.circleContainer}>
        <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Apple</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
        <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Huawei</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
        <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Samsung</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
       <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Nokia</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
        <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Dell</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
       <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Vivo</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
        <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Oppo</Text>
             </TouchableOpacity>
     
             <TouchableOpacity style={styles.circleContainer}>
       <View style={styles.circle} >
            <Image 
            style={{width: '100%', height: '100%', resizeMode: 'cover',}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s"}}/>
        </View>
        <Text style={styles.brandText}>Sony</Text>
             </TouchableOpacity>
           </ScrollView>
         </View>




      <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
        <Image
        source={{ uri: 'https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?s=612x612&w=0&k=20&c=bPf3XxUZJZ6HRw7BE75ur1wBMCm_r4QAr-_lajERIyU=' }}
        style={styles.image}/>
    </View>
    <View style={styles.box}>
          <Image
            source={{ uri: 'https://techterms.com/img/xl/laptop_586.png' }}
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
</View>
 )
}

export default Other;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b1120',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  box: {
    width: 140,
    height: 140,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
/////////////////////
  contain: {
    backgroundColor: '#0b1120', 
    paddingVertical: 15,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e293b',
    marginBottom: 6,
  },
  brandText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
