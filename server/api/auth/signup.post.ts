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

    const user = await $fetch<User>(`${process.env.NUXT_API_URL}/signup`, {
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
        })
    }
    } catch (err) {
        if( err instanceof ZodError) {
            return err
        }
        console.log(err)
    }
    
});