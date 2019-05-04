export class Enseignant {
    id: number;
    nom: string;
    prenom: string;
    tlf: string;
    email: string;
    password: string;
    grade: string;

    constructor(nom: string, prenom: string, tlf: string, email: string, grade: string){
        this.id = null,
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tlf = tlf;
        this.grade = grade;
        this.password = '';
    }
}
