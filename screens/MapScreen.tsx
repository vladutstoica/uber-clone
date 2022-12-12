import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Map from "@components/Map";
import {useNavigation} from "@react-navigation/native";
import LocationSearchModal from "../modals/LocationSearchModal";
import GoBackButton from "@components/GoBackButton";

const MapScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <Map/>
            <SafeAreaView>
                    <GoBackButton/>
            </SafeAreaView>
            
            <View style={{backgroundColor:"#fff", position: "absolute", bottom: 0, right: 0, left: 0}}>
                <SafeAreaView>
                    <View style={{backgroundColor:"#fff"}}>
                        <View style={styles.headerWrapper}>
                            <Text style={styles.headerText}>Set your pick-up location</Text>
                        </View>
                        <View style={styles.actionsWrapper}>
                            <Pressable style={styles.searchButton} onPress={() => navigation.navigate("LocationSearchModal")}>
                                <Text style={styles.headerText}>Move the map</Text>
                                <View style={styles.searchView}>
                                    <Text style={styles.searchText}>Search</Text>
                                </View>
                            </Pressable>
                            <Pressable disabled={true}>
                                <View style={styles.confirmButton}>
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
    },
    searchView: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        
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
    
    confirmText: {
        color: "#fff",
        
        fontSize: 18,
        fontWeight: "500",
        
        textAlign: "center",
    }
})