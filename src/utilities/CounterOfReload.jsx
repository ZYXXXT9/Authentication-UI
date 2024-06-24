export const counterOfReload = ({modalErrMsg, setModalErrMsg}) => {
    const reloadCounter = JSON.parse(sessionStorage.getItem('reloadCounter'));

    if(reloadCounter) {
        if(Number(reloadCounter) < 3) {
            sessionStorage.setItem("reloadCounter", Number(reloadCounter) + 1)
        } else {
            setModalErrMsg({...modalErrMsg, show: true});  
        }
    } else {
        sessionStorage.setItem("reloadCounter", 1);
    }
}