import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './screen/Homescreen.jsx';
import OrganizationsScreen from './screen/OrganizationsScreen.jsx';
import HrReports from './screen/HrReports.jsx';
import ProfilePicture from './Components/Login/Profile.jsx';
import AppLogo from './AppLogo.jsx';
import myaction from './screen/My-action.jsx';
import Profile from './screen/Profile.jsx';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <AppLogo />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
  
const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: 'white', // Active item color
          drawerInactiveTintColor: 'white', // Inactive item color
          drawerStyle: {
            backgroundColor: 'blue', // Drawer background color
          },
          headerStyle: {
            backgroundColor: 'blue', // Header background color
          },
          headerTintColor: 'white', // Header text color
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Dashboard}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Genral"
          component={myaction}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Request leave"
          component={OrganizationsScreen}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Salary"
          component={HrReports}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="My attendence"
          component={myaction}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
       
       
       <Drawer.Screen
          name="Core HR"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Announcements"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Project  Tasks"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="PaySLips"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="Company Policy"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        <Drawer.Screen
          name="HElp"
          component={Profile}
          options={{ headerRight: () => <ProfilePicture /> }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;













// import React from 'react';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Dashboard from './screen/Homescreen.jsx';
// import OrganizationsScreen from './screen/OrganizationsScreen.jsx';
// import HrReports from './screen/HrReports.jsx';
// import ProfilePicture from './Components/Login/Profile.jsx';
// import AppLogo from './AppLogo.jsx';
// import myaction from './screen/My-action.jsx';
// import Profile from './screen/Profile.jsx';

// const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <AppLogo />
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };
  
// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{
//           drawerActiveTintColor: 'white', // Active item color
//           drawerInactiveTintColor: 'white', // Inactive item color
//           drawerStyle: {
//             backgroundColor: '#00828e', // Drawer background color
//           },
//           headerStyle: {
//             backgroundColor: '#00828e', // Header background color
//           },
//           headerTintColor: 'white', // Header text color
//         }}
//       >
//         <Drawer.Screen
//           name="Home"
//           component={Dashboard}
//           options={{ headerRight: () => <ProfilePicture /> }}
//         />
//         <Drawer.Screen
//           name="Organizations"
//           component={OrganizationsScreen}
//           options={{ headerRight: () => <ProfilePicture /> }}
//         />
//         <Drawer.Screen
//           name="HR Reports"
//           component={HrReports}
//           options={{ headerRight: () => <ProfilePicture /> }}
//         />
//         <Drawer.Screen
//           name="My Action"
//           component={myaction}
//           options={{ headerRight: () => <ProfilePicture /> }}
//         />
//         <Drawer.Screen
//           name="Profile"
//           component={Profile}
//           options={{ headerRight: () => <ProfilePicture /> }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
