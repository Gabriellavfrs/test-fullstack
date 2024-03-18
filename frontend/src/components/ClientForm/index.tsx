import { useState } from 'react';
import {
  Button,
  ButtonContainer,
  ErrorMessage,
  Form,
  Input,
  InputContainer,
  InputDetails,
  Select,
} from './styles';
import { ClientType } from '../../types/ClientType';
import { formatCPF } from '../../utils/formatCPF';
import { formatPhone } from '../../utils/formatPhone';
import { AlertIcon } from '../Icons/AlertIcon';
import { Link, useLocation } from 'react-router-dom';
import { removePunctuationCPF } from '../../utils/removePunctuationCPF';
import { removePunctuationPhone } from '../../utils/removePunctuationPhone';

type PropsType = {
  setData: (input: ClientType) => void;
  data?: ClientType;
};

export const ClientForm = ({ setData, data }: PropsType) => {
  const { pathname } = useLocation();
  const [showError, setShowError] = useState<boolean>(false);
  const [clientInfo, setClientInfo] = useState<ClientType>({
    name: data?.name || '',
    phoneNumber: data?.phoneNumber || '',
    cpf: data?.cpf || '',
    email: data?.email || '',
    status: data?.status || '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(clientInfo).includes('')) {
      return setShowError(true);
    }

    setData({
      ...clientInfo,
      cpf: removePunctuationCPF(clientInfo.cpf),
      phoneNumber: removePunctuationPhone(clientInfo.phoneNumber),
    });
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedCPF = formatCPF(value);
    e.target.value = formattedCPF;
    handleChange(e);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedCPhone = formatPhone(value);
    e.target.value = formattedCPhone;
    handleChange(e);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    });
  };

  const isError = (key: keyof ClientType) => {
    if (key === 'email') {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return !regex.test(clientInfo.email) && showError;
    }

    if (key === 'cpf') {
      return clientInfo.cpf.length < 14 && showError;
    }

    if (key === 'phoneNumber') {
      return clientInfo.phoneNumber.length < 14 && showError;
    }
    return showError && !clientInfo[key];
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <InputContainer>
        <InputDetails>
          <Input
            placeholder="Nome"
            name="name"
            value={clientInfo.name}
            onChange={handleChange}
            $error={isError('name')}
          />
          {isError('name') && <AlertIcon />}
        </InputDetails>
        {isError('name') && <ErrorMessage>É necessário informar o nome</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <InputDetails>
          <Input
            placeholder="Email"
            type="email"
            value={clientInfo.email}
            name="email"
            onChange={handleChange}
            $error={isError('email')}
          />
          {isError('email') && <AlertIcon />}
        </InputDetails>
        {isError('email') && (
          <ErrorMessage>É necessário informar um e-mail válido</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputDetails>
          <Input
            placeholder="CPF"
            name="cpf"
            value={clientInfo.cpf}
            onChange={handleCPFChange}
            $error={isError('cpf')}
          />
          {isError('cpf') && <AlertIcon />}
        </InputDetails>
        {isError('cpf') && (
          <ErrorMessage>É necessário informar um cpf válido</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputDetails>
          <Input
            placeholder="Telefone"
            value={clientInfo.phoneNumber}
            name="phoneNumber"
            $error={isError('phoneNumber')}
            onChange={handlePhoneChange}
          />
          {isError('phoneNumber') && <AlertIcon />}
        </InputDetails>
        {isError('phoneNumber') && (
          <ErrorMessage>É necessário informar um telefone válido</ErrorMessage>
        )}
      </InputContainer>
      <InputContainer>
        <InputDetails>
          <Select name="status" onChange={handleChange} value={clientInfo.status}>
            <option disabled={true} value="">
              Status
            </option>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
            <option value="disabled">Desativado</option>
            <option value="pending">Aguardando ativação</option>
          </Select>
        </InputDetails>
        {isError('status') && (
          <ErrorMessage>É necessário informar este campo</ErrorMessage>
        )}
      </InputContainer>
      <ButtonContainer>
        <Button $primary type="submit">
          {pathname === '/new' ? 'Criar' : 'Editar'}
        </Button>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </ButtonContainer>
    </Form>
  );
};
