import { Etudiant } from './etudiant';

export class Notes {
    idNotes: number;
    forme: string;
    originalite: string;
    methodologie: string;
    orale: string;
    globale: string;
    note: number;
    decision: string;
    mention: string;
    observation: string;
    etudiant: Etudiant;

// tslint:disable-next-line: max-line-length
    constructor(idNotes: number, forme: string, originalite: string, methodologie: string, orale: string, globale: string, note: number, decision: string, mention: string, observation: string){
        this.idNotes = idNotes;
        this.forme = forme;
        this.originalite = originalite;
        this.methodologie = methodologie;
        this.orale = orale;
        this.globale = globale;
        this.note = note;
        this.decision = decision;
        this.mention = mention;
        this.observation = observation;
        this.etudiant = null;
    }
}

