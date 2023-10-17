import Window from '../../components/Window';
import experiences from '../../data/experiences';
import './style.scss';

export default function Experiences() {
  return (
    <>
      <img className="experiences__icon" src="/images/arrow.svg" alt="" />
      <Window id="experiences" head={{ title: 'Expériences', level: 2, color: 'tertiary' }}>
        {experiences.map((experience) => (
          <div className="experience" key={experience.title}>
            <div className="experience__header">
              <span className="experience__header__contract">
                {experience.contract}
              </span>
              <div className="experience__header__sub">
                <span className="experience__header__title">
                  {experience.title}
                </span>
                <span className="experience__header__divider" />
                <span className="experience__header__time">
                  {experience.startDate.format('MMM YYYY')}
                  {' '}
                  {experience.contract === 'Saisonnier' ? '&' : '-'}
                  {' '}
                  {experience.endDate.format('MMM YYYY')}
                </span>
              </div>
            </div>
            <div className="experience__data">
              <i className="fa-solid fa-map-pin" />
              <span className="experience__data__company">
                {experience.location}
              </span>
            </div>
            <ul className="experience__content">
              {experience.description.map((paragraph) => (
                <li className="experience__content__paragraph" key={paragraph}>
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
