import { User } from "../user/user";

export interface Post {
    id?: string;
    title?: string;
    author?: User | null;
    content?: string | null;
    published?: boolean;
    authorId?: string | null
};