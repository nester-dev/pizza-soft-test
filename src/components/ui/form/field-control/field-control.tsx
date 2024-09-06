import { FC, PropsWithChildren } from 'react';
import FieldLabel from '@/components/ui/form/field-label/field-label.tsx';

type Props = PropsWithChildren<{
  label?: string;
}>;

const FieldControl: FC<Props> = ({ label, children }) => {
  return (
    <div>
      {label && <FieldLabel label={label} />}
      {children}
    </div>
  );
};

export default FieldControl;
