import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const KelolaToko = ({ navigation }) => {
  return (
    <View style={styles.keltoko}>
      <View>
        <Text style={styles.judul}>Tambah Produk</Text>

        <TouchableOpacity onPress={() => navigation.navigate("TambahProduk")}>
          <View style={styles.tambah}>
            <Image
              source={require("../assets/add.png")}
              style={{ width: 70, height: 70 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tambah: {
    backgroundColor: "green",
    width: 300,
    height: 160,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  keltoko: {
    alignItems: "center",
    justifyContent: "center",
  },
  judul: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
});

export default KelolaToko;
