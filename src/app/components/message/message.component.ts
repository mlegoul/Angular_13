import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @ViewChild('title') titleElement!: ElementRef<HTMLElement>;

  welcomeList: string[] = [
    'Welkom', 'Mirë se vini', 'Willkommen', 'Welkomma', 'Welcome', 'Marhaban', 'Bari galoust',
    'Xos gelmissiniz', 'Welkum', 'Ongi etorri', 'Swagata', 'Bienvenue', 'Ansuf yiswen', 'Šdyra zaprašajem',
    'Kyo tzo pa eit', 'Ani kié', 'Dobro došli', 'Degemer mad', 'Dobre došl', 'Benvinguts', 'Huānyíng', 'Karibu',
    'Eoso eoseyo', 'Bonavinuta', 'Bel bonjou', 'Dobrodošli', 'Velkommen', 'Bienvenidos', 'Bonvenon', 'Tere tulemast',
    'Welkom', 'Kalos irthate', 'Baroukh habaim', 'Swaagat', 'Üdvözlöm', 'Benvenuti', 'Gratus mihi venis', 'Haere mai',
    'Khosh âmadid', 'Witajcie', 'Bem-vindo', 'Bine ați venit', 'Dobro pojalovat', 'Välkommen', 'Maeva', 'Hosgeldiniz',
    'Laskavo prosymo',
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.getListWelcome();
  }

  getListWelcome(): void {
    for (let i = 0; i < this.welcomeList.length; i++) {
      this.showWelcomeList(i);
    }
  }

  showWelcomeList(i: number): void {
    setTimeout(() => {
      if (this.titleElement?.nativeElement) {
        this.titleElement.nativeElement.innerHTML = this.welcomeList[i];
      }
    }, 2000 * i);
  }

}
