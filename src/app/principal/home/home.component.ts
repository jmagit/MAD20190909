import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola Mundo';

  // constructor(notify: NotificationService) {
  //   notify.add('Esto es una notificacion');
  //   notify.remove(0);
  //   notify.add('');
  //   notify.remove(0);

  //   // log.error('Esto es un error');
  //   // log.warn('Esto es un warn');
  //   // log.info('Esto es un info');
  //   // log.log('Esto es un log');
  // }

  ngOnInit() {
  }

}
