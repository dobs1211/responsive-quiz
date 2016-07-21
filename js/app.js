var questionsArray = [
    //Question 1
    {
        questionText: '"Sucking on chili dogs outside the Tasti-Freeze...", was John Cougar Mellencamp\'s idea of a date back in 1982. In what number one classic did he try to "dribble off those Bobby Brooks" so he could do what he pleased?',
        questionChoices: ['Pink Houses', 'Jack and Diane', 'Summer of 69'],
        questionCorrectChoice: 1,
        correctDetails: '"Jack and Diane" was the second release from the number one album "American Fool". It debuted in the top 40 on August 7th, 1982 and eight weeks later took over the top spot which it held for four weeks. It spent 17 weeks in the top 40 and was the only number one pop hit in Mellencamp\'s chart career. The Recording Industry Association of America certified the single gold and named the record one of the 20 th century"s Songs of the Century. FUN FACT: Jack and Diane was inspired by the performances of Warren Beatty and Natalie Wood in the 1961 movie Splendor in the Grass.',
    },

    //Question 2
    {
        questionText: '"The line, it shakes all over like a jellyfish. I kinda like it!" Sounds odd, but Americans were "ready Freddie" as they sent this record to number one for four weeks back in 1980. Can you name this Queen classic?',
        questionChoices: ['Killer Queen', 'Biggest Part of Me', 'Crazy Little Thing Called Love'],
        questionCorrectChoice: 2,
        correctDetails: '"Crazy Little Thing Called Love" became Queens first number one in America when it ascended to the top on February 23\, 1980. It was a worldwide smash reaching number two in Britain and topping the charts in Canada, Mexico, Australia, The Netherlands and New Zealand. It came from their multi - platinum, number one album "The Game" and was certified gold by the Recording Industry Association of America. FUN FACT: Freddie Mercury claimed to have written the song while he was taking a bath in a hotel in Germany.',

    },

    //Question 3
    {
        questionText: 'Imagine a street fight with gang leaders brandishing switchblades, in walks Michael Jackson wearing a bright red leather jacket singing and dancing to his heart\'s content. Back in 1983, no one laughed, they just danced along. What classic 80 s song was featured in this famous video?',
        questionChoices: ['Beat It', 'Electric Avenue', 'Bad'],
        questionCorrectChoice: 0,
        correctDetails: '"Beat It" was the fifth solo number one hit for Michael Jackson. It was the third release from the historically popular album "Thriller" and took over the number one spot on April 30, 1983. It spent three weeks at number one and 18 weeks in the top 40. Besides being certified platinum, the single won the Grammy Award for "Record of the Year" and was named by Rolling Stone magazine in its 2004 poll of the "500 Greatest Songs of All Time". FUN FACT: The solo guitar work near the end of the song was performed by Eddie Van Halen.',
    },

    //Question 4
    {
        questionText: '"I love a ___ night and I love you too!" What kind of night could possibly have gotten Eddie Rabbitt and the rest of America so excited back in the winter of 1981?',
        questionChoices: ['Moonlit', 'Snowy', 'Rainy'],
        questionCorrectChoice: 2,
        correctDetails: '"I Love A Rainy Night" debuted in the Hot 100 on December 6th, 1980 and after a slow climb reached number one on February 28th, 1981, holding that spot for two weeks. While it was Eddie Rabbitt\'s only number one on the Billboard Hot 100, it was the eighth of his 17 career chart toppers on the Billboard Country Singles chart. It spent 18 weeks in the top 40 and 28 weeks on the Hot 100. He was quoted as having written the song while "sitting in a small apartment, staring out the window at one o\'clock in the morning." Sadly, we lost Eddie Rabbitt in 1998 when he succumbed to lung cancer at the tender age of 56.',
    },

    //Question 5
    {
        questionText: '"Touch, if you will, my stomach" What movie soundtrack hit did Billboard name the most popular song of 1984?',
        questionChoices: ['Kiss', 'When Dove\'s Cry', 'Dancing in the dark'],
        questionCorrectChoice: 1,
        correctDetails: '"When Doves Cry" became one of Prince\'s signature songs when it topped the chart on July 7th, 1984 and reigned for five weeks. It was a blazingly popular song, reaching the number one spot in only its sixth week on the chart. It was the first of five top 40 hits from Prince\'s movie and album "Purple Rain" which included his number one "Let"s Go Crazy ". Spin Magazine put "When Doves Cry " at number six of the greatest songs of all time and Rolling Stone ranked it at number 52 on their list of the "500 Greatest Songs of All Time ".',
    },

    //Question 6
    {
        questionText: '"Oh the beauty is there but the beast is in the heart" The pinnacle of America\'s love affair with the duo Hall and Oates was this song, their biggest hit of the decade. Who did they warn us about in their 1982 number one tune?',
        questionChoices: ['Maneater', 'Rosanna', 'Rich Girl'],
        questionCorrectChoice: 0,
        correctDetails: '"Maneater" ate its way to the top on December 18th, 1982 and hung around for four weeks. Of their six number one hits, this stayed at number one the longest and was certified gold by the Recording Industry Association of America. It spent 13 weeks in the top ten, 17 weeks in the top 40 and 23 weeks on the Billboard Hot 100. It came from their album H2O which also spawned the top ten hits "One on One" and "Family Man".',

    },

    //Question 7
    {
        questionText: 'Michael Jackson sang: "It\'s close to midnight and something evil\'s lurking in the dark." What song is that taken from?',
        questionChoices: ['Beat It', 'Thriller', 'Billie Jean'],
        questionCorrectChoice: 1,
        correctDetails: 'Thriller is probably Michael Jackson\'s best known hit and one of his best selling singles. It\'s also known for its elaborate video which was phenomenal at the time.',
    },

    //Question 8
    {
        questionText: 'Madonna sang: "Last night I dreamt of San Pedro." What song is that taken from?',
        questionChoices: ['La Isla Bonita', 'Papa Don\'t Preach', 'Like a Prayer'],
        questionCorrectChoice: 0,
        correctDetails: 'Madonna has successfully dominated the charts for decades and has constantly adapted her range and material with the times unlike so many of her contemporaries. "La Isla Bonita" is somehow always associated with schoolgirls singing it on school coach trips.',
    },

    //Question 9
    {
        questionText: 'Cyndi Lauper sang: "Lying in my bed I hear the clock tick, and think of you." What song is that taken from?',
        questionChoices: ['Girls Just Wanna Have Fun', 'True Colors', 'Time After Time'],
        questionCorrectChoice: 2,
        correctDetails: 'Cyndi Lauper is best known for her smash hit "Girls Just Wanna Have Fun" together with her distinct voice and outrageous look. She never had the overwhelming success many critics felt she should have had but is still entertaining fans around the world.',


    },

    //Question 10
    {
        questionText: 'Depeche Mode sang: "Reach out and touch faith." What song is that taken from?',
        questionChoices: ['Personal Jesus', 'Enjoy the Silence', 'See You'],
        questionCorrectChoice: 0,
        correctDetails: 'Depeche Mode are another band well known for their longetivity having been popular ever since 1980. They are very much associated with Alternative music although they have dominated the Dance Chart since their inception.',
    },
];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

