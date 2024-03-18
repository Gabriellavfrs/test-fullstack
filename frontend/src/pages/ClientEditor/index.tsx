import { BasePages } from '../../components/BasePages';
import { ClientForm } from '../../components/ClientForm';
import { ClientContainer, Subtitle, Title, TitleContainer } from './styles';
import { ClientType } from '../../types/ClientType';
import { putData } from '../../services/requests';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToaster } from '../../hooks/useToaster';

export const ClientEditor = () => {
  const { showError, showSuccess } = useToaster();
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  const handleSubmit = async (clientInfo: ClientType) => {
    try {
      await putData(clientInfo, pathname);
      showSuccess('Dados salvos com sucesso!');
      navigate('/');
    } catch (error) {
      console.log(error);
      showError('Ocorreu um erro ao salvar as informações!');
    }
  };

  return (
    <BasePages>
      <>
        <ClientContainer>
          <TitleContainer>
            <Title>Editar Cliente</Title>
            <Subtitle>Informe os campos a seguir para edição</Subtitle>
          </TitleContainer>
        </ClientContainer>
        <ClientForm setData={handleSubmit} data={state} />
      </>
    </BasePages>
  );
};
