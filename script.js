//везде добавить префикс endy

const textarea = document.getElementById("placeforansweragenttouser");

const button_sysinfo = document.createElement('button');
button_sysinfo.classList.add('endybut');
button_sysinfo.textContent = 'SystemInfo';
button_sysinfo.id ='sysinfo';
button_sysinfo.onclick = function bnm_click(){
    textarea.value = textarea.value+'\n'+systeminfo;
}

function addbutton(btn_name,id,context,top){
    const btn = document.createElement('button');
    btn.classList.add('endybut');
    btn.textContent = btn_name;
    btn.id = btn_name;
    btn.style.top = top;
    btn.onclick = function bnm_click(){
        textarea.value = textarea.value+'\n'+context;
    }
    document.body.append(btn);
}

textarea.placeholder = 'Отвечай живее!'

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

//Настройка Авто
const autotune = ``

//Подключение рабочего места оператора
const rmo = `Добрый день!
Проверьте, пожалуйста следующее:
1) в конфигурации SecurOS создан объект «Рабочее Место Оператора» с таким же id как имя клиентского ПК.
2) с клиентского ПК проходит пинг по имени сервера, например:
ping NVR-1
ответ приходит в виде IPv4 адреса, например
192.168.1.100
Если же ответ в ином формате, то пропишите в файле "С:/Windows/System32/drivers/etc/hosts" строку
192.168.1.100  NVR-1
, где 192.168.1.100 - адрес сервера, а NVR-1 - имя вашего сервера.
3) и на сервере и на клиентском ПК в брандмауэре разрешены входящие и исходящие подключения для портов указаных в Руководстве администратора.Приложение 5. Как вариант для проверки можно просто отключить брандмауер.`

const clear = ``

addbutton('Микрофон','microphone',microphone,'42px');
addbutton('РМО','rmo',rmo,'64px');
addbutton('АвтоНастройка','autotune',autotune,'86px');
addbutton('Очистить','сlear',clear,'108px');


document.body.append(button_sysinfo);

console.log ("Расширение Никиты работает!");