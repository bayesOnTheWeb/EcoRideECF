interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  type: "text" | "password" | "email";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function Input({
  label,
  id,
  placeholder,
  type,
  value,
  name,
  onChange,
}: InputProps) {
  return (
    <>
      <label className="text-blackEcoRide" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        className="border border-b-2 border-greenEcoRide placeholder-black rounded-2xl text-blackEcoRide"
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
