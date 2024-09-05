// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Card } from 'react-native-paper';

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.name}>Welcome Faizan Khan</Text>
//     </View>
//   );
// };

// const DashboardOption = ({ title, color }) => {
//   return (
//     <TouchableOpacity style={[styles.dashboardOption, { backgroundColor: color }]}>
//       <Text style={styles.dashboardOptionText}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const App = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       <Header />
//       <View style={styles.main}>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.cardText}>Pay Slip</Text>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.cardText}>Pay Slip</Text>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.cardText}>Pay Slip</Text>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card}>
//           <Card.Content>
//             <Text style={styles.cardText}>Pay Slip</Text>
//           </Card.Content>
//         </Card>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollViewContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     padding: 10,
//   },
//   header: {
//     marginBottom: 50,
//     alignItems: 'flex-start',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   main: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',
//   },
//   dashboardOption: {
//     width: '45%',
//     aspectRatio: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 8,
//     borderRadius: 10,
//     backgroundColor: 'white', // Set background color to white
//     borderWidth: 1, // Add border
//     borderColor: '#ddd', // Set border color
//     shadowColor: '#000', // Shadow color
//     shadowOffset: { width: 0, height: 2 }, // Shadow offset
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 4, // Shadow radius
//     elevation: 5, // For Android shadow
//   },
//   dashboardOptionText: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   card: {
//     width: '35%',
//     marginVertical: 8,
//     borderWidth: 2,
//     borderColor: 'black',
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: 'white',
//     shadowColor: '#000', // Shadow color
//     shadowOffset: { width: 0, height: 2 }, // Shadow offset
//     shadowOpacity: 0.1, // Shadow opacity
//     shadowRadius: 4, // Shadow radius
//     elevation: 5, // For Android shadow
//   },
//   cardText: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default App;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const App = () => {
  const [clockInTime, setClockInTime] = useState('01:35 Hrs');

  const handleClockIn = () => {
    // Handle clock in logic
    // ...
    setClockInTime('clock in'); // Update clock in time
  };

  const handleClockOut = () => {
    // Handle clock out logic
    // ...
  };

  return (
    <View style={styles.container}>
     

      <View style={styles.announcement}>
        <Text style={styles.announcementText}>Welcome Faizan</Text>
        <Text style={styles.announcementText}>Have a Great Day !</Text>

        {/* <View style={styles.announcementButton}> */}
          {/* <Text style={styles.buttonText}>New</Text> */}
        {/* </View> */}
        {/* <View style={styles.announcementButton}> */}
          {/* <Text style={styles.buttonText}>View</Text> */}
        {/* </View> */}
        <Text style={styles.announcementMessage}>
          New Policy has been added
        </Text>
        <Text style={styles.announcementMessage}>
          We have added new attendance policy.
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.clockSection}>
          <View style={styles.clockOption}>
            <Text style={styles.clockOptionText}>Clock In</Text>
          </View>
        </View>

        <View style={styles.shiftDetails}>
          <Text style={styles.shiftText}>
            Shift 1 (9:00 AM - 2:00 PM)
          </Text>
          <Text style={styles.shiftText}>General India Infor Shift</Text>
        </View>

        <View style={styles.clockButtons}>
          <TouchableOpacity style={styles.clockButton} onPress={handleClockIn}>
            <Text style={styles.buttonText}>{clockInTime}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clockButton} onPress={handleClockOut}>
            <Text style={styles.buttonText}>Clock Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuresSection}>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              {/* <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              /> */}
              <FontAwesome
              name="bank"
              size={24}
              color={"blue"}
              style={styles.icon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>PaySlip</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Award</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>announcemen</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Attendance</Text>
          </View>
        </View>

        <View style={styles.featuresSection}>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Duty Roster</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Pay Slips</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Feedback</Text>
          </View>
          <View style={styles.feature}>
            <TouchableOpacity style={styles.featureButton}>
              <Image
                source={require('../assets/Logo.png')} // Replace with your actual image
                style={styles.featureIcon}
              />
            </TouchableOpacity>
              <Text style={styles.featureText}>Announcements</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <View style={styles.bottomNavigationItem}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your actual image
            style={styles.bottomNavigationIcon}
          />
          <Text style={styles.bottomNavigationText}>Categories</Text>
        </View>
        <View style={styles.bottomNavigationItem}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your actual image
            style={styles.bottomNavigationIcon}
          />
          <Text style={styles.bottomNavigationText}>Calendar</Text>
        </View>
        <View style={styles.bottomNavigationItem}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your actual image
            style={styles.bottomNavigationIcon}
          />
          <Text style={styles.bottomNavigationText}>Home</Text>
        </View>
        <View style={styles.bottomNavigationItem}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your actual image
            style={styles.bottomNavigationIcon}
          />
          <Text style={styles.bottomNavigationText}>File Cabinet</Text>
        </View>
        <View style={styles.bottomNavigationItem}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your actual image
            style={styles.bottomNavigationIcon}
          />
          <Text style={styles.bottomNavigationText}>Profile</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007bff',
    // marginTop: 20,
    paddingTop: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop:25,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 30,
  },
  announcement: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  announcementText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  announcementButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#007bff',
    marginTop: 8,
    marginLeft: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  announcementMessage: {
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  clockSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  clockOption: {
    backgroundColor: '#e9ecef',
    padding: 8,
    borderRadius: 10,
  },
  clockOptionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shiftDetails: {
    marginBottom: 16,
  },
  shiftText: {
    fontSize: 14,
  },
  clockButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clockButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#28a745',
    marginHorizontal: 4,
  },
  featuresSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 46,
    alignItems: 'center',
    // marginLeft: 15,
  },
  feature: {
    width: '25%',
    marginBottom: 16,
  },
  featureButton: {
    padding: 16,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#e9ecef',
    // alignItems: 'center',
  },
  featureIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  featureText: {
    // textAlign: 'center',
    marginLeft: 10,
    fontSize: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00828e',
    padding: 12,
  },
  bottomNavigationItem: {
    alignItems: 'center',
  },
  bottomNavigationIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  bottomNavigationText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default App;