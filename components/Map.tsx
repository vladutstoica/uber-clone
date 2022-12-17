import MapView from "react-native-maps";
import {useSelector} from "react-redux";
import {setOrigin} from "../redux/slices/navSlice";

const Map = () => {

    
    return (
        <MapView
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right:0,
                bottom:0,
            }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}/>
    )
}

export default Map;