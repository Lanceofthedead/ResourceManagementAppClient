import { Position } from './position';
import { Project } from './project';

export class Employee {

    id : Number;
    firstName : string;
    lastName : string;
    email: string;
    phoneNumber: string;
    position: Position;
    projects: Project[];
}
