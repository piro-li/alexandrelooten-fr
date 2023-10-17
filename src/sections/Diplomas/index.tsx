import dayjs from 'dayjs';
import DiplomaWindow from '../../components/Window/DiplomaWindow';
import diplomas from '../../data/diplomas';

import './style.scss';

dayjs.locale('fr');

export default function Diplomas() {
  return (
    <>
      {diplomas.map((diploma) => (
        <DiplomaWindow diploma={diploma} key={diploma.title} />
      ))}
      <img className="diplomas__icon" src="/images/trophy.svg" alt="" />
    </>
  );
}
