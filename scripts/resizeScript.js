window.onresize = ()=>{
    resumeCheck();
}

window.onload = ()=>{
    resumeCheck();
}

function resumeCheck() {
    let width = window.innerWidth;
    if (width < 850) {
        document.querySelector("#resume").innerHTML = `
        <h2>Résumé</h2>
        <a href="media/resume.pdf"><strong>Click here to download my résumé (pdf).</strong></a>
        `;
    }
    else {
        document.querySelector("#resume").innerHTML = `
        <h2>Résumé</h2>
        <iframe src="media/resume.pdf"></iframe>
        `;
    }
}