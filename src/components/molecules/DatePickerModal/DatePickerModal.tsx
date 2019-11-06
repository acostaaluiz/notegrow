import React from 'react';
import DateTimePickerModal, {
  DateTimePickerProps,
} from 'react-native-modal-datetime-picker';
import { useColorScheme } from 'react-native-appearance';

function DatePickerModal({ ...props }: DateTimePickerProps) {
  const colorScheme = useColorScheme();

  return (
    <DateTimePickerModal
      isDarkModeEnabled={colorScheme === 'dark'}
      {...props}
    />
  );
}

export default DatePickerModal;
