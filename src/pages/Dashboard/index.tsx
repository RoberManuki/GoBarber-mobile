import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

import { Container, Header, Providers, HeaderTitle, UserName, ProfileButton, UserAvatar } from './styles';

const Dashboard: React.FunctionComponent = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {"\n"}
          <UserName>{ user.name }</UserName>
        </HeaderTitle>
      </Header>

      <ProfileButton onPress={() => {}}>
        <UserAvatar source={{ uri: user.avatar_url }} />
      </ProfileButton>

      <Providers>

      </Providers>
    </Container>
  );
};

export default Dashboard;
