import { FC, useEffect, useMemo } from 'react';
import InputField from '@/components/ui/form/input-field/input-field.tsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmployeeFormFields } from '@/components/layout/employee-form/types.ts';
import { Button, Dropdown, Toggle } from '@/components';
import { POSITION_OPTIONS } from '@/shared/constants.ts';
import { employeeSchema } from '@/components/layout/employee-form/employee-form.schema.ts';
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
} from '@/redux/api.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { Employee } from '@/shared/types/employee.interface.ts';
import styles from './employee-form.module.scss';
import { setShowModal } from '@/redux/store.ts';
import { useAppDispatch } from '@/redux/configure-store.ts';
import { RoutesPaths } from '@/routes/paths.config.ts';

type Props = {
  initialValues?: Omit<Employee, 'id'>;
  type?: 'create' | 'edit';
};

const EmployeeForm: FC<Props> = ({ initialValues, type = 'edit' }) => {
  const params = useParams<{ employeeId: string }>();
  const roleOptions = useMemo(() => POSITION_OPTIONS.slice(1), []);
  const [editMutation] = useEditEmployeeMutation();
  const [createMutation] = useCreateEmployeeMutation();
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<EmployeeFormFields> = (data) => {
    if (params.employeeId && type === 'edit') {
      editMutation({
        id: Number(params.employeeId),
        ...data,
      });
      navigate(RoutesPaths.MAIN);
    }

    if (type === 'create') {
      createMutation({
        ...data,
        id: Date.now(),
      });
      dispatch(setShowModal(false));
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

      <Button onClick={handleSubmit(onSubmit)}>
        {type === 'create' ? 'Add' : 'Save'}
      </Button>
    </form>
  );
};

export default EmployeeForm;
