/* Englisch – mehr Varianten, Teil 10: alle Pools mindestens 5 × so groß wie die Aufgabenzahl (Kl. 2–4, Wortschatz, Schreiben) */
(function () {
  const ext = UB.extendTopic;

  ext('e-comparison', { more: {
    gap: `The bus is [slower:slow] than the train.
This is [the longest:long] bridge in our town.`,
    much: `A whale is [much heavier:heavy] than an elephant.
Gold is [much more expensive:expensive] than silver.
Football is [much more popular:popular] than rugby in Austria.
The sea is [much deeper:deep] than the lake.
Our new car is [much quieter:quiet] than the old one.
Cycling is [much cheaper:cheap] than driving.`,
    nearly: `Lisa is 1.50 m tall. Mia is 1.50 m tall too. :: as … as / tall => Lisa is as tall as Mia.
The film is 90 minutes long. The match is 95 minutes long. :: nearly / long => The film is nearly as long as the match.
A bike costs 300 €. A car costs 20 000 €. :: not nearly / expensive => A bike is not nearly as expensive as a car.
Tom runs 100 m in 14 seconds. Ben runs it in 14 seconds too. :: as … as / fast => Tom is as fast as Ben.`,
    choose: `My sister is {younger|more young} than me.
This is {the best|the goodest} pizza in town.
My bag is {heavier|more heavy} than yours.`,
    text: `My grandma is [older] than my grandpa, but she is much [fitter] than him.
This is the [most beautiful] beach I've ever seen. The water is [warmer] than at home.
Tom is [taller] than me, but I am [faster]. We are both [as] good [as] Lisa at football.
The new shopping centre is [bigger] and [more modern] than the old one.`,
    trans: `Meine Tante ist jünger als meine Mutter. => My aunt is younger than my mother.
Das ist das beste Buch der Welt. => This is the best book in the world.
Der Zug ist billiger als das Flugzeug. => The train is cheaper than the plane.
Mathe ist nicht so schwierig wie Physik. => Maths isn't as difficult as physics.
Sie ist die schnellste Läuferin der Klasse. => She is the fastest runner in the class.`,
    err: `This bag is more cheap than that one. => This bag is cheaper than that one.
Yesterday was the baddest day of my life. => Yesterday was the worst day of my life.
She is older then her sister. => She is older than her sister.
It's the more expensive car in the world. => It's the most expensive car in the world.`
  } });

  ext('e-quantity', { more: {
    muchmany: `How {many|much} people live in your town?
I didn't eat {much|many} for breakfast.`,
    few: `We need {a little|a few} flour for the cake.
Can I ask you {a few|a little} questions?
There's only {a little|a few} juice left.
She bought {a few|a little} oranges.`,
    text: `We've got [a lot of] apples, but only [a little] cheese.
[Nobody] was at the bus stop, so I waited for [a few] minutes.
Have you got [any] brothers? – No, I haven't got [any].
I'm hungry. Is there [anything] to eat? – There's [some] bread.`,
    trans: `Niemand hat angerufen. => Nobody called.
Ich brauche ein bisschen Hilfe. => I need a little help.
Wie viele Brüder hast du? => How many brothers have you got?
Irgendjemand hat meine Jacke genommen. => Somebody has taken my jacket.
Wir haben ein paar Freunde eingeladen. => We invited a few friends.`
  } });

  ext('e-adverbs', { more: {
    choose: `She is a {fast|fastly} runner.
The baby is sleeping {peacefully|peaceful}.
He answered {politely|polite}.`,
    text: `Lisa is a [good] singer. She sings very [well].
The dog ran [quickly] across the road. Luckily, the driver stopped [immediately].
Grandpa is [careful]. He always drives [slowly].
The children played [happily] in the garden. It was a [beautiful] day.`,
    trans: `Sprich bitte langsam! => Please speak slowly!
Er ist ein guter Koch. => He is a good cook.
Sie lief schnell nach Hause. => She ran home quickly.`,
    err: `She speaks English very fluent. => She speaks English very fluently.
She is a carefully girl. => She is a careful girl.
They ran quick to school. => They ran quickly to school.
Please speak quiet! => Please speak quietly!`
  } });

  ext('e-relative', { more: {
    join: `That's the boy. He broke the window. :: who => That's the boy who broke the window.
I like the jacket. You bought it yesterday. :: which => I like the jacket which you bought yesterday.
This is the town. I was born there. :: where => This is the town where I was born.
I have a friend. His dad is a pilot. :: whose => I have a friend whose dad is a pilot.
We saw a film. It was very funny. :: which => We saw a film which was very funny.
That's the woman. She helped me. :: who => That's the woman who helped me.`,
    omit: `The book which I'm reading is great. :: Can you leave out the relative pronoun? => yes
The man who lives next door is a doctor. :: Can you leave out the relative pronoun? => no
The cake that Mum made was delicious. :: Can you leave out the relative pronoun? => yes
The dog which barks all night is ours. :: Can you leave out the relative pronoun? => no
The friends who I met in Italy write to me. :: Can you leave out the relative pronoun? => yes`,
    comma: `Lisa, [whose] brother is in my class, is very nice.
Vienna, [which] is the capital of Austria, has many museums.
My dad, [who] works in a bank, loves football.
Our school, [which] is very old, has a big garden.
Mr Huber, [whose] dog is called Rex, lives next door.`,
    text: `The girl [who] sits next to me is called Mia. Her house, [which] is near the river, is very big.
This is the café [where] we always meet after school.
I've got a cousin [whose] mum is from Spain.
The book [which / that] you gave me was really exciting.`,
    trans: `Das ist das Mädchen, dessen Vater Arzt ist. => That's the girl whose father is a doctor.
Das Buch, das ich lese, ist spannend. => The book (which / that) I'm reading is exciting.
Kennst du den Laden, wo man Comics kaufen kann? => Do you know the shop where you can buy comics?
Der Hund, der dort bellt, gehört mir. => The dog which is barking there is mine.
Die Frau, die neben uns wohnt, ist Lehrerin. => The woman who lives next to us is a teacher.`,
    err: `The film who we saw was scary. => The film which / that we saw was scary.
This is the town which I was born. => This is the town where I was born.
The boy who's bike was stolen is sad. => The boy whose bike was stolen is sad.
My mum, that is a nurse, works at night. => My mum, who is a nurse, works at night.`
  } });

  ext('e-conditionals', { more: {
    t1: `If you [are:be] hungry, I'll make you a sandwich.
We [will go:go] to the zoo if the weather is good.`,
    t2: `If I [were:be] you, I would say sorry.
She [would help:help] you if she had time.
If my dad [had:have] more time, he would play with us.`,
    choose: `If I {had|have} a million euros, I would buy an island.
If you heat ice, it {melts|would melt}.
If the shop {is|will be} open, I'll buy some bread.
We {would have won|would win} if we had played better.
If I {were|am} taller, I would play basketball.
If it {snows|will snow} tomorrow, we'll build a snowman.
If they {had run|ran} faster, they would have caught the bus.`,
    t3: `If you [had come:come] to the party, you would have met Lisa.
We [would have gone:go] to the beach if it hadn't rained.
If she [hadn't missed:not miss] the bus, she would have been on time.`,
    text: `If I [win] the race, I [will] get a medal.
If I [were] a bird, I [would] fly over the mountains.
If you [had] studied, you [would] have passed the test.
If we [don't] hurry, we [will] miss the train.`,
    trans: `Wenn ich du wäre, würde ich das nicht machen. => If I were you, I wouldn't do that.
Wenn du willst, kannst du mitkommen. => If you want, you can come with us.`,
    err: `If I will see him, I tell him. => If I see him, I will tell him.
If I would have money, I would buy it. => If I had money, I would buy it.
If you had come, you would enjoy it. => If you had come, you would have enjoyed it.
If she studies, she would pass. => If she studies, she will pass.`
  } });

  ext('e-passive', { more: {
    present: `English [is spoken:speak] all over the world.
Coffee [is grown:grow] in Brazil.
The windows [are cleaned:clean] every month.
Cheese [is made:make] from milk.
Stamps [are sold:sell] at the post office.
Many languages [are taught:teach] at this school.
The museum [is visited:visit] by many tourists.`,
    past: `America [was discovered:discover] in 1492.
The cake [was eaten:eat] by the children.
Two people [were hurt:hurt] in the accident.`,
    mix: `The new pool [will be opened:open] in May.
Oh no! My bike [has just been stolen:steal]!
Seat belts [must be worn:must / wear] in the car.
The house [was built:build] in 1950.
The concert [will be shown:show] on TV tonight.
Look! The room [has just been cleaned:clean] – it's shiny now.
Breakfast [is served:serve] from 7 to 10.`,
    text: `The school [was built] in 1965. Since then it [has been renovated] twice.
Our car [was stolen] last night. It [was found] by the police this morning.
Pizza [is eaten] all over the world. It [was invented] in Italy.
The letters [are delivered] every morning. Yesterday no post [was delivered].`,
    trans: `In Österreich wird viel Käse gegessen. => A lot of cheese is eaten in Austria.
Das Fenster wurde eingeschlagen. => The window was broken.
Die Schule wurde 1970 gebaut. => The school was built in 1970.
Mein Fahrrad ist gestohlen worden. => My bike has been stolen.`,
    err: `The letters was sent yesterday. => The letters were sent yesterday.
English are spoken in Canada. => English is spoken in Canada.
The cake has eaten. => The cake has been eaten.
The photos was taken by my dad. => The photos were taken by my dad.`
  } });

  ext('e-reported', { more: {
    st: `"I am bored." :: Leo said … => Leo said (that) he was bored.
"I live in a flat." :: Sara said … => Sara said (that) she lived in a flat.`,
    saytell: `Can you [tell] me the way to the station?
Nobody [told] me about the test!
[Tell] me a joke!
He didn't [say] a word.
My mum [told] me to tidy my room.
What did the teacher [say]?
Don't [tell] anyone!`,
    cmd: `"Close the door!" :: My brother told me … => My brother told me to close the door.
"Don't shout!" :: The neighbour told us … => The neighbour told us not to shout.
"Please speak more slowly." :: The tourist asked me … => The tourist asked me to speak more slowly.
"Don't forget your keys!" :: Mum told Dad … => Mum told Dad not to forget his keys.`,
    mix: `"I'm tired," said Lisa. => Lisa said (that) she was tired.
"Don't touch it!" Dad told us. => Dad told us not to touch it.
"When does the train leave?" I asked. => I asked when the train left.
"We like pizza," they said. => They said (that) they liked pizza.
"Have you got a pet?" Mia asked me. => Mia asked me if I had a pet.
"Please be quiet," the teacher said to us. => The teacher asked us to be quiet.`
  } });

  ext('e-gerund', { more: {
    gap: `She likes [dancing:dance].
We can't afford [to buy:buy] a new car.
Do you fancy [watching:watch] a film tonight?
We want [to win:win] the match.`,
    choose: `Imagine {living|to live} on a desert island!
She wants {to learn|learning} Italian.
They decided {to stay|staying} at home.
I'm looking forward to {seeing|see} you.
We finished {painting|to paint} the fence.
I'd love {to visit|visiting} Japan one day.
I don't mind {waiting|to wait}.
He promised {to call|calling} me later.`,
    prep: `I'm tired of [waiting:wait].
She's proud of [winning:win] the race.
Instead of [taking:take] the bus, we walked.`,
    text: `I love [swimming], but I hate [getting] up early for training.
We're thinking about [buying] a dog. My parents want [to wait] until summer.
After [finishing] my homework, I decided [to call] my friend.`,
    trans: `Er hat vergessen, die Tür abzuschließen. => He forgot to lock the door.
Ich habe keine Lust zu warten. => I don't feel like waiting.`,
    err: `I enjoy to play football. => I enjoy playing football.
He refused help me. => He refused to help me.
Thank you for help me. => Thank you for helping me.
He wants go out. => He wants to go out.
We're thinking of move to Vienna. => We're thinking of moving to Vienna.`
  } });

  ext('e-linking', { more: {
    basic: `I want to go out, [but] it's raining.
We bought bread [and] milk.
He was tired, [so] he went to bed.
I can't come [because] I have to babysit my sister.`,
    time: `[Before] you cross the road, look left and right.
I'll call you [when] I arrive.
We waited [until] the rain stopped.
[While] we were eating, the lights went out.
[As soon as] the bell rings, we can go home.
[After] the film, we went for a pizza.
I haven't seen him [since] Monday.`,
    mid: `[Although] it was cold, we went swimming.
[When] I was little, I lived in Linz.`,
    prof: `[First], we went to the museum. [Then] we had lunch in a café. [Finally], we took the train home.
I wanted to go out. [However], it was raining, [so] I stayed at home.
[Although] the test was hard, I passed it [because] I had studied a lot.
[When] we arrived, it was dark. [After that], we had dinner.`,
    text: `The flight was late {because of|because} the fog.
{Despite|Although} the heat, they played tennis.`,
    trans: `Obwohl es regnete, gingen wir spazieren. => Although it was raining, we went for a walk.
Ich gehe nicht hin, außer du kommst mit. => I won't go unless you come with me.
Wegen des Schnees fiel die Schule aus. => School was cancelled because of the snow.
Sie mag Hunde, wohingegen ich Katzen mag. => She likes dogs, whereas I like cats.`
  } });

  ext('e-wordformation', { more: {
    family: `The [painting:paint] on the wall is very old.
We had a [peaceful:peace] holiday in the mountains.`,
    text: `The [teacher:teach] was very [helpful:help] and explained everything [clearly:clear].
It's [impossible:possible] to finish the work today. I'm too [tired:tire].
The [singer:sing] gave a [wonderful:wonder] concert.
My little brother is very [creative:create]. He wants to be an [artist:art].`
  } });

  ext('e-numbers', { more: {
    num: `11 => eleven
16 => sixteen
18 => eighteen
23 => twenty-three
26 => twenty-six
29 => twenty-nine
31 => thirty-one
38 => thirty-eight
42 => forty-two
47 => forty-seven
51 => fifty-one
64 => sixty-four
69 => sixty-nine
72 => seventy-two
85 => eighty-five
88 => eighty-eight
93 => ninety-three
97 => ninety-seven`,
    days: `Monday >> Tuesday >> Wednesday >> Thursday
January >> February >> March >> April
morning >> afternoon >> evening >> night`,
    time: `11:15 => a quarter past eleven
4:30 => half past four`,
    date: `1. 3. => the first of March
3. 8. => the third of August
22. 11. => the twenty-second of November
15. 7. => the fifteenth of July
31. 10. => the thirty-first of October`,
    ask: `What's the time? – It's [half past] six. (6:30)
What's the time? – It's [a quarter to] nine. (8:45)
What's the time? – It's [ten past] four. (4:10)
What's the time? – It's [twenty-five to] three. (2:35)
What's the time? – It's [five to] twelve. (11:55)
What's the time? – It's [twenty past] one. (1:20)`,
    years: `1955 => nineteen fifty-five
2008 => two thousand and eight
1776 => seventeen seventy-six
2030 => twenty thirty
1066 => ten sixty-six`,
    time24: `14:15 => a quarter past two (in the afternoon) / 2.15 p.m.
09:45 => a quarter to ten (in the morning) / 9.45 a.m.
20:00 => eight o'clock (in the evening) / 8 p.m.
18:30 => half past six (in the evening) / 6.30 p.m.
11:10 => ten past eleven (in the morning) / 11.10 a.m.`,
    calc: `½ => a half
⅓ => a third
50 % => fifty per cent
10 °C => ten degrees
2 + 3 = 5 => two plus three is five`,
    text: `Ten [plus] five is fifteen.
There are [sixty] minutes in an hour.
My sister was born on the [third] of [March]. (3. 3.)
The train leaves at [half past] ten. (10:30)`
  } });

  ext('e-vocab', { more: {
    v1: `der Fisch => fish
der Vogel => bird
die Maus => mouse
die Schere => scissors
der Kleber => glue
der Spitzer => sharpener
das Wörterbuch => dictionary
die Tafel => board
der Saft => juice
das Ei => egg
der Käse => cheese
die Suppe => soup
der Stuhl => chair
das Fenster => window`,
    v2: `die Treppe => stairs
das Dach => roof
die Hose => trousers
das Kleid => dress
der Rock => skirt
das Knie => knee
der Zahn => tooth
es schneit => it's snowing
es ist sonnig => it's sunny
der Nebel => fog
das Gewitter => thunderstorm`,
    v3: `das Rathaus => town hall
die Kirche => church
die Apotheke => chemist's / pharmacy
freundlich => friendly
klug => clever
der Fluss => river
der Berg => mountain
das Dorf => village`,
    def: `the opposite of "hot" => cold
a person who flies a plane => pilot
the meal you eat in the evening => dinner
the room where you sleep => bedroom
a place where you can buy medicine => chemist's (or: pharmacy)
the month after December => January`,
    coll: `Hausaufgaben machen => do homework
einen Fehler machen => make a mistake
Zeit verbringen => spend time
den Bus nehmen => take the bus
ein Geschenk bekommen => get a present
Lärm machen => make a noise`
  } });

  ext('e-phrases', { more: {
    p1: `Du sagst, wo du wohnst. => I live in …
Du fragst, ob du das Fenster öffnen darfst. => Can I open the window, please?
Du bittest um ein Blatt Papier. => Can I have a sheet of paper, please?
Du sagst, dass du fertig bist. => I've finished.
Du sagst, dass du ein Haustier hast. => I've got a pet.
Du wünschst jemandem alles Gute zum Geburtstag. => Happy birthday!
Du sagst, dass du müde bist. => I'm tired.`,
    p2: `Du fragst, wo die nächste Bushaltestelle ist. => Excuse me, where is the nearest bus stop?
Du sagst, dass du das nimmst. => I'll take it.
Du sagst, dass das Essen sehr gut war. => The food was delicious, thank you!`,
    dialog: `A: Hi, how are you? >> B: I'm fine, thanks. And you? >> A: Not bad. Are you going to the party tonight? >> B: Yes, see you there!
A: Excuse me, is this seat free? >> B: Yes, it is. >> A: Thank you. >> B: You're welcome.`,
    p3: `Du sagst, dass du gerade nicht telefonieren kannst. => Sorry, I can't talk right now.
Du fragst, wann Tom zurück ist. => When will Tom be back?
Du sagst, dass dein Akku fast leer ist. => Sorry, my battery is almost dead.
Du nennst deine Telefonnummer. => My number is …
Du bittest, langsamer zu sprechen. => Could you speak more slowly, please?
Du sagst, dass du später zurückrufst. => I'll call you back later.
Du hast die falsche Nummer gewählt. => Sorry, I've got the wrong number.
Du buchstabierst deinen Namen. => My name is … Let me spell it: …`,
    p4: `Im Restaurant: Du möchtest bestellen. => Can I order, please? / I'd like …, please.
Im Kino: Du möchtest zwei Karten für den Film um acht. => Two tickets for the eight o'clock film, please.
Am Bahnhof: Du fragst, von welchem Gleis der Zug abfährt. => Which platform does the train leave from?
Im Geschäft: Du möchtest die Jeans anprobieren. => Can I try on these jeans, please?
In der Apotheke: Du brauchst etwas gegen Sonnenbrand. => I need something for sunburn, please.
Im Hotel: Du möchtest ein ruhiges Zimmer. => Could I have a quiet room, please?
Am Flughafen: Du fragst, wo Gate 5 ist. => Excuse me, where is Gate 5?`,
    reply: `Thank you for the present! => You're welcome! / I'm glad you like it.
Excuse me, is this seat free? => Yes, it is. / Sorry, it's taken.
See you tomorrow! => See you! / Bye!
Can I borrow your pen? => Sure, here you are.`
  } });

  ext('e-confusing', { more: {
    makedo: `I always [make] a list before I go shopping.
Who [made] this mess?
Please don't [make] any noise.`,
    choose: `Could I {borrow|lend} your ruler?
{Take|Bring} your jacket when you go out. It's cold.
Next time, {bring|take} your friend to my party!`,
    error: `Can you say me your name? => Can you tell me your name?
I want to learn you English. => I want to teach you English.`,
    ff: `das Gift => poison
die Hose => trousers
die Bank (zum Sitzen) => bench
der Kaugummi => chewing gum
fast => almost
also => so
die Note (in der Schule) => mark / grade`,
    text: `Can I [borrow] your bike? I'll give it back tomorrow.
Please [remember] to [bring] your swimming things on Friday.
She [told] me that she had [lost] her keys.
My grandma always [makes] the best cakes. I [do] the washing-up afterwards.`,
    choose2: `I can't {hear|listen} you. The music is too loud.
I can't {remember|remind} his name.
She {said|told} that she was tired.
I {missed|lost} the bus this morning.
Can you {teach|learn} me to play chess?
He {won|beat} the race.
Did you {lose|miss} your keys again?
Did you {see|look} the rainbow this morning?`,
    ff2: `die Mappe => folder
der Becher => mug
sympathisch => nice / likeable`
  } });

  ext('e-w-describe', { more: {
    gap: `My aunt [has got] long blond hair.
My best friend [is] tall and thin.
Our teacher [has got] glasses and a beard.
Our neighbours [have got] three children.
Grandma [has got] grey curly hair.
She [is] friendly and helpful.`,
    better: `My cousin is funny. => My cousin Max is really funny – he always tells jokes and makes everybody laugh.
The park is nice. => The park near our house is green and quiet, with a small lake and lots of benches.
The film was good. => The film was exciting and funny, and the ending was a big surprise.
My dog is cute. => My dog is small and fluffy, with big brown eyes and a short tail.`
  } });

  ext('e-w-email', { more: {
    style: `Hugs,|I
Kind regards,|F
Thank you for your quick reply.|F
Guess what!|I
I am interested in …|F
Can't wait to see you!|I
I am writing to complain about …|F
Miss you!|I`,
    fix: `Send me the tickets now! => Could you please send me the tickets?
Hi there, when does the shop open? => Dear Sir or Madam, could you please tell me your opening hours?
I wanna book a room. => I would like to book a room.
Thx for the info! => Thank you for the information.`
  } });

  ext('e-w-story', { more: {
    link: `[One day], a strange letter arrived.
[Suddenly], the door opened.
[In the end], everybody was happy.
[Luckily], nobody was hurt.`,
    better: `The dog barked. :: add details => The big black dog barked loudly at the stranger.
It was cold. :: use the senses => The icy wind bit my face and I could see my breath.
She said yes. :: use direct speech => "Yes, of course!" she said with a big smile.
We walked home. :: use an adverb => We walked home slowly.`,
    tense: `We {were having|had} dinner when the lights went out.
Suddenly, the door {opened|was opening} and a man came in.
While I {was sleeping|slept}, someone knocked at the door.
Tom {picked|was picking} up the phone and said hello.
We {were walking|walked} through the park when it started to rain.`
  } });

  ext('e-w-opinion', { more: {
    sortHw: `Homework teaches you to work on your own.|P
You learn to plan your time.|P
Teachers can see who needs help.|P
You can prepare for tests.|P
Some tasks are too difficult without a teacher.|C
Families have less time together in the evening.|C
Students are often tired after a long school day.|C
Some homework is just boring copying.|C`,
    sortPhone: `You can take photos for school projects.|P
Parents can reach their children.|P
Students can use a calculator or a dictionary app.|P
Some students check their messages all the time.|C
Phones can be stolen or broken.|C
Photos of other people can be shared without asking.|C`,
    phrase: `[In my view], pets teach children responsibility.
[Firstly], a dog needs a lot of time.
[Secondly], pets can be expensive.
[Finally], animals make people happy.
[All in all], I think every family should have a pet.
[What's more], walking a dog keeps you fit.
[I strongly believe] that we should protect the environment.`,
    choose: `Sport keeps you fit. {Moreover|However}, it helps you to make friends.
I {agree|am agree} that school is important.
{In conclusion|At first}, both sides have good points.
I think zoos are useful {because|although} they protect animals.
{On the one hand|On one hand}, phones are useful.
{Personally|Personal}, I prefer living in the country.`,
    rewrite: `Sport is cool. => In my opinion, sport is great because it keeps you fit and you meet friends.
Uniforms are stupid. => I don't like school uniforms because students can't show their own style.
Video games are bad. => I think playing video games for hours is not healthy because you don't move enough.
Pets are great. => In my opinion, pets are great because they make people happy and teach children responsibility.`
  } });

  ext('e-revision3', { more: {
    ps: `My brother [plays:play] the drums.
We [don't go:not go] to school on Sundays.
Water [boils:boil] at 100 degrees.
[Does your mum work:your mum / work] in Graz?
The shop [opens:open] at nine.
Cats [don't like:not like] water.
He [flies:fly] to London twice a year.`,
    past: `We [had:have] a great time at the beach.
The children [didn't want:not want] to go home.
Mozart [was born:be born] in Salzburg.
She [called:call] me yesterday.
[Did you go:you / go] to the concert?
The children [swam:swim] in the lake.
He [lost:lose] his keys last week.`,
    choose: `Yesterday I {stayed|stay} at home.
She {plays|played} tennis every Tuesday.
Last year we {moved|move} to a new flat.
He usually {gets|got} up at seven.
I {saw|see} a great film last weekend.
My dad {cooks|cooked} dinner every evening.
Two years ago we {visited|visit} London.
Now we {live|lived} in Graz.`,
    neg: `They watched TV. :: negative => They didn't watch TV.
She plays the piano. :: question => Does she play the piano?
They went to Italy. :: question => Did they go to Italy?
Lisa visited her aunt. :: negative => Lisa didn't visit her aunt.
Tom lives in Linz. :: question => Does Tom live in Linz?
He found his keys. :: negative => He didn't find his keys.`,
    err: `She go to school by bus. => She goes to school by bus.
We didn't saw the film. => We didn't see the film.
Did you went to the party? => Did you go to the party?
My dog sleep all day. => My dog sleeps all day.
I readed a book yesterday. => I read a book yesterday.`
  } });

  ext('e-cond12', { more: {
    unless: `I won't go {unless|if} you come with me.
{Unless|If} you study, you'll fail the test.
{If|Unless} you're tired, go to bed.
We'll be late {unless|if} we leave now.
{Unless|If} it stops raining, we'll stay inside.
The dog won't eat {unless|if} you give it meat.
You can't use the pool {unless|if} you can swim.`,
    untr: `If you don't hurry, you'll miss the bus. :: unless => Unless you hurry, you'll miss the bus.
If it doesn't rain, we'll have a picnic. :: unless => Unless it rains, we'll have a picnic.
If she doesn't study, she won't pass. :: unless => Unless she studies, she won't pass.
If you don't have a ticket, you can't get on the train. :: unless => Unless you have a ticket, you can't get on the train.`
  } });

  ext('e-permission', { more: {
    allowed: `Children under 12 [aren't allowed to:not / be allowed to] use the gym.
I [am allowed to:be allowed to] stay up late on Fridays.
[Are you allowed to:you / be allowed to] have pets in your flat?
Students [are allowed to:be allowed to] use the library after school.
Tom [isn't allowed to:not / be allowed to] play outside after dark.
You [aren't allowed to:not / be allowed to] take photos in the museum.
[Is Lisa allowed to:Lisa / be allowed to] come with us?
Visitors [are allowed to:be allowed to] feed the goats.`,
    let: `Grandpa [lets:let] me sit in the front seat.
[Let:let] me know when you arrive.
The teacher [let:let] us leave early yesterday.
Dad never [lets:let] me drive his car.
Will you [let:let] me use your phone?
My sister [let:let] me borrow her bike last week.`,
    lettr: `My parents let me watch TV after dinner. :: be allowed to => I am allowed to watch TV after dinner.
We aren't allowed to eat in the classroom. :: the teacher / let => The teacher doesn't let us eat in the classroom.
Mum doesn't let my brother play video games on school days. :: be allowed to => My brother isn't allowed to play video games on school days.
I'm allowed to go to the cinema alone. :: my parents / let => My parents let me go to the cinema alone.
The coach lets the players drink water during training. :: be allowed to => The players are allowed to drink water during training.`,
    past: `When I was five, I [could:can] already read.
We [weren't allowed to:not / be allowed to] go out last night.
Luckily, he [was able to:be able to] catch the last bus.
[Were you allowed to:you / be allowed to] watch the film?
She [couldn't:not / can] swim when she was little.
In the end, we [were able to:be able to] finish the project on time.
My brother [was allowed to:be allowed to] stay up late on his birthday.`,
    fut: `Next year I [will be allowed to:be allowed to] go to school by bike.
One day robots [will be able to:be able to] do all the housework.
I [haven't been allowed to:not / be allowed to] use my phone since Monday.
My grandma [has been able to:be able to] use a tablet since last year.
You [won't be able to:not / be able to] come in without a ticket.
[Will we be allowed to:we / be allowed to] use a dictionary in the test?`,
    choose: `When I was little, I {couldn't|can't} swim.
Next year we {will be allowed to|will can} vote for the school council.
{May|Must} I open the window, please?
We {weren't allowed to|didn't allowed to} talk during the exam.
Luckily, the firefighters {were able to|could to} save the cat.
I'm sorry, I {can't|couldn't} come tomorrow. I've got a dentist appointment.
They {have been allowed to|were allowed to} use the gym since January.`
  } });

  ext('e-ppcont', { more: {
    forsince: `She has been waiting [since] 10 o'clock.
They have been playing tennis [for] an hour.
I have been learning English [since] I was six.
It has been snowing [for] two days.
We have been living here [since] 2019.
He has been reading [for] twenty minutes.`,
    howlong: `she / play the piano / five years :: How long …? => How long has she been playing the piano? – She has been playing the piano for five years.
they / wait / 2 o'clock :: How long …? => How long have they been waiting? – They have been waiting since 2 o'clock.
you / live in Graz / 2018 :: How long …? => How long have you been living in Graz? – I have been living in Graz since 2018.
he / work here / ten years :: How long …? => How long has he been working here? – He has been working here for ten years.`,
    why: `Your clothes are covered in mud. :: you / play football? => Have you been playing football?
The street is wet. :: it / rain => It has been raining.
The floor is wet. :: someone / clean => Someone has been cleaning.
Mia's room is a mess. :: she / pack her suitcase => She has been packing her suitcase.
The kitchen smells of cake. :: Mum / bake => Mum has been baking.`,
    choose: `I {have read|have been reading} three books this month.
Grandpa {has been gardening|has gardened} since breakfast. He's still outside.
This car {has belonged|has been belonging} to us since 2015.
You're all wet! {Have you been swimming|Have you swum}?
Tom {has broken|has been breaking} his arm twice.
Take an umbrella! It {has been raining|has rained} since this morning and it hasn't stopped.
He {has lost|has been losing} his keys. He can't get in.`,
    err: `I have been owning this bike since 2022. => I have owned this bike since 2022.
She have been sleeping for ten hours. => She has been sleeping for ten hours.
They has been playing all day. => They have been playing all day.
How long are you learning English? => How long have you been learning English?
We have been live here for ages. => We have been living here for ages.`
  } });

  ext('e-passive3', { more: {
    choose: `The bridge {was built|built} in 1900.
Lisa {wrote|was written} a poem.
English {is spoken|speaks} in many countries.
The windows {were cleaned|cleaned} yesterday.
My grandpa {planted|was planted} these trees.`
  } });
  // ---------- Restlücken
  const more = {
    'e-numbers': { num: `120 => one hundred and twenty
365 => three hundred and sixty-five
480 => four hundred and eighty
742 => seven hundred and forty-two
5000 => five thousand`, days: `one >> two >> three >> four >> five
Wednesday >> Thursday >> Friday >> Saturday`, years: `1914 => nineteen fourteen
2001 => two thousand and one` },
    'e-vocab': { v2: `die Socken => socks
der Hals => neck
der Rücken => back
es ist neblig => it's foggy`, coll: `Rad fahren => ride a bike
einen Spaziergang machen => go for a walk
Recht haben => be right
eine Pause machen => take a break
aufpassen => pay attention` },
    'e-modals': { must: `You {don't have to|mustn't} wear a tie. It's a casual party.
Passengers {mustn't|don't have to} smoke on the plane.
We {don't have to|mustn't} buy tickets. Entry is free.`, should: `I can't find my keys. :: look in your bag => You should look in your bag.
My shoes are too small. :: buy new ones => You should buy new ones.` },
    'e-pastsimple': { quest: `you / sleep well => Did you sleep well?
she / call her grandma => Did she call her grandma?
the bus / arrive on time => Did the bus arrive on time?`, gap: `My cat [jumped:jump] onto the table.
We [didn't have:not have] time.` },
    'e-phrases': { reply: `Happy New Year! => Happy New Year to you too!
I've lost my keys! => Oh no! Can I help you look for them?
Could you take a photo of us? => Of course! Smile!` },
    'e-w-story': { link: `[Meanwhile], Tom was waiting outside.
[Finally], we found the way home.
[At first], I didn't see anything.` },
    'e-cond12': { unless: `{Unless|If} you practise, you won't get better.
I'll buy it {unless|if} it's too expensive.
{If|Unless} you finish early, you can go home.` },
    'e-havegot': { quest: `Mia / a sister => Has Mia got a sister?
your parents / a garden => Have your parents got a garden?` },
    'e-pronouns': { err: `Her is my best friend. => She is my best friend.
Give it to she! => Give it to her!` },
    'e-thereis': { isare: `There {is|are} a big dog in the garden.
There {are|is} ten eggs in the box.` },
    'e-progressive': { neg: `It is snowing. :: not => It isn't snowing.
We are playing chess. :: not => We aren't playing chess.` },
    'e-questions': { err: `Why she is crying? => Why is she crying?
How old you are? => How old are you?` },
    'e-irregular': { gap: `She [wore:wear] her new boots.
He [caught:catch] the ball.` },
    'e-pastprogressive': { trans: `Als ich ankam, schlief er. => When I arrived, he was sleeping.
Früher hatte ich lange Haare. => I used to have long hair.` },
    'e-presentperfect': { forsince: `She has had her dog [for] six years.
I haven't eaten anything [since] breakfast.` },
    'e-passive': { present: `Tea [is drunk:drink] all over the world.
These toys [are made:make] of wood.`, past: `The letter [was written:write] by my grandma.
The castle [was built:build] in the 12th century.` },
    'e-reported': { saytell: `He [told] us about his holiday.
[Say] hello to your mum!` },
    'e-confusing': { ff: `bald => soon
die Art => kind / type`, ff2: `aktuell => current
die Wand => wall` },
    'e-w-email': { style: `Lots of love,|I
Take care!|I` },
    'e-ppcont': { why: `Max is covered in paint. :: he / paint / the fence => He has been painting the fence.
The dog is very dirty. :: it / dig / in the garden => It has been digging in the garden.` }
  };
  Object.keys(more).forEach(id => ext(id, { more: more[id] }));
})();
