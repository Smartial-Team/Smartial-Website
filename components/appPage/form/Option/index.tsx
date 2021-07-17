type Props = {
  text?: string;
  value?: string | number;
  hidden?: boolean;
};

export default function Option({ text, value, hidden }: Props) {
  return (
    <>
      <option value={value} hidden={hidden}>
        {text}
      </option>
      <style jsx>{``}</style>
    </>
  );
}
