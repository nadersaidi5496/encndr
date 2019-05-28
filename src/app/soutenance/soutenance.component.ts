import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { DialogService } from '../service/dialog.service';
import { EtudiantService } from '../service/etudiant.service';
import { Etudiant } from '../model/etudiant';
export interface EventData{
    title: string;
    start: string;
}
@Component({
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.css']
})
export class SoutenanceComponent implements OnInit {

  events: any[];
  etudiants: Etudiant[];
  calendarPlugins = [dayGridPlugin, timeGridPlugin];
constructor(private dialog: DialogService,
            private service: EtudiantService) {}


ngOnInit() {
        this.events = [
            {
                title: 'Saidi Nader',
                start: '2019-05-24T10:00:00'
            },
            {
                title: 'Long Event',
                start: '2016-01-07',
                end: '2016-01-10'
            },
            {
                title: 'Repeating Event',
                start: '2016-01-09T16:00:00'
            },
            {
                title: 'Repeating Event',
                start: '2016-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-01-11',
                end: '2016-01-13'
            }
        ];
    }
handleDateClick() { // handler method
        console.log('jkfshdfjkshdf');
        
      }
      

      onCreate() {
          this.dialog.AjouterSoutenance();
      }


}
