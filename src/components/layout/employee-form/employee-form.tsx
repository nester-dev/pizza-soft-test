import { FC, useMemo } from 'react';
import InputField from '@/components/ui/form/input-field/input-field.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmployeeFormFields } from '@/components/layout/employee-form/types.ts';
import { Button, Dropdown } from '@/components';
import { POSITION_OPTIONS } from '@/shared/constants.ts';
import { employeeSchema } from '@/components/layout/employee-form/employee-form.schema.ts';
import styles from './employee-form.module.scss';

const EmployeeForm: FC = () => {
  const roleOptions = useMemo(() => POSITION_OPTIONS.slice(1), []);
  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormFields>({
    resolver: zodResolver(employeeSchema),
    defaultValues: { role: roleOptions[0].value },
  });

  const onSubmit: SubmitHandler<EmployeeFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form}>
      <InputField
        label="Name"
        placeholder="Enter employee name"
        name="name"
        control={control}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <InputField
        label="Phone number"
        mask="+{7} (000) 000-0000"
        lazy={false}
        name="phoneNumber"
        control={control}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
      />
      <InputField
        label="Birthday"
        mask={Date}
        lazy={false}
        name="birthday"
        control={control}
        error={!!errors.birthday}
        helperText={errors.birthday?.message}
      />

      <Dropdown
        options={roleOptions}
        onSelect={(option) => setValue('role', option.value)}
      />

      <Button onClick={handleSubmit(onSubmit)}>Save</Button>
    </form>
  );
};

export default EmployeeForm;
