import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Map from "@components/Map";
import {useNavigation} from "@react-navigation/native";
import LocationSearchModal from "../modals/LocationSearchModal";
import GoBackButton from "@components/GoBackButton";
import {useSelector} from "react-redux";
import {selectOrigin} from "../redux/slices/navSlice";

const MapScreen = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <>
            <Map/>
            <SafeAreaView>
                <GoBackButton/>
            </SafeAreaView>

            <View style={{backgroundColor: "#fff", position: "absolute", bottom: 0, right: 0, left: 0}}>
                <SafeAreaView>
                    <View style={{backgroundColor: "#fff"}}>
                        <View style={styles.headerWrapper}>
                            <Text style={styles.headerText}>Set your pick-up location</Text>
                        </View>
                        <View style={styles.actionsWrapper}>
                            <Pressable style={styles.searchButton}
                                       onPress={() => navigation.navigate("LocationSearchModal")}>
                                <Text numberOfLines={1}
                                      style={styles.originText}>{origin?.description ? origin.description : "Move the map"}</Text>
                                <View style={styles.searchView}>
                                    <Text style={styles.searchText}>Search</Text>
                                </View>
                            </Pressable>
                            <Pressable
                                disabled={!origin?.description}
                                onPress={() => console.log("Pressed")}>
                                <View style={origin?.description ? styles.confirmButton : styles.confirmButtonDisabled}>
                                    <Text style={styles.confirmText}>Confirm pick-up</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}

export default MapScreen;

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
    actionsWrapper: {
        paddingHorizontal: 24,
    },
    searchButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingVertical: 16,

        width: "100%",
    },
    originText: {
        flex: 1,

        fontSize: 16,
        fontWeight: "500",
        textAlign: "left",
    },
    searchView: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginLeft: 16,

        backgroundColor: "#f5f5f5",

        borderRadius: 999,
    },
    searchText: {
        fontWeight: "500",
    },
    confirmButton: {
        paddingVertical: 18,
        backgroundColor: "#000",
    },
    confirmButtonDisabled: {
        paddingVertical: 18,
        backgroundColor: "#b9b9b9",
    },
    confirmText: {
        color: "#fff",

        fontSize: 18,
        fontWeight: "500",

        textAlign: "center",
    }
})