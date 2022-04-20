import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Card from './Components/Card'

export default function App() {

    {/*<StatusBar style="auto" />*/}

    return (
        <View style={styles.container}>
            <Card title={"Eddard Stark"} text={"Winter is Coming.."}/>
            <Card title={"Haydar Dümen"} text={"Kaldırırız"}/>
            <Card title={"Görkem Güler"} text={"Çok kar yağacak"}/>
        </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#e0e0e0',
      alignItems:"center",
      justifyContent:"center"
  }
});
