import Window from '../../components/Window';
import studies from '../../data/studies';
import './style.scss';

export default function Studies() {
  return (
    <>
      <img className="studies__icon" src="/images/phone.svg" alt="" />
      <Window id="studies" head={{ title: 'Formation', level: 2, color: 'tertiary' }}>
        {studies.map((study) => (
          <div className="study" key={study.title}>
            <div className="study__header">
              <span className="study__header__time">
                {study.startDate.format('YYYY')}
                {' '}
                -
                {' '}
                {study.endDate.format('YYYY')}
              </span>
              <span className="study__header__title">
                {study.title}
              </span>
            </div>
            <div className="study__data">
              <i className="fa-solid fa-map-pin" />
              <span className="study__data__school">
                {study.location}
              </span>
            </div>
            <ul className="study__content">
              {study.description.map((paragraph) => (
                <li className="study__content__paragraph" key={paragraph}>
                  {paragraph}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Window>
    </>
  );
}
