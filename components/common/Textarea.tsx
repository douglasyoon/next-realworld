type size = 'lg';

interface Props {
  size?: size;
  rows: number;
  placeholder: string;
  value?: string;
  name?: string;
  onChangeEvent?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  size,
  rows,
  placeholder,
  value,
  name,
  onChangeEvent,
}: Props) => {
  return (
    <textarea
      className={`form-control ${size === 'lg' && 'form-control-lg'}`}
      rows={rows}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChangeEvent}
    ></textarea>
  );
};

export default Textarea;
