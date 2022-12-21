import {StyleSheet, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

const data = [
    {
        id: "1",
        title: "Ride",
        image: require("../assets/ride.webp"),
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "2 Wheels",
        image: require("../assets/2wheels.png"),
        screen: ""
    },
    {
        id: "3",
        title: "Reserve",
        image: require("../assets/reserve.png"),
        screen: ""
    }
]
const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            contentContainerStyle={styles.listWrapper}
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity
                    style={[styles.itemWrapper, {opacity: item.screen ? 1 : 0.4}]}
                    disabled={!item.screen}
                    onPress={() => navigation.navigate("MapScreen", {})}>
                    <View>
                        <Image
                            style={styles.itemImage}
                            source={item.image}/>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions;

const styles = StyleSheet.create({
    listWrapper: {
        justifyContent: "space-between",
        width: "100%",
        marginTop: 16,
    },
    itemWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 8,

        backgroundColor: "#e5e5e5",

        borderRadius: 12,
    },
    itemImage: {
        width: 80,
        height: 60,
        resizeMode: "contain"
    },
    itemText: {
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center"
    }
})