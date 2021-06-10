import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GenresCard = ({name}) => {
    return (
        <View style={{padding: 40, borderRadius: 10, backgroundColor: "#D63F41", margin: 15}}>
            <Text style={{color: "#FFF", fontSize: 25, fontWeight: "bold"}}>{name}</Text>
        </View>
    )
}

export default GenresCard

const styles = StyleSheet.create({})
