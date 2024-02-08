import { Post } from "../blog/post";

export interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    createdAt?: Date;
    updatedAt?: Date
    posts?: Post[]
}