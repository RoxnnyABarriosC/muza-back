export interface IDecodeToken
{
    id?: string;
    iss: string;
    aud: string;
    sub: string;
    iat?: number;
    exp?: number;
    userId: string;
    email: string;
    action?: string;
}
