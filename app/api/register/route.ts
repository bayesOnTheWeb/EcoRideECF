import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/utils/services/validateUser'
import { hashPassword } from '@/utils/services/hashPassword'
import { createUser } from '@/utils/services/createUser'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const validation = validateUser(body)
        if (validation !== true) {
            return NextResponse.json({ errors: validation }, { status: 400 })
        }

        const addedUser = await createUser(body)

        return NextResponse.json(
            { message: 'Utilisateur créé !' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Erreur serveur :', error)
        return NextResponse.json({ error: 'Erreur interne' }, { status: 500 })
    }
}
