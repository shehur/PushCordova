window.plugins.OneSignal
    .startInit("95066882-fb97-416e-a4a6-6a8763e34136")
    .handleNotificationReceived(function(jsonData) {
    alert("Notificação recebida:\n" + JSON.stringify(jsonData));
    console.log('Eu acabei de receber uma notificação: ' + JSON.stringify(jsonData));
})
.endInit();
