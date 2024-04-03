import React from "react";

type Props = {
  id: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  active?: boolean;
};

const Switch: React.FC<Props> = React.memo(({ id, name, active, onChange }) => {
  return (
    <label className="switch flex flex-row" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        checked={active}
      />
      <span className="slider"></span>
    </label>
  );
});

Switch.displayName = "Switch";

export default Switch;
