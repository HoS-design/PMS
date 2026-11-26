/* Englisch – mehr Varianten für die sechs Blätter, Teil 3 (future, perfect, comparison, quantity, adverbs, relative, if, passive, reported, gerund, linking) */
(function () {
  const ext = UB.extendTopic;

  ext('e-future', { more: {
    goingto: `Lisa [is going to study:study] medicine.
We [aren't going to play:not play] football today.
[Are you going to watch:you / watch] the match tonight?
My parents [are going to buy:buy] a new car.
I [am going to tidy:tidy] my room after lunch.
It's so cloudy. It [is going to rain:rain].
Tom [isn't going to come:not come] to the party.
They [are going to move:move] to Vienna next year.
[Is she going to call:she / call] you later?
I [am going to be:be] a vet one day.
We [are going to have:have] a test on Friday.`,
    will: `Maybe it [will snow:snow] tomorrow.
I promise I [won't tell:not tell] anybody.
I think Austria [will win:win] the match.
The phone is ringing. I [will answer:answer] it.
You [will love:love] this film!
Robots [will do:do] lots of housework in the future.`,
    choose: `I'm hungry. – I {'ll make|'m going to make} you a sandwich.
We {'re going to|'ll} visit Rome in July. We've booked the hotel.
Look at the sky! It {'s going to|'ll} snow.
Maybe I {'ll|'m going to} see you at the party.
She has bought paint. She {'s going to|'ll} paint her room.
I promise I {'ll|'m going to} help you tomorrow.`,
    arr: `Lisa [is having:have] a party on Saturday.
We [are playing:play] tennis tomorrow at 4.
I [am seeing:see] the dentist on Monday.
My parents [are going:go] to a concert tonight.
The team [is leaving:leave] at 7 tomorrow morning.`,
    text: `Next summer my family [is going to] travel to Greece. We [are flying] on 15th July – the tickets are already booked!
"I've forgotten my pen." – "Don't worry, I['ll] lend you one."
Experts think that in 2050 most cars [will] be electric and people [won't] need petrol any more.`,
    trans: `Wir fahren morgen nach Wien. (fixiert) => We're going to Vienna tomorrow. / We're driving to Vienna tomorrow.
Ich verspreche, ich werde es niemandem sagen. => I promise I won't tell anybody.
Schau, das Glas wird gleich herunterfallen! => Look, the glass is going to fall!
Was wirst du am Wochenende machen? => What are you going to do at the weekend?`,
    err: `I going to visit my aunt. => I'm going to visit my aunt.
Maybe it rains tomorrow. => Maybe it will rain tomorrow.
She won't to come. => She won't come.`
  } });

  ext('e-presentperfect', { more: {
    form: `They [have bought:buy] a new house.
Tom [hasn't done:not do] his homework.
[Have you ever been:you / ever / be] to Italy?
My sister [has broken:break] her arm.
I [have never eaten:never / eat] snails.
We [have just finished:just / finish] lunch.
[Has she called:she / call] you yet?`,
    ever: `Have you ever ridden a horse? :: ✗ => No, I haven't.
Has Tom ever won a prize? :: ✓ => Yes, he has.
Have your parents ever been to America? :: ✗ => No, they haven't.
Has your teacher ever been angry? :: ✓ => Yes, she has.`,
    jay: `I haven't finished my homework {yet|already}.
The film has {already|yet} started. Hurry up!
Has the bus left {yet|just}?
We've {just|yet} arrived. Give us a minute.
I've {already|yet} read this book twice.
She hasn't called me {yet|already}.`,
    forsince: `I haven't seen Lisa [since] last Christmas.
They have lived in Austria [for] ten years.
He has played the guitar [since] he was six.
We have been friends [for] a long time.
I have had this phone [since] my birthday.
She has worked here [for] three months.
It hasn't rained [for] weeks.`,
    tense: `She {has lost|lost} her keys. She can't get in.
Mozart {wrote|has written} lots of music.
{Have you ever eaten|Did you ever eat} sushi?
I {have known|know} Tom since kindergarten.
When {did you arrive|have you arrived}?
We {have had|had} a test last Friday.`,
    prog: `My eyes hurt. I [have been reading:read] all afternoon.
How long [have you been waiting:you / wait]?
They [have been playing:play] video games for hours.
Lisa [has been working:work] in the garden since 9.`,
    text: `I [have] already [finished] my homework, but my brother [hasn't] started his [yet].
We [have known] each other [for] six years. We [met] at kindergarten in 2019.
"[Have] you [seen] my phone?" – "Yes, I [saw] it in the kitchen ten minutes ago."`,
    trans: `Hast du schon einmal einen Wal gesehen? => Have you ever seen a whale?
Ich habe meine Hausübung noch nicht gemacht. => I haven't done my homework yet.
Wir kennen uns seit 2020. => We have known each other since 2020.
Er ist gerade angekommen. => He has just arrived.`,
    err: `She has went home. => She has gone home.
I have finished my homework yesterday. => I finished my homework yesterday.
We know each other for ten years. => We have known each other for ten years.`
  } });

  ext('e-pastperfect', { more: {
    form: `The shop [had closed:close] when we got there.
She was tired because she [hadn't slept:not sleep] well.
When Mum came home, we [had cleaned:clean] the kitchen.
He [had never been:never / be] on a plane before.
They were tired because they [had walked:walk] for hours.
[Had you finished:you / finish] before the bell rang?
After she [had read:read] the letter, she started to cry.`,
    choose: `I couldn't pay because I {had lost|lost} my wallet.
He {went|had gone} to bed after he had brushed his teeth.
By the time we arrived, they {had eaten|ate} all the cake.
She {had never seen|never saw} snow before she went to Canada.
When I {got|had got} home, my parents had already left.`,
    join: `First we had dinner. Then we watched TV. :: After … => After we had had dinner, we watched TV.
First the bus left. Then I arrived at the bus stop. :: When … already => When I arrived at the bus stop, the bus had already left.
First he forgot his keys. Then he couldn't get in. :: because => He couldn't get in because he had forgotten his keys.
First she studied hard. Then she passed the test. :: After … => After she had studied hard, she passed the test.`,
    text: `When we got to the station, the train [had] already [left]. We [had] missed it by two minutes!
Tom was very happy. He [had won] the competition and his parents [had bought] him a new bike.
I [had] never [eaten] Indian food before, so I [was] a bit nervous. But it [was] delicious!`,
    trans: `Sie war müde, weil sie schlecht geschlafen hatte. => She was tired because she had slept badly.
Als ich nach Hause kam, war mein Bruder schon gegangen. => When I came home, my brother had already left.
Ich hatte meine Hausübung vergessen. => I had forgotten my homework.
Hattest du ihn vorher schon getroffen? => Had you met him before?`,
    err: `She had went home. => She had gone home.
When I arrived, he has already left. => When I arrived, he had already left.
After I had eat, I went out. => After I had eaten, I went out.`
  } });

  ext('e-comparison', { more: {
    er: `cold => colder – the coldest
thin => thinner – the thinnest
funny => funnier – the funniest
easy => easier – the easiest
safe => safer – the safest
hot => hotter – the hottest
fast => faster – the fastest
busy => busier – the busiest`,
    gap: `A cheetah is [faster:fast] than a horse.
This is [the most exciting:exciting] game I know.
Summer is [hotter:hot] than spring.
Who is [the tallest:tall] boy in your class?
My cold is [worse:bad] today than yesterday.`,
    more: `expensive => more expensive – the most expensive
bad => worse – the worst
famous => more famous – the most famous
dangerous => more dangerous – the most dangerous
far => further – the furthest
difficult => more difficult – the most difficult`,
    much: `My sister is [much older:old] than me.
The new school is [much bigger:big] than the old one.
English is [much easier:easy] than Chinese.
This book is [much more exciting:exciting] than the film.
Today I feel [much better:good].
A car is [much more expensive:expensive] than a bike.
The Danube is [much longer:long] than the Mur.
Mars is [much smaller:small] than Jupiter.
Running is [much healthier:healthy] than watching TV.
This chair is [much more comfortable:comfortable] than that one.
Your room is [much tidier:tidy] than mine.
The test was [much more difficult:difficult] than I thought.`,
    nearly: `My bag weighs 4 kg. Your bag weighs 4.2 kg. :: nearly / heavy => My bag is nearly as heavy as yours.
Tom is 13. Ben is 13 too. :: as … as / old => Tom is as old as Ben.
A mouse is 10 cm long. A cat is 50 cm long. :: not nearly / big => A mouse is not nearly as big as a cat.
The blue T-shirt costs 19 €. The red one costs 20 €. :: nearly / expensive => The blue T-shirt is nearly as expensive as the red one.
Mia got 48 points. Lisa got 50 points. :: nearly / good => Mia was nearly as good as Lisa.
Linz is 120 km away. Vienna is 200 km away. :: not as … as / far => Linz is not as far as Vienna.`,
    text: `Our new flat is [bigger] than the old one, and it's [much] quieter. The kitchen is the [nicest] room.
Mount Everest is the [highest] mountain in the world. The Großglockner is [much] smaller, but it is the [highest] mountain in Austria.
Tom thinks maths is [more difficult] than English, but I think English is [the most difficult] subject.`,
    trans: `Mein Rucksack ist viel schwerer als deiner. => My rucksack is much heavier than yours.
Er ist fast so groß wie sein Vater. => He is nearly as tall as his father.
Das ist das schlechteste Essen der Welt. => This is the worst food in the world.
Lisa ist nicht so sportlich wie ihr Bruder. => Lisa isn't as sporty as her brother.`,
    err: `He is the most tall boy. => He is the tallest boy.
Today is more hot than yesterday. => Today is hotter than yesterday.
She is as fast than me. => She is as fast as me.`
  } });

  ext('e-quantity', { more: {
    sort: `money|U
car|C
time|U
book|C
bread|U
egg|C
milk|U
chair|C
music|U
child|C
information|U
banana|C`,
    muchmany: `How {many|much} students are in your class?
I haven't got {much|many} time.
There isn't {much|many} juice left.
How {much|many} sugar do you take?
We didn't see {many|much} animals at the zoo.
How {many|much} hours do you sleep?`,
    few: `We've got {a little|a few} time before the bus comes.
I know {a few|a little} words in Spanish.
There's {a little|a few} cheese in the fridge.
{A few|A little} friends are coming tonight.
Add {a little|a few} salt to the soup.
I need {a few|a little} minutes to get ready.`,
    error: `How many money do you need? => How much money do you need?
I haven't got much friends. => I haven't got many friends.
I've got a little friends. => I've got a few friends.
I didn't see nobody. => I didn't see anybody.`,
    some: `I'm bored. There's [nothing] to do.
[Everybody] laughed at the joke.
I want to go [somewhere] warm for the holidays.
[Everybody] in my class likes our teacher.
I knocked, but [nobody] opened the door.
Would you like [something] to drink?
I looked [everywhere], but I couldn't find it.
Is there [anywhere] I can charge my phone?`,
    text: `We need [some] eggs, [a little] sugar and [a few] apples for the cake.
There weren't [many] people on the beach, so we had [a lot of] space.
I've looked [everywhere] for my glasses, but I can't find them [anywhere].`,
    trans: `Es ist niemand zu Hause. => There's nobody at home.
Wir haben nicht viel Zeit. => We haven't got much time.
Möchtest du etwas essen? => Would you like something to eat?
Ich kenne ein paar Leute hier. => I know a few people here.`
  } });

  ext('e-adverbs', { more: {
    form: `quick => quickly
quiet => quietly
easy => easily
bad => badly
good => well
fast => fast
loud => loudly
polite => politely
nice => nicely
angry => angrily`,
    gap: `Mia is a fast runner. She runs [fast].
The children are quiet. They play [quietly].
Ben is a bad singer. He sings [badly].
My grandma is a slow reader. She reads [slowly].
Lisa is a polite girl. She always asks [politely].`,
    choose: `The test was {easy|easily}.
He answered the question {easily|easy}.
Our teacher speaks very {quietly|quiet}.
The music is too {loud|loudly}.
Tom did his homework {quickly|quick}.
My grandma is a {good|well} cook.
She cooks very {well|good}.
The dog barked {angrily|angry} at the postman.
This soup smells {good|well}.
Please sit down {quietly|quiet}.`,
    text: `My little brother is very [noisy]. He always slams the door [loudly] and sings [badly].
The weather was [terrible], so we drove home [slowly] and [carefully].
Lisa answered all the questions [correctly]. She is a really [clever] girl.`,
    trans: `Er läuft sehr schnell. => He runs very fast.
Sprich bitte leise! => Please speak quietly!
Das Wetter ist schlecht. => The weather is bad.
Sie hat den Test leicht geschafft. => She passed the test easily.`,
    err: `He drives very slow. => He drives very slowly.
She speaks English good. => She speaks English well.
The cake tastes deliciously. => The cake tastes delicious.`
  } });

  ext('e-relative', { more: {
    gap: `The man [who] works at the bakery is very friendly.
That's the dog [which] bit me.
Do you know the boy [whose] bike was stolen?
This is the café [where] we always meet.
I like films [which] make me laugh.
She's the teacher [who] taught me English.
The house [which] is on the corner is for sale.
I met a woman [whose] son plays in my team.
That's the park [where] I learned to ride a bike.
People [who] are late must wait outside.`,
    join: `This is my aunt. She lives in Australia. :: who => This is my aunt who lives in Australia.
I lost the watch. My dad gave it to me. :: which => I lost the watch which my dad gave me.
That's the girl. Her mum is a famous singer. :: whose => That's the girl whose mum is a famous singer.
This is the town. I was born there. :: where => This is the town where I was born.
I have a cat. It sleeps all day. :: which => I have a cat which sleeps all day.`,
    omit: `The pizza which I ordered was cold. :: Can you leave out the relative pronoun? => yes
The girl who sits next to me is new. :: Can you leave out the relative pronoun? => no
The man that we met was very friendly. :: Can you leave out the relative pronoun? => yes
The bus which goes to the airport is late. :: Can you leave out the relative pronoun? => no`,
    comma: `Graz, [which] is in Styria, has a famous clock tower.
My grandma, [who] is 85, still rides her bike.
Mr Brown, [whose] dog barks all night, lives next door.
The Danube, [which] flows through Vienna, is very long.`,
    text: `I have a friend [who] lives in Canada. The town [where] she lives is very cold in winter.
The book [which] I'm reading is about a boy [whose] parents are spies.
My uncle, [who] is a chef, made a cake [which] was shaped like a castle.`,
    trans: `Das ist der Mann, der mir geholfen hat. => That's the man who helped me.
Das ist das Haus, in dem ich wohne. => That's the house where I live.
Der Film, den wir gesehen haben, war lustig. => The film (that) we saw was funny.
Kennst du das Mädchen, dessen Bruder in meiner Klasse ist? => Do you know the girl whose brother is in my class?`,
    err: `The girl which sings is my sister. => The girl who sings is my sister.
That's the boy who's bike is red. => That's the boy whose bike is red.
The book who I read was boring. => The book which / that I read was boring.`
  } });

  ext('e-conditionals', { more: {
    t1: `If you [study:study], you will pass the test.
If it snows, we [will build:build] a snowman.
If you [don't wear:not wear] a jacket, you will be cold.
We will be late if the bus [doesn't come:not come] soon.
If I [have:have] time, I will call you.
She [will be:be] happy if you visit her.
If you [leave:leave] now, you will be on time.
If you eat too much, you [will feel:feel] ill.`,
    t2: `If I [lived:live] by the sea, I would swim every day.
If he had more time, he [would learn:learn] the guitar.
If we [had:have] a car, we would drive to the mountains.
I [wouldn't do:not do] that if I were you.
If my dog [could:can] talk, it would tell me its secrets.
What [would you buy:you / buy] if you had 1,000 euros?
If she [were:be] taller, she could play basketball.`,
    choose: `If I {see|will see} her tomorrow, I'll give her the book.
If you mix red and white, you {get|would get} pink.
I {would buy|will buy} a castle if I were a millionaire.
If it {doesn't|won't} rain, we'll go for a walk.
If I {knew|know} his number, I would call him.
If we {had left|left} earlier, we would have caught the train.`,
    t3: `If you [had told:tell] me, I would have come.
If she had studied, she [would have passed:pass].
If it [hadn't snowed:not snow], the plane would have left on time.
We [would have won:win] if Tom had played.
If you [had come:come] to the party, you would have met Lisa.`,
    text: `If you [come] to my party, I [will] make my famous pizza.
If I [had] a time machine, I [would] visit the dinosaurs.
If I [had] known about the test, I [would have] studied more.`,
    trans: `Wenn du dich beeilst, erwischst du den Bus. => If you hurry, you will catch the bus.
Wenn ich fliegen könnte, würde ich nach Australien fliegen. => If I could fly, I would fly to Australia.
Wenn du früher gekommen wärst, hättest du ihn gesehen. => If you had come earlier, you would have seen him.
Was würdest du tun, wenn du ein Löwe wärst? => What would you do if you were a lion?`,
    err: `If I will have time, I will help you. => If I have time, I will help you.
If I knew it, I will tell you. => If I knew it, I would tell you.
If she had asked me, I would helped her. => If she had asked me, I would have helped her.`
  } });

  ext('e-passive', { more: {
    present: `Pizza [is eaten:eat] all over the world.
These T-shirts [are made:make] in Portugal.
The post [is delivered:deliver] every morning.
Our car [is washed:wash] every Saturday.
Bananas [are grown:grow] in Ecuador.
The museum [is visited:visit] by thousands of people.`,
    past: `The window [was broken:break] by a ball.
America [was discovered:discover] in 1492.
The cake [was eaten:eat] in five minutes.
These photos [were taken:take] in Paris.
The thief [was caught:catch] by the police.
The letters [were written:write] by my grandpa.`,
    active: `People grow rice in China. => Rice is grown in China.
The police caught the thief. => The thief was caught by the police.
Someone opened the door. => The door was opened.
They built this school in 1970. => This school was built in 1970.`,
    mix: `The results [will be announced:announce] tomorrow.
The tickets [have been sold:sell] out.
Homework [must be done:must / do] by Friday.
The new library [will be opened:open] next month.
Your bike [has been repaired:repair].
Mobile phones [can't be used:not use] during the test.`,
    text: `The Mona Lisa [was painted] by Leonardo da Vinci. Today it [is visited] by millions of people every year.
Our new gym [is being built] at the moment. It [will be finished] next spring.
"Has the problem [been solved] yet?" – "No, but it [will be fixed] tomorrow."`,
    trans: `Der Brief wurde gestern geschickt. => The letter was sent yesterday.
Hier wird Englisch gesprochen. => English is spoken here.
Das Auto ist repariert worden. => The car has been repaired.
Die Brücke wird nächstes Jahr gebaut. => The bridge will be built next year.`,
    err: `The window was broke. => The window was broken.
The book was wrote by her. => The book was written by her.
The window were broken. => The window was broken.`
  } });

  ext('e-reported', { more: {
    st: `"I am thirsty." :: Ben said … => Ben said (that) he was thirsty.
"We are going to the zoo." :: The children said … => The children said (that) they were going to the zoo.`,
    saytell: `Lisa [told] her mum the truth.
He [said] goodbye and left.
Please [tell] us a story!
What did she [say] to you?
I [told] you so!
Tom [said] he was sorry.`,
    cmd: `"Be quiet!" :: Dad told the kids … => Dad told the kids to be quiet.
"Don't run!" :: The teacher told us … => The teacher told us not to run.
"Don't eat in the classroom!" :: The teacher told us … => The teacher told us not to eat in the classroom.`,
    q: `"Where are you going?" :: She asked me … => She asked me where I was going.
"Can you swim?" :: He asked me … => He asked me if I could swim.
"What time is it?" :: Tom asked … => Tom asked what time it was.
"Do you have a pet?" :: Lisa asked me … => Lisa asked me if I had a pet.
"What are you doing?" :: Dad asked me … => Dad asked me what I was doing.`,
    mix: `"I can't come," said Tom. => Tom said (that) he couldn't come.
"Close the door!" Mum told me. => Mum told me to close the door.
"Are you hungry?" she asked us. => She asked us if we were hungry.
"I will help you," said Lisa. => Lisa said (that) she would help me.
"Don't be late!" the teacher told us. => The teacher told us not to be late.`
  } });

  ext('e-gerund', { more: {
    gap: `I can't stand [waiting:wait] for the bus.
She has decided [to become:become] a doctor.
We hope [to see:see] you soon.
Do you mind [opening:open] the window?
I'd like [to try:try] this jacket on.
He finished [writing:write] his essay.
They promised [to write:write] to us.
Stop [talking:talk], please!`,
    choose: `Would you like {to come|coming} to my party?
He avoids {eating|to eat} sugar.
I need {to buy|buying} a new phone.
She keeps {forgetting|to forget} her keys.
We plan {to visit|visiting} our grandma.
Do you enjoy {dancing|to dance}?`,
    prep: `I'm afraid of [flying:fly].
How about [going:go] to the cinema?
We're looking forward to [seeing:see] you.
She's good at [singing:sing].
Are you interested in [joining:join] our club?
I'm sorry for [being:be] late.
He left without [saying:say] goodbye.`,
    text: `My little sister loves [dancing], but she hates [practising] the piano. She wants [to be] a dancer one day.
I'm looking forward to [going] on holiday. We've decided [to travel] by train.`,
    trans: `Ich freue mich darauf, dich zu sehen. => I'm looking forward to seeing you.
Sie lernt gern Sprachen. => She enjoys learning languages.
Wir hoffen, bald zu gewinnen. => We hope to win soon.
Sie ist gut im Zeichnen. => She's good at drawing.`,
    err: `I want playing football. => I want to play football.
She enjoys to read. => She enjoys reading.
He is good at swim. => He is good at swimming.
I decided going home. => I decided to go home.`
  } });

  ext('e-linking', { more: {
    basic: `Do you want tea [or] coffee?
I like dogs [and] cats.
The shop was closed, [so] we went home.
I'm tired [because] I went to bed late.
She is small [but] very strong.
We can go to the cinema [or] to the park.
He was ill, [so] he stayed at home.
I love summer [because] I can swim in the lake.`,
    join: `I was thirsty. I drank some water. :: so => I was thirsty, so I drank some water.
We were late. The bus didn't come. :: because => We were late because the bus didn't come.
I like pizza. My sister doesn't. :: but => I like pizza, but my sister doesn't.`,
    time: `[Before] you leave, close the windows.
[Then] I went to bed.
She called me [as soon as] she arrived.
We had lunch. [Later], we went to the museum.
[When] the film ended, we went home.
I read a book [while] I was waiting.
[After that], we played cards.
[Finally], the teacher arrived.
[First] I had breakfast, then I brushed my teeth.
[After] school, I usually meet my friends.
The phone rang [while] I was having a shower.
[As soon as] the film starts, please switch off your phone.
[Before] the test, I was very nervous.
[When] I was little, I lived in Linz.`,
    text: `{Although|Because} it was cold, we went swimming.
There is a lot to do in Salzburg. {For example|However}, you can visit the castle.
I think school uniforms are good. {On the other hand|For example}, they are expensive.
{Finally|First}, put the cake in the oven.`,
    prof: `[When] I got home, nobody was there. [First] I was worried, but [then] I found a note on the table.
I didn't like the film [because] it was too long. [However], the music was great.
[Although] Tom is only twelve, he speaks three languages. [For example], he speaks Turkish [and] Spanish.`,
    trans: `Zuerst gingen wir einkaufen, danach ins Kino. => First we went shopping, after that we went to the cinema.
Während ich las, schlief meine Katze. => While I was reading, my cat was sleeping.
Sobald du ankommst, ruf mich an. => As soon as you arrive, call me.`
  } });
})();
