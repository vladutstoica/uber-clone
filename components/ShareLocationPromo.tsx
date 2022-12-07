import {Image, StyleSheet, Text, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';

const ShareLocationPromo = () => {
    return (
        <View style={styles.componentWrapper}>
            <Text style={styles.title}>Want better pick-ups?</Text>

            <View style={styles.buttonWrapper}>
                <Text style={styles.button}>Share location </Text>
                <AntDesign style={{marginTop: 14}} name="arrowright" size={18} color="white"/>
            </View>

            {/*<Image style={styles.image} source={require("../assets/ShareLocationPromoImage.jpeg")} />*/}
        </View>
    )
}

export default ShareLocationPromo;

const styles = StyleSheet.create({
    componentWrapper: {
        position: "relative",
        display: "flex",
        paddingHorizontal: 12,
        paddingVertical: 44,

        backgroundColor: "#064e3b",

        borderRadius: 12
    },
    title: {
        color: "#f5f5f5",
        fontSize: 20
    },
    buttonWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        marginTop: 15,
        color: "#f5f5f5",

        fontSize: 16
    },
    image: {
        position: "absolute",
        right: 0,
        bottom: 0,

        width: 112,
        height: 112,

        resizeMode: "contain",
        aspectRatio: 1,
    }
})