import Map from "@components/Map";
import {StyleSheet, Text, View} from "react-native";

const AroundYou = () => {
    return (
        <View>
            <Text style={styles.titleText}>Around you</Text>

            <View style={styles.mapWrapper}>
                <Map/>
            </View>
        </View>
    )
}
export default AroundYou;

const styles = StyleSheet.create({
    titleText: {
        marginTop: 20,
        marginBottom: 16,
        fontSize: 18,
        fontWeight: "500",
    },
    mapWrapper: {
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
    }
})