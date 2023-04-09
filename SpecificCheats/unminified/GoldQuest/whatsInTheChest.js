(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;

    alert(`Left Chest: ${stateChanger.state.choices?.[0]?.text || "n/a"}\nMiddle Chest: ${stateChanger.state.choices?.[1]?.text || "n/a"}\nRight Chest: ${stateChanger.state.choices?.[2]?.text || "n/a"}`);
})();