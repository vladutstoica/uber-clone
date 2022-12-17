import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";

const NavBottom = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="MapScreen" component={MapScreen}/>
        </Tab.Navigator>
    )
}

export default NavBottom;