window.onload = function() {
    // Contar los párrafos
    var parrafos = document.getElementsByTagName('p').length;

    // Contar las listas de todos los tipos
    var listasUL = document.getElementsByTagName('ul').length;
    var listasOL = document.getElementsByTagName('ol').length;
    var listasDL = document.getElementsByTagName('dl').length;
    var totalListas = listasUL + listasOL + listasDL;

    // Determinar el mensaje a mostrar
    var mensaje;
    if (totalListas > 0) {
        mensaje = `La página tiene ${parrafos} párrafos y ${totalListas} listas.`;
    } else {
        mensaje = `La página tiene ${parrafos} párrafos y no tiene listas.`;
    }

    // Mostrar el mensaje en un alert
    alert(mensaje);
};