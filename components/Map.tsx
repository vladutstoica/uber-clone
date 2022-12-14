import MapView, {Marker} from "react-native-maps";
import {useDispatch, useSelector} from "react-redux";
import {selectDestination, selectOrigin, setTravelTimeInformation} from "../redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_API_KEY} from "@env";
import {useEffect, useRef} from "react";

const Map = () => {
    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50
            }
        })
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(
                `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAPS_API_KEY}`
            ).then(
                (res) => res.json()
            ).then(
                (data) => dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            )
        }

        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_API_KEY])

    return (
        <MapView
            ref={mapRef}
            style={{
                flex: 1
            }}
            showsTraffic={true}
            initialRegion={{
                latitude: 45,
                longitude: 24,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            region={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin?.description}
                    destination={destination?.description}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={3}
                    strokeColor={"#000"}
                />
            )}
            {origin?.location && (
                <Marker
                    title={"Origin"}
                    description={origin?.description}
                    identifier={"origin"}
                    coordinate={{
                        latitude: origin?.location.lat,
                        longitude: origin?.location.lng
                    }}
                />
            )}
            {destination?.location && (
                <Marker
                    title={"Destination"}
                    description={destination?.description}
                    identifier={"destination"}
                    coordinate={{
                        latitude: destination?.location.lat,
                        longitude: destination?.location.lng
                    }}
                />
            )}
        </MapView>
    )
}

export default Map;