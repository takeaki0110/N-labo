$(function() {
    var TopBtn = $('#page_top');    
    // �ʏ�͔�\��
    TopBtn.hide();
    // �X�N���[���ʒu��100�Ń{�^����\��
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            TopBtn.fadeIn();
        } 
        else {
            TopBtn.fadeOut();
        }
    });
    // �{�^������������ƃg�b�v�ֈړ�
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);	/*300�̓X�N���[���X�s�[�h*/
        return false;
    });
});