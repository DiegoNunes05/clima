import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {BellRinging, CaretDown, MapPin} from "phosphor-react-native"

import Sun from '../../assets/01d.svg';
import Sun02 from '../../assets/02d.svg';

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
              <Text style={styles.infoTextUser}>Bom dia, Diego!</Text>
              <Sun width={200} height={200}/>
            <Text style={styles.infoTextClima}>21°C</Text>
            <Text style={styles.infoTextMaxMin}>Max.: 31° Min.: 25°</Text>
              
            </View>
        </View>   

        <View style={styles.footer}>
          <Text style={styles.footerText}>Previsão Para os Próximos 7 Dias </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Seg</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>18°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Ter</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>20°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Qua</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>22°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Qui</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>19°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sex</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>17°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Sab</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>23°C</Text>
          </View>

          <View style={styles.footerCard}>
            <Text style={styles.footerCardTitle}>Dom</Text>
            <Sun02 width={40} height={40}/>
            <Text style={styles.footerCardPreview}>25°C</Text>
          </View>
          </ScrollView>
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
    alignItems: "center",
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

  info: {
    paddingVertical: 70,
    alignItems: "center",
    gap: 10, 

  },

  infoTextUser: {
    fontSize: 32,
    fontWeight: "400",
    color: "#fff"
  },

  infoTextClima: {
    fontSize: 100,
    fontWeight: "300",
    color: "#fff", 
  },

  infoTextMaxMin: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff"

  },

  footer: {
    width: "100%",
    paddingLeft: 40,
    gap: 10,
  },

  footerText: {
    fontSize: 22,
    fontWeight: "400",
    color: "#fff"
  },

  footerCard: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 99,
    height: 129,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 8,
    marginRight: 14,
  },

  footerCardTitle: {
    fontSize: 17,
    fontWeight: "700",
  },

  footerCardPreview: {
    fontSize: 24,
    fontWeight: "400",
  },
});
