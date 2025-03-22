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
    titulo: {
        fontSize: 40,
        fontWeight: 600
    }
  });