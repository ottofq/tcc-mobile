import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { fonts } from '../../styles';

const Header = ({ handleMenu, title }) => {
  return (
    <Appbar.Header>
      <Appbar.Action
        size={32}
        icon={() => <Icon name="menu" size={32} color="#fff" />}
        onPress={handleMenu}
      />
      <Appbar.Content
        title={title}
        titleStyle={{ fontSize: fonts.bigger, paddingHorizontal: 10 }}
      />
    </Appbar.Header>
  );
};

Header.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(Header);
