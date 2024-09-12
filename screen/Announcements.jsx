import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Announcements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://your-backend-api.com/Announcements")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Title</Text>
      <Text style={styles.headerText}>Published For</Text>
      <Text style={styles.headerText}>Company</Text>
      <Text style={styles.headerText}>Start Date</Text>
      <Text style={styles.headerText}>End Date</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.rowContainer}>
      <Text style={styles.cellText}>{item.Title}</Text>
      <Text style={styles.cellText}>{item.PublishedFor}</Text>
      <Text style={styles.cellText}>{item.Company}</Text>
      <Text style={styles.cellText}>{item.StartDate}</Text>
      <Text style={styles.cellText}>{item.EndDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  headerContainer: {
    flex: 1,
    textAlign: "left",
  },
  headerText: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
  },
  rowContainer: {
    flex: 1,
    textAlign: "right",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cellText: {
    flex: 1,
    textAlign: "left",
    fontSize: 14,
  },
});

export default Announcements;
