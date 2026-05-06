import { IAuthUser } from '../auth/interfaces/auth.interface'

declare global {
    type IAuthUser = import('../auth/interfaces/auth.interface').IAuthUser
}