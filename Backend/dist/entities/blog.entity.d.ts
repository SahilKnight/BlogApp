import { User } from './user.entity';
export declare class Blog {
    id: number;
    title: string;
    content: string;
    status: string;
    user: User;
}
