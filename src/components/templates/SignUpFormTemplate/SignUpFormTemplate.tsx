import React from 'react';
import useForm from 'react-hook-form';
import { Page, Title } from './SignUpFormTemplate.styled';
import { Input, Button, BackButton } from '../../atoms';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface SignUpFormTemplateProps {
  onPressBack: () => void;
}

interface FormType {
  name: string;
  birthay: Date;
  cnh: string;
}

function SignUpFormTemplate({ onPressBack }: SignUpFormTemplateProps) {
  const { register, setValue, handleSubmit, errors } = useForm<FormType>();
  const inputStyle = { marginVertical: 11 };

  // textContentType="name"
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <Page>
          <BackButton onPress={() => onPressBack && onPressBack()} />
          <Title>Preencha os dados abaixo para continuar</Title>
          <Input
            label="Senha"
            placeholder="Sua senha"
            onChangeText={text => setValue('password', text)}
            autoCompleteType="password"
            secureTextEntry
            containerStyle={{ marginVertical: 11 }}
          />
          <Input
            placeholder="00/00/00"
            label="Data de nascimento"
            containerStyle={inputStyle}
          />
          <Input
            placeholder="000.000.000.00"
            label="CNH"
            containerStyle={{ marginTop: 11, marginBottom: 22 }}
          />
          <Button title="Confirmar dados" />
          <View style={{ flex: 1 }} />
        </Page>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

SignUpFormTemplate.defaultProps = {
  onPressBack() {},
} as Partial<SignUpFormTemplateProps>;

export default SignUpFormTemplate;
