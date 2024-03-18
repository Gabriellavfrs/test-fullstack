import { BasePages } from '../../components/BasePages';
import { ClientForm } from '../../components/ClientForm';
import { ClientContainer, Subtitle, Title, TitleContainer } from './styles';
import { ClientType } from '../../types/ClientType';
import { postData } from '../../services/requests';
import { useNavigate } from 'react-router-dom';
import { useToaster } from '../../hooks/useToaster';

export const ClientRegister = () => {
  const { showError, showSuccess } = useToaster();
  const navigate = useNavigate();

  const handleSubmit = async (clientInfo: ClientType) => {
    try {
      await postData(clientInfo);
      showSuccess('Cadastro concluído com sucesso!');
      navigate('/');
    } catch (error) {
      console.log(error);
      showError('Ocorreu um erro ao cadastrar as informações!');
    }
  };

  return (
    <BasePages>
      <>
        <ClientContainer>
          <TitleContainer>
            <Title>Novo Cliente</Title>
            <Subtitle>Informe os campos a seguir para cadastrar um novo cliente</Subtitle>
          </TitleContainer>
        </ClientContainer>
        <ClientForm setData={handleSubmit} />
      </>
    </BasePages>
  );
};
