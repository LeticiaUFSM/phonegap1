var db;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    //  Define os eventos que serão tratados na inicialização
    // O DeviceReady é um evento fundamental para todo o desenvolvimento com o Phonegap, 
    //pois ele indica que não só os recursos foram carregados, mas que toda a API do Phonegap já está disponívelpara uso, 
    //e que todas as comunicações com o dispositivo foram realizadas, ou seja, está tudo pronto para ser utilizado.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        alert("1");
        db = window.sqlitePlugin.openDatabase({name: "DB"});
        alert("2");
        
    },
};

  
function sair(){
	alert("sair");
if (navigator.app) {
navigator.app.exitApp();
}
else if (navigator.device) {
  navigator.device.exitApp();
}
else {
          window.close();
}
}

function inserir()
{
	alert("ok");
	db = window.openDatabase("EmployeeDirectoryDB", "1.0", "PhoneGap Demo", 200000);
	alert("ok2");
	db.transaction(function(tx) {
		alert("ok3");
            // Cria a Tabela "tabela_testes"
            tx.executeSql('CREATE TABLE IF NOT EXISTS tabela_teste (id integer primary key, titulo text)');
            alert("ok4");
            // Adiciona um elemento a tabela
            tx.executeSql("INSERT INTO tabela_teste (titulo) VALUES (?)", ["Meu primeiro post."]);
            alert("ok5");
            // Faz uma busca na tabela
            tx.executeSql("SELECT * FROM tabela_teste;", [], function(tx, res) {
                alert("Quantidade Resultados: " + res.rows.length);
                for (var i = 0;i<res.rows.length;i++){
                    alert("Linha "+i+": "+res.rows.item(i).titulo);
                }
              });
        });
}
