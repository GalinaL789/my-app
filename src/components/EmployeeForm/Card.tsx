import { ProfileCardProps } from 'components/ProfileCard/types';
import { ProfileCardContainer, ProfileCardInfo } from '../ProfileCard/styles';
import { Person } from './types';

function Card({ name,age }: Person) {
  return (
    <ProfileCardContainer>
      <ProfileCardInfo>Имя: {name}</ProfileCardInfo>
      <ProfileCardInfo>Возраст: {age}</ProfileCardInfo>
    </ProfileCardContainer>
  );
}

export default Card;