import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import SplashScreen from './src/screens/SplashScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DrawerScreen from './src/screens/DrawerScreen';
import { colors } from './src/constants/colors';


const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HomeScreen" component={MyDrawer} />

    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false, overlayColor: "transparent", drawerContentStyle: { overflow: "hidden" } }} drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />

    </Drawer.Navigator>
  );
}
export default MyStack;