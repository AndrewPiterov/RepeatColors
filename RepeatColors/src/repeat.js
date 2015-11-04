function RandomColorSequence(length) {
    this.items = [];

    for (var i = 0; i < length; i++) {

        var number = Math.floor(Math.random() * 4 + 1);
        var color = numberToColor(number);
        this.items.push(color);
    }
}

RandomColorSequence.numberToColor = numberToColor;

function numberToColor(number) {

    if (number === 1) {
        return "red";
    }

    if (number === 2) {
        return "green";
    }

    if (number === 3) {
        return "blue";
    }

    if (number === 4) {
        return "yellow";
    }
}