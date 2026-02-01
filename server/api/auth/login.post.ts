import type { User } from "#auth-utils";
import {z, ZodError} from "zod";
const LoginSchema = z.object({
    email: z.string(),
    password: z.string()
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const bodyValid  = LoginSchema.parse(body);

    const user = await $fetch<User>(`${process.env.NUXT_API_URL}/auth/signin`, {
        method: "POST",
        body: bodyValid,
    })
    if(user) {
        const session = await setUserSession(event, {
            user: user,
            secure: {
                apiToken: user
            },
            loggedInAt: new Date(),
            })
        return session;
    } else {
        throw createError({
            status: 401,
            message: 'User not found',
            stack: undefined
        })
    }
    } catch (err) {
        if( err instanceof ZodError) {
             throw createError({
                status: 400,
                statusMessage: "Bad Request",
                message: err.message,
                data: err.issues,
                stack: undefined
            })
        }
        throw err
    }
    
});