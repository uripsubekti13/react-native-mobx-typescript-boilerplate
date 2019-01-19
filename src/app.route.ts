import {
  createStackNavigator,
  createNavigationContainer
} from "react-navigation";

import HomeScreen from "./home/home.screen";
import SettingScreen from "./setting/setting.screen";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: { header: null }
  }
});

const App = createNavigationContainer(RootStack);

export default App;
