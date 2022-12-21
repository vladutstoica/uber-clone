import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const data = [
    {
        id: 0,
        name: "UberX",
        time: "22:30",
        image: require("../assets/ride.webp"),
    },
    {
        id: 1,
        name: "UberLux",
        time: "22:30",
        image: require("../assets/Lux.png"),
    },
    {
        id: 2,
        name: "UberXL",
        time: "22:30",
        image: require("../assets/UberXL.png")
    }
];

const RideOffersCard = () => {
    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Choose a trip</Text>
            </View>
            <ScrollView>
                {data?.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[styles.offerWrapper, {borderColor: `${selected?.id === item?.id ? "black" : "transparent"}`}]}
                        onPress={() => setSelected(item)}
                    >
                        <View style={styles.detailsWrapper}>
                            <Image style={styles.offerImage} source={item.image}/>
                            <View>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                        </View>
                        <Text style={styles.priceText}>RON 32.77</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default RideOffersCard;

const styles = StyleSheet.create({
    headerWrapper: {
        padding: 14,

        borderBottomWidth: 2,
        borderBottomColor: "#e7e5e4",
    },
    headerText: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
    offerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
        marginHorizontal: 12,
        padding: 12,

        borderColor: "transparent",
        borderWidth: 3,
        borderRadius: 12,
    },
    detailsWrapper: {
        flexDirection: "row",
    },
    offerImage: {
        height: 60,
        width: 80,
        resizeMode: "contain",
    },
    nameText: {
        fontSize: 18,
        fontWeight: "500",
    },
    timeText: {
        marginTop: 4,

        color: "525252",

        fontSize: 14,
    },
    priceText: {
        fontSize: 18,
        fontWeight: "500",
    }
});