import { View, Text, StatusBar, Platform, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const MainContainer = (props) => {
    const { drawerIcon, searchIcon, title, children, backNavigate } = props
    // console.log("WIDTH========>>>>>>>", WIDTH * 0.065);
    // console.log("HEIGHT=======>>>>>>>", HEIGHT * 0.021);

    return (
        <>
            <View style={{ height: HEIGHT * 0.05, width: WIDTH, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : HEIGHT * 0.06, backgroundColor: colors.darkWhite }}>
                <View style={{ marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.05 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                        <Pressable onPress={backNavigate}>
                            <Image style={{ width: WIDTH * 0.068, height: HEIGHT * 0.025 }} source={drawerIcon} />
                        </Pressable>

                        <Text style={{ fontSize: 20 }} >{title}</Text>
                        <Image style={{ width: WIDTH * 0.053, height: HEIGHT * 0.025 }} source={searchIcon} />
                    </View>
                </View>
            </View>
            <SafeAreaView style={{ backgroundColor: colors.darkWhite, flex: 1 }} >{children}</SafeAreaView>
        </>


    )
}

export default MainContainer