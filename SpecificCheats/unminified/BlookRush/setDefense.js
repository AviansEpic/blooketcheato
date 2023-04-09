(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();
    
    let defense = Number(prompt("Defense:"));

    if (defense > 4) {
        defense = 4;
    }

    if (defense < 0) {
        defense = 0;
    }

    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ defense });
})();