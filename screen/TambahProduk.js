import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const TambahProduk = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: "business",
          apiKey: "160543ed38f44b859e90573fa30893f5",
        },
      });

      setData(res.data.articles);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView>
      {data &&
        data.map((item, i) => {
          return (
            <>
              <Text>{item.title}</Text>;
            </>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TambahProduk;
