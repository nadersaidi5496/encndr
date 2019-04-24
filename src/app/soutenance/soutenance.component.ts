import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.css']
})
export class SoutenanceComponent implements OnInit {

  events: any[];
  calendarPlugins = [dayGridPlugin, timeGridPlugin];
constructor() { }


ngOnInit() {
        this.events = [
            {
                title: 'All Day Event',
                start: '2019-04-24'
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
handleDateClick(arg) { // handler method
        alert(arg.dateStr);
      }



}
