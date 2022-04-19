import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.ustComp}>
            <Text>Selami Aleykim Dayunun</Text>
        </View>
        <View style={styles.altComp}>
            <Text>Selami Aleykim asdas</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      marginTop:50
  },

    ustComp:{
      flex:100,
        backgroundColor:'red',
    },
    altComp:{
        flex:200,
        backgroundColor: "#4b2424",
    },
});
