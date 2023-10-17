import Window from '..';
import { Diploma } from '../../../data/diplomas';

import './style.scss';

interface DiplomaWindowProps {
  diploma: Diploma;
}

export default function DiplomaWindow({ diploma }: DiplomaWindowProps) {
  return (
    <Window id="diploma">
      <div className="first">
        <i className="fa-solid fa-graduation-cap" />
        <div className="diploma__year">{diploma.year.format('YYYY')}</div>
        {diploma.grade ? (<div className="diploma__grade">{diploma.grade}</div>) : ''}
      </div>
      <div className="diploma__title">{diploma.title}</div>
    </Window>
  );
}
