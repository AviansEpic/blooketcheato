(()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();let t=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner;alert(`Left Chest: ${t.state.choices?.[0]?.text||"n/a"}\nMiddle Chest: ${t.state.choices?.[1]?.text||"n/a"}\nRight Chest: ${t.state.choices?.[2]?.text||"n/a"}`)})();