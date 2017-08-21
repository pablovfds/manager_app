import { Address } from './address';

export class Condo {
    id: string;
    name: string;
    address: Address = new Address();
    syndic: any;
}
