interface InputProps {
    label: string
    id: string
    placeholder: string
    type: 'text' | 'password' | 'email'
}

export default function Input({ label, id, placeholder, type }: InputProps) {
    return (
        <>
            <label className="text-blackEcoRide" htmlFor={id}>
                {label}
            </label>
            <input
                className="border border-b-2 border-greenEcoRide placeholder-black rounded-2xl"
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </>
    )
}
