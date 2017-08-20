import { User } from './user';
import { Condo } from './condo';

export class Syndic {
  id: string;
  acoount: User = new User();
  condominium: Condo = new Condo();
}
