function skillsMember() {
    var skills = document.getElementById("skills").value;
    var member = document.getElementById("member").value;
    var skillsMember = document.getElementById("skillsMember").value;
    var skillsMember = skills + " " + member;
    document.getElementById("skillsMember").value = skillsMember;
    document.getElementById("skills").value = "";
    document.getElementById("member").value = "";
}