let menucheckbox = document.getElementById('menuCheckBox');
let navigation = document.getElementsByTagName('nav')[0];

menucheckbox.onclick = function () {
    if (menucheckbox.checked == true) {
        console.log('checked');
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        navigation.classList.add('checked');
    } else {
        console.log('not checked');
        document.getElementsByTagName('body')[0].style.overflow = "auto";
        navigation.classList.remove('checked');
    }
}