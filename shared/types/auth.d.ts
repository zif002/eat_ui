// shared/types/auth.d.ts
declare module '#auth-utils' {
  interface User {
    id: number;
    email: string;
    date_of_birth: Date;
    view: boolean;
    first_name: string;
    last_name: string;
    role: ROLE;
  }

  
}
export const ROLE = {
  ADMIN: 'ADMIN',
  USER: 'USER'
} as const

export type ROLE = (typeof ROLE)[keyof typeof ROLE]
export {}