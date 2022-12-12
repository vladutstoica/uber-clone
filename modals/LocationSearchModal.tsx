import GoBackButton from "@components/GoBackButton";
import {Image, SafeAreaView, View} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const LocationSearchModal = () => {
    return (
        <View style={{backgroundColor: "#fff"}}>
            <SafeAreaView>
                <GoBackButton/>

                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width: 25, marginHorizontal: 12, aspectRatio: 0.5, resizeMode: "contain"}}
                           source={require("../assets/pickup-where.jpeg")}/>

                    <View style={{flex: 0, flexGrow: 1, flexBasis: "100%"}}>
                        <GooglePlacesAutocomplete
                            styles={{
                                container: {
                                    flex: 0,
                                    width: "80%",
                                },
                                textInput: {
                                    height: 32,

                                    backgroundColor: "#f5f5f5",

                                    borderRadius: 2,

                                    fontSize: 14,
                                },
                            }}
                            placeholder={"Pickup Location"}
                            query={{
                                key: "",
                                language: "en",
                            }}/>
                        <GooglePlacesAutocomplete
                            styles={{
                                container: {
                                    flex: 0,
                                    width: "80%",
                                },
                                textInput: {
                                    height: 32,

                                    backgroundColor: "#f5f5f5",

                                    borderRadius: 2,

                                    fontSize: 14,
                                },
                            }}
                            placeholder={"Where to?"}
                            query={{
                                key: "",
                                language: "en",
                            }}/>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default LocationSearchModal;
