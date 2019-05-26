import { Etudiant } from './etudiant';
import { Enseignant } from './enseignant';
import { Enseignantcast } from './enseignantcast';

export class Assister {
    id: number;
    enseignant: Enseignantcast;
    position: string;

    constructor(ens: Enseignantcast, pos: string){
        this.id = null;
        this.enseignant = ens;
        this.position = pos;
    }
}
