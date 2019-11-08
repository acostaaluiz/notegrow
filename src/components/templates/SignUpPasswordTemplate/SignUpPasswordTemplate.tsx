import React from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { Page, Title, Text } from './SignUpPasswordTemplate.styles';
import { Image, Input, Button } from '../../atoms';
import useForm from 'react-hook-form';

interface SignUpPasswordTemplateProps {
  onSubmit: (data: { password: string }) => void;
}

function SignUpPasswordTemplate({ onSubmit }: SignUpPasswordTemplateProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    clearError,
  } = useForm<{ password: string }>();
  const password = watch('password') as string;
  const disabled =
    !password ||
    (password && !password.length) ||
    (errors && errors.password && errors.password.message)
      ? true
      : false;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <Page>
          <Image width="56px" height="16px" name="logo" />
          <Title>Cadastre uma senha para acessar sua conta</Title>
          <Text>
            A senha precisa ter no mínimo 6 dígitos e pelo menos 1 letra.
          </Text>
          <Input
            value={password}
            innerref={register(
              { name: 'password' },
              {
                required: 'Insira uma senha',
                pattern: {
                  value: /^(?=.*[A-z])(?=.*[0-9]{5,})/,
                  message: 'Senha inválida',
                },
              },
            )}
            onChangeText={text => {
              setValue('password', text);
              clearError('password');
            }}
            textContentType="newPassword"
            error={errors && errors.password && errors.password.message}
            secureTextEntry
          />
          <View
            style={{
              alignItems: 'flex-end',
              width: '100%',
              marginTop: 40,
            }}>
            <Button
              disabled={disabled}
              inline
              icon="arrow-forward"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <View style={{ flex: 1 }} />
        </Page>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

SignUpPasswordTemplate.defaultProps = {} as Partial<
  SignUpPasswordTemplateProps
>;

export default SignUpPasswordTemplate;
