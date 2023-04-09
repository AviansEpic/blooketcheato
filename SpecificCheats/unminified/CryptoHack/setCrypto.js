(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let crypto = prompt("Crypto: ");

    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ crypto, crypto2: crypto });
})();