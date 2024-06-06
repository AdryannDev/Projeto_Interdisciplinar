function autoResize() {
    objTextArea = document.getElementById('comentario');
    if (objTextArea.value){
        if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
            objTextArea.rows += 1;
        }
    }
    else{
        objTextArea.rows = 0
    }
} 