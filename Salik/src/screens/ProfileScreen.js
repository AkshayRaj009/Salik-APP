import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React from 'react'

import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { loginBackArrow, loginBottomImage, profileLogo } from '../assests'
import ButtonComponent from '../components/ButtonComponent'

const ProfileScreen = (props) => {
    const { navigation } = props

    return (
        <View style={{ backgroundColor: colors.lightBlue, flex: 1 }} >
            <View style={{ backgroundColor: colors.darkWhite, height: HEIGHT * 0.48, borderBottomLeftRadius: 50 }} >
                <View style={{ marginHorizontal: WIDTH * 0.08 }} >
                    <Pressable onPress={() => navigation.goBack()} style={{ marginTop: HEIGHT * 0.09, backgroundColor: colors.grey, padding: 10, width: WIDTH * 0.07, borderRadius: 6, alignItems: "center" }} >
                        <Image source={loginBackArrow} />
                    </Pressable>
                    <Text style={{ textAlign: "center", marginTop: HEIGHT * 0.04, color: colors.darkGrey, fontSize: 38 }} >COMPLETE PROFILE</Text>
                    <Text style={{ marginHorizontal: WIDTH * 0.02, marginTop: HEIGHT * 0.01, fontSize: 17, color: colors.darkGrey }} >Please fill in the fields to complete your new account</Text>
                    <View style={{ alignItems: "center", marginTop: HEIGHT * 0.07 }} >
                        <Image style={{ height: HEIGHT * 0.1, width: WIDTH * 0.28 }} source={profileLogo} />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: HEIGHT * 0.057 }} >
                <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, marginHorizontal: WIDTH * 0.08, borderColor: colors.borderColor }} >
                    <Text style={{ fontSize: 15, color: colors.lightgrey }} >Full Name</Text>
                    <TextInput style={{ paddingBottom: HEIGHT * 0.01, paddingLeft: WIDTH * 0.03 }} />
                </View>
                <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, marginHorizontal: WIDTH * 0.08, marginTop: HEIGHT * 0.06, borderColor: colors.borderColor }} >
                    <Text style={{ fontSize: 19, color: colors.lightgrey }} >Email</Text>
                    <TextInput style={{ paddingBottom: HEIGHT * 0.01, paddingLeft: WIDTH * 0.03 }} />
                </View>
            </View>
            <View style={{ marginTop: HEIGHT * 0.056 }} >
                <ButtonComponent onPress={()=>navigation.navigate("HomeScreen")} title="SAVE" />
            </View>
            <Image style={{ position: "absolute", right: 0, bottom: 0 }} source={loginBottomImage} />
        </View>
    )
}

export default ProfileScreen