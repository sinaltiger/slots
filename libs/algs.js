function randNum(minimo, maximo) {
    if (minimo >= maximo) {
        console.error("O valor mínimo deve ser menor que o valor máximo.");
        return null;
    }

    // Calcula o número aleatório e retorna
    const numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(numeroAleatorio);
}

function TimeNextSignal() {
    const novoTempo = moment().add((randNum(Tempo_Min_Proximo_Sinal, Tempo_Max_Proximo_Sinal)), 'm').format('HH:mm');
    return novoTempo
}

function StorageNameActualSignal() {
    return 'zhB4uFd'
}

function TimeActualSignal() {
    // return moment().format('yyyy-mm-DD HH-mm-ss')
    return moment().toString() 
}

function btnNewSignal(time=false) {
    const btn = document.getElementById("btn");
    btn.setAttribute("disabled", true);

    var i = 60-time || 60;
    btn.textContent = "Aguarde (" + i + "s...)";
    const interval = setInterval(() => {
        i = i-1;

        btn.textContent = `Aguarde (${i}s...)`;
    }, 1000);

    setTimeout(() => {
        btn.removeAttribute("disabled");
        btn.textContent = "GERAR NOVO SINAL"
        clearInterval(interval);
    }, 60000);
}

function getDiffTime(date) {
    const time = moment(date)
    const diff = moment().diff(time, 'seconds')
    return diff
}