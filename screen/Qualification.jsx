import moment from "moment";
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

const InputField = ({ placeholder, value, onChangeText, onFocus }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    style={styles.inputField}
    onFocus={onFocus}
  />
);

const Qualification = () => {
  const [school, setschool] = useState("");
  const [Educationlevel, setEducationlevel] = useState("");
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [language, setlanguage] = useState("");
  const [professional, setprofessional] = useState("");
  const [description, setdescription] = useState("");
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);

  const handleConfirmFromDate = (date) => {
    setfromdate(moment(date).format("DD-MM-YYYY"));
    setFromDatePickerVisibility(false);
  };

  const handleConfirmToDate = (date) => {
    settodate(moment(date).format("DD-MM-YYYY"));
    setToDatePickerVisibility(false);
  };

  const handleSave = () => {
    if(!school || !Educationlevel || !fromdate || !todate || !language || !professional || !description){
      Alert.alert("Incomplete details", "Please fill in all the details.")
      return;
    }
    Alert.alert("Save", "Details saved successfully!");
  };

  const handleReset = () => {
    setschool(""),
      setEducationlevel(""),
      setfromdate(""),
      settodate(""),
      setlanguage(""),
      setprofessional(""),
      setdescription(""),
      Alert.alert("Reset", "Details reset!");
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View style={styles.formContainer}>
        <InputField
          placeholder="School/University"
          value={school}
          onChangeText={setschool}
        />

        <RNPickerSelect
          placeholder={{
            label: "Educational level",
            value: null,
            color: "grey",
          }}
          onValueChange={(value) => setEducationlevel(value)}
          value={Educationlevel}
          items={[]}
          style={pickerselectstyless}
        />
        <InputField
          placeholder="From Date"
          value={fromdate}
          onFocus={() => setFromDatePickerVisibility(true)}
        />
        <InputField
          placeholder="To Date"
          value={todate}
          onFocus={() => setToDatePickerVisibility(true)}
        />

        <RNPickerSelect
          placeholder={{
            label: "Language",
            value: null,
            color: "gray",
          }}
          onValueChange={(value) => setlanguage(value)}
          value={language}
          items={[]}
          style={pickerselectstyless}
        />

        <RNPickerSelect
          placeholder={{
            label: "Professional Skills",
            value: null,
            color: "gray",
          }}
          onValueChange={(value) => setprofessional(value)}
          value={professional}
          items={[]}
          style={pickerselectstyless}
        />
        <InputField
          placeholder="Description"
          value={description}
          onChangeText={setdescription}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleReset}>
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

const pickerselectstyless = StyleSheet.create({
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
    paddingTop:50,
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

  dropdown: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    fontSize: 16,
    color: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  buttoncontainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent:'space-evenly',
    alignContent: "center",
    marginTop:10,
    
  },
});

export default Qualification;