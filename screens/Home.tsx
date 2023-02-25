/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { View , StyleSheet, Dimensions, ScrollView, ActivityIndicator} from "react-native";
import { documentries, familyMovies, getPopularMovies, getTVMovies, getUpcomingMovies } from "../services/service";
import {SliderBox} from 'react-native-image-slider-box';
import List from "../components/List";
import Error from "../components/Error";




const dimentions = Dimensions.get('screen');

const Home = ( { navigation } ) => 
{
    const [ Images , setImages ] = useState();
    const [ movies, setMovies] = useState();
    const [ tvShows , setTvShows] = useState();
    const [ family_Movies , setfamilyMovies] = useState();
    const [ doc , setDoc ] = useState()
    const [ error ,  setError] = useState(false);
    const [ loading , setLoading ] = useState(false);
    

    const getData = () =>
    {

      return Promise.all( [ getPopularMovies(),  getUpcomingMovies(),   getTVMovies(),  familyMovies(),   documentries()  ] )
      
    }


    useEffect(() => {
      
      getData().then(  ([ getUpcomingMovies , getPopularMovies, getTVMovies , familyMovies , documentries ]) => 
      {

        const imagesArray = [];
        getUpcomingMovies.forEach( ( {poster_path} ) => {
            return imagesArray.push(`https://image.tmdb.org/t/p/w500/${poster_path}`);
        } )
        setImages(imagesArray);


        setMovies(getPopularMovies);
        setTvShows(getTVMovies);
        setfamilyMovies(familyMovies);
        setDoc(documentries);


      }  )
      .catch( () => setError(true)  )
      .finally( () => setLoading(true) )
    }, []);
  

    return(

     <React.Fragment >
        { loading && !error  && <ScrollView>

          { Images && <View  style = {styles.head} >

                            <SliderBox images={Images}  sliderBoxHeight={dimentions.height/1.5}  dotStyle={styles.dots}  autoplay={true}  circleLoop={true}      />

                      </View> }
         

          { movies &&  <View style = {styles.head} >

                           <List navigation = {navigation}  content = "Popular Movies" movies = {movies}  />

                      </View> }
          
          {tvShows &&   <View style = {styles.head} >

                             <List navigation = {navigation} content = "TV Show" movies = {tvShows}  />

                        </View> }
         
         
          {family_Movies &&  <View style = {styles.head} >

                                <List navigation = {navigation} content = "Rumantic Movies" movies = {family_Movies}  />

                             </View> }   


          { doc &&  <View style = {styles.head} >

                              <List navigation = {navigation} content = "Documentries" movies = {doc}  />

                    </View> }         
         
       

          </ScrollView> }
        
        { !loading && <ActivityIndicator size='large' /> }
        { error && <Error /> }
     </React.Fragment>
       
   
    );

}

const styles = StyleSheet.create( 
  {

    head : { 
      flex: 1 , 
      justifyContent: 'center', 
      alignItems: 'center'  
    },
    dots : { 
      height : 0 
    },

  } 
)

export default Home;