import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from "react-native-paper";

const Account = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://192.168.0.105:3000/register-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'User registered successfully');
                console.log(result);
            } else {
                Alert.alert('Error', result.message || 'Registration failed');
                console.log(result);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Fill required fields</Text>

            <Controller
                control={control}
                name="username"
                render={({ field }) => (
                    <TextInput
                        {...field}
                        style={styles.input}
                        placeholder="Enter your username"
                        onChangeText={field.onChange}
                        value={field.value}
                    />
                )}
            />

            <Controller
                control={control}
                name="age"
                render={({ field }) => (
                    <TextInput
                        {...field}
                        style={styles.input}
                        placeholder="Enter your age"
                        keyboardType="numeric"
                        onChangeText={field.onChange}
                        value={field.value}
                    />
                )}
            />

            <Controller
                control={control}
                name="gender"
                defaultValue="Male"
                render={({ field: { onChange, value } }) => (
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.label}>Select Gender:</Text>
                        <RadioButton.Group
                            onValueChange={onChange}
                            value={value}
                        >
                            <RadioButton.Item label="Male" value="Male" />
                            <RadioButton.Item label="Female" value="Female" />
                            <RadioButton.Item label="Sigma" value="Sigma" />
                            <RadioButton.Item label="Car/bike" value="Car/bike" />
                            <RadioButton.Item label="None binary" value="None binary" />
                            <RadioButton.Item label="Anime" value="Anime" />
                        </RadioButton.Group>
                    </View>
                )}
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                title="Submit"
            />
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
});
