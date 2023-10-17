import Window from '../../components/Window';
import skills from '../../data/skills';
import './style.scss';

export default function Skills() {
  return (
    <>
      <img className="skills__icon" src="/images/mug.svg" alt="" />
      <Window id="skills" head={{ title: 'Compétences', level: 2, color: 'tertiary' }}>
        {skills.map((skill) => (
          <div key={skill.id} className="skill">
            <img className="skill__icon" src={`/images/skills/${skill.icon}.svg`} alt="" />
            <div className="skill__name">{skill.skill}</div>
          </div>

        ))}
      </Window>
    </>
  );
}
