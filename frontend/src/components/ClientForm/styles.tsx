import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  padding-top: 20px;
  position: relative;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 70px;
`;

export const InputDetails = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    margin-left: 87%;
    margin-top: 6px;
  }
`;

export const Input = styled.input<{ $error?: boolean }>`
  height: 54px;
  width: 100%;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  border-radius: 4px;
  color: var(--black);
  border: ${(props) =>
    props.$error ? '0.5px solid var(--error)' : `0.5px solid var(--gray-02)`};

  &:focus {
    border: ${(props) =>
      props.$error ? '1.5px solid var(--error)' : '1.5px solid var(--gray-02)'};
    outline: none;
    box-shadow: ${(props) =>
      props.$error ? '0px 0px 2px var(--error)' : '0px 0px 2px var(--black)'};
  }
`;

export const Select = styled.select<{ $error?: boolean }>`
  background-color: var(--white);
  height: 54px;
  width: 100%;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  border-radius: 4px;
  color: var(--black);
  border: ${(props) =>
    props.$error ? '0.5px solid var(--error)' : `0.5px solid var(--gray-02)`};

  &:focus {
    border: ${(props) =>
      props.$error ? '1.5px solid var(--error)' : '1.5px solid var(--gray-02)'};
    outline: none;
    box-shadow: ${(props) =>
      props.$error ? '0px 0px 2px var(--error)' : '0px 0px 2px var(--black)'};
  }
`;

export const ErrorMessage = styled.span<{ error?: boolean }>`
  color: var(--error);
  font-size: 12px;
  line-height: 16px;
  padding-left: 5px;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  background-color: ${({ $primary }) => ($primary ? 'var(--terciary)' : 'var(--white)')};
  padding: 10px;
  height: 40px;
  width: 120px;
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;
