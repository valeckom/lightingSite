// beam multipliers for 5, 10, 14, 19, 26, 36, 50, 70, and 90 degree 
beamMultiplier = [.1, .14, .21, .26, .32, .47, .65, 1.14, 1.63]
candela = [1345250, 783310, 404780, 243520, 176255, 90855, 45650, 22270, 11330]

function calcBeam() {
    inputDistance = document.getElementById("inputDistance").value;

    // Set table headers
    discMsg = `When a Leko has a throw of ${inputDistance}' the beam will be:`;
    document.getElementById("tblHead").innerHTML = "Beam Results";
    document.getElementById("tblDisc").innerHTML = discMsg;
    document.getElementById("tbleValueType").innerHTML = "Width";

    for (i = 0; i < 9; i++) {
        // Calculate the beam diameter
        width = inputDistance * beamMultiplier[i];
        dispValue = Math.round(width * 100) / 100;
        dispValue = dispValue.toString() + "'";

        // get intensity
        dispIntensity = calcIntensity(inputDistance);

        document.getElementById("value_" + i.toString()).innerHTML = dispValue;
        document.getElementById("intensity_" + i.toString()).innerHTML = dispIntensity;
    }
}

function calcDist() {
    inputBeam = document.getElementById("inputWidth").value;

    // Set table headers
    discMsg = `To make a beam with a diameter of ${inputBeam}', a Leko needs to be this far away:`;
    document.getElementById("tblHead").innerHTML = "Distance Results";
    document.getElementById("tblDisc").innerHTML = discMsg;
    document.getElementById("tbleValueType").innerHTML = "Distance";

    for (i = 0; i < 9; i++) {
        // Calculate distance
        dist = inputBeam / beamMultiplier[i];
        dispValue = Math.round(dist * 100) / 100;
        dispValue = dispValue.toString() + "'";

        // get intensity
        dispIntensity = calcIntensity(dist);

        document.getElementById("value_" + i.toString()).innerHTML = dispValue;
        document.getElementById("intensity_" + i.toString()).innerHTML = dispIntensity;
    }
}

function calcIntensity(distance) {
    // Calculate intensity
    intensityValue = candela[i] / Math.pow(distance, 2);
    dispIntensity = Math.round(intensityValue);
    return dispIntensity.toString() + " fc";
}
