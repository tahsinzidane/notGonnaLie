import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.url}>your inbox url</Text>

                <Button
                    title="copy url"
                    onPress={() => {
                        Alert.alert('btn working');
                    }}
                />
            </View>

            {/* Bottom Nav */}
            <View style={styles.nav}>
                <Link href="/" asChild>
                    <FontAwesome name="rocket" size={30} color="purple" />
                </Link>
                <Link href="/inbox" asChild>
                    <FontAwesome name="inbox" size={30} color="purple" />
                </Link>
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
});
