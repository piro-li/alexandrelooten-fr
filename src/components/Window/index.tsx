import './style.scss';

interface WindowProps {
  id: string,
  head?: {
    title: string;
    level: 1 | 2;
    color: 'primary' | 'secondary' | 'tertiary';
  }
  children?: JSX.Element | JSX.Element[] | string;
}

export default function Window({ id, head, children }: WindowProps) {
  return (
    <div className="window" id={`window-${id}`}>
      {head && (

      <div className={`window__head ${head.color}`}>
        {head.level === 1 && <h1>{head.title}</h1>}
        {head.level === 2 && <h2>{head.title}</h2>}
        <div className="window__head__controls">
          <div className="reduce_button" />
          <div className="close_button" />
        </div>
      </div>

      )}
      <div className="window__content">
        {children}
      </div>
    </div>
  );
}

Window.defaultProps = {
  head: null,
  children: null,
};
