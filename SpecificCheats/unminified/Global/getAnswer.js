(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.alert = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.alert.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    const stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    if (stateChanger?.state?.question?.correctAnswers !== undefined) {
        alert(stateChanger?.state?.question?.correctAnswers?.[0] || "n/a");
    } else if (window.location.pathname == "/play/battle-royale") {
        alert(Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode?.props.client?.question?.correctAnswers?.[0] || "n/a");
    }
})();