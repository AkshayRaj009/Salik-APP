import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { colors } from '../constants/colors'
import { cloudImage, leftCloud, spalshBottomImage, splashLeftArrow, splashLogo, splashTopArrow } from '../assests'

const SplashScreen = (props) => {
    const { navigation } = props

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 2000)
    })

    console.log("HEIGHT=======>>>>>>>>>>>>", HEIGHT * 0.07);

    return (
        <View style={{ backgroundColor: colors.darkWhite, flex: 1 }} >
            <View style={{ marginTop: HEIGHT * 0.08, marginLeft: WIDTH * 0.17 }} >
                <Image source={splashTopArrow} />
            </View>
            <View style={{ alignItems: "center", marginLeft: WIDTH * 0.07, marginTop: HEIGHT * 0. - 34 }} >
                <Image style={{ resizeMode: "contain" }} source={cloudImage} />
                <Image style={{ marginLeft: WIDTH * 0.34, marginTop: HEIGHT * 0.03 }} source={splashLeftArrow} />
            </View>
            <View style={{ alignItems: "flex-end", marginRight: WIDTH * 0.01, marginTop: HEIGHT * 0.045 }} >
                <Image style={{ resizeMode: "contain" }} source={leftCloud} />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.055 }} >
                <Image style={{ resizeMode: "contain" }} source={splashLogo} />
                <Text style={{ marginTop: HEIGHT * 0.023, color: "#2E2E2E", fontSize: 17, fontWeight: "300" }} >RENT A CAR</Text>
            </View>
            <View style={{}} >
                <Image style={{ resizeMode: "cover" }} source={spalshBottomImage} />
            </View>
        </View>
    )
}

export default SplashScreen