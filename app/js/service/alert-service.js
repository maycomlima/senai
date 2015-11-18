/**
 * Created by Maycom on 09/11/2015.
 */
angular.module('projetosan')
    .service('AlertService', AlertService);

function AlertService($growl) {
    this.showOk = showOk;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;

    function showOk(titulo, mensagem, tempo) {
        if (!tempo) {
            tempo = 3000;
        }
        $growl.box(titulo, mensagem, {
            class: 'success',
            timeout: tempo
        }).open();
    }

    function showError(titulo, mensagem, tempo) {
        if (!tempo) {
            tempo = 3000;
        }


        $growl.box(titulo, mensagem, {
            class: 'danger',
            timeout: tempo
        }).open();
    }

    function showAlert(titulo, mensagem, tempo) {
        if (!tempo){
            tempo = 3000;
        }


        $growl.box(titulo, mensagem, {
            class: 'warning',
            timeout: tempo
        }).open();
    }

    function showInfo(titulo, mensagem, tempo) {
        if (!tempo){
            tempo = 3000;
        }


        $growl.box(titulo, mensagem, {
            class: 'primary',
            timeout: tempo
        }).open();
    }

}