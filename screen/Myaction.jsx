import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AntDesign from "react-native-vector-icons/AntDesign";
// import BankAccount from "./BankAccount";




export default function Actions() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainboxes}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("BankAccount")}>
          <FontAwesome
            name="bank"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Bank Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("SocialProfile")}>
          <FontAwesome6
            name="person-circle-check"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Social Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("WorkExp")}>
          <MaterialIcons
            name="payment"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Work Experience</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Document")}>
          <Ionicons
            name="documents"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Qualification")}>
          <MaterialIcons
            name="store-mall-directory"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Qualification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Emergency")}>
          <MaterialIcons
            name="quick-contacts-dialer"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Emergency contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.thirdrow}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Immigration')}>
          <FontAwesome6
            name="file-waveform"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Immigration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <FontAwesome6
            name="book"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <FontAwesome6
            name="book"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 20,
    paddingBottom: 100,
  },
  
  box: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 12,
    textAlign: "center",
  },
  main: {
    marginTop: 50,
    width: "100%",
    alignItems: "flex-start",
  },
  mainboxes: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  secondrow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  thirdrow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    marginBottom: 10,
    color:'#00838F',
    fontSize:25,
  },
});