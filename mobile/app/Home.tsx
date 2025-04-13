import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
    const [userUrl, setUserUrl] = useState('');
    const router = useRouter();

    // Fetch user data from AsyncStorage (Check if user is logged in)
    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    const parsedData = JSON.parse(userData);
                    setUserUrl(parsedData.askLink); // Set the user URL from saved data
                } else {
                    router.push('/account'); // Redirect to Account screen if not logged in
                }
            } catch (error) {
                console.log(error);
            }
        };

        getUserData();
    }, []);

    // Handle logout functionality
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('user'); // Remove user data from AsyncStorage
            router.push('/account'); // Redirect to Account screen
        } catch (error) {
            console.log(error);
        }
    };

    // Copy the URL to the clipboard (You can implement this with react-native-clipboard)
    const handleCopyUrl = () => {
        // Here you can add a copy-to-clipboard functionality
        Alert.alert('URL copied: ', userUrl); // Just showing a dummy alert for now
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.url}>Your Inbox URL: {userUrl}</Text>

                <Button
                    title="Copy URL"
                    onPress={handleCopyUrl} // Handle the URL copy
                />
            </View>

            {/* Bottom Nav */}
            <View style={styles.nav}>
                <Link href="/" asChild>
                    <FontAwesome name="home" size={30} color="purple" />
                </Link>
                <Link href={"/Inbox"} asChild>
                    <FontAwesome name="inbox" size={30} color="purple" />
                </Link>

                {/* Logout Button */}
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <FontAwesome name="sign-out" size={30} color="purple" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFD96',
        padding: 20,
        paddingBottom: 80, // space for the navbar
    },
    box: {
        padding: 24,
        borderRadius: 20,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'rgba(0, 122, 255, 0.25)',
        alignSelf: 'center',
        marginTop: 100,
    },
    url: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1F2937',
        marginBottom: 12,
        textAlign: 'center',
    },
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        elevation: 10, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    logoutButton: {
        marginLeft: 'auto', // To push logout button to the right
        padding: 10,
    },
});
