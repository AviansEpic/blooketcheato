(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let weight = prompt("Weight: ");

    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({ weight, weight2: weight });
})();