(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.alert = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.alert.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    if (stateChanger.state.blooks[9] !== undefined) {
        return alert("You already have all blooks!");
    };

    let blook = { 
        name: "Unicorn",
        color: "#f6afce", 
        class: "⚔️", 
        rarity: "Epic",
        cash: [9e9 * 1, 9e9 * 2, 9e9 * 3, 9e9 * 4, 9e9 * 5], 
        time: [0.01, 0.01, 0.01, 0.01, 0.01],
        price: [1, 2, 3, 4, 5]
    }
    
    stateChanger.chooseBlook(blook);
})();