import { NetworkProvider } from './../network/network';
import { HttpResultModel } from './../../app/models/HttpResultModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerProvider } from "../spinner/spinner";
import { AlertProvider } from "../alert/alert";


@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerSrv: SpinnerProvider,
    private alertSrv: AlertProvider,
    private networkSrv: NetworkProvider) {

  }

  //Get
  public get(url: string): Promise<HttpResultModel> {

    this.spinnerSrv.Show("Carregando os dados...");

    return new Promise((resolve) => {

      if (this.networkSrv.IsOnLine) {

        this.http.get(url).subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined });
        }, err => {
          this.spinnerSrv.Hide();
          this.alertSrv.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
          resolve({ success: false, data: undefined, err: err });
        });

      } else {
        this.alertSrv.toast('Você está Offline, e infelizmente os dados não podem ser carregados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }

    });

  }

  //Post
  public post(url: string, model: any): Promise<HttpResultModel> {

    this.spinnerSrv.Show("Salvando informações...");

    return new Promise((resolve) => {

      if (this.networkSrv.IsOnLine) {

        this.http.post(url, model).subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined });
        }, err => {
          this.spinnerSrv.Hide();
          console.log(err);
          if (err.status == 400) {
            let msg = '';
            // err.error.validation.forEach(_err => {
            //   msg += `<li>${_err.message}</li>`;
            // });
            this.alertSrv.alert(err.error.message, msg);
          } else if (err.status == 404) {
            this.alertSrv.alert('Informação', err.error.message);
          } 
          else {
            this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err });
          }
        });

      } else {
        this.alertSrv.toast('Você está Offline, e infelizmente os dados não podemos enviar os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }

    });

  }

  //Put
  public put(url: string, model: any): Promise<HttpResultModel> {

    this.spinnerSrv.Show("Atualizando informações...");

    return new Promise((resolve) => {

      if (this.networkSrv.IsOnLine) {

        this.http.put(url, model).subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined });
        }, err => {
          this.spinnerSrv.Hide();
          if (err.status == 400) {
            let msg = '';
          //  err.error.validation[0].forEach(_err => {
          //     msg += `<li>${_err.message}</li>`;
          //   });
            this.alertSrv.alert(err.error.message, msg);
          } else if (err.status == 404) {
            this.alertSrv.alert('Informação', err.error.message);
          } 
          else {
            this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err });
          }
        });

      } else {
        this.alertSrv.toast('Você está Offline, e infelizmente os dados não podemos enviar os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }

    });

  }

  //Delete
  public delete(url: string): Promise<HttpResultModel> {

    this.spinnerSrv.Show("Removendo registro...");

    return new Promise((resolve) => {

      if (this.networkSrv.IsOnLine) {

        this.http.get(url).subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined });
        }, err => {
          this.spinnerSrv.Hide();
          this.alertSrv.toast('Não foi possível realizar a exclusão do registro', 'bottom');
          resolve({ success: false, data: undefined, err: err });
        });

      } else {
        this.alertSrv.toast('Você está Offline, e infelizmente os dados não podem ser enviados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }

    });

  }


}

