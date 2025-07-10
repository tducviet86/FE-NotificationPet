import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import Homepage from "./src/screens/Home/Home.component";
import ExplorePage from "./src/screens/Explore/Explore.component";
import DiscoverPage from "./src/screens/Discover/Discover.component";
import ManagePage from "./src/screens/Manage/Manage.component";
import ProfilePage from "./src/screens/Profile/Profile.component";

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const App = () => (
  // <Provider>
    <ProtectedStack />
  // </Provider>
);
const ProtectedStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  </NavigationContainer>
);
const HomeStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="main"
        component={Homepage}
        options={{ tabBarLabel: "Home", icon: "home-outline" }}
      />
      <BottomTab.Screen
        name="discover"
        component={DiscoverPage}
        options={{ tabBarLabel: "Discover", icon: "compass-outline" }}
      />
      <BottomTab.Screen
        name="explore"
        component={ExplorePage}
        options={{ tabBarLabel: "Explore", icon: "location-outline" }}
      />
      <BottomTab.Screen
        name="manage"
        component={ManagePage}
        options={{ tabBarLabel: "Manage", icon: "people-outline" }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfilePage}
        options={{ tabBarLabel: "Profile", icon: "logo-buffer" }}
      />
    </BottomTab.Navigator>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
