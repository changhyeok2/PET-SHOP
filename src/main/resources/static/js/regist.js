document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('#login-form');

    form.addEventListener('submit', function(event) {
        if (!checkId() || !checkPw() || !comparePw() || !checkName() || !checkTel()) {
            event.preventDefault();
        }
    });

    let id = document.querySelector("#id");
    let pw1 = document.querySelector("#pw1");
    let pw2 = document.querySelector("#pw2");
    let u_name = document.querySelector("#name");
    let tel = document.querySelector("#tel");

    id.addEventListener('change', checkId);
    pw1.addEventListener('change', checkPw);
    pw2.addEventListener('change', comparePw);
    u_name.addEventListener('change', checkName);
    tel.addEventListener('change', checkTel);

    let idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,14}$/;

    function checkId() {
        if (id.value.length < 4 || id.value.length > 15) {
            alert("아이디는 4~15자리를 입력하세요.");
            id.select();
            return false;
        }
        return true;
    }

    let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+-=_])(?=.*[0-9]).{8,16}$/;

    function checkPw() {
        if (pw1.value.length < 8) {
            alert("비밀번호는 8자 이상 입력하세요.");
            pw1.value = "";
            pw1.focus();
            return false;
        }
        return true;
    }

    function comparePw() {
        if (pw1.value != pw2.value) {
            alert("비밀번호가 일치하지 않습니다.");
            pw2.value = "";
            pw2.focus();
            return false;
        }
        return true;
    }

    let namePattern = /^[가-힣]+$/;

    function checkName() {
        if (u_name.value.trim() === '' || !namePattern.test(u_name.value)) {
            alert("이름을 입력해주세요. (이름은 한글만 가능)");
            u_name.select();
            return false;
        }
        return true;
    }

    function checkTel() {
        if (!tel.value || tel.value.trim() === '') {
            alert("연락처를 입력해주세요.");
            tel.select();
            return false;
        } else if (tel.value.indexOf('-') == -1 || tel.value.length != 13) {
            alert("연락처 형식을 확인해주세요. (예: 010-1234-5678)");
            tel.select();
            return false;
        }
        return true;
    }
});
