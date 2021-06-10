import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MovieCard = ({name, releaseYear, rating, generename}) => {
    return (
        <View style={{padding: 25, margin: 15, backgroundColor: "#D63F41", borderRadius: 10}}>
            <Text style={{fontSize: 25, fontWeight: "bold", marginBottom: -1, color: "#fff"}}>Name: {name}</Text>
            <Text style={{fontSize: 14,marginBottom:8, color: "#fff"}}>{generename}</Text>
            <Text style={{fontSize: 16,marginBottom: 10, color: "#fff"}}>Year: {releaseYear}</Text>
            <Text style={{fontSize: 16, color: "#fff"}}>Ratings: {rating}</Text>
        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({})
