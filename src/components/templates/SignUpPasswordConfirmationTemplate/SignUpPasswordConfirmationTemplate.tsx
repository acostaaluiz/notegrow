import React from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { Page, Title } from './SignUpPasswordConfirmationTemplate.styles';
import { Image, Input, Button, LoadingModal, BackButton } from '../../atoms';
import useForm from 'react-hook-form';

interface SignUpPasswordConfirmationTemplateProps {
  loading: boolean;
  entryPassword: string;
  onPressBack: () => void;
  onSubmit: (data: { password: string }) => void;
}

function SignUpPasswordConfirmationTemplate({
  loading,
  entryPassword,
  onPressBack,
  onSubmit,
}: SignUpPasswordConfirmationTemplateProps) {
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
    <>
      {loading && <LoadingModal />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}>
          <Page>
            <BackButton onPress={onPressBack} />
            <Title>Confirme sua senha</Title>
            <Input
              value={password}
              innerref={register(
                { name: 'password' },
                {
                  required: 'Insira uma senha',
                  pattern: {
                    value: new RegExp(entryPassword),
                    message: 'As senhas são diferentes',
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
    </>
  );
}

SignUpPasswordConfirmationTemplate.defaultProps = {} as Partial<
  SignUpPasswordConfirmationTemplateProps
>;

export default SignUpPasswordConfirmationTemplate;
