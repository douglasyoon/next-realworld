type type = 'text' | 'password';
type size = 'lg';

interface Props {
  type: type;
  size?: size;
  placeholder: string;
}

const Input = ({ type, size, placeholder }: Props) => {
  return (
    <input
      className={`form-control ${size === 'lg' && 'form-control-lg'}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
