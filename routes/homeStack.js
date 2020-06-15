import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import HerbSetDetails from "../screens/HerbSetDetails";
import VegsHerbSetDetails from "../screens/VegsHerbSetDetails";
import PlantDetails from "../screens/PlantDetails";

const AppStack = createStackNavigator(
  {
    Home: Home,
    HerbSet: HerbSetDetails,
    VegsHerbSet: VegsHerbSetDetails,
    PlantDetails: PlantDetails,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppStack);
