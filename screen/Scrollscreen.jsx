import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";

const App = () => {
  const [text, setText] = useState("");


  const clearText = () => {
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Requests"
            value={text}
            onChangeText={setText}
          />
          {text.length > 0 && (
            <TouchableOpacity onPress={clearText} style={styles.iconContainer}>
              <Entypo name="cross" size={20} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.lists}>
          <View style={styles.list}>
            <Feather name="clock" size={20} />
            <Text style={{ fontSize: 15, paddingLeft: 6 }}>Time Offs</Text>
          </View>
        </View>

        <View style={styles.lists}>
          <View style={styles.list}>
            <AntDesign name="pluscircleo" size={20} />
            <Text style={{ fontSize: 15, paddingLeft: 6 }}>Over Time</Text>
          </View>
        </View>

        <View style={styles.lists}>
          <View style={styles.list}>
            <Feather name="shopping-bag" size={20} />
            <Text style={{ fontSize: 15, paddingLeft: 6 }}>
              Financial Transactions
            </Text>
          </View>
        </View>

        
        <View style={styles.lists}>
          <View style={styles.list}>
            <MaterialCommunityIcons name="bank-outline" size={20} />
            <Text style={{ fontSize: 15, paddingLeft: 6 }}>Loans</Text>
          </View>
        </View>

        <View style={styles.lists}>
          <View style={styles.list}>
            <Foundation name="page" size={21} />
            <Text style={{ fontSize: 15, paddingLeft: 6 }}>Misscellaneous requests</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    backgroundColor: "whitesmoke",
    width: 380,
    marginBottom: 150,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    padding: 20,
    height: 280,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    height: 35,
    borderColor: "gray",
    paddingLeft: 5,
    paddingRight: 30,
    borderRadius: 15,
    width: 300,
    backgroundColor: "white",
    color: "gray",
    marginTop: 11,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  icon: {
    color: "gray",
  },
  lists: {
    width: "70%",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
   
  },
});

export default App;