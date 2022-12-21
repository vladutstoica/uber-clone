import React from "react";
import {SafeAreaView, View} from "react-native";
import NavOptions from "@components/NavOptions";
import ShareLocationPromo from "@components/ShareLocationPromo";
import Others from "@components/Others";
import AroundYou from "@components/AroundYou";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{padding: 16}}>
                <ShareLocationPromo/>
                <NavOptions/>

                <Others/>
                <AroundYou/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;