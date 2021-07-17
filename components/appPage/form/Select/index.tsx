type Props = {
  setValue: (value: string) => void;
  name?: string;
  id?: string;
  required?: boolean;
  children?: React.ReactNode;
};

export default function Select({ setValue, name, id, required, children }: Props) {
  return (
    <>
      <select name={name} id={id} onChange={({ target }) => setValue(target.value)} required={required}>
        {children}
      </select>
      <style jsx>{`
        select {
          width: 100%;
          padding: 1rem;
          background-color: var(--input-background-color);
          border: 0.2rem solid var(--input-border-color);
          border-radius: var(--border-radius);
        }
        select:focus {
          box-shadow: var(--input-focus-color);
        }
      `}</style>
    </>
  );
}
