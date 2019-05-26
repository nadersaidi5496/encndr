import { Societe } from './societe';
import { Etudiant } from './etudiant';

export class Sujet {
    id: number;
    titre: string;
    resume: string;
    motCles: string;
    sessionDepot: string;
    reussiteEcrit: string;
    dateDepot: Date;
    societe: Societe;
    etudiant: Etudiant;
    nomPrenom: string;
    email: string;
    tlf: string;

// tslint:disable-next-line: max-line-length
    constructor(id: number, titre: string, resume: string, motCles: string, sessionDepot: string, reussiteEcrit: string, societe: Societe, nomPrenom: string, email: string, tlf: string) {
        this.id = id;
        this.titre = titre;
        this.resume = resume;
        this.motCles = motCles;
        this.sessionDepot = sessionDepot;
        this.reussiteEcrit = reussiteEcrit;
        this.dateDepot = null;
        this.societe = societe;
        this.etudiant = null;
        this.nomPrenom = nomPrenom;
        this.email = email;
        this.tlf = tlf;
    }

}

