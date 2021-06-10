import axios from 'axios';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'


const SingleMovie = ({route, navigation}) => {
    const {id, name, releaseYear, rating, generename} =  route.params;

    const [movieData, setMovieData] = useState({
        id: id,
        name: name,
        releaseYear: releaseYear,
        rating: rating,
        generename: generename
    });

    navigation.setOptions({ title: "Edit Movie" })

        

    const updateRecord = () => {

        axios.patch(`http://10.0.2.2:5555/movie/${movieData.id}`, movieData).then(res => console.log(res)).catch(err => console.log(err))

    }


    return (
        <View>
            <TextInput style={styles.input}  
            onChangeText={text => setMovieData({...movieData, name: text})}
            value={movieData.name}
            placeholder="Insert Movie Name" 
            editable
        />
        <TextInput style={styles.input}  
            onChangeText={text => setMovieData(movie => ({...movieData, releaseYear: text}))}
            value={movieData.releaseYear}
            placeholder="Insert Movie Name" 
        />
        <TextInput style={styles.input}  
        onChangeText={text => setMovieData(movie => ({...movieData, rating: text}))}
        value={movieData.rating}
        placeholder="Insert Movie Name" 
        />
        <TextInput style={styles.input}  
            onChangeText={text => setMovieData(movie => ({...movieData, generename: text}))}
            value={movieData.generename}
            placeholder="Insert Movie Name" 
        />
        <Button title="submit" onPress={updateRecord} />
        </View>
    )
}

export default SingleMovie

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
})
