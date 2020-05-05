var getPlayer = function() {

    let playerPin = document.getElementById('player-pin').value;

    // const headers = new Headers({
    //     // 'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // });

    // const request = new Request(`https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=${playerPin}`, {
    //     method: 'GET',
    //     headers: headers
    // });

    fetch(`https://www.europeangodatabase.eu/EGD/GetPlayerDataByPIN.php?pin=${playerPin}`)
        .then(res => res.json())
        .then(res => {
            const playerInfoBox = document.getElementById('player-info');
            let playerInfo = `
                <p>
                    <b>AGAID:</b> ${res.AGAID}<br>
                    <b>Club:</b> ${res.Club}<br>
                    <b>Country_Code:</b> ${res.Country_Code}<br>
                    <b>DGor:</b> ${res.DGor}<br>
                    <b>EGF_Placement:</b> ${res.EGF_Placement}<br>
                    <b>Elab_Date:</b> ${res.Elab_Date}<br>
                    <b>Gor:</b> ${res.Gor}<br>
                    <b>Grade:</b> ${res.Grade}<br>
                    <b>Grade_n:</b> ${res.Grade_n}<br>
                    <b>Hidden_History:</b> ${res.Hidden_History}<br>
                    <b>Last_Appearance:</b> ${res.Last_Appearance}<br>
                    <b>Last_Name:</b> ${res.Last_Name}<br>
                    <b>Name:</b> ${res.Name}<br>
                    <b>Pin_Player:</b> ${res.Pin_Player}<br>
                    <b>Proposed_Grade:</b> ${res.Proposed_Grade}<br>
                    <b>Real_Last_Name:</b> ${res.Real_Last_Name}<br>
                    <b>Real_Name:</b> ${res.Real_Name}<br>
                    <b>Tot_Tournaments:</b> ${res.Tot_Tournaments}<br>
                    <b>retcode:</b> ${res.retcode}
                </p>`;

            playerInfoBox.innerHTML = playerInfo;
        });
}

document.getElementById('find-player-button').onclick = getPlayer;