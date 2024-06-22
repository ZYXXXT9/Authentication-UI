export const errorTextFile = (error) => {
    const element = document.createElement("a");
    const file = new Blob([error], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "error_log.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}