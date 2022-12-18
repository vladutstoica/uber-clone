import MapView, {Marker} from "react-native-maps";
import {useSelector} from "react-redux";
import {selectOrigin} from "../redux/slices/navSlice";

const Map = () => {
    const origin = useSelector(selectOrigin);

    return (
        <MapView
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            showsTraffic={true}
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >

            {origin?.location && (
                <Marker
                    title={"Origin"}
                    description={origin?.description}
                    identifier={"origin"}
                    coordinate={{
                        latitude: origin?.location.lat,
                        longitude: origin?.location.lng
                    }}/>
            )}

        </MapView>
    )
}

export default Map;