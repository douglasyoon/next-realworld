type size = 'lg';

interface Props {
  size?: size;
  rows: number;
  placeholder: string;
}

const Textarea = ({ size, rows, placeholder }: Props) => {
  return (
    <textarea
      className={`form-control ${size === 'lg' && 'form-control-lg'}`}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
