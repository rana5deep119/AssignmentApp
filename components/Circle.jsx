import { StyleSheet, Text, View ,  ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Circle = () => {
  return (
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
  )
}

export default Circle

const styles = StyleSheet.create({
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
    overflow: 'hidden',
  },
  brandText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
})