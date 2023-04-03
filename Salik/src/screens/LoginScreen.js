import { View, Text, Image, Pressable, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'

import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { loginBackArrow, loginBottomImage, loginLogoImage, modalLogo } from '../assests'
import ButtonComponent from '../components/ButtonComponent'

const LoginScreen = (props) => {
    const { navigation } = props
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={{ backgroundColor: colors.lightBlue, flex: 1 }} >
            <Pressable style={{ backgroundColor: colors.darkWhite, height: HEIGHT * 0.58, borderBottomLeftRadius: 50 }} >
                <Pressable style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00000062" }}>
                            <View style={{
                                backgroundColor: colors.White, borderRadius: 20, alignItems: 'center', height: HEIGHT * 0.58, width: WIDTH * 0.91
                            }}>
                                <View style={{ marginTop: HEIGHT * 0.03, alignItems: "center" }} >
                                    <Image style={{ height: HEIGHT * 0.12, width: WIDTH * 0.15 }} source={modalLogo} />
                                    <Text style={{ marginTop: HEIGHT * 0.03, color: colors.darkGrey, fontSize: 21 }} >OTP VERIFICATION</Text>
                                    <Text style={{ fontSize: 16, color: colors.lightgrey, marginTop: HEIGHT * 0.010, marginHorizontal: WIDTH * 0.14, textAlign: "center", marginTop: HEIGHT * 0.03 }} >Enter 4 digit verification code sent to your number</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.082 }} >
                                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.10, borderColor: colors.borderColor }} >
                                        <TextInput style={{ textAlign: "center", paddingBottom: HEIGHT * 0.008 }} />
                                    </View>
                                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.10, borderColor: colors.borderColor, marginHorizontal: WIDTH * 0.04 }} >
                                        <TextInput style={{ textAlign: "center", paddingBottom: HEIGHT * 0.008 }} />
                                    </View>
                                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.10, borderColor: colors.borderColor, marginHorizontal: WIDTH * 0.04 }} >
                                        <TextInput style={{ textAlign: "center", paddingBottom: HEIGHT * 0.008 }} />
                                    </View>
                                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.10, borderColor: colors.borderColor, }} >
                                        <TextInput style={{ textAlign: "center", paddingBottom: HEIGHT * 0.008 }} />
                                    </View>
                                </View>
                                <View style={{ marginTop: HEIGHT * 0.050 }} >
                                    <ButtonComponent onPress={() => {
                                        navigation.navigate("ProfileScreen")
                                        setModalVisible(!modalVisible)
                                    }} buttonStyle={{ width: WIDTH * 0.68, height: HEIGHT * 0.074 }} title="SUBMIT" />
                                    <Text style={{ color: colors.blue, textAlign: "center", marginTop: HEIGHT * 0.02 }} >Send Again</Text>
                                </View>
                            </View>
                        </Pressable>
                    </Modal>
                </Pressable>
                <View style={{ marginHorizontal: WIDTH * 0.08 }} >
                    <Pressable onPress={() => navigation.goBack()} style={{ marginTop: HEIGHT * 0.09, backgroundColor: colors.grey, padding: 10, width: WIDTH * 0.07, borderRadius: 6, alignItems: "center" }} >
                        <Image source={loginBackArrow} />
                    </Pressable>
                    <View style={{ marginTop: HEIGHT * 0.04 }} >
                        <Text style={{ fontSize: 37, color: colors.darkGrey }} >LOGIN</Text>
                        <Text style={{ fontSize: 18, color: colors.darkGrey, marginTop: HEIGHT * 0.010 }} >we will send you a verification code on this mobile number</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: HEIGHT * 0.09 }} >
                        <Image style={{ height: HEIGHT * 0.14, width: WIDTH * 0.33 }} source={loginLogoImage} />
                    </View>
                </View>
            </Pressable>
            <View style={{ marginTop: HEIGHT * 0.10, marginHorizontal: WIDTH * 0.08 }} >
                <View style={{ flexDirection: "row" }} >
                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.15, borderColor: colors.borderColor }} >
                        <TextInput
                            style={{ paddingBottom: HEIGHT * 0.008 }} />
                    </View>
                    <View style={{ borderWidth: 2, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, marginHorizontal: WIDTH * 0.10, width: WIDTH * 0.59, borderColor: colors.borderColor }} >
                        <TextInput
                            style={{ paddingBottom: HEIGHT * 0.008 }} />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: HEIGHT * 0.070 }} >
                <ButtonComponent onPress={() => setModalVisible(!modalVisible)} title="SEND" />
            </View>
            <Image style={{ position: "absolute", right: 0, bottom: 0 }} source={loginBottomImage} />
        </View>
    )
}

export default LoginScreen