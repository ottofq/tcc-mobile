/* eslint-disable no-underscore-dangle */
import React from 'react';
import HTMLView from 'react-native-htmlview';
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import * as S from './styles';

const Details = () => {
  const { params } = useRoute();

  return (
    <View>
      <HTMLView stylesheet={styles} value={`<div>${params.data}</div>`} />
    </View>
  );
};

const styles = StyleSheet.create({
  p: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 20,
  },
  strong: {
    fontWeight: 'bold',
  },
  ul: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
  },
  li: {
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 20,
  },
  ol: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Details;
