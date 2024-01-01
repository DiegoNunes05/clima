import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import {CaretDown, MapPin} from "phosphor-react-native"

export function Home() {
  return (
    <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]} 
    style={styles.container}
    >
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MapPin color="#fff" size={32}/>
                    <Text>Rio de Janeiro</Text>
                    <CaretDown color="#fff" size={32}/>
                </View>
            </View>
        </View>   
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 65,
    paddingHorizontal: 35,
  },
  header: {},
  headerLeft: {},
});
