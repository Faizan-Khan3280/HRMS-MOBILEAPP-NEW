import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const personalInfo = [
    { id: '1', label: 'Gender', value: 'Male' },
    { id: '2', label: 'Nationality', value: 'Indian' },
    { id: '3', label: 'Birthdate', value: 'Aug 19, 2003' },
    { id: '4', label: 'Age', value: '21' },
];

const renderPersonalInfoItem = ({ item }) => (
    <View style={styles.infoItem}>
        <Text style={styles.infoLabel}>{item.label}</Text>
        <Text style={styles.infoValue}>{item.value}</Text>
    </View>
);

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileCard}>
                {/* <Image
                    style={styles.profileImage}
                    source={require('../assets/mmpic.jpg')}
                /> */}
                <Text style={styles.name}>Mudassir Memon</Text>
                <Text style={styles.designation}>Junior Software Developer</Text>
                <Text style={styles.id}>Emp id: #12345</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.personal}>Personal Information</Text>

                <FlatList
                    data={personalInfo}
                    renderItem={renderPersonalInfoItem}
                    keyExtractor={item => item.id}
                    style={styles.infoList}
                />

                <View style={styles.infoContainer}>
                    <Icon name="mail-outline" size={20} color="#555" />
                    <Text style={styles.infoText}>mudassirmemon86@example.com</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Icon name="call-outline" size={20} color="#555" />
                    <Text style={styles.infoText}>+91 7776886059</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        backgroundColor: '#00828e',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileCard: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginBottom: 20,
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    designation: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 5,
    },

    id: {
        fontSize: 14,
        color: '#999',
    },

    body: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },

    personal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },

    infoLabel: {
        fontSize: 16,
        color: '#333',
    },

    infoValue: {
        fontSize: 16,
        color: '#666',
    },

    infoList: {
        marginBottom: 20,
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    infoText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#555',
    },

    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;