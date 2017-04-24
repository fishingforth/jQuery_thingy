/**
 * Created by 17svo on 4/3/2017.
 */
var testingVar = true;

if (testingVar) {
    document.write('<div class="my_boi_example_text">Hi, my name is example text, I\'m here to explain things. :D</div>')
    document.write('<br><div class="my_boi_example_text">Click the button below to continue.</div><br>')
}
else {
    document.write('Something Broke');
}

//var testingVar2 = true;
//
//if (testingVar2) {
//    document.write (Date());
//}





function click_1() {

    $('body').empty();
    $('body').append('<div class="my_boi_example_text">There has been something written in the console. Go check by pressing F12!</div>');
    $('body').append('<div class="my_boi_example_text"><br>This was done using the console.log.</div>');

    $('body').append('<div class="my_boi_example_text"><br>You can close out of the console now, because I won\'t be using it again besides for debugging.</div><br>');
    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_2()">No seriously don\'t click me.</button></div>');
    console.log('Hey, what\'s up!')
}

function click_2() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text">Using</div>');
    $('body').append('<div class="my_boi_example_text"><br>$(\'body\').empty()</div>');
    $('body').append('<div class="my_boi_example_text">and</div>');
    $('body').append('<div class="my_boi_example_text">$(\'body\').append()</div>');
    $('body').append('<div class="my_boi_example_text"><br>I\'m able to create and delete content without loading a new html file.</div>');
    $('body').append('<div class="my_boi_example_text"><br>The syntex is basically<br><br>$(selector).action(function)');

    $('body').append('<div class="my_boi_example_text"><br>Of course I\'m also using a button function, but my point still stands.</div><br>');

    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_3()">Go away dude.</button></div>');
    console.log('You can close the console now, friend.')
}

function click_3() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text">If you noticed I\'m able to seperate the paragraphs here.</div>');
    $('body').append('<div class="my_boi_example_text"><br>You can still use tags like br or hr just like how you would in HTML.</div>');
    $('body').append('<div class="my_boi_example_text"><br>Click the button below to see a more extreme example of the br tag.</div><br>');
    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_4()">...</button></div>');
    console.log('...but the company sure is nice.')
}

function click_4() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text">Scroll down, you\'ll see.</div>');

    $('body').append('<div class="my_boi_example_text"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>');
    $('body').append('<div class="my_boi_example_text">Approxomately 50 br tags were used making this.</div><br>');

    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_5()">If you click me one more time I will call my lawyers.</button></div>');
}

function click_5() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text"><br>Alright, i\'ll show you a couple more examples of how you can use jQuery to do the more simple things that HTML and CSS can\'t.</div><br>');

    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_6()">...</button></div>');
}

function click_6() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text" id="newFontExample">Yo, you can connect both classes and ids on these .appends too.<br></div>');
    $('body').append('<div class="my_boi_example_text" id="newFontExample_2"><br>Example Two.<br></div>');
    $('body').append('<div class="my_boi_example_text" id="newFontExample_3"><br>Example Three.<br></div>');
    $('body').append('<div class="my_boi_example_text" id="newFontExample_4"><br><br><blink>Example Four.</blink><br></div>');

    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_7()">...</button></div>');
}

function click_7() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text">One more example of using HTML and CSS in jQuery.<br></div>');
    $('body').append('<div id="transitionExample"><div></div><br></div>');

    $('body').append('<div class="my_boi_example_text"><button type="button" onclick="click_8()">I hope you step on a lego.</button></div>');
}

function click_8() {
    $('body').empty();
    $('body').append('<div class="my_boi_example_text">Later<br></div>');
}