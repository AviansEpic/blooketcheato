(() => {
    const stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    function questionCheck() {
        if (stateChanger?.state?.question?.correctAnswers !== undefined) {
            for (var i = 0; i < 4; i++) {
                var question = document.querySelector("#answer" + i + " > div > div > div > div");
                if (question !== undefined && question?.innerHTML == stateChanger?.state?.question?.correctAnswers?.[0]) {
                    question?.click();
                    for (var i = 0; i < 20; i++) {
                        document.querySelector("#feedbackButton")?.click();
                    }
                }
            }
        } else if (window.location.pathname == "/play/battle-royale") {
            for (var i = 0; i < 4; i++) {
                var question = document.querySelector("#answer" + i + " > div > div > div > div");
                if (question !== undefined && question?.innerHTML == Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode?.props.client?.question?.correctAnswers?.[0]) {
                    question?.click();
                }          
            }
        }
        
        setTimeout(questionCheck, 50);
    }
    
    questionCheck();
})();