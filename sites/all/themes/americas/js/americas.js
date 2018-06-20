/* Implement custom javascript here */

jQuery( document ).ready(function() {
	// Agregado de clases para efecto de Colorbox en acciones de edición y borrado
	if (jQuery('div.edicion a').length) {
		jQuery('div.edicion a').addClass( "colorbox-load init-colorbox-load-processed cboxElement" )
		jQuery('div.borrado a').addClass( "colorbox-load init-colorbox-load-processed cboxElement" )
	}
});