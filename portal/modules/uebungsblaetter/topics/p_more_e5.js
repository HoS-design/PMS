/* Englisch – größere Aufgabenpools (Teil 5) */
(function () {
  const ext = UB.extendTopic;

  ext('e-adverbs', { more: {
    form: `bad => badly
quick => quickly
clear => clearly
perfect => perfectly
sudden => suddenly
heavy => heavily
lazy => lazily
safe => safely
careless => carelessly
nervous => nervously
honest => honestly
early => early
gentle => gently
brave => bravely`,
    gap: `Max is a bad dancer. He dances [badly].
Anna is a quick learner. She learns [quickly].
The girls are a bit nervous. They are talking [nervously].
He is a safe driver. He drives [safely].
My teacher's English is very clear. She speaks very [clearly].`,
    choose: `He answered the question {correctly|correct}.
The weather is {bad|badly} today.
She plays the piano {perfectly|perfect}.
My grandpa walks very {slowly|slow}.
This is an {easy|easily} exercise.
The baby fell asleep {quickly|quick}.
They spoke {quietly|quiet} in the library.
It rained {heavily|heavy} all night.
Your idea sounds {interesting|interestingly}.
He looked at me {angrily|angry}.`,
    text: `Max is a [good] footballer. He plays [well] and he runs very [fast].
It was raining [heavily], so we drove very [slowly].
The test was [easy]. I answered all the questions [easily].
Shh! The baby is sleeping [peacefully]. Please talk [quietly].`,
    trans: `Er läuft sehr schnell. => He runs very fast.
Die Suppe schmeckt gut. => The soup tastes good.
Sie hat die Aufgabe leicht gelöst. => She solved the task easily.
Sprich bitte langsam! => Please speak slowly!`,
    err: `He speaks English perfect. => He speaks English perfectly.
She drives very careful. => She drives very carefully.
That sounds well. => That sounds good.`
  } });

  ext('e-nouns', { more: {
    aan: `We waited for {an|a} hour.
She is {a|an} nurse.
It takes {an|a} hour to get there.
That's {a|an} useful tip.`,
    this: `{This|These} is my new bike.
{Those|That} mountains are very high.
Can you see {that|those} plane in the sky?
{These|This} biscuits are delicious!
Is {that|those} your brother over there?
I don't like {these|this} trousers.
{This|These} room is too small.
Look at {those|that} clouds!`,
    saxon: `the hat of my grandpa => my grandpa's hat
the cars of my uncles => my uncles' cars
the name of the dog => the dog's name
the shoes of the women => the women's shoes
the school of my brother => my brother's school
the toys of the babies => the babies' toys
the birthday of Lisa => Lisa's birthday
the teacher of the students => the students' teacher`,
    irr: `The farmer has got ten [geese:goose].
Look at those cute [babies:baby]!
The [wolves:wolf] are howling.
We bought two [loaves:loaf] of bread.
The [policemen:policeman] helped the old lady.
There are lots of [fish:fish] in the lake.
I've got two [boxes:box] of chocolates.
Two [deer:deer] ran across the road.`,
    text: `My [brothers'] room is next to mine. They've got [an] old TV and two [boxes] of games.
[These] are my [grandparents'] dogs. They've got very big [feet]!
I saw [an] owl and two [mice] in the barn.
Is [this] [Lisa's] bag? – No, [that] bag over there is hers.`,
    trans: `Das ist das Zimmer meiner Schwester. => That's my sister's room.
Diese Äpfel sind sauer. => These apples are sour.
Ich habe ein Ei und eine Banane gegessen. => I ate an egg and a banana.
Die Frauen arbeiten in einer Fabrik. => The women work in a factory.`,
    err: `He is a honest man. => He is an honest man.
I need two knifes. => I need two knives.
Those is my shoes. => Those are my shoes.
The girls's room is pink. => The girls' room is pink.`
  } });

  ext('e-pastsimple', { more: {
    waswere: `I [was] tired after the trip.
The children [were] very quiet.
[Was] Lisa at school yesterday? – Yes, she [was].
We [weren't] at home last weekend.
The weather [was] terrible.
Where [were] you at eight o'clock?
My grandparents [were] in Vienna last week.
It [wasn't] my fault!
The tickets [were] very expensive.`,
    ed: `walk => walked
like => liked
drop => dropped
hurry => hurried
enjoy => enjoyed
clean => cleaned
close => closed
jump => jumped`,
    neg: `He wore a jacket. :: not => He didn't wear a jacket.
We met Lisa. :: not => We didn't meet Lisa.
The bus came on time. :: not => The bus didn't come on time.
I found my keys. :: not => I didn't find my keys.
She drank her milk. :: not => She didn't drink her milk.`,
    quest: `you / do your homework => Did you do your homework?
the film / start on time => Did the film start on time?`,
    wh: `How much [did] the jacket [cost]? – 50 euros.
Where [did] you [buy] it? – In Graz.
What [did] Lisa [say]? – She said thank you.
How long [did] you [stay]? – Two weeks.`,
    error: `She writed a letter. => She wrote a letter.
We didn't had time. => We didn't have time.
I were ill yesterday. => I was ill yesterday.
He catched the ball. => He caught the ball.`,
    text: `Last Saturday I [got up] late. I [had] breakfast and then I [met] my friends in the park. We [played] football until it [started] to rain.
"Where [were] you yesterday?" – "I [was] at the dentist. I [didn't go] to school in the morning."`,
    trans: `Ich habe gestern ein Buch gelesen. => I read a book yesterday.
Wann bist du nach Hause gekommen? => When did you come home?
Wir waren nicht müde. => We weren't tired.
Er hat den Bus verpasst. => He missed the bus.`,
    err: `She didn't liked the film. => She didn't like the film.`
  } });

  ext('e-phrases', { more: {
    p1: `Du fragst nach der Uhrzeit. => What time is it?
Du wünschst einen schönen Tag. => Have a nice day!
Du fragst, ob du das Fenster öffnen darfst. => Can I open the window, please?
Du sagst, dass du fertig bist. => I've finished.
Du fragst, auf welcher Seite die Aufgabe ist. => What page is it on?
Du fragst, wie man ein Wort buchstabiert. => How do you spell …?
Du sagst, dass du die Antwort nicht weißt. => I don't know.`,
    polite: `{May I come in|I come in}, please?
{Excuse me|Listen}, can you help me?
{Could I|I will} borrow your pen, please?
{Thanks a lot|Fine} for your help!`,
    p2: `Du fragst, wo das nächste WC ist. => Where is the nearest toilet, please?
Du möchtest eine Fahrkarte nach Wien kaufen. => A ticket to Vienna, please.
Du fragst, ob es vegetarisches Essen gibt. => Have you got any vegetarian food?
Du möchtest die Rechnung. => Can I have the bill, please?
Du fragst, wie weit es zum Museum ist. => How far is it to the museum?
Du erklärst: an der Ampel rechts abbiegen. => Turn right at the traffic lights.
Du fragst, wann das Geschäft schließt. => What time does the shop close?`,
    p3: `Du fragst nach der Meinung des anderen. => What do you think?
Du bedankst dich für eine Einladung. => Thanks for inviting me!
Du sagst, dass du dich auf etwas freust. => I'm looking forward to it!
Du tröstest jemanden. => Don't worry. It'll be OK.
Du fragst, ob du später zurückrufen kannst. => Can I call you back later?
Du machst jemandem ein Kompliment. => I like your jacket!
Du schlägst einen Treffpunkt vor. => Let's meet at the station at three.`,
    p4: `Im Geschäft: Du möchtest etwas umtauschen. => I'd like to change this, please. It's too small.
Im Restaurant: Du möchtest einen Tisch für vier Personen. => A table for four, please.
Beim Arzt: Du hast seit zwei Tagen Halsweh. => I've had a sore throat for two days.
Im Hotel: Dein Zimmer wurde nicht geputzt. => Excuse me, my room hasn't been cleaned.
Am Flughafen: Dein Koffer ist nicht angekommen. => I'm afraid my suitcase hasn't arrived.
Du möchtest jemanden höflich unterbrechen. => Sorry to interrupt, but …`,
    reply: `Happy birthday! => Thank you!
Can I borrow your pen? => Sure, here you are.
Let's go to the cinema! => Good idea! / Sorry, I can't.
Nice to meet you! => Nice to meet you too!
I failed my test. => Oh no, I'm sorry. Better luck next time!
How was your weekend? => It was great, thanks!
Do you mind if I open the window? => No, not at all. / Go ahead.
Good luck with your exam! => Thanks!`
  } });
})();
