// beam multipliers for 5, 10, 14, 19, 26, 36, 50, 70, and 90 degree 
beamMultiplier = [.1, .14, .21, .26, .32, .47, .65, 1.14, 1.63]

function calcBeam(){
    inputDistance = document.getElementById("inputDistance").value;

    for(i = 0; i < 9; i++){
        width = inputDistance * beamMultiplier[i];
        dispValue = Math.round(width * 100) / 100;
        dispValue = dispValue.toString() + "'";

        discMsg = `When a Leko has a throw of ${inputDistance}' the beam will be:`;

        document.getElementById("tblHead").innerHTML = "Beam Results";
        document.getElementById("tblDisc").innerHTML = discMsg;
        document.getElementById("tbleValueType").innerHTML = "Width (ft)";
        document.getElementById("value_" + i.toString() ).innerHTML = dispValue;
    }
}

function calcDist(){
    inputBeam = document.getElementById("inputWidth").value;

    for(i = 0; i < 9; i++){
        dist = inputBeam / beamMultiplier[i];
        dispValue = Math.round(dist * 100) / 100;
        dispValue = dispValue.toString() + "'";

        discMsg = `To make a beam with a diameter of ${inputBeam}', a Leko needs to be this far away:`;

        document.getElementById("tblHead").innerHTML = "Distance Results";
        document.getElementById("tblDisc").innerHTML = discMsg;
        document.getElementById("tbleValueType").innerHTML = "Distance (ft)";
        document.getElementById("value_" + i.toString() ).innerHTML = dispValue;
    }
}
