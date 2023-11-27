export const API_URL = "http://localhost:3000/v1/users/";

export interface IUser {
    id: string;
    name: string;
    email: string;
    bio: string;
    profilePicture: string;
}
