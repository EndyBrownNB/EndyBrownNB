//<textarea id="placeforansweragenttouser" class="form-control font_iss_small " 
//rows="5" placeholder="Напишите текст ответа"></textarea>
//везде добавить префикс endy
const textarea = document.getElementById("placeforansweragenttouser");

const button_sysinfo = document.createElement('button');
button_sysinfo.classList.add('endybut');
button_sysinfo.textContent = 'SystemInfo';
button_sysinfo.id ='sysinfo';
button_sysinfo.onclick = function bnm_click(){
    textarea.value = systeminfo;
}

// const button_microphone = document.createElement('button');
// button_microphone.classList.add('endybut');
// button_microphone.textContent = 'Микрофон';
// button_microphone.id = 'microphone';
// button_microphone.onclick = function bnm_click(){
//     textarea.value = microphone;
// }


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
//textarea.placeholder = 'Отвечай живее!'
//textarea.value = 'Ответ';



//контекст
const systeminfo = `Добрый день!
Для диагностики проблемы пришлите, пожалуйста, Systeminfo.
Для того, чтобы получить данный комплект логов Вам необходимо запустить утилиту SystemInfo.exe, находящуюся в 'C:\/Program Files (x86)\/ISS\/SecurOS\/tools'.
Снимите все галочки и нажмите "Пуск". В той же папке появится архив, который необходимо нам направить.`

const microphone = `1) Добавить устройство аудиозахвата.
2) В настройках выбрать нужный тип и модель (если тип отсутствует, то можно завести через ONVIF или GenericRTSP)
Более подробно это описано в руководстве администратора системы (C:\.Program Files (x86)\/ISS\/SecurOS\/Manuals\/SecurOS Administration Guide.pdf)
в главе "Аудиоподсистема".
3) Прописать IP, пользователя и пароль от сетевого устройства.
4) Создать дочернее устройство "Микрофон".
5) Зайти в настройки объекта "Камера" во вкладку Аудио и выбрать созданный микрофон.
6) В настойках объекта "Компьютер" настроить диск для записи аудио.
7) В настройках объекта "Медиа Клиент" во вкладке Аудио поставить галочку "Работать со звуком".`

const clear = ``

addbutton('Микрофон','microphone',microphone,'42px');
addbutton('Очистить','сlear',clear,'64px');

document.body.append(button_sysinfo);

console.log ("Расширение Никиты работает!");

