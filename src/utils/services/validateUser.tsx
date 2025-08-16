interface userInput{
    username : string,
    password : string,
    confirmPassword : string,
    email : string
}

export function validateUser(user : userInput){

    const errors = []

    if(!user.username || user.username.length < 3){
        errors.push('nom d\'utilisateur trop court')
    }
    if(!user.password || user.password.trim().length < 8)
        errors.push('mot de passe trop court : 8 caractères minimum')

    if(user.password != user.confirmPassword)
        errors.push('les deux saisies de mot de passes doivent être identiques')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!user.email || !emailRegex.test(user.email.trim())) {
        errors.push("Email invalide")
    }



    return errors.length === 0 ? true : errors
}