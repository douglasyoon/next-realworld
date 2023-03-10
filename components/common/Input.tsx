type type = 'text' | 'password';
type size = 'lg';

interface Props {
  type: type;
  size?: size;
  placeholder?: string;
  name?: string;
  value?: string;
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultValue?: string;
}

const Input = ({
  type,
  size,
  placeholder,
  name,
  value,
  onChangeEvent,
  disabled,
  defaultValue,
}: Props) => {
  return (
    <input
      className={`form-control ${size === 'lg' && 'form-control-lg'}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeEvent}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
