import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';

import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, ForgotPassword, CreateAccountButton, ForgotPasswordText, CreateAccountButtonText } from './styles'

const SignIn: React.FunctionComponent = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image  source={logoImg} />

            <View>
              <Title>Faça seu Logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="Email"/>
            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button
              onPress={() => {
                console.log('deu')
              }}
            >
              Entrar
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci Minha Senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => {}}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar Conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
}

export default SignIn;
