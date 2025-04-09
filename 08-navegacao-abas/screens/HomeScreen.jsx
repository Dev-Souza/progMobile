import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineLarge'>HomeScreen</Text>
        <Card style={{ width: '85%' }}>
          <Card.Content>
            <Title>Um Título</Title>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis molestias perferendis amet vero quia eligendi vel perspiciatis, sint aperiam tenetur maiores id deserunt laudantium voluptas accusamus, minima ut voluptates!</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={{ width: '85%' }}>
          <Card.Content>
            <Title>Um Título</Title>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis molestias perferendis amet vero quia eligendi vel perspiciatis, sint aperiam tenetur maiores id deserunt laudantium voluptas accusamus, minima ut voluptates!</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})