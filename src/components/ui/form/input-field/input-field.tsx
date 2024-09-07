import { forwardRef } from 'react';
import FieldControl from '@/components/ui/form/field-control/field-control.tsx';
import FieldHelperText from '@/components/ui/form/field-helper-text/field-helper-text.tsx';
import { Control, Controller } from 'react-hook-form';
import cn from 'clsx';
import { IMaskInput, IMaskInputProps } from 'react-imask';
import styles from './input-field.module.scss';
import { EmployeeFormFields } from '@/components/layout/employee-form/types.ts';

type Props = IMaskInputProps<HTMLInputElement> & {
  label?: string;
  name: string;
  error?: boolean;
  helperText?: string;
  className?: string;
  control?: Control<EmployeeFormFields>;
};

const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      error,
      helperText,
      control,
      placeholder,
      name,
      ...props
    },
    ref
  ) => {
    return (
      <FieldControl label={label}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <IMaskInput
              ref={ref}
              placeholder={placeholder}
              className={cn(
                styles.field,
                error && styles.field_error,
                className
              )}
              {...props}
              value={field.value}
              onChange={field.onChange}
              onAccept={field.onChange}
            />
          )}
        />

        {error && <FieldHelperText>{helperText}</FieldHelperText>}
      </FieldControl>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
