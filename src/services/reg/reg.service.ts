import axios from 'axios';

export interface RegByEmailParams {
  email: string;
  name: string;
  phone: string;
  assent: boolean;
}

export const postRegByEmailAPI = async (params: RegByEmailParams) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL as string}/backend/api/registerByEmail`,
    {
      login: params.email,
      name: params.name,
      phone: params.phone,
      rules1: params.assent,
    },
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response;
};
