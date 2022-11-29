import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../colors'
import FavoriteItem from '../components/FavoriteItem'

const favoriteItems = [{
  id: '1',
  name: 'Chocolate Muffin',
  desc: 'Chocolaty fresh baked',
  imagePath: require('../images/Bitmapmuffin.png')
},
{
  id: '2',
  name: 'Classic Bagel',
  desc: 'Classic and fresh',
  imagePath: require('../images/bagel-with-cream-cheese-png-6-transparentbagel.png')
},
{
  id: '3',
  name: 'Caramel Frappe',
  desc: 'Decaf Colombia',
  imagePath: require('../images/classic.png')
}
]

const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>FAVORITE</Text>

      <FlatList 
      data={favoriteItems} 
      renderItem={({item}) => <FavoriteItem imagePath={item.imagePath} name={item.name} desc={item.desc} />} 
      showsVerticalScrollIndicator={false}
      numColumns={2}
      style={styles.list}
      />
    </SafeAreaView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: colors.whiteDark
  },
  title: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: '600',
    color: colors.black
  },
  list:{
    width: '100%',
    paddingHorizontal: 10
  }
})