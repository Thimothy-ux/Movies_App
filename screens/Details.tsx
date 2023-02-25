import React, {useEffect, useState} from 'react';
import dateFormat from 'dateformat';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {MovieDetails} from '../services/service';
import PlayButton from '../components/PlayButton';
import VideoPlayer from 'react-native-video-controls';


const placeholderImage = require('../assets/images/images.png');
const dimention = Dimensions.get('screen');

const Details = ({route}) => {
  const {movieId} = route.params;
  const [movieDetails, setMovieDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    MovieDetails(movieId)
      .then(movie => setMovieDetails(movie))
      .catch(() => setError(true));
    setLoading(true);
  }, [movieId]);

  const showModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <React.Fragment>
      {loading && !error && (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.Img}
              source={
                movieDetails.poster_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
                    }
                  : placeholderImage
              }
            />

            <View style={styles.container}>
              <View style={styles.playGround}>
                <PlayButton onHandler={showModal} />
              </View>

              <Text style={styles.title}>{movieDetails.original_title}</Text>
              <View style={styles.genreContainer}>
                {movieDetails.genres &&
                  movieDetails.genres.map(item => (
                    <Text
                      style={{
                        color: 'black',
                        marginLeft: 8,
                        fontWeight: 'bold',
                      }}
                      key={item.id}>
                      {item.name}
                    </Text>
                  ))}
              </View>

              <StarRating
                maxStars={5}
                rating={movieDetails.vote_average / 2}
                fullStarColor={'gold'}
              />

              <View style={styles.overflow}>
                <Text style={{color: 'black'}}>{movieDetails.overview}</Text>
              </View>

              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>{`Release Date: ${dateFormat(
                  movieDetails.release_date,
                  'dddd, mmmm dS, yyyy',
                )}`}</Text>
              </View>
            </View>
          </ScrollView>
          <View>
            <Modal animationType="slide" visible={modalVisible}>
              <View style={styles.container}>
                <VideoPlayer
                  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                />;
              </View>
            </Modal>
          </View>
        </View>
      )}

      {!loading && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  Img: {
    height: dimention.height / 2,
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  genreContainer: {
    flexDirection: 'row',
    padding: 10,
  },

  genre: {
    fontWeight: 'bold',
    padding: 5,
  },

  overflow: {
    padding: 12,
    color: 'black',
  },

  playGround: {
    position: 'absolute',
    top: -28,
    right: 20,
  },
});

export default Details;
