import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail"
  },
  Clouds: {
    iconName: "apple-icloud"
  }
}

export default function Weather({ temp, condition }) {
  return (

      <LinearGradient
        colors={['#4c669f', '#3b5998']}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
          <Text style={styles.temp}>
            {temp}
          </Text>
        </View>
        <View style={styles.halfContainer} />
      </LinearGradient>

    )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow","Haze" , "Atmosphere", "Clear", "Clouds", "Dust", "Mist"]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})