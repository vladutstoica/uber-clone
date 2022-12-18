import GoBackButton from "@components/GoBackButton";
import {Image, SafeAreaView, View, Text, StyleSheet} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_API_KEY} from "@env";
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../redux/slices/navSlice";

const LocationSearchModal = () => {
    const dispatch = useDispatch();

    return (
        <View style={{backgroundColor: "#fff"}}>
            <SafeAreaView>
                <GoBackButton/>

                <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                    <Image style={{
                        width: 25,
                        marginHorizontal: 12,
                        marginVertical: 8,
                        aspectRatio: 0.5,
                        resizeMode: "contain"
                    }} source={require("../assets/pickup-where.jpeg")}/>

                    <View style={{flex: 0, flexGrow: 1, flexBasis: "100%"}}>
                        <GooglePlacesAutocomplete
                            styles={googlePlacesAutocompletePickupStyle}
                            placeholder={"Pickup Location"}
                            query={{
                                key: GOOGLE_MAPS_API_KEY,
                                language: "en",
                            }}
                            onPress={(data, detail = null) => {
                                console.log(detail?.geometry.location)
                                dispatch(setOrigin({
                                    description: data.description,
                                    location: detail?.geometry.location
                                }))
                                dispatch(setDestination({
                                    destination: null
                                }))
                            }}
                            nearbyPlacesAPI={"GooglePlacesSearch"}
                            enablePoweredByContainer={false}
                            fetchDetails={true}
                            debounce={400}
                            minLength={2}/>
                        <GooglePlacesAutocomplete
                            styles={googlePlacesAutocompleteWheretoStyle}
                            placeholder={"Where to go?"}
                            query={{
                                key: GOOGLE_MAPS_API_KEY,
                                language: "en",
                            }}
                            onPress={(data, detail = null) => {
                                dispatch(setDestination({
                                    destination: detail?.geometry.location
                                }))
                            }}
                            nearbyPlacesAPI={"GooglePlacesSearch"}
                            enablePoweredByContainer={false}
                            fetchDetails={true}
                            debounce={400}
                            minLength={2}/>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default LocationSearchModal;

// TODO: GooglePlacesAutocomplete component's style doesn't support arrays, only objects; so we have to optimize the code below 
const googlePlacesAutocompletePickupStyle = StyleSheet.create({
    container: {
        flex: 0,
        width: "80%",
        zIndex: 1
    },
    textInputContainer: {
        zIndex: -1,
    },
    textInput: {
        zIndex: -1,
        height: 32,

        backgroundColor: "#f5f5f5",

        borderRadius: 2,

        fontSize: 14,
    },
    listView: {
        position: "absolute",
        top: "100%",
        zIndex: 1000,
    }
})

const googlePlacesAutocompleteWheretoStyle = StyleSheet.create({
    container: {
        flex: 0,
        width: "80%",
        zIndex: 0
    },
    textInputContainer: {
        zIndex: -1,
    },
    textInput: {
        zIndex: -1,
        height: 32,

        backgroundColor: "#f5f5f5",

        borderRadius: 2,

        fontSize: 14,
    },
    listView: {
        position: "absolute",
        top: "100%",
        zIndex: 1000,
    }
})