type Props = {
  type?: string;
  id?: string;
  name?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  required?: boolean;
};

export default function Input({ type, id, name, value, setValue, placeholder, required }: Props) {
  return (
    <>
      <input
        type={type ?? "text"}
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        required={required}
      />
      <style jsx>{`
        input {
          width: 100%;
          background-color: var(--input-background-color);
          border: 0.2rem solid var(--input-border-color);
          border-radius: var(--border-radius);
          padding: 1rem;
        }
        input:focus {
          box-shadow: var(--input-focus-color);
        }
      `}</style>
    </>
  );
}
