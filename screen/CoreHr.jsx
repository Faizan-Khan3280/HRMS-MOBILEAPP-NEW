import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Title, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; 

const CoreHr = () => {
  const navigation = useNavigation(); 

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Award</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Awards");
              navigation.navigate("Awards");
            }}
          >
            See Award
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Travel</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Travel");
              navigation.navigate("Travel Info");
            }}
          >
            See Travel
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Training</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Training");
              navigation.navigate("Training");
            }}
          >
            See Training
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Ticket</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Ticket");
              navigation.navigate("Ticket Info");
            }}
          >
            See Ticket
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Transfer</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Transfer");
              navigation.navigate("Transfer");
            }}
          >
            See Transfer
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Promotion</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Promotion");
              navigation.navigate("Promotion");
            }}
          >
            See Promotion
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Complaint</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Complaint");
              navigation.navigate("Complaint");
            }}
          >
            See Complaint
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Warning</Title>
          <Button
            style={styles.button}
            onPress={() => {
              console.log("Navigating to Warning");
              navigation.navigate("Warning");
            }}
          >
            See Warning
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    height: 90,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default CoreHr;
