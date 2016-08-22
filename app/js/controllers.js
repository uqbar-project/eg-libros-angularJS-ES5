angular.module('librosApp')
.controller('TodosLosLibrosCtrl',function (LibrosService) {
	this.libros = LibrosService.todosLosLibros();
});
  
  
