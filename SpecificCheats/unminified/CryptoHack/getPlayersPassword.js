(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.alert = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.alert.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    if (stateChanger.state.stage !== "hack") {
        alert("You aren't hacking anyone currently!");
    } else {
        alert(stateChanger.state.correctPassword);
    }
})();