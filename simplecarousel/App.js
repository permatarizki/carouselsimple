import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
];

const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends Component {
  _renderItem = ({item, index}) => {
    console.log(item);
    return (
      <View style={styles.slide}>
        <Image
          style={{width: screenWidth / 3 - 5, height: 100}}
          source={{
            uri: item.illustration,
          }}
        />
        <Text style={styles.renderItem}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        layout={'tinder'}
        layoutCardOffset={'9'}
        ref={c => {
          this._carousel = c;
        }}
        data={ENTRIES1}
        renderItem={this._renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth / 3}
      />
    );
  }
}

const styles = StyleSheet.create({
  renderItem: {color: 'red'},
});
