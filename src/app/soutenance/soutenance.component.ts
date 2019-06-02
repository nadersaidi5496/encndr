import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DialogService } from '../service/dialog.service';
import { EtudiantService } from '../service/etudiant.service';
import { Etudiant } from '../model/etudiant';
@Component({
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.css']
})
export class SoutenanceComponent implements OnInit {

  events: any[]= [];
  etudiants: any[];
  calendarPlugins = [dayGridPlugin, timeGridPlugin];
constructor(private dialog: DialogService,
            private service: EtudiantService) {
  
            }

ngOnInit() {
    this.chargerEtudiant();
    this.ChargerEvents();
    }
handleDateClick() { // handler method
      }
chargerEtudiant() {
    this.service.getEtudiants().subscribe(res =>{
        this.etudiants = res;
        for (let etd of res) {
            if (etd.dateSoutenance != null) {
                console.log(this.events);
                
                this.events.push({'titre': etd.nom + etd.prenom, 'start': etd.dateStoutenance});
            }
        }
        console.log(this.etudiants);
    });

    
}

ChargerEvents() {
    console.log(this.etudiants);
    for (let etd of this.etudiants) {
        if (etd.dateSoutenance != null) {
            this.events.push({'titre': etd.nom + etd.prenom, 'start': etd.dateStoutenance});
        }
    }
}


      onCreate() {
           this.dialog.AjouterSoutenance().afterClosed().subscribe(res =>{
               this.chargerEtudiant();
           });
      }


}
