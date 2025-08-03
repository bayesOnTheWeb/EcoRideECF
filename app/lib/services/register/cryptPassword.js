// import des dépendancesnpm install bcryptj
import bcrypt from "bcryptjs";


// Init services
export async function cryptPassword(password){  
    try {
        const hashedPassword  = await bcrypt.hash(password , 10)
        return{
            status : "success",
            data : hashedPassword
        }


    } catch (error) {
        return{
            status : 'fail',
            error : error.message 
        }
    }
}


