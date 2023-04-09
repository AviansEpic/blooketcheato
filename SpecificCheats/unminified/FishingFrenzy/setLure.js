(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let lure = prompt("Lure: ");

    if (lure > 5) lure = 5;
    if (lure < 1) lure = 1;
    lure--;

    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ lure });
})();