import { StyleSheet, Text, View, Image, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../colors'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
          <Image style={styles.profileImage} source={require('../images/BitmapprofileBg.png')} />

          <View style={styles.headerMenu}>
            <Ionicons name="settings-sharp" size={24} color={colors.white} />
          </View>

          <View style={styles.info}>
            <View>
              <Text style={styles.nameText}>Peter R. Garcia</Text>
              <Text style={styles.descText}>Coffee taste owner</Text>
            </View>
            <MaterialIcons name="photo-camera" size={34} color={colors.white} />
          </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.favoriteInfoContainer}>
          <View style={styles.favoriteInfo}>
            <Text style={styles.numberText}>11</Text>
            <Text style={styles.favoriteText}>Favorites</Text>
          </View>
          <View style={styles.favoriteInfo}>
            <Text style={styles.numberText}>986</Text>
            <Text style={styles.favoriteText}>Favorites</Text>
          </View>
          <View style={styles.favoriteInfo}>
            <Text style={styles.numberText}>128</Text>
            <Text style={styles.favoriteText}>Favorites</Text>
          </View>
          <View style={styles.favoriteInfo}>
            <Text style={styles.numberText}>52</Text>
            <Text style={styles.favoriteText}>Favorites</Text>
          </View>
        </View>
        <Text style={styles.description}>Lorem ipsum, or lipsum as it is sometimes
known,is dummy text used in laying out print,
graphicor web designs. The passage is attributed
to anunknown typesetter in the 15th century
who is thought to have scrambled parts of.s</Text>
        <View style={styles.button}>
          <Text style={styles.textButton}>Follow</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: colors.whiteDark,
    alignItems: 'center'
  },
  profileImage:{
    position: 'absolute',
    width: '100%',
    height: 500
  },
  headerMenu:{
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  headerTextStyle:{
    color: colors.white,
    fontSize: 20,
    fontWeight: '700'
  },
  info:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 100,
    alignItems: 'center'
  },
  nameText:{
    color: colors.white,
    fontSize: 26,
    fontWeight: '600'
  },
  descText:{
    color: colors.white,
    fontSize: 16,
    fontWeight: '400'
  },
  header:{
    width: '100%',
    height: 500
  },
  footer:{
    backgroundColor: colors.white,
    width: '100%',
    height: 250,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  favoriteInfoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  favoriteInfo: {
    alignItems: 'center'
  },
  numberText:{
    color: colors.black,
    fontSize: 20,
    fontWeight: '500'
  },
  favoriteText:{
    color: colors.grayText,
    fontSize: 14,
    fontWeight: '400'
  },
  description:{
    margin: 15,
    color: colors.grayText,
    textAlign: 'center',
    fontSize: 15
  },
  button:{
    width: 150,
    height: 50,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15
  },
  textButton: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700'
  }
})