/*--- Step 2 - Defining functions ---*/

function questionDisplay() {

    //1 - update the each question text
    $('#question').text(questionsArray[currentQuestionNumber].questionText);



    //2 - display the what are the choices for the current question
    //2.1 - first delete all the existing choices before populating it with new ones
    $('#choices').empty();
    //2.2 - the get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    //2.3 - loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }



    //3 - displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}

/*--- Step 3 - Using functions ---*/

$(document).ready(function () {


    /*--- Hide quiz and result section on load ---*/
    $('.quiz-section').hide();
    $('.result-section').hide();


    /*--- On start quiz ---*/
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });


    /*--- Show quiz questions ---*/
    $('.quiz-section').on('click', '.option', function () {

        //get the question answer from the user
        var userAnswer = $("input[class='option']:checked").val();
        //get the correct answer from the questionsArray above
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        //compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {
            //if the answer was correct increment the total number of correct answers
            totalNumberOfCorrectAnswers++;
            //console.log(totalNumberOfCorrectAnswers);
        }
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");


        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);
            if (totalNumberOfCorrectAnswers > 7) {
                $('#tryagain span').text("Well Done, you are an 80's music pro!");
            } else if ((totalNumberOfCorrectAnswers > 4) && (totalNumberOfCorrectAnswers <= 7)) {
                $('#tryagain span').text("Well, you might need a little review...let\s do it again!");
            } else {
                $('#tryagain span').text("Bummer! Better Luck Next Time!");
            }

            //hide other containers
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display the following question
            questionDisplay();
        }
    });


    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});
