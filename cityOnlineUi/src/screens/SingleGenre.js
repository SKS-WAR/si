import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from 'react-native'
import MovieCard from '../components/MovieCard'


const SingleMovie = ({route, navigation}) => {
    const {id, name} =  route.params;

    const [movieData, setMovieData] = useState({
        id: id,
        name: name,
    });
        
    const [allMovies, setAllMovies] = useState([]);
    useEffect(() => {
        axios.get(`http://10.0.2.2:5555/genere/${name}`).then((data) => setAllMovies(data.data)).catch((err)=> console.log("err",err))
        navigation.setOptions({ title: name+" Movies" })
    }, [])
 


    return (
        <ScrollView>
            {allMovies.map(({id, name, releaseYear, rating, generename}) => (
                // <TouchableOpacity key={id} onPress={() => navigation.navigate('singlemovie', {id: id, name: name, releaseYear: releaseYear, rating: rating, generename: generename})}>
                    <MovieCard key={id} name={name}  releaseYear={releaseYear} rating={rating} generename={generename} />
                // </TouchableOpacity>
                )
            )}
         </ScrollView>
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
