import { Parcours } from './parcours';
import { Sujet } from './sujet';
import { Notes } from './notes';
import { Assister } from './assiter';
import { Sujetcast } from './sujetcast';

export class Etudiant {
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    dateSoutenance: string;
    parcours: Parcours;
    sujet: Sujetcast;
    note: Notes;
    assistans: Assister[];

// tslint:disable-next-line: max-line-length
    constructor(cin: string, nom: string, prenom: string, email: string, telephone: string, dateSoutenance: string, parcours: Parcours, sujet: Sujetcast, notes: Notes){
        this.nom = nom;
        this.cin = cin;
        this.dateSoutenance = dateSoutenance;
        this.email = email;
        this.note = notes;
        this.parcours = parcours;
        this.telephone = telephone;
        this.prenom = prenom;
        this.sujet = sujet;
        this.assistans = null;
    }
}