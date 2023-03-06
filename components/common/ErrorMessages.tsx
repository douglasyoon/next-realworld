export interface ErrorType {
  [key: string]: [value: string];
}

interface ErrorMessagesProps {
  errors: ErrorType;
}

const ErrorMessages = ({ errors }: ErrorMessagesProps) => {
  return (
    <ul className='error-messages'>
      {Object.entries(errors).map(([key, value], index) => (
        <li key={index}>{`${key} ${value}`}</li>
      ))}
    </ul>
  );
};

export default ErrorMessages;
