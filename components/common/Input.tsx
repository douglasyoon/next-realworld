type type = 'text' | 'password';
type size = 'lg';

interface Props {
  type: type;
  size?: size;
  placeholder: string;
  value: string;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const Input = ({
  type,
  size,
  placeholder,
  value,
  onChangeEvent,
  disabled,
}: Props) => {
  return (
    <input
      className={`form-control ${size === 'lg' && 'form-control-lg'}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeEvent}
      disabled={disabled}
    />
  );
};

export default Input;
