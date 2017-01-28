import { Address } from './address';

export class Condo {
    objectId: string;
    name: string;
    address: Address = new Address();
    syndic: any;
}
