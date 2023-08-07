function skillsmember() {
    var skills = document.getElementById("skills").value;
    var skills = skills.split(",");
    var skills = skills.map(function (item) {
        return item.trim();
    });
    var skills = skills.filter(function (item) {
        return item != "";
    });
    var skills = skills.map(function (item) {
        return item.toUpperCase();
    });
    var skills = skills.sort();
    var skills = skills.filter(function (item, pos) {
        return skills.indexOf(item) == pos;
    });
    document.getElementById("skills").value = skills.join(", ");
}
    