import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
})`
  padding: 5px;
  flex: 1;
  background-color: white;
`;
