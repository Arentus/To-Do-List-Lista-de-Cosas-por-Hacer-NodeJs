const descripcion = { 
						demand : true ,
						alias : 'd', 
						desc:'Descripcion de la tarea por hacer' 
					} 	

const completado =  { 
						alias : 'c', 
						default:true
					}

const argv = require('yargs')
							.command('crear','Crear un Elemento de Por Hacer',
							{
								descripcion
							})
							.command('actualizar','Actualizar Elemento de la Lista',
							{
								descripcion, 
								completado
							}).command('borrar','Borrar Elemento de la Lista',
							{
								descripcion:{
									alias : 'd',
									desc:'Descripcion'
								},
								todo : {
									default : false,
									alias : 't'
								}
							}).help().argv;

module.exports = {
	argv
}