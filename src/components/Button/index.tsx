import { darken, lighten, linearGradient } from 'polished';
import styled from 'styled-components';

interface Props {
  width?: string;
  justifyContent?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
}

const Button = styled.button`
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) =>
    linearGradient({
      colorStops: [`${lighten(0.15, primary)} 0%`, `${primary} 100%`],
      toDirection: '45deg',
    })};
  cursor: pointer;
  display: flex;
  width: ${(props: Props) => props.width};
  justify-content: ${(props: Props) => props.justifyContent || 'space-between'};
  align-items: center;
  padding: ${(props: Props) => props.padding || '0.8rem'};
  border-radius: ${(props: Props) => props.borderRadius || '0'};
  border: 0;
  outline: 0;
  margin: ${(props: Props) => props.margin || '0'};
  font-size: ${(props: Props) => props.fontSize || '1rem'};
  color: #fff;
  font-weight: ${(props: Props) => props.fontWeight || '500'};

  transition: 0.2s all;

  :hover {
    background-color: ${({
      theme: {
        colors: { primary },
      },
    }) =>
      linearGradient({
        colorStops: [`${primary} 0%`, `${darken(0.05, primary)} 100%`],
        toDirection: '45deg',
      })};

    box-shadow: 0 0 5px 0 ${(props) => props.theme.colors.primary};
  }
`;

export default Button;
