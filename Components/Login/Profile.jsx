    import React, { useState } from 'react';
    import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';

    const ProfilePicture = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
     
        console.log('Logging out...');
        setShowOptions(false); 
    };

    const handleProfile = () => {
        console.log('Viewing profile...');
        setShowOptions(false); 
    };

    return (
        <View style={styles.container}>
        <View style={styles.profileContainer}>
            <TouchableOpacity onPress={toggleOptions}>
            <View style={styles.profilePicture}>
             
            </View>
            </TouchableOpacity>
            
            {/* Modal to show options */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={showOptions}
            onRequestClose={() => {
                setShowOptions(false);
            }}
            >
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                <TouchableOpacity onPress={handleProfile} style={styles.option}>
                    <Text style={styles.optionText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={styles.option}>
                    <Text style={styles.optionText}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleOptions} style={styles.cancelOption}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    profileContainer: {
        
    
        
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        minWidth: 250,
        alignItems: 'center',
    },
    option: {
        paddingVertical: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    optionText: {
        fontSize: 18,
        textAlign: 'center',
    },
    cancelOption: {
        paddingVertical: 10,
        width: '100%',
        marginTop: 10,
    },
    cancelText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
    });

    export default ProfilePicture;
