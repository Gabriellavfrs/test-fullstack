import axios from 'axios';
import { ClientType } from '../types/ClientType';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const requestData = async (): Promise<ClientType[]> => {
    const response = await api.get('/clients');
    if (response.statusText !='OK') {
      throw new Error(`Failed to request clients`);
    }
    return response.data;
};

export const postData = async (data : ClientType) => {
  const response = await api.post('/clients', data);
  if (response.statusText !='Created') {
    throw new Error(`Failed to create client`);
  }
}

export const putData = async (data : ClientType, pathname: string) => {
  const response = await api.put(`/clients${pathname}`, data);
  if (response.statusText !='OK') {
    throw new Error(`Failed to update client`);
  }
}