import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons/faFaceSmile";

import ViewData from "./screens/ViewData";
import ChangeMoods from "./screens/ChangeMoods";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Tracking") {
                            iconName = faChartSimple;
                        } else if (route.name === "Moods") {
                            iconName = faFaceSmile;
                        }

                        return (
                            <FontAwesomeIcon
                                icon={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "grey",
                    tabBarStyle: {
                        backgroundColor: "black",
                        borderTopColor: "black",
                        borderTopWidth: 1.5,
                        fontSize: 20,
                        height: 60,
                        paddingVertical: 7,
                    },
                    tabBarLabelStyle: {
                        fontSize: 13,
                        letterSpacing: 0.5,
                    },
                })}
            >
                <Tab.Screen
                    name="Tracking"
                    component={ViewData}
                    options={styles.tabScreen}
                />
                <Tab.Screen
                    name="Moods"
                    component={ChangeMoods}
                    options={styles.tabScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabScreen: {
        headerStyle: {
            backgroundColor: "#000000",
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: "regular",
        },
        headerShadowVisible: false,
    },
});
