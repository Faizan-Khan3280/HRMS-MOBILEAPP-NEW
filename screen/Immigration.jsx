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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
// import DocumentPicker from "react-native-document-picker";
import moment from "moment";

const InputField = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  keyboardType,
}) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    style={styles.inputField}
    onFocus={onFocus}
    keyboardType={keyboardType}
  />
);

const handleDateConfirm = (date, setDate, setVisibility) => {
  setDate(moment(date).format("DD-MM-YYYY"));
  setVisibility(false);
};

const Immigration = () => {
  const [type, setType] = useState("");
  const [document, setDocument] = useState("");
  const [issuedate, setIssuedate] = useState("");
  const [expireddate, setExpireddate] = useState("");
  const [reviewdate, setReviewdate] = useState("");
  const [fileName, setFileName] = useState("");
  const [country, setCountry] = useState("");
  const [isIssueDatePickerVisible, setIssueDatePickerVisibility] =
    useState(false);
  const [isExpiredDatePickerVisible, setExpiredDatePickerVisibility] =
    useState(false);
  const [isReviewDatePickerVisible, setReviewDatePickerVisibility] =
    useState(false);

  const selectDoc = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      if (result.length > 0) {
        setFileName(result[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload");
      } else {
        Alert.alert("Error", "An error occurred while picking the document.");
        console.error("Unknown Error: ", err);
      }
    }
  };

  const handleSave = () => {
    if (
      !type ||
      !document ||
      !issuedate ||
      !expireddate ||
      !reviewdate ||
      !country
    ) {
      Alert.alert("Incomplete details", "Please fill in all the details.");
      return;
    }
    Alert.alert("Save", "Details saved successfully!");
  };

  const handleReset = () => {
    setType("");
    setDocument("");
    setIssuedate("");
    setExpireddate("");
    setReviewdate("");
    setCountry("");
    setFileName("");
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
          <RNPickerSelect
            placeholder={{ label: "Document Type", value: null, color: "grey" }}
            onValueChange={setType}
            value={type}
            items={[
              { label: "Passport", value: "passport" },
              { label: "Visa", value: "visa" },
              { label: "ID Card", value: "id_card" },
            ]}
            style={pickerselectstyles}
          />

          <InputField
            placeholder="Document Number"
            value={document}
            onChangeText={setDocument}
            keyboardType="numeric"
          />
          <InputField
            placeholder="Issue Date"
            value={issuedate}
            onFocus={() => setIssueDatePickerVisibility(true)}
          />
          <InputField
            placeholder="Expired Date"
            value={expireddate}
            onFocus={() => setExpiredDatePickerVisibility(true)}
          />
          <InputField
            placeholder="Eligible Review Date"
            value={reviewdate}
            onFocus={() => setReviewDatePickerVisibility(true)}
          />

          <TouchableOpacity style={styles.documentbutton} onPress={selectDoc}>
            <Text style={styles.documenttext}>Document File</Text>
          </TouchableOpacity>
          {fileName ? <Text style={styles.fileName}>{fileName}</Text> : null}

          <RNPickerSelect
            placeholder={{ label: "Country", value: null, color: "grey" }}
            onValueChange={setCountry}
            value={country}
            items={[
              { label: "United States", value: "us" },
              { label: "Canada", value: "canada" },
              { label: "United Kingdom", value: "uk" },
            ]}
            style={pickerselectstyles}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isIssueDatePickerVisible}
          mode="date"
          onConfirm={(date) =>
            handleDateConfirm(date, setIssuedate, setIssueDatePickerVisibility)
          }
          onCancel={() => setIssueDatePickerVisibility(false)}
        />
        <DateTimePickerModal
          isVisible={isExpiredDatePickerVisible}
          mode="date"
          onConfirm={(date) =>
            handleDateConfirm(
              date,
              setExpireddate,
              setExpiredDatePickerVisibility
            )
          }
          onCancel={() => setExpiredDatePickerVisibility(false)}
        />
        <DateTimePickerModal
          isVisible={isReviewDatePickerVisible}
          mode="date"
          onConfirm={(date) =>
            handleDateConfirm(
              date,
              setReviewdate,
              setReviewDatePickerVisibility
            )
          }
          onCancel={() => setReviewDatePickerVisibility(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const pickerselectstyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 10,
    marginBottom: 15,
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
    marginBottom: 15,
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
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 300,
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  scrollViewContent: {
    alignItems: "center",
    width: 300,
  },
  inputField: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    fontSize: 16,
    color: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    backgroundColor: "#008080",
    marginBottom: 10,
    width: 100,
    height: 45,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "gray",
    width: 100,
    height: 45,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
    alignContent: "center",
    marginTop: 10,
  },
  documentbutton: {
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
  documenttext: {
    fontSize: 16,
    color: "grey",
    paddingRight: 150,
  },
  fileName: {
    fontSize: 16,
    color: "grey",
    marginBottom: 15,
  },
});

export default Immigration;