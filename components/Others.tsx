import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Others = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("LocationSearchModal")}
        >
            <Text style={styles.buttonText}>Enter pick-up location</Text>
        </TouchableOpacity>
    )
}

export default Others;

const styles = StyleSheet.create({
    buttonWrapper: {
        marginVertical: 16,
        paddingVertical: 14,
        paddingHorizontal: 18,

        backgroundColor: "#e5e5e5",
        borderRadius: 999,
    },
    buttonText: {
        color: "#525252",
        fontSize: 20,
        fontWeight: "500",
    },
})