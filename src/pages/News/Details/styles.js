import styled from 'styled-components';
import { StyleSheet, Pressable } from 'react-native';
import { colors, fonts } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0px 10px;
`;

export const Header = styled(Pressable).attrs({
  android_ripple: {
    color: colors.grayLight,
  },
})`
  border-radius: 8px;
  border: 1px solid ${colors.grayLight};
  background-color: ${colors.tertiary};
  padding: 5px;
  margin: 10px 0;
  flex-direction: row;
`;

export const ArrowContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-right-width: 1px;
  border-right-color: ${colors.grayLight};
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.small}px;
  color: ${colors.primary};
  margin-bottom: 10px;
  padding-left: 5px;
`;

export const Content = styled.ScrollView`
  background-color: ${colors.tertiary};
  padding: 0px 10px;
  border-radius: 8px;
`;

export const styles = StyleSheet.create({
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
