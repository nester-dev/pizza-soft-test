import { z } from 'zod';
import { BIRTHDAY_REGEXP, PHONE_NUMBER_REGEXP } from '@/shared/constants.ts';

export const employeeSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(5, 'Name must be at least 5 characters long'),
  phone: z
    .string({
      required_error: 'Phone number is required',
    })
    .regex(PHONE_NUMBER_REGEXP, 'Invalid phone number'),
  birthday: z
    .string({ required_error: 'Birthday is required' })
    .regex(BIRTHDAY_REGEXP, 'Invalid birthday'),
  role: z.string({ required_error: 'Position is required' }),
  isArchive: z.boolean(),
});
