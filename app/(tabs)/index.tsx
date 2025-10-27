
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Circle from '../../components/Circle';
import GridImage from '../../components/GridImage';
import Other from '../../components/Other';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b1120' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
           <View style={styles.searchbar}>
  <input
    style={{
       height:5,
      width:'90%',
      background:'transparent',
      color:'gray',
      padding:10,
      outline:'none',
      border:'none',}}
    type="text" placeholder="Search"/>
          <EvilIcons name="search" size={24} color="black" />
          </View>
        </View>
 <View style={styles.head}>
        <AntDesign name="arrow-left" size={24} color="white" />
        <Text style={{color:'white' }}>Phones</Text>
        </View>

      <Circle />
      <GridImage />
        <Text style={{color:'white', paddingLeft:10}}> Others Buy</Text>
       <Other />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:20,
  },
  searchbar: {
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
    width:'95%',
    display:'flex',
    flexDirection:'row',
  },
  head: {
    display:'flex',
    flexDirection:'row',
    paddingTop:20,
    gap:90,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
  },
});
