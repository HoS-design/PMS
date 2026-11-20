/* Englisch – größere Aufgabenpools (Teil 4) */
(function () {
  const ext = UB.extendTopic;

  ext('e-future', { more: {
    goingto: `My parents [are going to paint:paint] the kitchen.
We [are going to travel:travel] to Spain in summer.
Lisa [is going to learn:learn] the guitar.
I [am going to call:call] you later.
Look! That boy [is going to jump:jump] into the lake.
They [aren't going to come:not come] to the party.
[Is Tom going to play:Tom / play] in the match?
My brother [is going to start:start] school in September.
We [are going to bake:bake] a cake for Mum's birthday.
I [am going to tidy:tidy] my room after lunch.
Hurry up! We [are going to miss:miss] the bus.
She [is going to be:be] a vet one day.
What [is she going to wear:she / wear] to the party?
I [am not going to watch:not watch] TV tonight.
Oh no! The baby [is going to cry:cry].`,
    will: `I'm sure Lisa [will like:like] your present.
It's late. I [will take:take] a taxi.
Perhaps we [will win:win] the cup this year.
I [won't forget:not forget] your birthday.
Do you think it [will rain:rain]?
I'm hungry. – I [will make:make] you a sandwich.
In the future, cars [will drive:drive] themselves.
Don't touch the dog. It [will bite:bite] you.`,
    choose: `I've got a ticket. I {'m going to|'ll} see the match tomorrow.
That bag looks heavy. – I {'ll|'m going to} carry it for you.
I think it {will|is going to} be a great summer. (a guess)
Look at the clock! We {'re going to|'ll} be late!`,
    arr: `We [are having:have] a party on Saturday. Everybody is invited.
The shop [opens:open] at 9 a.m. tomorrow.
I [am playing:play] tennis with Lisa this afternoon.
My plane [lands:land] at 6.45 on Monday.
[Are you coming:you / come] to my birthday party?
The concert [begins:begin] at 8 o'clock.
Tom [is visiting:visit] his uncle next weekend.`,
    text: `"I'm cold." – "I [will] get you a blanket."
We [are going to] build a tree house this summer. My dad [is going to] help us.
The school trip [starts] at 8 a.m. on Monday. We [are taking] the bus to Vienna.`,
    trans: `Ich glaube, sie wird gewinnen. => I think she will win.
Morgen besuchen wir Oma. (fest geplant) => We're visiting Grandma tomorrow.
Schau, es wird gleich schneien! => Look, it's going to snow!
Ich trage deine Tasche. => I'll carry your bag.`,
    err: `I am going visit Paris. => I am going to visit Paris.
She will goes to school tomorrow. => She will go to school tomorrow.
Are you going to coming? => Are you going to come?`
  } });

  ext('e-comparison', { more: {
    er: `warm => warmer – the warmest
young => younger – the youngest
sad => sadder – the saddest
heavy => heavier – the heaviest
short => shorter – the shortest
wet => wetter – the wettest
pretty => prettier – the prettiest
quiet => quieter – the quietest
late => later – the latest
dirty => dirtier – the dirtiest`,
    gap: `A mouse is [smaller:small] than a cat.
July is [hotter:hot] than March.
This is [the cheapest:cheap] shop in town.
My grandpa is [older:old] than my grandma.
This is [the most important:important] day of the year.`,
    more: `popular => more popular – the most popular
careful => more careful – the most careful
exciting => more exciting – the most exciting
much => more – the most
boring => more boring – the most boring
important => more important – the most important`,
    asas: `My bike is 300 €. Your bike is 300 €. :: expensive => My bike is as expensive as your bike.
London is very big. Graz is small. :: big => Graz isn't as big as London.
Lisa is 12. Tom is 14. :: young => Lisa is younger than Tom.
Our garden is 200 m². Their garden is 200 m². :: big => Our garden is as big as their garden.`,
    choose: `This is {the hottest|the most hot} day of the year.
My dog is {smaller|more small} than your cat.
She sings {better|gooder} than me.
This book is {more interesting|interestinger} than the film.
He is not as tall {as|than} his brother.
Mount Everest is {the highest|the most high} mountain in the world.
Today is {colder|more cold} than yesterday.
This is {the most expensive|the expensivest} restaurant in town.
My marks are {worse|badder} than last year.
Lisa is {the youngest|the most young} in her family.`,
    text: `A cheetah is [faster] than a horse. It is the [fastest] animal on land.
My room is [smaller] than my sister's, but it is [tidier]!
This winter is [colder] than last winter. It's the [coldest] winter for twenty years.
For me, history is [more interesting] than maths, and maths isn't [as] difficult [as] physics.`,
    trans: `Der Elefant ist das größte Landtier. => The elephant is the biggest land animal.
Heute ist es wärmer als gestern. => Today it is warmer than yesterday.
Mein Handy ist nicht so neu wie deines. => My mobile phone isn't as new as yours.
Das war der schlechteste Tag meines Lebens. => That was the worst day of my life.`,
    err: `She is the most pretty girl. => She is the prettiest girl.
This is more better. => This is better.`
  } });

  ext('e-passive', { more: {
    present: `Rice [is eaten:eat] all over the world.
The museum [is visited:visit] by thousands of people every year.
Bread [is baked:bake] every morning.
These cars [are made:make] in Germany.
The rubbish [is collected:collect] on Mondays.
Many languages [are spoken:speak] in India.
The tickets [are sold:sell] online.
Milk [is kept:keep] in the fridge.
The lessons [are taught:teach] in English.
Tea [is grown:grow] in China and India.`,
    past: `The window [was broken:break] by a ball.
The first car [was built:build] in 1886.
The letters [were sent:send] yesterday.
The money [was found:find] under a bed.
The cake [was made:make] by my grandma.
Two people [were hurt:hurt] in the accident.
The song [was sung:sing] by a famous singer.
The house [was sold:sell] last year.`,
    active: `Someone painted the walls white. => The walls were painted white.
They grow bananas in Ecuador. => Bananas are grown in Ecuador.
My mum made this cake. => This cake was made by my mum.
Someone opens the shop at 8 o'clock. => The shop is opened at 8 o'clock.
The storm destroyed many trees. => Many trees were destroyed by the storm.
They sell fresh bread here. => Fresh bread is sold here.`,
    mix: `The winner [will be announced:announce] tonight.
The road [has been closed:close] because of the snow.
Pets [must be kept:keep] on a lead in the park.
The bridge [was built:build] 100 years ago.
The film [can be watched:watch] online.
This castle [has been visited:visit] by many famous people.`,
    text: `Paper [was invented] in China. Today millions of books [are printed] every year.
Our house [is being painted] at the moment. It [will be finished] next week.
The Mona Lisa [was painted] by Leonardo da Vinci. It [is visited] by millions of people in Paris every year.
Many animals [are killed] by cars every year. New bridges for animals [have been built].`,
    trans: `Die Hausübung wird jeden Tag kontrolliert. => The homework is checked every day.
Das Fenster wurde gestern repariert. => The window was repaired yesterday.
Die neue Schule wird nächstes Jahr eröffnet. => The new school will be opened next year.
Das Auto ist gerade gewaschen worden. => The car has just been washed.
Der Dieb wurde von der Polizei gefangen. => The thief was caught by the police.
Hier wird Englisch gesprochen. => English is spoken here.`,
    err: `The cake were eaten. => The cake was eaten.
This bridge was build in 1900. => This bridge was built in 1900.
The car is wash every week. => The car is washed every week.
The book was written from my uncle. => The book was written by my uncle.`
  } });

  ext('e-linking', { more: {
    basic: `I like cats [and] dogs.
It was sunny, [so] we went to the beach.
He was late [because] he missed the bus.
Do you want to walk [or] take the bus?
I tried hard, [but] I didn't win.
Lisa sings [and] Tom plays the piano.
I'm thirsty [because] it's so hot.
It was dark, [so] I turned on the light.
She is small [but] very strong.
Is the baby a boy [or] a girl?
We laughed [because] the film was so funny.
I had no money, [so] I couldn't buy the book.
I like swimming, [but] I don't like diving.
Would you like to stay [or] go?`,
    join: `He was tired. He went to bed. :: so => He was tired, so he went to bed.
I like Lisa. She's funny. :: because => I like Lisa because she's funny.
The test was hard. I passed it. :: but => The test was hard, but I passed it.`,
    mid: `[Before] you leave, close the window.
[When] it snows, we go sledging.
I'll help you [if] you help me.
[While] we were walking, it started to rain.
[Although] he was tired, he kept running.
[After] school, I usually go home.
We'll go to the lake [if] it's sunny.
[When] I'm older, I want to be a pilot.
Read the question carefully [before] you answer.
[Although] she's only ten, she speaks three languages.
I always listen to music [while] I'm doing my homework.
[After] we had eaten, we went for a walk.
[If] you're cold, put on a jumper.
Call me [when] you get home.`,
    text: `{Then|Because} we went home.
It was a nice day. {However|So}, it was very windy.
{For example|However}, you could ride a bike to school.
He didn't study. {As a result|Although}, he failed the test.
{Despite|Although} the cold, we had a picnic.
I'll go {unless|if not} it rains.`,
    prof: `[When] I arrived at the station, the train had already left. [So] I had to wait an hour.
[Although] the film was long, it was never boring. [In my opinion], it's the best film of the year.
I couldn't sleep [because] it was so hot. [However], I felt fine the next day.
[If] you want to get fit, you should do sport [while] you are young.`,
    trans: `Wenn es regnet, bleiben wir drinnen. => If it rains, we stay inside.
Bevor du gehst, ruf mich an. => Before you go, call me.
Er war krank, trotzdem kam er zur Schule. => He was ill. Nevertheless, he came to school.`
  } });
})();
