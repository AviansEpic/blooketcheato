(()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();let t=prompt("Round: ");Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({round:t})})();
