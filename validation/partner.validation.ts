import {z} from 'zod';

export const partnerSchemaObject = z.object({
    firstname: z.string().min(6,{
        message: 'First name must be at least 6 characters long'
    }),
    surname: z.string().min(6,{
        message: 'Surname must be at least 6 characters long'
    }),
    wilaya: z.string().min(1,{
        message:'This field is required'
    }),
    storeName: z.string().min(8,{
        message: 'Store name must be at least 8 characters long'
    }),
    commune: z.string().min(1,{
        message:'This field is required'
    }),
    email: z.string().email().min(1,{
        message: 'This field is required'
    }),
    address: z.string(),
    password: z.string(),
    speciality: z.string(),
});