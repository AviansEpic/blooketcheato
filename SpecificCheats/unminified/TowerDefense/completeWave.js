(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let round = prompt("Round: ");

    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    stateChanger.enemies = [];
    stateChanger.futureEnemies = [];
})();