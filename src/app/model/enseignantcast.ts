export class Enseignantcast {
    id: number;
    nom: string;
    prenom: string;
    tlf: string;
    email: string;
    password: string;
    grade: string;

    constructor(id: number,nom: string, prenom: string, tlf: string, email: string, grade: string, password: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tlf = tlf;
        this.grade = grade;
        this.password = password;
    }
}
