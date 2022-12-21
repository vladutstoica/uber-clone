import {SafeAreaView, View} from "react-native";
import Map from "@components/Map";
import GoBackButton from "@components/GoBackButton";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SetPickupLocationCard from "@components/SetPickupLocationCard";
import RideOffersCard from "@components/RideOffersCard";

const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={{flex: 1, justifyContent: "flex-end"}}>
            <View style={{flex: 3}}>
                <Map/>
                <SafeAreaView style={{position: "absolute"}}>
                    <GoBackButton/>
                </SafeAreaView>
            </View>

            <View style={{flex: 1}}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name={"SetPickupLocationCard"}
                        component={SetPickupLocationCard}/>
                    <Stack.Screen
                        name={"RideOffersCard"}
                        component={RideOffersCard}/>
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen;