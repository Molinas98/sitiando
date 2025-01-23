$(document).ready(function () {
    function generatePassword(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
    $('#btn_generar').on('click', function () {
        $('.generar_pass').removeClass('collapse');
        const password = generatePassword(24);
        $('#new_pass').val(password);
    });

    $('.generar_pass .btn-base').on('click', function () {
        $('.generar_pass').addClass('collapse');
    });
});