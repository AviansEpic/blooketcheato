(()=>{
    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    stateChanger.setState({ progress: stateChanger.state.goalAmount });
    
    let answer = stateChanger?.state?.question?.correctAnswers?.[0];

    if (answer !== undefined) {
        for (let i = 0; i < 4; i++) {
            let question = document.querySelector("#answer" + i + " > div > div > div > div");
            if (question?.innerHTML == answer) {
                question.click();
            }
        }
    }
})();