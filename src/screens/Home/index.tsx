import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import {BellRinging, CaretDown, MapPin} from "phosphor-react-native"



export function Home() {
  return (
    <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]} 
    style={styles.container}
    >
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <MapPin color="#fff" size={32}/>
                    <Text style={styles.headerLeftText}>Rio de Janeiro</Text>
                    <CaretDown color="#fff" size={25}/>
                </View>
                <BellRinging color="#fff" size={32} />
            </View>

            <View style={styles.info}>
              <Text>Bom dia, Diego!</Text>
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
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {  
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  headerLeftText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },

  info: {}
});
