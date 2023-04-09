(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.alert = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.alert.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    if (window.location.pathname == "/tower/battle") {
        Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.setState({myHealth: 100});
    } else {
        alert("You need to be in battle!")
    }
})()