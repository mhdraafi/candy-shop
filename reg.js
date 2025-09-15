function fname(){
    let f = document.getElementById('jn').value;
    const regf=/^[A-Z a-z]+$/;
    if(!regf.test(f)){
        document.getElementById('sjn').innerHTML='only alphebets are allowed';
        document.getElementById('sjn').style.color='red';
        document.getElementById('jn').style.borderColor='red';
    }
    else{
        document.getElementById('sjn').innerHTML='';
        document.getElementById('fn').style.borderColor='green';
    }

}

function mbnum(){
    let n=document.getElementById('nb').value;
    const regn=/^[0-9]+$/;
    if(!regn.test(n)){
        document.getElementById('snb').innerHTML='only numbers are allowed';
        document.getElementById('snb').style.color='red';
        document.getElementById('nb').style.borderColor='red';
    }
    else if(n.length!=10){
        document.getElementById('snb').innerHTML='only 10 digits allowed';
        document.getElementById('snb').style.color='red';
        document.getElementById('nb').style.borderColor='red';
    
    }
    else{
        document.getElementById('snb').innerHTML=' ';
        document.getElementById('nb').style.borderColor='green';
    }

}
    function email(){
    let e=document.getElementById('em').value;
    const rege=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!rege.test(e)){
        document.getElementById('sem').innerHTML='correct the email';
        document.getElementById('sem').style.color='red';
        document.getElementById('em').style.borderColor='red';
    }
    else{
        document.getElementById('sem').innerHTML=' ';
        document.getElementById('em').style.borderColor='green';

    }
}
    function pass(){
    let p=document.getElementById('#ps').value;
    const regp=/^[a-zA-Z0-9@#$]{6,16}$/;
    if(!regp.test(p)){
        document.getElementById('sps').innerHTML='enter the correct pass';
        document.getElementById('sps').style.color='red';
        document.getElementById('sps').style.borderColor='red';
    }
    else{
        document.getElementById('sps').innerHTML=' ';
        document.getElementById('ps').style.borderColor='blue';
    }

}
    function cnfrmpass(){
    let p=document.getElementById('ps').value;
    const cp=document.getElementById('cps').value;
    if(p!=cp){
        document.getElementById('scps').innerHTML='passwword and confirm password are not same';
        document.getElementById('scps').style.color='red';
        document.getElementById('sps').style.borderColor='red';
    }
    else{
        document.getElementById('scps').innerHTML=' ';
        document.getElementById('cps').style.borderColor='green';
    }
}