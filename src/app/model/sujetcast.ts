import { Societe } from './societe';


export class Sujetcast {
    id: number;
    titre: string;
    resume: string;
    motCles: string;
    sessionDepot: string;
    reussiteEcrit: string;
    dateDepot: Date;
    societe: Societe;
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
        this.societe = societe;
        this.nomPrenom = nomPrenom;
        this.email = email;
        this.tlf = tlf;
        this.dateDepot = null;
    }

}
