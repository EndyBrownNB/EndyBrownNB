//везде добавить префикс endy
const texts = require('./texts.js')
const microphone = texts.microphone
const textarea = document.getElementById("placeforansweragenttouser");

const button_sysinfo = document.createElement('button');
button_sysinfo.classList.add('endybut');
button_sysinfo.textContent = 'SystemInfo';
button_sysinfo.id ='sysinfo';
button_sysinfo.onclick = function bnm_click(){
    textarea.value = systeminfo;
}


function addbutton(btn_name,id,context,top){
    const btn = document.createElement('button');
    btn.classList.add('endybut');
    btn.textContent = btn_name;
    btn.id = btn_name;
    btn.style.top = top;
    btn.onclick = function bnm_click(){
        textarea.value = context;
    }
    document.body.append(btn);
}
textarea.placeholder = 'Отвечай живее!'

//контекст
const systeminfo = `Добрый день!
Для диагностики проблемы пришлите, пожалуйста, Systeminfo.
Для того, чтобы получить данный комплект логов Вам необходимо запустить утилиту SystemInfo.exe, находящуюся в 'C:\/Program Files (x86)\/ISS\/SecurOS\/tools'.
Снимите все галочки и нажмите "Пуск". В той же папке появится архив, который необходимо нам направить.`



const clear = ``

addbutton('Микрофон','microphone',microphone,'42px');
addbutton('Очистить','сlear',clear,'64px');

document.body.append(button_sysinfo);

console.log ("Расширение Никиты работает!");