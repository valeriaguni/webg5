const urlApi="https://gf182717708c5bb-grupo5reto1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room"

function peticionGet() {
$.ajax({
    url: urlApi, 
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        console.log(data)
    },
    error: function(xhr, status){
        console.log("Ha sucedido un problema al consumir la api " + xhr.status + " " + status)
    },
    complete: function(xhr, status){
        console.log("Peticion Realizada con Exito!!")
    }
});
}