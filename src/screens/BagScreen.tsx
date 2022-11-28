import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../colors'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const BagScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Feather style={styles.backBtn} name="arrow-left" size={34} color={colors.black} />
      <Text style={styles.title}>BAG</Text>
      <View style={styles.itemsContainer}></View>

      <View style={styles.itemsContainer}>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../images/BitmapEspresso.png')} />
          <View>
            <Text style={styles.itemName}>Espresso</Text>
            <Text style={styles.itemDesc}>Blue Ridge Blend</Text>
            <View style={styles.priceContainer}>
              <FontAwesome name="dollar" size={16} color={colors.green} />
              <Text style={styles.itemPrice}>4.35</Text>
            </View>
            <View style={styles.cancelBtn}>
              <FontAwesome name="close" size={20} color={colors.white} />
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../images/Bitmapbreakfast.png')} />
          <View>
          <Text style={styles.itemName}>Classic Breakfast</Text>
            <Text style={styles.itemDesc}>Perfectly baked, hearty and full
of flavour.</Text>
            <View style={styles.priceContainer}>
              <FontAwesome name="dollar" size={16} color={colors.green} />
              <Text style={styles.itemPrice}>12.00</Text>
            </View>
            <View style={styles.cancelBtn}>
              <FontAwesome name="close" size={20} color={colors.white} />
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../images/BitmapChoco.png')} />
          <View>
          <Text style={styles.itemName}>Choco Frappe</Text>
            <Text style={styles.itemDesc}>Decaf Colombia</Text>
            <View style={styles.priceContainer}>
              <FontAwesome name="dollar" size={16} color={colors.green} />
              <Text style={styles.itemPrice}>10.00</Text>
            </View>
            <View style={styles.cancelBtn}>
              <FontAwesome name="close" size={20} color={colors.white} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.pricesContainer}>
        <View style={styles.priceItem}>
          <FontAwesome name="dollar" size={14} color={colors.grayText} />
          <Text style={styles.tipPriceText}>10.00</Text>
        </View>
        <View style={styles.priceItem}>
          <FontAwesome name="dollar" size={14} color={colors.grayText} />
          <Text style={styles.tipPriceText}>26.35</Text>
        </View>
        <View style={styles.priceItem}>
          <FontAwesome name="dollar" size={14} color={colors.black} />
          <Text style={styles.finalPriceText}>36.35</Text>
        </View>
        
      </View>

      <View style={styles.checkoutBtn}>
        <Text style={styles.checkoutBtnText}>Secure Checkout</Text>
      </View>
    </SafeAreaView>
  )
}

export default BagScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.whiteDark,
    alignItems: 'center'
  },
  title:{
    alignSelf: 'center',
    fontSize: 22,
    color: colors.black,
    fontWeight: '600',
    marginTop: 15
  },
  backBtn:{
    position: 'absolute',
    left: 25,
    top: 40
  },
  itemsContainer:{
    marginTop: 20,
    width: 270
  },
  item:{
    backgroundColor: colors.white,
    width: '100%',
    height: 120,
    marginVertical: 20,
    flexDirection: 'row',
    borderRadius: 20
  },
  image:{
    height: 120,
    width: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  priceContainer:{
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 0,
    alignItems: 'center',
  },
  itemName:{
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 15,
    marginLeft: 10
  },
  itemDesc:{
    fontSize: 14,
    fontWeight: '400',
    color: colors.grayText,
    marginLeft: 10,
    width: 150,
    height: 50
  },
  itemPrice:{
    fontSize: 16,
    marginLeft: 5,
    color: colors.green,
    fontWeight: '600'
  },
  cancelBtn: {
    backgroundColor: colors.brown,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 15, 
    right: -20,
  },
  checkoutBtn: {
    backgroundColor: colors.green,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  checkoutBtnText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600'
  },
  tipPriceText:{
    color: colors.grayText
  },
  finalPriceText:{
    color: colors.black
  },
  pricesContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 70,
    marginBottom: 10
  },
  priceItem: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})