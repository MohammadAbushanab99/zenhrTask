
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './comp/SplashScreen';
import Home from './comp/Home';
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
       </NavigationContainer>
        
  );
}

