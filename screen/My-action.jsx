import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AntDesign from "react-native-vector-icons/AntDesign";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.main}>
        <Text style={styles.title}>My action</Text>
      </View> */}

      <View style={styles.mainboxes}>
        <View style={styles.box}>
          <FontAwesome
            name="exchange"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Transactions</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome6
            name="person-circle-check"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text paddingLeft={6} style={styles.boxText}>
            Approvals
          </Text>
        </View>

        <View style={styles.box}>
          <MaterialIcons
            name="payment"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text paddingLeft={14} style={styles.boxText}>
            Payroll
          </Text>
        </View>
      </View>

      <View style={styles.secondrow}>
        <View style={styles.box}>
          <Ionicons
            name="documents"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Documnets</Text>
        </View>

        <View style={styles.box}>
          <MaterialIcons
            name="store-mall-directory"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text paddingLeft={8} style={styles.boxText}>
            Directory
          </Text>
        </View>

        <View style={styles.box}>
          <AntDesign
            name="calendar"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text style={styles.boxText}>Attendance</Text>
        </View>
      </View>

      <View style={styles.thirdrow}>
        <View style={styles.boxes}>
          <FontAwesome6
            name="clock"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text paddingLeft={7} style={styles.boxText}>
            Schedule
          </Text>
        </View>

        <View style={styles.boxes}>
          <FontAwesome6
            name="book"
            size={24}
            color={"blue"}
            style={styles.icon}
          />
          <Text paddingLeft={14} style={styles.boxText}>
            Tasks
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#00828e",
    padding: 20,
    paddingBottom: 200,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  box: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    margin: 10,
  },
  boxText: {
    fontSize: 12,
    alignItems: "center",
  },
  main: {
   
  },
  mainboxes: {
    // marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: -20,

    
  },

  secondrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },

  thirdrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: 'flex-end',
    marginTop: 10,
    marginLeft: -130,
  },

  icon: {
    paddingLeft: 20,
    paddingBottom: 15,
  },

  boxes: {
    width: 110,
    height: 110,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    margin: 4,
  },
});

export default Home;