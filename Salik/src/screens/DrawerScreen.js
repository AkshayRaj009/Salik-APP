import React from 'react'
import { View, Text, Image, FlatList, Pressable, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import PropTypes from 'prop-types';

import { colors } from '../constants/colors';
import { drawerProfile } from '../assests';
import { HEIGHT, WIDTH } from '../constants/Dimensions';


const DrawerScreen = ({ navigation }, context) => {
  const [{ lang }] = useSelector((state) => [state.i18nState, state.commonReducer])
  const dispatch = useDispatch()

  const switchLanguage = async (lang) => {
    await AsyncStorage.setItem("language", lang)
    dispatch(setLanguage(lang || "en"))

  }

  return (
    <View style={{ backgroundColor: colors.lightBlue, flex: 1 }}>
      <View style={{ marginHorizontal: WIDTH * 0.06, marginTop: HEIGHT * 0.11 }} >
        <Image source={drawerProfile} />
        <Text style={{ marginTop: HEIGHT * 0.02, color: colors.darkGrey, fontWeight: "700", fontSize: 18 }} >{context.t("hisham_tour")}</Text>
        <Text style={{ color: colors.lightgrey, marginTop: HEIGHT * 0.01, fontSize: 16 }} >+97444621428</Text>
      </View>
      <View>
        {/* <FlatList
          data={DrawerData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={{flexDirection:"row"}} >
           
            </View>
          }
        /> */}
        <Pressable onPress={() => switchLanguage(lang)} style={{}}>
          <Text style={{ textAlign: "center", marginTop: HEIGHT * 0.02 }} >arabic</Text>
        </Pressable>
      </View>
      {/* <Text>{context.t("signin_description")}</Text> */}
    </View>
  )
}
DrawerScreen.contextTypes = {
  t: PropTypes.func
}

export default DrawerScreen