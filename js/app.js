// buat module app = cobaApp
var cobaApp = angular.module('cobaApp', ['ngRoute']);

// konfig routes
cobaApp.config(function($routeProvider) {
	$routeProvider

// routing konten beranda
.when('/', {
	templateUrl : 'konten/beranda.html',
	controller  : 'brdController'
})

// routing konten tentang
.when('/tentang', {
	templateUrl : 'konten/tentang.html',
	controller  : 'ttgController'
})

// routing konten kontak
.when('/kontak', {
	templateUrl : 'konten/kontak.html',
	controller  : 'ktkController'
});
});

//controller konten
cobaApp.controller('brdController', function($scope) {
	$scope.isiBeranda = 'Halo, yang kalian lihat adalah halaman beranda!';
});
cobaApp.controller('ttgController', function($scope) {
	$scope.isiTentang = 'Yap ini adalah halaman Tentang!';
});
cobaApp.controller('ktkController', function($scope) {
	$scope.isiKontak = 'Okay ini adalah halaman kontak!';
});