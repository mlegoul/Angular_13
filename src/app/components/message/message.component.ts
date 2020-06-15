import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  welcomeList: string[] = [
    'Welkom', 'Mirë se vini', 'Willkommen', 'Welkomma', 'Welcome', 'Marhaban', 'Bari galoust',
    'Xos gelmissiniz', 'Welkum', 'Ongi etorri', 'Swagata', 'Bienvenue', 'Ansuf yiswen', 'ščyra zaprašajem',
    'Kyo tzo pa eit', 'Ani kié', 'Dobro došli', 'Degemer mad', 'Dobre doshŭl', 'Benvinguts', 'Huān yíng', 'Karibu',
    'Eoso eoseyo', 'Bonavinuta', 'Bel bonjou', 'Dobrodošli', 'Velkommen', 'Bienvenidos', 'Bonvenon', 'Tere tulemast',
    'Welkom', 'Kalos irthate', 'Baroukh habaim', 'Swaagat', 'üdvözlöm', 'Benvenuti', 'Gratus mihi venis', 'Haere mai',
    'Khosh âmadid', 'Witajcie', 'Bem-vindo', 'Bine aţi venit', 'Dobro pojalovat', 'Välkommen', 'Maeva', 'Hosgeldiniz',
    'Laskavo prosymo',
  ];

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      return this.getListWelcome();
    }, 94000, this.getListWelcome());
  }

  getListWelcome() {

    try {
      for (let i = 0; i <= this.welcomeList.length; i++) {
        this.showWelcomeList(i);
      }
    } catch (err) {
      throw err;
    }
  }

  showWelcomeList(i: number) {

    setTimeout(async () => {
      const element = await document.getElementById('title');
      return element.innerHTML = this.welcomeList[i];
    }, 2000 * i);
  }

}
