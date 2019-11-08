import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { Page, Title, ImageContainer } from './SignUpFormTemplate.styled';
import { Input, Button, BackButton, Image, LoadingModal } from '../../atoms';
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
  loading: boolean;
  onPressBack: () => void;
  onSubmit: () => void;
}

interface FormType {
  name: string;
  birthday: Date;
  cnh: string;
}

const inputStyle = { marginVertical: 11 };

function date18YearsAgo() {
  const today = new Date();
  return new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
}

const parseDate = (date: Date) =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

function SignUpFormTemplate({
  loading,
  onPressBack,
  onSubmit,
}: SignUpFormTemplateProps) {
  const [dateSelecting, setDateSelecting] = useState(false);
  const maxDate = date18YearsAgo();

  const {
    register,
    setValue,
    handleSubmit,
    errors,
    watch,
    clearError,
  } = useForm<FormType>();

  const fullname = watch('cnh') as string;
  const birthday = watch('birthday') as Date;
  const cnh = watch('cnh') as string;

  const disableButton = (!fullname ||
    (fullname && !fullname.length) ||
    !birthday ||
    (!cnh || (cnh && !cnh)) ||
    errors.fullname ||
    errors.birthday ||
    errors.cnh) as boolean;

  return (
    <>
      {loading && <LoadingModal />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}>
          <Page>
            <BackButton onPress={() => onPressBack && onPressBack()} />
            <Title>Preencha os dados abaixo para continuar</Title>
            <ImageContainer>
              <Image name="abstract3" width="360" height="238" />
            </ImageContainer>
            <Input
              label="Nome completo"
              placeholder="Seu nome completo"
              textContentType="name"
              containerStyle={{ marginVertical: 11 }}
              innerref={register(
                { name: 'fullname' },
                {
                  required: 'Preencha seu nome completo',
                  pattern: {
                    value: /[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]){1,}/,
                    message: 'Preencha seu nome completo',
                  },
                  minLength: {
                    value: 3,
                    message: 'Escreva seu nome todo',
                  },
                },
              )}
              error={errors.fullname && errors.fullname.message}
              onChangeText={text => {
                setValue('fullname', text);
                clearError('fullname');
              }}
            />
            <Input
              value={birthday ? parseDate(birthday) : undefined}
              placeholder="00/00/00"
              label="Data de nascimento"
              containerStyle={inputStyle}
              innerref={register(
                { name: 'birthday' },
                { required: 'Selecione seu aniversário' },
              )}
              onFocus={() => {
                Keyboard.dismiss();
                if (!dateSelecting) {
                  setDateSelecting(true);
                }
              }}
              showSoftInputOnFocus={false}
              error={errors.birthday && errors.birthday.message}
            />
            <Input
              placeholder="000.000.000.00"
              label="CNH"
              containerStyle={{ marginTop: 11, marginBottom: 22 }}
              type="custom"
              options={{ mask: '999.999.999.99' }}
              keyboardType="number-pad"
              value={cnh}
              innerref={register(
                { name: 'cnh' },
                {
                  required: 'Digite o CNH',
                  minLength: {
                    value: 14,
                    message: 'Digite todos os números do CNH',
                  },
                  maxLength: {
                    value: 14,
                    message: 'Digite todos os números do CNH',
                  },
                },
              )}
              error={errors.cnh && errors.cnh.message}
              onChangeText={text => {
                setValue('cnh', text);
                clearError('cnh');
              }}
            />

            <Button
              title="Confirmar dados"
              disabled={disableButton}
              onPress={handleSubmit(onSubmit)}
            />

            {dateSelecting && (
              <DatePickerModal
                date={birthday}
                isVisible={dateSelecting}
                maximumDate={maxDate}
                onConfirm={date => {
                  setValue('birthday', date);
                  clearError('birthday');
                  setDateSelecting(false);
                }}
                onCancel={() => {
                  setDateSelecting(false);
                }}
                onHide={() => {
                  setDateSelecting(false);
                }}
              />
            )}
            <View style={{ flex: 1 }} />
          </Page>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
}

SignUpFormTemplate.defaultProps = {
  loading: true,
  onPressBack() {},
  onSubmit() {},
} as Partial<SignUpFormTemplateProps>;

export default SignUpFormTemplate;
