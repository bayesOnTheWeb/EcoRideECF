interface InputProps {
    label: string
    id: string
    placeholder: string
    type: 'text' | 'password' | 'email'
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    label,
    id,
    placeholder,
    type,
    value,
    onChange,
}: InputProps) {
    return (
        <>
            <label className="text-blackEcoRide" htmlFor={id}>
                {label}
            </label>
            <input
                className="border border-b-2 border-greenEcoRide placeholder-black rounded-2xl text-blackEcoRide"
                id={id}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
