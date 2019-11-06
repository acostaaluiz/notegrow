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
  Alert,
} from 'react-native';
import DatePickerModal from '../../molecules/DatePickerModal';

interface SignUpFormTemplateProps {
  onPressBack: () => void;
}

interface FormType {
  name: string;
  birthay: Date;
  cnh: string;
}

const inputStyle = { marginVertical: 11 };

function SignUpFormTemplate({ onPressBack }: SignUpFormTemplateProps) {
  const { register, setValue, handleSubmit, errors, getValues } = useForm<
    FormType
  >();

  const onSubmit = (data: any) => Alert.alert('Data', JSON.stringify(data));

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
            label="Nome completo"
            placeholder="Seu nome completo"
            textContentType="name"
            containerStyle={{ marginVertical: 11 }}
            innerref={register(
              { name: 'fullname' },
              {
                required: 'Preencha seu nome completo',
                minLength: {
                  value: 3,
                  message: 'Escreva seu nome todo',
                },
              },
            )}
            error={errors.fullname && errors.fullname.message}
            onChangeText={text => setValue('fullname', text)}
          />
          <Input
            placeholder="00/00/00"
            label="Data de nascimento"
            containerStyle={inputStyle}
            innerref={register(
              { name: 'birthday' },
              { required: 'Selecione seu aniversário' },
            )}
            onFocus={() => Keyboard.dismiss()}
            error={errors.birthday && errors.birthday.message}
            onChangeText={text => setValue('birthday', text)}
          />
          <Input
            placeholder="000.000.000.00"
            label="CNH"
            containerStyle={{ marginTop: 11, marginBottom: 22 }}
            keyboardType="number-pad"
            innerref={register(
              { name: 'cnh' },
              {
                required: true,
                minLength: {
                  value: 13,
                  message: 'Digite todos os numeros e pontos do CNH',
                },
                maxLength: {
                  value: 13,
                  message: 'Digite todos os numeros e pontos do CNH',
                },
                pattern: {
                  value: /\d{3}.\d{3}\d{3}.\d{2}/,
                  message: 'Seu CNH está fora do padrão',
                },
              },
            )}
            error={errors.cnh && errors.cnh.message}
            onChangeText={text => setValue('cnh', text)}
          />
          <Button title="Confirmar dados" onPress={handleSubmit(onSubmit)} />
          {/* <DatePickerModal  /> */}
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
