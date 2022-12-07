import React from "react";
import {SafeAreaView, View, Image} from "react-native";
import NavOptions from "@components/NavOptions";
import ShareLocationPromo from "@components/ShareLocationPromo";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{padding: 16}}>
                <ShareLocationPromo />

                <Image style={{width: 100, height: 36, resizeMode: "contain"}}
                       source={require("../assets/uber-logo.png")}/>
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;