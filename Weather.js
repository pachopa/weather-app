import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Don't go out"
  },
  Clouds: {
    iconName: "apple-icloud",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clouds",
    subtitle: "Enjoy your day! :D"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Get your umbrella"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rain",
    subtitle: "Get your umbrella"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Would you like to build a snowman?"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEF253", "#FF7300"],
    title: "Clear",
    subtitle: "Go out and enjoy your day"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "Find where is your mask"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Don't leave your home"
  }

}

export default function Weather({ temp, condition }) {
  return (

    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
        <Text style={styles.temp}>
          {temp}
        </Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>

  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Haze", "Atmosphere", "Clear", "Clouds", "Dust", "Mist"]).isRequired
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
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})