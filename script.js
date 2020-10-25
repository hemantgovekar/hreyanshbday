
function getHreyanshBday() {
    today = new Date();
    var cmas = new Date(today.getFullYear() + 1, 09, 16);

    if (today.getMonth() == 10 && today.getDate() > 16) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    return Math.ceil((cmas.getTime() - today.getTime()) / one_day) + " days left until Hreyansh bday!";
}
