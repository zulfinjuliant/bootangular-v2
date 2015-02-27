// buat module app = cobaApp
var cobaApp = angular.module('cobaApp', ['ngRoute']);

// konfig routes
cobaApp.config(function($routeProvider) {
	$routeProvider

// routing konten beranda
.when('/', {templateUrl : 'konten/beranda.html',controller  : 'brdController'})

// routing konten tentang
.when('/tentang', {templateUrl : 'konten/tentang.html',controller  : 'ttgController'
})

// routing konten kontak
.when('/kontak', {templateUrl : 'konten/kontak.html',controller  : 'ktkController'});
});

//controller konten
cobaApp.controller('brdController', function($scope) {
	$scope.jdlBeranda = 'Beranda';
	$scope.isiBeranda = 'Halo, yang kalian lihat adalah halaman beranda!';
	$scope.jdlPanelBrd = 'Beranda Panel';
	$scope.isiPanelBrd = 'Isi beranda konten';
});
cobaApp.controller('ttgController', function($scope) {
	$scope.jdlTentang = 'Tentang'
	$scope.isiTentang = 'Yap ini adalah halaman Tentang!';
	$scope.jdlPanelTtg = 'Tentang Panel';
	$scope.isiPanelTtg = 'Isi tentang konten'
});
cobaApp.controller('ktkController', function($scope) {
	$scope.jdlKontak = 'Kontak';
	$scope.isiKontak = 'Okay ini adalah halaman kontak!';
	$scope.jdlPanelKtk = 'Kontak Panel';
	$scope.isiPanelKtk = 'Isi kontak konten';
});