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
import RNPickerSelect from "react-native-picker-select";

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

const countries = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  { label: "United Kingdom", value: "GB" },
  // Other countries...
];

const EmergencyContact = () => {
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const handleSave = () => {
    if (
      !relation ||
      !email ||
      !phone ||
      !address1 ||
      !name ||
      !city ||
      !state ||
      !zip ||
      !country
    ) {
      Alert.alert("Incomplete Details", "Please fill in all the details.");
      return;
    }

    Alert.alert("Save", "Details saved successfully!");
  };

  const handleReset = () => {
    setRelation("");
    setEmail("");
    setPhone("");
    setAddress1("");
    setAddress2("");
    setName("");
    setCity("");
    setState("");
    setZip("");
    setCountry(null);
    Alert.alert("Reset", "Details reset!");
  };

  return (
    <SafeAreaView style={styles.container}>
     

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <RNPickerSelect
            placeholder={{
              label: "Select Relation",
              value: null,
              color: "gray",
            }}
            onValueChange={(value) => setRelation(value)}
            value={relation}
            items={[
              { label: "Self", value: "Self" },
              { label: "Parent", value: "Parent" },
              { label: "Spouse", value: "Spouse" },
              { label: "Sibling", value: "Sibling" },
              { label: "In Law", value: "In Law" },
            ]}
            style={pickerSelectStyles}
          />

          <InputField
            label="Name"
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <InputField
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            label="Mobile"
            placeholder="Mobile"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Address Information</Text>
          <InputField
            label="Address Line 1"
            placeholder="Address Line 1"
            value={address1}
            onChangeText={setAddress1}
          />

          <InputField
            label="Address Line 2"
            placeholder="Address Line 2"
            value={address2}
            onChangeText={setAddress2}
          />

          <InputField
            label="City"
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />

          <InputField
            label="State"
            placeholder="State"
            value={state}
            onChangeText={setState}
          />

          <InputField
            label="ZIP"
            placeholder="ZIP"
            value={zip}
            onChangeText={setZip}
          />

          <RNPickerSelect
            placeholder={{
              label: "Select Country",
              value: null,
              color: "gray",
            }}
            onValueChange={(value) => setCountry(value)}
            value={country}
            items={countries}
            style={pickerSelectStyles}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButtonContainer}
            onPress={handleSave}
            accessibilityLabel="Save Details"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetButtonContainer}
            onPress={handleReset}
            accessibilityLabel="Reset Details"
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    color: "grey",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    color: "grey",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  backButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 18,
    color: "#008080",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  saveButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#008080",
    
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  formSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
    marginTop:10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  inputField: {
    width: "100%",
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
    justifyContent: "space-between",
  },
  saveButtonContainer: {
    backgroundColor: "#008080",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
  },
  resetButtonContainer: {
    backgroundColor: "#888",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default EmergencyContact;