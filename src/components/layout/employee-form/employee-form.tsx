import { FC, useEffect, useMemo } from 'react';
import InputField from '@/components/ui/form/input-field/input-field.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmployeeFormFields } from '@/components/layout/employee-form/types.ts';
import { Button, Dropdown, Toggle } from '@/components';
import { POSITION_OPTIONS } from '@/shared/constants.ts';
import { employeeSchema } from '@/components/layout/employee-form/employee-form.schema.ts';
import { useEditEmployeeMutation } from '@/redux/api.ts';
import { useParams } from 'react-router-dom';
import { Employee } from '@/shared/types/employee.interface.ts';
import styles from './employee-form.module.scss';

type Props = {
  initialValues?: Omit<Employee, 'id'>;
};

const EmployeeForm: FC<Props> = ({ initialValues }) => {
  const params = useParams<{ employeeId: string }>();
  const roleOptions = useMemo(() => POSITION_OPTIONS.slice(1), []);
  const [mutate] = useEditEmployeeMutation();
  const {
    setValue,
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormFields>({
    resolver: zodResolver(employeeSchema),
    defaultValues: { role: roleOptions[0].value },
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<EmployeeFormFields> = (data) => {
    if (params.employeeId) {
      mutate({
        id: Number(params.employeeId),
        ...data,
      });
    }
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
        name="phone"
        control={control}
        error={!!errors.phone}
        helperText={errors.phone?.message}
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

      <Toggle {...register('isArchive')} />

      <Button onClick={handleSubmit(onSubmit)}>Save</Button>
    </form>
  );
};

export default EmployeeForm;
