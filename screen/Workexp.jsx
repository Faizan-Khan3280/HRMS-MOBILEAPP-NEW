import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  onFocus,
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.inputField}
      keyboardType={keyboardType}
      onFocus={onFocus}
    />
  </View>
);

const Workexp = () => {
  const [company, setCompany] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);

  const handleConfirmFromDate = (date) => {
    setFromDate(moment(date).format("DD-MM-YYYY"));
    setFromDatePickerVisibility(false);
  };

  const handleConfirmToDate = (date) => {
    if (!fromDate) {
      Alert.alert("Select From Date", "Please select the From Date first.");
      setToDatePickerVisibility(false);
      return;
    }
    const selectedToDate = moment(date).format("DD-MM-YYYY");
    if (
      moment(selectedToDate, "DD-MM-YYYY").isBefore(
        moment(fromDate, "DD-MM-YYYY")
      )
    ) {
      Alert.alert("Invalid Date", "To Date cannot be before From Date.");
      setToDatePickerVisibility(false);
      return;
    }
    setToDate(selectedToDate);
    setToDatePickerVisibility(false);
  };

  const saveButton = () => {
    if (!company || !fromDate || !toDate || !post || !description) {
      Alert.alert("Incomplete details", "Please fill in all the details.");
      return;
    }
    Alert.alert("Save", "Details saved!");
  };

  const deleteReset = () => {
    setCompany("");
    setFromDate("");
    setToDate("");
    setPost("");
    setDescription("");

    Alert.alert("Reset", "Details reset!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.formContainer}>
          <InputField
            label="Company"
            placeholder="Enter company name"
            value={company}
            onChangeText={setCompany}
          />
          <InputField
            label="From Date"
            placeholder="Select from date"
            value={fromDate}
            onFocus={() => setFromDatePickerVisibility(true)}
            onChangeText={setFromDate}
            editable={false}
          />
          <InputField
            label="To Date"
            placeholder="Select to date"
            value={toDate}
            onFocus={() => setToDatePickerVisibility(true)}
            onChangeText={setToDate}
            editable={false}
          />
          <InputField
            label="Post"
            placeholder="Enter post"
            value={post}
            onChangeText={setPost}
          />
          <InputField
            label="Description"
            placeholder="Enter description"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.delButton} onPress={deleteReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isFromDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmFromDate}
          onCancel={() => setFromDatePickerVisibility(false)}
        />

        <DateTimePickerModal
          isVisible={isToDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmToDate}
          onCancel={() => setToDatePickerVisibility(false)}
        />
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
  formContainer: {
    width: 480,
    maxWidth: 350,
    paddingTop: 20,
  },

  scrollViewContent: {
    paddingHorizontal: 17,
    paddingBottom: 20,
  },

  inputContainer: {
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },

  inputField: {
    width: "102%",
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
  button: {
    backgroundColor: "#008080",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
  },
  delButton: {
    backgroundColor: "#888",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Workexp;