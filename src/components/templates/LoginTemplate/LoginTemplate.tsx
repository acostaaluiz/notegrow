import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  WhiteBackground,
  Title,
  ImageBackground,
} from './LoginTemplate.styled';
import {
  Input,
  Button,
  Image,
  StatusBarComponent,
  LoadingModal,
} from '../../atoms';
import useForm from 'react-hook-form';

interface LoginTemplateProps {
  loading: boolean;
  onSubmit: (cpf: string) => void;
}

function LoginTemplate({ onSubmit, loading }: LoginTemplateProps) {
  const {
    register,
    setValue,
    errors,
    clearError,
    watch,
    handleSubmit,
  } = useForm<{
    cpf: string;
  }>();
  const cpf = watch('cpf') as string;
  const hasCpf = cpf && cpf.length;

  const submit = () => {
    onSubmit(cpf);
  };

  return (
    <>
      <StatusBarComponent />
      {loading && <LoadingModal />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <WhiteBackground>
          <View>
            <Image width="56px" height="16px" name="logo" />
            <Title>Digite seu CPF para começar</Title>
            <Input
              style={{ marginTop: 50 }}
              value={cpf}
              autoCapitalize="none"
              onChangeText={text => {
                setValue('cpf', text);
                clearError();
              }}
              placeholder="000.000.000-00"
              type="cpf"
              onSubmitEditing={submit}
              error={errors && errors.cpf && errors.cpf.message}
              innerref={register(
                { name: 'cpf' },
                {
                  pattern: {
                    value: /\d{3}.\d{3}.\d{3}-\d{2}/,
                    message: 'Digite o CPF no padrão correto',
                  },
                },
              )}
            />
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: 36,
              }}>
              <Button
                icon={'arrow-forward'}
                onPress={handleSubmit(submit)}
                disabled={!hasCpf}
              />
            </View>
          </View>
          <ImageBackground>
            <Image name="abstract1" width="360" height="151" />
          </ImageBackground>
        </WhiteBackground>
      </TouchableWithoutFeedback>
    </>
  );
}

LoginTemplate.defaultProps = {
  loading: false,
  onSubmit(cpf: string) {},
} as Partial<LoginTemplateProps>;

export default LoginTemplate;
