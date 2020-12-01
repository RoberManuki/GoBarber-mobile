import React, { useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';


import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title, BackToSignIn, BackToSignInText } from './styles'

const SignUp: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

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
              <Title>Crie sua Conta</Title>
            </View>

            <Form ref={formRef} onSubmit={(data) => {
              console.log(data)
            }}>
              <Input name="name" icon="user" placeholder="Nome"/>
              <Input name="email" icon="mail" placeholder="Email"/>
              <Input name="password" icon="lock" placeholder="Senha"/>

              <Button
                onPress={() => formRef.current?.submitForm()}
              >
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar ao início</BackToSignInText>
      </BackToSignIn>
    </>
  )
}

export default SignUp;
