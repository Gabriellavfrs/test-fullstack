import styled from 'styled-components';

export const Header = styled.header`
  background-color: #a7a4a2;
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  margin-top: 40px;
  height: 650px;
  max-width: 1200px;
  min-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const TitleContainer = styled.section`
  height: 70px;
  width: 1135px;
  display: flex;
  gap: 20px;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  padding-left: 10px;
  background-color: var(--terciary-100);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Icon = styled.img`
  height: 35px;
`;

export const Title = styled.h1`
  font-weight: 500;
  color: var(--gray-00);
  font-size: 25px;
  line-height: 30px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
