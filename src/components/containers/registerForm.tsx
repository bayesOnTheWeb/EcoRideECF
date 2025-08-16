'use client'

import Button from '../ui/button'
import Input from '../ui/input'

export default function RegisterForm() {
    function HandleSubmit() {
        return null
    }

    return (
        <section className="flex flex-col h-screen items-center justify-center bg-lightBrunEcoRide">
            <h2 className="text-blackEcoRide text-2xl">INSCRIPTION</h2>
            <form
                className="flex flex-col w-1/5 rounded-2xl gap-4"
                onSubmit={HandleSubmit}
            >
                <Input
                    label={"nom d'utilisateur : "}
                    id={'name'}
                    placeholder={"saisissez votre nom d'utilisateur"}
                    type={'text'}
                />
                <Input
                    label={'adresse mail : '}
                    id={'email'}
                    placeholder={'saisissez votre adresse mail'}
                    type={'email'}
                />
                <Input
                    label={'mot de passe : '}
                    id={'password'}
                    placeholder={'saisissez votre mot de passe'}
                    type={'password'}
                />
                <Input
                    label={'confirmation du mot de passe : '}
                    id={'confirmPassword'}
                    placeholder={'confirmez votre mot de passe'}
                    type={'password'}
                />
                <Button
                    label={"s'inscrire"}
                    type={'submit'}
                    style={'mainButtonClassName'}
                    redirect={'/building'}
                />
                <Button
                    label={'recommencer la saisie'}
                    type={'reset'}
                    style={'secondButtonClassName'}
                />
            </form>login
        </section>
    )
}
