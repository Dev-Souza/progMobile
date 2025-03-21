import { StyleSheet, Text } from 'react-native'

export default function SecondComponent() {
    return (
        <>
            <Text style={styles.secondText}>Second Component</Text>
            <Text style={styles.secondText}>Texto</Text>
        </>
    )
}

const styles = StyleSheet.create({
    secondText: {
        color: 'blue'
    }
})