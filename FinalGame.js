

$("p").click(function () {
    $(this).hide();
});

$("p").click(function () {
    $(this).hide();
});

if ($('.panelClass').css('display') == 'none') {
    $('.panelClass').slideDown();
} else {
    $('.panelClass').slideUp();
}

$('#showHideSlide').click(function () {

    if ($('.panelClass').css('display') == 'none') {
        $('.panelClass').slideDown();
    } else {
        $('.panelClass').slideUp();
    }

});

$(document).ready(function () {
    localStorage['question'] = 1;
    localStorage['score'] = 0;
    $('body').showQuestion(1);
});



(function ($) {
    $.fn.showQuestion = function (question) {

        switch (question) {
            case 1:
                $('#questionBox1').toggle(true);
                $('#questionBox2').toggle(false);
                $('#questionBox3').toggle(false);
                $('#questionBox4').toggle(false);
                $('#questionBox5').toggle(false);
                break;
            case 2:
                $('#questionBox2').toggle(true);
                $('#questionBox1').toggle(false);
                $('#questionBox3').toggle(false);
                $('#questionBox4').toggle(false);
                $('#questionBox5').toggle(false);
                break;
            case 3:
                $('#questionBox3').toggle(true);
                $('#questionBox1').toggle(false);
                $('#questionBox2').toggle(false);
                $('#questionBox4').toggle(false);
                $('#questionBox5').toggle(false);
                break;
            case 4:
                $('#questionBox4').toggle(true);
                $('#questionBox5').toggle(false);
                $('#questionBox1').toggle(false);
                $('#questionBox2').toggle(false);
                $('#questionBox3').toggle(false);
                break;
            case 5:
                $('#questionBox5').toggle(true);
                $('#questionBox1').toggle(false);
                $('#questionBox2').toggle(false);
                $('#questionBox3').toggle(false);
                $('#questionBox4').toggle(false);
                break;
            default:
                console.log('Switch Case Break');
                break;
        }
    }
})($);

(function ($) {
    $.fn.evaluateAnswer = function (question) {

        switch (question) {
            case 1:
                if ($('input[name=q1_ans]:checked').val() === "52") {
                    var score = parseInt(localStorage['score']);
                    score++;
                    localStorage['score'] = score.toString();
                }
                break;
            case 2:
                if ($('input[name=q2_ans]:checked').val() === "football") {
                    var score = parseInt(localStorage['score']);
                    score++;
                    localStorage['score'] = score.toString();
                }
                break;
            case 3:
                if ($('input[name=q3_ans]:checked').val() === "o") {
                    var score = parseInt(localStorage['score']);
                    score++;
                    localStorage['score'] = score.toString();
                }
                break;
            case 4:
                if ($('input[name=q4_ans]:checked').val() === "banyana") {
                    var score = parseInt(localStorage['score']);
                    score++;
                    localStorage['score'] = score.toString();
                }
                var score = parseInt(localStorage['score']);
                $("#gameScore").text("Your Score is " + score + "/4");
                break;

            default:
                console.log('Switch Case Break');
                break;
        }
    }
})($);

$(document).on("click", '#btnPrevious', function () {
    var question = parseInt(localStorage['question']);
    $(this).evaluateAnswer(question);
    question--;
    $(this).showQuestion(question);
    localStorage['question'] = question.toString();
});

$(document).on("click", '#btnNext', function () {
    var question = parseInt(localStorage['question']);
    $(this).evaluateAnswer(question);
    question++;
    $(this).showQuestion(question);
    localStorage['question'] = question.toString();
});

$('#btnFinish').click(function () {
    location.reload();
});