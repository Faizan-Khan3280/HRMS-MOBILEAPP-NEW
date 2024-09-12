import {
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  
  const SocialProfile = () => {
    const [facebook, setFacebook] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [skype, setSkype] = useState("");
    const [twitter, setTwitter] = useState("");
  
    const handleSave = () => {
      if (!facebook || !linkedIn || !whatsapp || !skype || !twitter) {
        Alert.alert("Validation Error", "Please fill out all fields.");
        return;
      }
      Alert.alert("Save", "Details saved successfully!");
    };
  
    const handleReset = () => {
      setFacebook(""),
        setLinkedIn(""),
        setWhatsapp(""),
        setSkype(""),
        setTwitter(""),
        Alert.alert("Reset", "Details reset!");
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.formContain}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Facebook Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Facebook URL"
                value={facebook}
                onChangeText={setFacebook}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>LinkedIn Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter LinkedIn URL"
                value={linkedIn}
                onChangeText={setLinkedIn}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>WhatsApp Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter WhatsApp Number"
                value={whatsapp}
                onChangeText={setWhatsapp}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Skype ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Skype ID"
                value={skype}
                onChangeText={setSkype}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Twitter Handle</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Twitter Handle"
                value={twitter}
                onChangeText={setTwitter}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.deleteButton} onPress={handleReset}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "#f9f9f9",
    },
    formContain: {
      width: 480,
      maxWidth: 350,
      paddingTop: 20,
    },
    scrollViewContent: {
      paddingHorizontal: 15,
      paddingBottom: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 14,
      color: "#555",
      marginBottom: 5,
    },
    input: {
      width: "103%",
      height: 45,
      padding: 10,
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
      fontSize: 16,
      color: "#333",
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 30,
    },
    button: {
      backgroundColor: "#008080",
      width: "47%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      borderRadius: 5,
    },
    deleteButton: {
      backgroundColor: "#888",
      width: "47%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  
  export default SocialProfile;