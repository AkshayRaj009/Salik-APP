import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../constants/colors'
import MainContainer from '../components/MainContainer'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { darwerIcon, homeArrow, homeCloud, homeLogo, leftHomeArrow, searchIcon, } from '../assests'

import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { HomeData } from '../Redux/actions/commonAction'


const HomeScreen = ({ navigation }) => {
  const {homeData} = useSelector((store) => store.commonReducer);
  console.log("Data", homeData);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(HomeData())

  }, [])

  const drawerProgress = useDrawerProgress()
  const animationstyles = useAnimatedStyle(() => {
    const scaleX = interpolate(
      drawerProgress.value,
      [0, 1.5],
      [1, 0.8]
    )
    const scaleY = interpolate(
      drawerProgress.value,
      [0, 0.4],
      [1, 0.9]
    )
    return {
      transform: [{ scaleX }, { scaleY }],
      borderRadius: drawerProgress.value * 30
    }
  })

  return (

    <Animated.View style={[{ backgroundColor: colors.lightBlue, flex: 1 }, animationstyles]} >
      <View style={{ backgroundColor: colors.darkWhite, height: HEIGHT * 0.39 }}>
        <MainContainer backNavigate={() => navigation.toggleDrawer()} title="Salik" drawerIcon={darwerIcon} searchIcon={searchIcon}>
          <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.05 }} >
            <Text style={{ fontSize: 27 }} >OWN YOUR DREAM </Text>
            <Text style={{ fontSize: 27 }} > CAR FOR A DAY . . .</Text>
          </View>
          <View style={{ alignItems: "flex-end", marginRight: WIDTH * 0.09, marginTop: HEIGHT * 0.0 - 26 }} >
            <Image source={homeArrow} />
          </View>
          <View style={{}} >
            <Image style={{ position: "absolute", right: -20 }} source={homeCloud} />
          </View>
          <View style={{ marginLeft: WIDTH * 0.13, marginTop: HEIGHT * 0.06 }} >
            <Image source={leftHomeArrow} />
          </View>
          <Image style={{ position: "absolute", right: 0, bottom: 0, width: WIDTH * 0.803, height: HEIGHT * 0.147 }} source={homeLogo} />
        </MainContainer>
      </View>
      <View>
        <FlatList
          data={homeData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>
            </View>
          }
        />
      </View>
    </Animated.View>

  )
}

export default HomeScreen