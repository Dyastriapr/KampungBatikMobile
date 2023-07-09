import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Toko from "./screen/Toko";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Reservasi from "./screen/Reservasi";
import KelolaToko from "./screen/KelolaToko";
import TambahProduk from "./screen/TambahProduk";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SearchBar } from "react-native-screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Toko"
          component={Toko}
          options={{ headerShown: true, headerTitle: "List Produk" }}
        />
        <Stack.Screen
          name="Kelolatoko"
          component={KelolaToko}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Reservasi"
          component={Reservasi}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TambahProduk"
          component={TambahProduk}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
