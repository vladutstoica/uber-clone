import React from "react";
import {SafeAreaView, View} from "react-native";
import NavOptions from "@components/NavOptions";
import ShareLocationPromo from "@components/ShareLocationPromo";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{padding: 16}}>
                <ShareLocationPromo/>
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;