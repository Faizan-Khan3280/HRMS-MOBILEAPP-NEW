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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
// import DocumentPicker from "react-native-document-picker";

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  editable = true,
  onFocus,
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
      editable={editable}
      onFocus={onFocus}
    />
  </View>
);

const Document = () => {
  const [document, setDocument] = useState("");
  const [title, setTitle] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [isExpiredDatePickerVisible, setExpiredDatePickerVisibility] =
    useState(false);

  const handleExpiredDate = (date) => {
    setExpiredDate(moment(date).format("DD-MM-YYYY"));
    setExpiredDatePickerVisibility(false);
  };

  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (result && result.length > 0) {
        setFileName(result[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload");
      } else {
        console.log("Unknown Error: ", err);
      }
    }
  };

  const handleSave = () => {
    if (!document || !title || !expiredDate || !fileName) {
      Alert.alert(
        "Validation Error",
        "Please fill out all fields and select a file."
      );
      return;
    }
    Alert.alert("Save", "Details saved successfully!");
  };

  const handleReset = () => {
    setDocument("");
    setTitle("");
    setExpiredDate("");
    setFileName("");
    setDescription("");
    setExpiredDatePickerVisibility(false);
    Alert.alert("Reset", "Details reset!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Document Details</Text>

          <RNPickerSelect
            placeholder={{
              label: "Select Document Type",
              value: null,
              color: "#9EA0A4",
            }}
            onValueChange={(value) => setDocument(value)}
            value={document}
            items={[
              { label: "PDF", value: "pdf" },
              { label: "Word Document", value: "docx" },
              { label: "Excel Sheet", value: "xlsx" },
            ]}
            style={pickerSelectStyles}
          />

          <InputField
            label="Title"
            placeholder="Enter document title"
            value={title}
            onChangeText={setTitle}
          />

          <InputField
            label="Expired Date"
            placeholder="Select expired date"
            value={expiredDate}
            onFocus={() => setExpiredDatePickerVisibility(true)}
            onChangeText={setExpiredDate}
          />

          <InputField
            label="Description"
            placeholder="Enter description"
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.button} onPress={selectDoc}>
            <Text style={styles.selectButtonText}>Select File</Text>
          </TouchableOpacity>

          {fileName ? <Text style={styles.fileName}>{fileName}</Text> : null}
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

        <DateTimePickerModal
          isVisible={isExpiredDatePickerVisible}
          mode="date"
          onConfirm={handleExpiredDate}
          onCancel={() => setExpiredDatePickerVisibility(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 10,
    marginBottom: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    color: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    marginBottom: 24,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    color: "grey",
    shadowColor: "#000",
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
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  formSection: {
    marginBottom: 25,
    paddingTop:20,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    backgroundColor: "#f0f0f0",
    marginBottom: 25,
    width: "100%",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  selectButtonText: {
    fontSize: 16,
    color: "grey",
  },
  fileName: {
    marginTop: 10,
    fontSize: 16,
    color: "black",
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
    fontWeight: "bold",
  },
});

export default Document;

