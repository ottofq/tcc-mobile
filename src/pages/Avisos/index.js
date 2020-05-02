import React, {useEffect, useState} from 'react';
import Shimmer from 'react-native-shimmer';

import {
  Container,
  InfoCard,
  Title,
  InfoContent,
  LoadingShimmer,
} from './styles';
import api from '../../services/api';

export default function Avisos() {
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadAvisos() {
    try {
      const result = await api.get('/informacoes');
      setAvisos(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadAvisos();
  }, []);

  return (
    <Container>
      {loading ? (
        <Shimmer>
          <InfoCard>
            <Title>
              <LoadingShimmer radius={0} height={14} width={350} />
            </Title>
            <InfoContent>
              <LoadingShimmer radius={0} height={14} width={350} />
              <LoadingShimmer radius={0} height={14} width={350} />
              <LoadingShimmer radius={0} height={14} width={350} />
              <LoadingShimmer radius={0} height={14} width={350} />
            </InfoContent>
          </InfoCard>
        </Shimmer>
      ) : (
        avisos.map(aviso => (
          <InfoCard key={aviso._id}>
            <Title>
              {aviso.data} - {aviso.titulo}
            </Title>
            <InfoContent>{aviso.descricao}</InfoContent>
          </InfoCard>
        ))
      )}
    </Container>
  );
}
