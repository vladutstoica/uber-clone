import {View, FlatList, TouchableOpacity, Image} from "react-native";

const data = [
    {
        id: "1",
        title: "Get a ride",
        image: "drive.png",
        screen: "MapScreen"
    },
    {
        id: "2",
        title: "Order food",
        image: "eats.png",
        screen: "EatsScreen"
    }
]
const NavOptions = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity>
                    <View>
                        <Image
                            style={
                                {
                                    width: 120,
                                    height: 120,
                                    resizeMode: "contain"
                                }
                            }
                            source={require("../assets/eats.png")}/>
                    </View>
                </TouchableOpacity>


            )}>

        </FlatList>
    )
}

export default NavOptions;