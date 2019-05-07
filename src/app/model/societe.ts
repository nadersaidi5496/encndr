import { Pays } from './pays';

export class Societe {
    Id: number;
    Nom: string;
    Secteur: string;
    Ville: string;
    CodePostale: string;
    Adresse: string;
    Tlf: string;
    Email: string;
    Pays: Pays;
}
