import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.inputField}
      placeholderTextColor="#888"
      keyboardType={keyboardType}
    />
  </View>
);

const BankAccount = () => {
  const [text, setText] = useState("");
  const [account, setAccount] = useState("");
  const [reenteraccount, setReenterAccount] = useState("");
  const [bankname, setBankname] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [branchname, setBranchname] = useState("");

  const handleSave = () => {
    if (account !== reenteraccount) {
      Alert.alert("Validation Error", "Account numbers do not match!");
      return;
    }
    if (
      !text ||
      !account ||
      !reenteraccount ||
      !bankname ||
      !ifsccode ||
      !branchname
    ) {
      Alert.alert("Incomplete details", "Please fill in all the details.");
      return;
    }
    Alert.alert("Save", "Account details saved!");
  };

  const handleReset = () => {
    setText("");
    setAccount("");
    setReenterAccount("");
    setBankname("");
    setIfsccode("");
    setBranchname("");
    Alert.alert("Reset", "Account details Reset!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formSection}>
          <InputField
            label="Account Title"
            placeholder="Enter Account Title"
            value={text}
            onChangeText={setText}
          />
          <InputField
            label="Account Number"
            placeholder="Enter Account Number"
            value={account}
            onChangeText={setAccount}
            keyboardType="numeric"
          />
          <InputField
            label="Re-enter Account Number"
            placeholder="Re-enter Account Number"
            value={reenteraccount}
            onChangeText={setReenterAccount}
            keyboardType="numeric"
          />
          <InputField
            label="Bank Name"
            placeholder="Enter Bank Name"
            value={bankname}
            onChangeText={setBankname}
          />
          <InputField
            label="IFSC Code"
            placeholder="Enter IFSC Code"
            value={ifsccode}
            onChangeText={setIfsccode}
          />
          <InputField
            label="Branch Name"
            placeholder="Enter Branch Name"
            value={branchname}
            onChangeText={setBranchname}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButtonContainer}
            onPress={handleSave}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetButtonContainer}
            onPress={handleReset}
          >
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
  scrollViewContent: {
    padding: 20,
  },
  formSection: {
    marginBottom: 20,
  },

  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  inputField: {
    width: "100%",
    height: 45,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButtonContainer: {
    backgroundColor: "#008080",
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  resetButtonContainer: {
    backgroundColor: "#888",
    flex: 0.48,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default BankAccount;