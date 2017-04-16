$(function(){
	//equivalente ao load de nossa página
	$("#modal01").modal({backdrop:false, keyboard:false}); //remover a cor do fundo e impedir o uso de ESC
	
	$("#modal01").modal("show"); //mostrar o modal ao abrir a página

	setTimeout(function(){
		$("#modal01").modal("hide"); //fechar o modal automaticamente
	}, 3000);
});