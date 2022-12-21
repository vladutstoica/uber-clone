import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../redux/slices/navSlice";

const SURGE_CHARGE_RATE = 1.5;
const data = [
    {
        id: 0,
        name: "UberX",
        image: require("../assets/ride.webp"),
        multiplier: 1,
    },
    {
        id: 1,
        name: "UberXL",
        image: require("../assets/UberXL.png"),
        multiplier: 1.2,
    },
    {
        id: 2,
        name: "UberLux",
        image: require("../assets/Lux.png"),
        multiplier: 1.75,
    },
];

const RideOffersCard = () => {
    const [selected, setSelected] = useState(null);
    const travelTimeInfo = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Choose a trip - {travelTimeInfo.distance.text}</Text>
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
                                <Text style={styles.timeText}>{travelTimeInfo.duration.text}</Text>
                            </View>
                        </View>
                        <Text style={styles.priceText}>
                            {new Intl.NumberFormat("en-GB", {
                                style: "currency",
                                currency: "RON"
                            }).format(
                                (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * item.multiplier / 100)
                            )}
                        </Text> 
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