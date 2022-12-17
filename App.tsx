import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import LocationSearchModal from "./modals/LocationSearchModal";
import { store } from "./redux/store";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="HomeScreen"
                            component={HomeScreen}/>
                        <Stack.Screen
                            name="MapScreen"
                            component={MapScreen}/>
                        <Stack.Group screenOptions={{presentation: "containedModal"}}>
                            <Stack.Screen
                                name={"LocationSearchModal"}
                                component={LocationSearchModal}/>
                        </Stack.Group>
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
}
