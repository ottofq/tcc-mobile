import React from 'react';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({handleMenu, title}) {
  return (
    <Appbar.Header>
      <Appbar.Action
        size={32}
        icon={() => <Icon name="menu" size={32} color="#fff" />}
        onPress={handleMenu}
      />
      <Appbar.Content
        title={title}
        titleStyle={{fontSize: 22, paddingHorizontal: 10}}
      />
    </Appbar.Header>
  );
}
