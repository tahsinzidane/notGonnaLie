import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  const checkLoginStatus = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is not logged in
      }
    } catch (error) {
      console.error("Error checking login status", error);
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Check login status on component mount
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        backgroundColor: "#FDFD96",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          color: "#333",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Not Gonna Lie 😶‍🌫️
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 30,
          textAlign: "center",
          lineHeight: 22,
        }}
      >
        Welcome to NGL by Tahsin Zidane — send and receive anonymous messages
        from your friends without knowing who said what. A safe space to know
        what people think!
      </Text>

      {/* If logged in, show "Go to Inbox" */}
      {isLoggedIn ? (
        <Link
          href="/Home"
          style={{
            backgroundColor: "#04AA6D",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Go to Inbox
          </Text>
        </Link>
      ) : (
        // If not logged in, show "Get Your Inbox URL"
        <Link
          href="/account"
          style={{
            backgroundColor: "#04AA6D",
            paddingVertical: 15,
            paddingHorizontal: 32,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Get Your Inbox URL
          </Text>
        </Link>
      )}
    </View>
  );
}
