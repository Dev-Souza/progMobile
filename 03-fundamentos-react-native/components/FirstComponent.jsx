import { StyleSheet, Text, View } from 'react-native'

export default function FirstComponent(props) {
    return (
        <View>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text>{props.text}, mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 600
    }
  });