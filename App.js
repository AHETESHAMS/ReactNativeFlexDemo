import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import Wave from './src/screens/Wave';
// import SearchFilterScreen from './src/screens/SearchFilterScreen';
import DemoScreen from './src/screens/DemoScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    SecondScreen:SecondScreen,
    ThirdScreen: ThirdScreen,
    Wave:Wave,
    FourthScreen: FourthScreen,
    // SearchFilterScreen: SearchFilterScreen,
    Demo: DemoScreen
  },
  {
    initialRouteName: 'ThirdScreen',
    defaultNavigationOptions: {
      title: 'App',
      headerShown:null
    },
  }
);

export default createAppContainer(navigator);
