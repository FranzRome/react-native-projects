import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ChuckNorrisCategories from "./ChuckNorrisCategories";
import ChuckNorrisDetails from "./ChuckNorrisDetails";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name={"Categories"} component={ChuckNorrisCategories}></Stack.Screen>
            <Stack.Screen name={"Detail"} component={ChuckNorrisDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}