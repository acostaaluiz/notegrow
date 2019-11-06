import React from 'react';
import useForm from 'react-hook-form';
import { Page, Title } from './SignUpFormTemplate.styled';
import { Input, CloseKeyboard, Button } from '../../atoms';
import { string } from 'prop-types';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface SignUpFormTemplateProps {}

interface FormType {
  name: string;
  birthay: Date;
  cnh: string;
}

function SignUpFormTemplate({  }: SignUpFormTemplateProps) {
  const { register, setValue, handleSubmit, errors } = useForm<FormType>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <Page>
          <View style={{ height: 100 }} />
          <Title>Preencha os dados abaixo para continuar</Title>
          <Input
            label="Nome completo"
            placeholder="Seu nome completo"
            textContentType="name"
            innerref={register({ name: 'name' })}
            onChangeText={text => setValue('name', text)}
            secureTextEntry
          />
          <Input placeholder="00/00/00" label="Data de nascimento" />
          <Input placeholder="000.000.000.00" label="CNH" />
          <Button title="wa" />
          <View style={{ flex: 1 }} />
        </Page>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

SignUpFormTemplate.defaultProps = {} as Partial<SignUpFormTemplateProps>;

export default SignUpFormTemplate;
