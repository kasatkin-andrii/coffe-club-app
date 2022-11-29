import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../colors'

interface FavoriteItemProps {
    imagePath: any,
    name: string,
    desc: string
}

const FavoriteItem = ({imagePath, name, desc}:FavoriteItemProps) => {
  return (
    <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={imagePath}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemDesc}>{desc}</Text>
          </View>
    </View>
  )
}

export default FavoriteItem

const styles = StyleSheet.create({
    item:{
        width: 150,
        height: 190,
        alignItems: 'center',
        margin: 10
      },
      itemImage:{
        width: 150,
        height: 120,
        marginHorizontal: 10,
      },
      itemName:{
        color: colors.black,
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5
      },
      itemDesc:{
        color: colors.grayText,
        fontSize: 13,
        fontWeight: '400',
      },
      textContainer:{
        backgroundColor: colors.white,
        width: 150,
        height: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        paddingTop: 5
      },
      imageContainer:{
        backgroundColor: colors.grayText,
        width: 150,
        height: 130,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      }
})