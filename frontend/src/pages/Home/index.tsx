import { useEffect, useState } from 'react';
import { BasePages } from '../../components/BasePages';
import { ClientType } from '../../types/ClientType';
import {
  Button,
  ClientContainer,
  Subtitle,
  TBButton,
  TBItem,
  TBStatus,
  TBTextPrimary,
  TBTextSecondary,
  TableContainer,
  Title,
  TitleContainer,
} from './styles';
import DataTable, { TableColumn } from 'react-data-table-component';
import { requestData } from '../../services/requests';
import { useNavigate } from 'react-router-dom';
import { useToaster } from '../../hooks/useToaster';
import { formatCPF } from '../../utils/formatCPF';
import { formatPhone } from '../../utils/formatPhone';

const statusColors = (status: string) => {
  switch (status) {
    case 'pending':
      return ['var(--warning)', 'Aguardando ativação'];

    case 'inactive':
      return ['var(--error)', 'Inativo'];

    case 'disabled':
      return ['var(--gray-03)', 'Desativado'];

    default:
      return ['var(--sucess)', 'Ativo'];
  }
};

const paginationComponentOptions = {
  rowsPerPageText: 'Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
  noRowsPerPage: true,
};

export const Home = () => {
  const navigate = useNavigate();
  const { showError } = useToaster();

  const [clientData, setClientData] = useState<ClientType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await requestData();
        if (data.length > 0) {
          setClientData(data);
        }
      } catch (e) {
        console.log(e);
        showError('Ocorreu um erro ao atualizar as informações!');
      }
    }
    fetchData();
  }, [clientData]);

  const columns: TableColumn<ClientType>[] = [
    {
      name: 'Nome',
      cell: (row) => (
        <TBItem>
          <TBTextPrimary>{row.name}</TBTextPrimary>
          <TBTextSecondary>{row.email}</TBTextSecondary>
        </TBItem>
      ),
    },
    {
      name: 'Cpf',
      cell: (row) => (
        <TBItem>
          <TBTextPrimary>{formatCPF(row.cpf)}</TBTextPrimary>
          <TBTextSecondary>{formatPhone(row.phoneNumber)}</TBTextSecondary>
        </TBItem>
      ),
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <>
          <TBStatus $color={statusColors(row.status)[0]} />
          <TBTextSecondary>{statusColors(row.status)[1]}</TBTextSecondary>
        </>
      ),
    },
    {
      name: 'Ações',
      cell: (row) => (
        <TBButton>
          <Button onClick={() => navigate(`/${row.id}`, { state: { ...row } })}>
            Editar
          </Button>
        </TBButton>
      ),
    },
  ];

  return (
    <BasePages>
      <>
        <ClientContainer>
          <TitleContainer>
            <Title>Listagem de clientes</Title>
            <Subtitle>Escolha um cliente para visualizar os detalhes</Subtitle>
          </TitleContainer>
          <Button $primary onClick={() => navigate('/new')}>
            Novo cliente
          </Button>
        </ClientContainer>
        <TableContainer>
          <DataTable
            columns={columns}
            data={clientData}
            noTableHead={true}
            pagination
            paginationPerPage={5}
            paginationComponentOptions={paginationComponentOptions}
          />
        </TableContainer>
      </>
    </BasePages>
  );
};
