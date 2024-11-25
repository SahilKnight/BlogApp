import { Blog } from './blog.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    blogs: Blog[];
}
