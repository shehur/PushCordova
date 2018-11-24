var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var acao = document.getElementById('acao');
        acao.addEventListener('click', function() {
            alert('ação executada.');
        });
    }
};

app.initialize();