import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Select = styled.select`
  padding: 0.4rem;

  min-width: 10rem;

  border-radius: 0.4rem;
  border: 1px solid #f0f0f0;
  outline: 0;
`;
