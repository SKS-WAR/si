import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../components/MovieCard'

const Movies = ({navigation}) => {
    const [allMovies, setAllMovies] = useState(null);
    useEffect(() => {
        axios.get('http://10.0.2.2:5555/movies').then((data) => setAllMovies(data.data)).catch((err)=> console.log("err",err))
        navigation.setOptions({ title: " Movies" })

    }, [])
 

    if(!allMovies){
        return (<Text>Loading...</Text>)
    }
    return (
        <ScrollView>
            {allMovies.map(({id, name, releaseYear, rating, generename}) => (
                <TouchableOpacity key={id} onPress={() => navigation.navigate('singlemovie', {id: id, name: name, releaseYear: releaseYear, rating: rating, generename: generename})}>
                    <MovieCard name={name}  releaseYear={releaseYear} rating={rating} generename={generename} />
                </TouchableOpacity>)
            )}
         </ScrollView>
    )
    
}

export default Movies

const styles = StyleSheet.create({})
