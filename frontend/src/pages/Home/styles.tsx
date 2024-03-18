import styled from 'styled-components';

export const ClientContainer = styled.div`
  width: 1135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

export const Title = styled.h3`
  color: var(--gray-01);
`;
export const Subtitle = styled.h4`
  color: var(--gray-02);
  font-weight: 400;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  background-color: ${({ $primary }) => ($primary ? 'var(--terciary)' : 'var(--white)')};
  padding: 10px;
  height: 40px;
  width: 100px;
  border: 1px solid var(--terciary);
  border-radius: 10px;
  cursor: pointer;
  color: ${({ $primary }) => ($primary ? 'var(--white)' : 'var(--terciary)')};
  font-size: 14px;

  &:hover {
    background-color: ${({ $primary }) =>
      $primary ? 'var(--white)' : 'var(--terciary)'};
    color: ${({ $primary }) => ($primary ? 'var(--terciary)' : 'var(--white)')};
  }
`;

export const TableContainer = styled.div`
  box-shadow: 0px 4px 4px 0px var(--gray-04);
`;

export const TBItem = styled.div`
  width: 150px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const TBButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const TBTextPrimary = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-01);
`;

export const TBTextSecondary = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-02);
`;

export const TBStatus = styled.div<{ $color?: string }>`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
`;
