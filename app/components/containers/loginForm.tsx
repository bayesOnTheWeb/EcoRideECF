import Button from '../ui/button'
import Input from '../ui/input'

export default function LoginForm() {
    return (
        <section className="flex flex-col items-center h-screen bg-lightBrunEcoRide justify-center">
            <h2 className="text-blackEcoRide text-2xl">Connexion</h2>
            <form className="flex flex-col gap-4 rounded-2xl">
                <Input
                    label={'adresse mail : '}
                    id={'email'}
                    placeholder={'saisissez votre email'}
                    type={'email'}
                />
                <Input
                    label={'mot de passe : '}
                    id={'password'}
                    placeholder={'saisissez votre mot de passe'}
                    type={'password'}
                />
                <Button
                    label={'se connecter'}
                    type={'submit'}
                    style={'mainButtonClassName'}
                />
                <Button
                    label={'supprimer la saisie'}
                    type={'reset'}
                    style={'secondButtonClassName'}
                />
            </form>
        </section>
    )
}
