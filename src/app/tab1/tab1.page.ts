import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaFilmes: IFilme[] = [
    {
      nome: 'Infinito (2021)',
      lancamento: '10/06/2021',
      duracao: '1h 46m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mLvjQ0IIdzZfQzQXULI7sIVxd8V.jpg',
      generos:['Ficção científica', 'Ação', 'Thriller'],
      pagina: '/infinito'
    },
    {
      nome: 'A Barraca do Beijo 3 (2021)',
      lancamento: '11/08/2021',
      duracao: '1h 52m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rnxc5X7r2KQtkK3ZLuve4Qbvdz.jpg',
      generos:['Romance', 'Comédia'],
      pagina: '/barraca-beijo'
    },
    {
      nome: 'Luca (2021)',
      lancamento: '17/06/2021',
      duracao: '1h 41m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9jPa6SlUYxPFMVZlEuceiPPAA15.jpg',
      generos:['Animação', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/luca'
    },
    {
      nome: 'Space Jam: Um Novo Legado (2021)',
      lancamento: '15/07/2021',
      duracao: '1h 55m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kU0NbsUVoUMcYxoISmBCxFmgWYC.jpg',
      generos:['Animação', 'Comédia', 'Família', 'Ficção científica'],
      pagina: '/space-jam'
    },
    {
      nome: 'Velozes & Furiosos 9: A Saga Velozes & Furiosos (2021)',
      lancamento: '24/06/2021',
      duracao: '2h 25m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fnAzaxRSiveFafudJtByxA7I2xT.jpg',
      generos:['Ação', 'Crime', 'Thriller'],
      pagina: '/velozes-furiosos'
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}

    exibirFilme(filme: IFilme) {
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

}
