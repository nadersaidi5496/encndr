import { Pays } from './pays';

export class Societe {
    id: number;
    nom: string;
    secteur: string;
    ville: string;
    codePostale: string;
    adresse: string;
    tlf: string;
    email: string;
    pays: Pays;

    constructor(id: number, nom: string, secteur: string, ville: string, codePostale: string,
                adresse: string, tlf: string, email: string, pays: Pays) {
            this.id = id;
            this.nom = nom;
            this.secteur = secteur;
            this.ville = ville;
            this.codePostale = codePostale;
            this.adresse = adresse;
            this.tlf = tlf;
            this.email = email;
            this.pays = pays;
    }
}
