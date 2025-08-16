import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/utils/services/validateUser'

export async function POST(req : NextRequest , res : NextResponse){
    try {
        const body = await req.json()
        const validation = validateUser(body)
        if(validation !== true){
            return NextResponse.json(
                {errors : validation},
                {status : 400}
            )
        }else{
            return NextResponse.json(
                {message : "saisies utilisateurs validées !"},
                {status : 200}
            )
        }
    } catch (error) {
        console.error('erreur serveur', error)
    }
}