import {AntDesign} from "@expo/vector-icons";
import {Pressable, SafeAreaView, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const GoBackButton = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Pressable style={styles.buttonWrapper} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={28} color="black"/>
            </Pressable>
        </SafeAreaView>
    )
}

export default GoBackButton;

const styles = StyleSheet.create({
    buttonWrapper: {
        padding: 8,
        marginHorizontal: 12,
        
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"flex-start",
        
        backgroundColor: "#fff",
        
        borderRadius: 999,
        
        aspectRatio: 1,
    }
})