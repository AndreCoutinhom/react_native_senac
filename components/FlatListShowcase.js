import {Text, TextInput, View} from 'react-native';

import React, {useState, useEffect} from 'react';
import {FlatList, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Infinite = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    // const response = await fetch(uso de API de imagens);
    const data = await response.json();
    setImages((prevImages) => [...prevImages, ...data]);
  }

  const loadMoreImages = () => {
    setPage((prevImages) => prevPage + 1);
  };

  return (
    <FlatList
    data={images}
    keyExtractor={(item) => item.id}
    onEndReached={loadMoreImages}
    onEndReachedThreshold={0.5}
    renderItem={({item}) => (
      <Image
      source={{uri: item.download_url}}
      style={styles.image}
      />
    )}
    />
  )

}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
});