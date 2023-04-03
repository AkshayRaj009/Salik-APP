import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const ButtonComponent = (props) => {
    const{title,onPress,buttonStyle}=props
  return (
    <View>
        <Pressable onPress={onPress} style={[{backgroundColor:colors.blue,marginHorizontal:WIDTH*0.07,borderRadius:12,height:HEIGHT*0.069,alignItems:"center",justifyContent:"center"},buttonStyle]} >
        <Text style={{textAlign:"center",color:colors.White,fontSize:18,fontWeight:"500"}} >{title}</Text>

        </Pressable>
    </View>
  )
}

export default ButtonComponent