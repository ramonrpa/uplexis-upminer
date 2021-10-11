import React from 'react';
import { Container, Description, Image } from './styles';

interface Props {
  image: string;
  description: string;
}

const ImageCard: React.FC<Props> = ({ image, description }) => (
  <Container>
    <Image src={image} />
    <Description>{description}</Description>
  </Container>
);

export default ImageCard;
