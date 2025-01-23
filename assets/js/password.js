document.addEventListener("DOMContentLoaded", () => {
    $('#input-pass').on('click', function() {
        if ($('#password').attr('type')=== 'password') {
            $('#password').attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('#password').attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
    $('#reinput-pass').on('click', function() {
        if ($('#repassword').attr('type')=== 'password') {
            $('#repassword').attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('#repassword').attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});