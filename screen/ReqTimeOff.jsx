import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import Dropdown from "./Dropdown";
import { useNavigation } from "@react-navigation/native"; 

const calculateDateDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const Timeoff = () => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dateSearchText, setDateSearchText] = useState("");
  const [dateEndSearchText, setDateEndSearchText] = useState("");
  const [notesSearchText, setNotesSearchText] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarVisibleEnd, setCalendarVisibleEnd] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [length, setLength] = useState("0");

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const options = [
    "Sick Leave",
    "Unpaid Leave",
    "Business Leave",
    "Personal Leave",
  ];

  const handleSubmit = () => {
    if (
      !selectedOption ||
      !selectedDate ||
      !selectedEndDate ||
      !notesSearchText
    ) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

   
    const formData = {
      leaveType: selectedOption,
      startDate: selectedDate,
      endDate: selectedEndDate,
      length: length,
      description: notesSearchText,
    };

   
    navigation.navigate("Leave Info", { formData });

    setSelectedOption(null);
    setDropdownOpen(false);
    setDateSearchText("");
    setDateEndSearchText("");
    setNotesSearchText("");
    setCalendarVisible(false);
    setCalendarVisibleEnd(false);
    setSelectedDate(null);
    setSelectedEndDate(null);
    setLength("0");
  };

  const showDateErrorAlert = () => {
    Alert.alert("Invalid Date", "End date cannot be before start date.");
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    setDateSearchText(day.dateString);
    setCalendarVisible(false);
  };

  const handleEndDateSelect = (day) => {
    if (selectedDate && new Date(day.dateString) < new Date(selectedDate)) {
      showDateErrorAlert();
      setDateEndSearchText("");
      setSelectedEndDate(null);
      setLength("0");
      return;
    }

    setSelectedEndDate(day.dateString);
    setDateEndSearchText(day.dateString);

    if (selectedDate) {
      const totalDays = calculateDateDifference(selectedDate, day.dateString);
      setLength(totalDays.toString());
    }

    setCalendarVisibleEnd(false);
  };

  return (
    <SafeAreaView>
    
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <Text style={styles.label}>Leave Type</Text>
            <Dropdown
              options={options}
              onSelect={handleSelect}
              style={styles.dropdown}
              onOpen={() => setDropdownOpen(true)}
              onClose={() => setDropdownOpen(false)}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Start Date</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setCalendarVisible(!calendarVisible)}
            >
              <Text style={styles.dateText}>
                {dateSearchText || "Select date"}
              </Text>
            </TouchableOpacity>
            {calendarVisible && (
              <Calendar
                onDayPress={handleDateSelect}
                markedDates={{
                  [selectedDate]: { selected: true, selectedColor: "#008b8b" },
                }}
                style={styles.calendar}
              />
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>End Date</Text>
            <TouchableOpacity
              style={styles.datePicker}
              onPress={() => setCalendarVisibleEnd(!calendarVisibleEnd)}
            >
              <Text style={styles.dateText}>
                {dateEndSearchText || "Select date"}
              </Text>
            </TouchableOpacity>
            {calendarVisibleEnd && (
              <Calendar
                onDayPress={handleEndDateSelect}
                markedDates={{
                  [selectedEndDate]: {
                    selected: true,
                    selectedColor: "#008b8b",
                  },
                }}
                style={styles.calendar}
              />
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Length</Text>
            <Text style={styles.value}>{length} day(s)</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Write here"
              value={notesSearchText}
              onChangeText={setNotesSearchText}
              style={styles.notesInput}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  formContainer: {
    backgroundColor: "white",
    paddingTop: 30,
    height: 710,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  field: {
    marginBottom: 30,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  datePicker: {
    width: "100%",
    padding: 10,
    marginBottom: 25,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    height:42,
    fontSize: 16,
    color: "grey",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  calendar: {
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
  notesInput: {
    width: "100%",
    padding: 10,
    marginBottom: 25,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    height:42,
    fontSize: 16,
    color: "grey",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: "#00838f",
    borderRadius: 25,
    height: 45,
    width: "35%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    marginBottom: 20,
  },
});

export default Timeoff;



























// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from "react-native";
// import { Calendar } from "react-native-calendars";
// import Dropdown from "./screens-level2/Dropdown.jsx";

// const calculateDateDifference = (startDate, endDate) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   const diffTime = Math.abs(end - start);
//   return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
// };

// const Timeoff = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [dateSearchText, setDateSearchText] = useState("");
//   const [dateEndSearchText, setDateEndSearchText] = useState("");
//   const [notesSearchText, setNotesSearchText] = useState("");
//   const [calendarVisible, setCalendarVisible] = useState(false);
//   const [calendarVisibleEnd, setCalendarVisibleEnd] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedEndDate, setSelectedEndDate] = useState(null);
//   const [length, setLength] = useState("0");

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     setDropdownOpen(false);
//   };

//   const options = [
//     "Sick Leave",
//     "Unpaid Leave",
//     "Business Leave",
//     "Personal Leave",
//   ];

//   const handleSubmit = () => {
//     if (
//       !selectedOption ||
//       !selectedDate ||
//       !selectedEndDate ||
//       !notesSearchText
//     ) {
//       Alert.alert("Missing Fields", "Please fill in all fields.");
//       return;
//     }

//     Alert.alert("Submit", "Form submitted successfully!");

//     setSelectedOption(null);
//     setDropdownOpen(false);
//     setDateSearchText("");
//     setDateEndSearchText("");
//     setNotesSearchText("");
//     setCalendarVisible(false);
//     setCalendarVisibleEnd(false);
//     setSelectedDate(null);
//     setSelectedEndDate(null);
//     setLength("0");
//   };

//   const showDateErrorAlert = () => {
//     Alert.alert("Invalid Date", "End date cannot be before start date.");
//   };

//   const handleDateSelect = (day) => {
//     setSelectedDate(day.dateString);
//     setDateSearchText(day.dateString);
//     setCalendarVisible(false);
//   };

//   const handleEndDateSelect = (day) => {
//     if (selectedDate && new Date(day.dateString) < new Date(selectedDate)) {
//       showDateErrorAlert();
//       setDateEndSearchText("");
//       setSelectedEndDate(null);
//       setLength("0");
//       return;
//     }

//     setSelectedEndDate(day.dateString);
//     setDateEndSearchText(day.dateString);

//     if (selectedDate) {
//       const totalDays = calculateDateDifference(selectedDate, day.dateString);
//       setLength(totalDays.toString());
//     }

//     setCalendarVisibleEnd(false);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.formContainer}>
//           <View style={styles.field}>
//             <Text style={styles.label}>Leave Type</Text>
//             <Dropdown
//               options={options}
//               onSelect={handleSelect}
//               style={styles.dropdown}
//               onOpen={() => setDropdownOpen(true)}
//               onClose={() => setDropdownOpen(false)}
//             />
//           </View>

//           <View style={styles.field}>
//             <Text style={styles.label}>Start Date</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setCalendarVisible(!calendarVisible)}
//             >
//               <Text style={styles.dateText}>
//                 {dateSearchText || "Select date"}
//               </Text>
//             </TouchableOpacity>
//             {calendarVisible && (
//               <Calendar
//                 onDayPress={handleDateSelect}
//                 markedDates={{
//                   [selectedDate]: { selected: true, selectedColor: "#008b8b" },
//                 }}
//                 style={styles.calendar}
//               />
//             )}
//           </View>

//           <View style={styles.field}>
//             <Text style={styles.label}>End Date</Text>
//             <TouchableOpacity
//               style={styles.datePicker}
//               onPress={() => setCalendarVisibleEnd(!calendarVisibleEnd)}
//             >
//               <Text style={styles.dateText}>
//                 {dateEndSearchText || "Select date"}
//               </Text>
//             </TouchableOpacity>
//             {calendarVisibleEnd && (
//               <Calendar
//                 onDayPress={handleEndDateSelect}
//                 markedDates={{
//                   [selectedEndDate]: {
//                     selected: true,
//                     selectedColor: "#008b8b",
//                   },
//                 }}
//                 style={styles.calendar}
//               />
//             )}
//           </View>

//           <View style={styles.field}>
//             <Text style={styles.label}>Length</Text>
//             <Text style={styles.value}>{length} day(s)</Text>
//           </View>

//           <View style={styles.field}>
//             <Text style={styles.label}>Description</Text>
//             <TextInput
//               placeholder="Write here"
//               value={notesSearchText}
//               onChangeText={setNotesSearchText}
//               style={styles.notesInput}
//             />
//           </View>

//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//             <Text style={styles.submitText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexShrink: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   formContainer: {
//     backgroundColor: "white",
//     paddingTop: 30,
//     height: 710,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   field: {
//     marginBottom: 30,
//   },
//   label: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   datePicker: {
//     backgroundColor: "#fafafa",
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     height: 45,
//     justifyContent: "center",
//     paddingHorizontal: 15,
//   },
//   dateText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   calendar: {
//     marginTop: 10,
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   value: {
//     fontSize: 16,
//     color: "#555",
//   },
//   notesInput: {
//     width: "100%",
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: "#fafafa",
//     padding: 10,
//     height: "auto",
//     textAlignVertical: "top",
//     fontSize: 16,
//     color: "#333",
//   },
//   submitButton: {
//     backgroundColor: "#00838f",
//     borderRadius: 25,
//     height: 45,
//     width: "35%",
//     alignSelf: "center",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: -20,
//   },
//   submitText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   dropdown: {
//     marginBottom: 20,
//   },
// });

// export default Timeoff;
