type Props = {
  id: string;
  name: string;
};

const Switch: React.FC<Props> = ({ id, name }) => {
  return (
    <label className="switch flex flex-row" htmlFor={id}>
      <input type="checkbox" id={id} name={name} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
