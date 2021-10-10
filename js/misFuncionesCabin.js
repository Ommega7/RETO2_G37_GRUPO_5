function traerInformacion(){
    $.ajax({
        url:"https://g822266b0d111e2-db202109301432.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items){
    let myTable ="<table border>"
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>"
        myTable+="<td>"+items[i].brand+"</td>"
        myTable+="<td>"+items[i].rooms+"</td>"
        myTable+="<td>"+items[i].category_id+"</td>"
        myTable+="<td>"+items[i].name+"</td>"
        
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>"
        myTable+="</tr>";    
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g822266b0d111e2-db202109301432.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g822266b0d111e2-db202109301432.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}


function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g822266b0d111e2-db202109301432.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}