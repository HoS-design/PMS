/* Englisch – mehr Varianten, Teil 7 (Grammatik Kl. 2–4, Wortschatz, Schreiben) */
(function () {
  const ext = UB.extendTopic;

  ext('e-comparison', { more: {
    er: `tall => taller – the tallest
small => smaller – the smallest
big => bigger – the biggest
happy => happier – the happiest
nice => nicer – the nicest
cold => colder – the coldest
hot => hotter – the hottest
easy => easier – the easiest
young => younger – the youngest
funny => funnier – the funniest
long => longer – the longest
thin => thinner – the thinnest
strong => stronger – the strongest
safe => safer – the safest`,
    gap: `The Danube is [longer:long] than the Mur.
Today is [colder:cold] than yesterday.
This is [the biggest:big] pizza I've ever seen.
My sister is [younger:young] than me.
Summer is [the hottest:hot] season.
This test is [easier:easy] than the last one.
Mount Everest is [the highest:high] mountain in the world.
Lisa is [taller:tall] than her mum.
That was [the funniest:funny] film of the year.
A mouse is [smaller:small] than a rat.
Our garden is [bigger:big] than yours.
This is [the nicest:nice] café in town.`,
    more: `beautiful => more beautiful – the most beautiful
interesting => more interesting – the most interesting
dangerous => more dangerous – the most dangerous
famous => more famous – the most famous
good => better – the best
bad => worse – the worst
popular => more popular – the most popular
modern => more modern – the most modern
boring => more boring – the most boring
comfortable => more comfortable – the most comfortable
far => further – the furthest
important => more important – the most important`
  } });

  ext('e-quantity', { more: {
    sort: `apple|C
water|U
chair|C
money|U
milk|U
egg|C
bread|U
friend|C
cheese|U
book|C
juice|U
bottle|C
rice|U
pencil|C
sugar|U
banana|C
music|U
car|C
homework|U
tomato|C
information|U
sandwich|C
furniture|U`,
    muchmany: `How {many|much} brothers have you got?
There isn't {much|many} milk left.
I haven't got {many|much} friends in this town.
How {much|many} money have you got?
We don't have {much|many} homework today.
How {many|much} apples do we need?
She doesn't eat {much|many} sugar.
Are there {many|much} cars in your street?
How {much|many} water do you drink every day?`,
    few: `I need {a little|a few} help, please.
There are {a few|a little} apples on the tree.
Can I have {a little|a few} milk in my tea?
We stayed {a few|a little} days in London.
I've only got {a little|a few} money.
{A few|A little} people came to the meeting.
Add {a little|a few} salt to the soup.`,
    some: `I can't find my glasses [anywhere].
[Everybody] in my class likes pizza.
There's [nothing] in the fridge. It's empty.
Is there [anything] to eat?
[Somebody] has taken my bike!
I looked [everywhere] for my phone.
Did you meet [anybody] at the party?
[Nobody] was at home when I called.
Shh! I can hear [something] outside.
I don't know [anything] about computers.
Let's go [somewhere] nice for lunch.
[Everything] is ready for the party.`,
    error: `I haven't got many time. => I haven't got much time.
We need a few sugar for the cake. => We need a little sugar for the cake.
How much brothers have you got? => How many brothers have you got?
I need a few salt. => I need a little salt.
We bought a little apples. => We bought a few apples.`
  } });

  ext('e-adverbs', { more: {
    form: `quick => quickly
slow => slowly
quiet => quietly
loud => loudly
careful => carefully
happy => happily
easy => easily
good => well
fast => fast
hard => hard
sad => sadly
polite => politely
beautiful => beautifully
angry => angrily
safe => safely
real => really
nice => nicely
bad => badly
perfect => perfectly
lucky => luckily`,
    gap: `Lisa is a careful driver. She drives [carefully].
Tom is a fast runner. He runs [fast].
My dad is a good cook. He cooks [well].
The baby is quiet. It sleeps [quietly].
Ben is a loud singer. He sings [loudly].
She is a polite girl. She always answers [politely].`,
    choose: `He drives very {carefully|careful}.
Lisa is a {careful|carefully} girl.
The test was {easy|easily}.
She answered the question {easily|easy}.
Please speak {slowly|slow}.
It's a {slow|slowly} train.
The dog barked {loudly|loud}.
He is a {good|well} football player.
They played {badly|bad} yesterday.
She sings {beautifully|beautiful}.
My brother is very {quiet|quietly}.`,
    trans: `Er läuft sehr schnell. => He runs very fast.
Sie spricht gut Englisch. => She speaks English well.
Fahr bitte vorsichtig! => Please drive carefully!
Die Kinder spielten ruhig. => The children played quietly.
Er hat die Frage richtig beantwortet. => He answered the question correctly.`
  } });

  ext('e-relative', { more: {
    gap: `This is the boy [who] lives next door.
I've got a dog [which] loves water.
That's the café [where] we always meet.
Do you know the girl [whose] dad is a pilot?
The bike [which] I bought is red.
He is the man [who] helped me.
This is the town [where] I was born.
She's the singer [whose] songs I love.
The film [which] we saw was funny.
I have a friend [who] speaks four languages.
This is the park [where] we play football.`
  } });

  ext('e-conditionals', { more: {
    t1: `If it [rains:rain], we will stay at home.
If you study hard, you [will pass:pass] the test.
We [will miss:miss] the film if we don't leave now.
If Grandma [comes:come], she will bake a cake.
If you eat too much, you [will feel:feel] sick.
She [won't come:not come] if you don't invite her.
If the weather [is:be] nice, we will go swimming.
We [will play:play] football if it doesn't rain.
If you [don't leave:not leave] now, you will be late.`,
    t2: `If I [had:have] a dog, I would walk it every day.
If she lived in London, she [would visit:visit] the museums.
I [would buy:buy] a big house if I won the lottery.
If we [were:be] rich, we would travel around the world.
If you [practised:practise] more, you would play better.
My parents [would buy:buy] a bigger car if they had more money.
If I [could:can] fly, I would fly to Australia.
What [would you do:you / do] if you saw a ghost?`,
    t3: `If we had left earlier, we [wouldn't have missed:not miss] the train.
If he [had listened:listen], he would have understood.
She [would have come:come] if you had invited her.
If I [had known:know], I would have helped you.
If it hadn't rained, we [would have played:play] tennis.
If you [hadn't forgotten:not forget] your key, we would have got in.`,
    trans: `Wenn ich Zeit habe, rufe ich dich an. => If I have time, I'll call you.
Wenn ich reich wäre, würde ich ein Pferd kaufen. => If I were rich, I would buy a horse.
Wenn es morgen regnet, bleiben wir zu Hause. => If it rains tomorrow, we'll stay at home.
Was würdest du tun, wenn du eine Million hättest? => What would you do if you had a million?
Wenn du früher gekommen wärst, hättest du ihn gesehen. => If you had come earlier, you would have seen him.
Ich würde dir helfen, wenn ich könnte. => I would help you if I could.`
  } });

  ext('e-passive', { more: {
    past: `The window [was broken:break] by a ball.
The pyramids [were built:build] thousands of years ago.
The thief [was caught:catch] yesterday.
These photos [were taken:take] in Italy.
The letter [was written:write] by my grandma.
The children [were given:give] a present.
The match [was won:win] by our team.
The cars [were washed:wash] on Saturday.`,
    active: `Someone stole my bike. => My bike was stolen.
The teacher corrected the tests. => The tests were corrected by the teacher.
They sell newspapers at the kiosk. => Newspapers are sold at the kiosk.
A dog bit the postman. => The postman was bitten by a dog.
They make cars in this factory. => Cars are made in this factory.
Shakespeare wrote Romeo and Juliet. => Romeo and Juliet was written by Shakespeare.
Somebody opened the door. => The door was opened.
They clean the classrooms every day. => The classrooms are cleaned every day.
Lisa painted this picture. => This picture was painted by Lisa.`,
    trans: `Das Haus wurde 1900 gebaut. => The house was built in 1900.
Die Fenster werden jeden Freitag geputzt. => The windows are cleaned every Friday.
Das Auto wurde gestohlen. => The car was stolen.
In Österreich wird Deutsch gesprochen. => German is spoken in Austria.
Das Buch wurde von J. K. Rowling geschrieben. => The book was written by J. K. Rowling.`
  } });

  ext('e-reported', { more: {
    st: `"I am tired." :: Tom said … => Tom said (that) he was tired.
"I like football." :: Lisa said … => Lisa said (that) she liked football.
"My dog is ill." :: Lena said … => Lena said (that) her dog was ill.
"The shop is closed." :: Dad said … => Dad said (that) the shop was closed.
"We are at home." :: They said … => They said (that) they were at home.
"I like horror films." :: My sister said … => My sister said (that) she liked horror films.
"I like your shoes." :: Anna said … => Anna said (that) she liked my shoes.
"I live near the school." :: Max said … => Max said (that) he lived near the school.
"I am late." :: Dad said … => Dad said (that) he was late.
"The film is easy to understand." :: The teacher said … => The teacher said (that) the film was easy to understand.
"I live with my grandma." :: Emma said … => Emma said (that) she lived with her grandma.
"I don't like rain." :: Grandma said … => Grandma said (that) she didn't like rain.
"I am happy." :: Lena said … => Lena said (that) she was happy.
"We are at the station." :: My parents said … => My parents said (that) they were at the station.
"I like this song." :: Paul said … => Paul said (that) he liked that song.`,
    q: `"Are you hungry?" :: Mum asked me … => Mum asked me if I was hungry.
"What is your name?" :: The teacher asked me … => The teacher asked me what my name was.
"Do you like pizza?" :: Tom asked me … => Tom asked me if I liked pizza.
"Where do you live?" :: Lisa asked me … => Lisa asked me where I lived.
"Have you got a pen?" :: Ben asked me … => Ben asked me if I had a pen.
"Why are you sad?" :: My friend asked me … => My friend asked me why I was sad.`
  } });

  ext('e-gerund', { more: {
    gap: `I enjoy [reading:read] comics.
He wants [to buy:buy] a new bike.
Do you mind [opening:open] the window?
She stopped [eating:eat] meat last year.
We decided [to go:go] to the beach.
I can't stand [waiting:wait].
They plan [to visit:visit] London.
My brother finished [doing:do] his homework.
I'd love [to come:come] to your party.
Avoid [running:run] near the pool!`,
    prep: `Thank you for [listening:listen].
Thank you for [helping:help] me.
I'm sorry for [being:be] late.
He's bad at [cooking:cook].
We talked about [going:go] to the cinema.
They left without [paying:pay].
How about [playing:play] a game?
I'm sorry for [being:be] late.
She's crazy about [dancing:dance].`,
    trans: `Ich lese gern. => I like reading.
Er hat aufgehört zu rauchen. => He stopped smoking.
Wir freuen uns darauf, dich zu sehen. => We're looking forward to seeing you.
Sie hat beschlossen, Ärztin zu werden. => She decided to become a doctor.
Danke, dass du mir geholfen hast. => Thank you for helping me.
Ich bin gut im Schwimmen. => I'm good at swimming.`
  } });

  ext('e-linking', { more: {
    basic: `I like apples [and] bananas.
She's nice, [but] she's very shy.
Do you want tea [or] coffee?
We stayed at home [because] it was raining.
The shop was closed, [so] we went home.
I was hungry, [so] I made a sandwich.
He's small [but] very strong.
I'm happy [because] it's Friday.
You can call me [or] send me a message.
Lisa plays the piano [and] the guitar.`,
    join: `I was late. I missed the bus. :: because => I was late because I missed the bus.
It was sunny. We went to the beach. :: so => It was sunny, so we went to the beach.
I like cats. I don't like dogs. :: but => I like cats, but I don't like dogs.
He was tired. He went to bed early. :: so => He was tired, so he went to bed early.
She's happy. She got a good mark. :: because => She's happy because she got a good mark.
The film was long. It was exciting. :: but => The film was long, but it was exciting.`,
    text: `{Despite|Although} the rain, we played football.
I like summer, {whereas|because} my sister prefers winter.
The trip was expensive. {Nevertheless|Because}, we enjoyed it.
{Unless|If} you study, you won't pass the test.
We cancelled the picnic {because of|because} the rain.
{In spite of|Although} the noise, the baby slept.
Tom loves maths, {whereas|so} his brother hates it.
{Despite|Although} being tired, she finished the race.
The road was icy. {Nevertheless|So that}, he drove to work.
You can't come in {unless|if} you have a ticket.
The match was cancelled {because of|because} the snow.
{In spite of|Despite of} the cold, they went swimming.
Cats like to sleep all day, {whereas|but also} dogs want to play.
She was ill. {Nevertheless|Because of}, she went to school.
We'll go for a walk {unless|if not} it rains.
The flight was late {because of|because} the fog.
{Despite|Although} his fear, he climbed the tower.
I don't eat meat, {whereas|so} my brother eats it every day.
{Unless|If} you hurry, we'll be late.
{In spite of|Although} her bad leg, she won the race.
He studied a lot. {Nevertheless|Therefore not}, he failed the test.
Many shops were closed {because of|because} the holiday.
{Despite|Despite of} the price, they bought the car.`
  } });

  ext('e-wordformation', { more: {
    neg: `happy => unhappy
possible => impossible
honest => dishonest
correct => incorrect
like => dislike
regular => irregular
legal => illegal
friendly => unfriendly
polite => impolite
agree => disagree
patient => impatient
fair => unfair
appear => disappear
responsible => irresponsible
tidy => untidy`,
    noun: `teach (person) => teacher
paint (person) => painter
sing (person) => singer
write (person) => writer
play (person) => player
dance (person) => dancer
act (person) => actor
swim (person) => swimmer
run (person) => runner
farm (person) => farmer
invent (person) => inventor
build (person) => builder
clean (person) => cleaner
report (person) => reporter
lead (person) => leader
direct (person) => director`,
    adj: `sun => sunny
help => helpful
music => musical
rain => rainy
danger => dangerous
beauty => beautiful
fame => famous
use => useful
nature => natural
health => healthy`,
    family: `She is a very [creative:create] girl.
The [teacher:teach] explained the rule again.
It was a [wonderful:wonder] day.
It was a [sunny:sun] day.
The [singer:sing] has a great voice.
My brother is [unhappy:happy] today.
This medicine is [useless:use] – it doesn't work.
That was a [difficult:difficulty] question.
The film was really [exciting:excite].`
  } });

  ext('e-numbers', { more: {
    num: `13 => thirteen
14 => fourteen
15 => fifteen
17 => seventeen
19 => nineteen
20 => twenty
21 => twenty-one
30 => thirty
33 => thirty-three
40 => forty
44 => forty-four
50 => fifty
55 => fifty-five
60 => sixty
67 => sixty-seven
70 => seventy
78 => seventy-eight
99 => ninety-nine
100 => one hundred
12 => twelve`,
    time: `7:15 => a quarter past seven
8:30 => half past eight
9:45 => a quarter to ten
3:10 => ten past three
5:50 => ten to six
6:20 => twenty past six
1:35 => twenty-five to two
12:05 => five past twelve
2:40 => twenty to three
10:25 => twenty-five past ten`,
    ord: `1st => first
2nd => second
3rd => third
5th => fifth
8th => eighth
9th => ninth
12th => twelfth
20th => twentieth
21st => twenty-first
22nd => twenty-second
23rd => twenty-third`,
    years: `1999 => nineteen ninety-nine
2010 => twenty ten (or: two thousand and ten)
1815 => eighteen fifteen
2024 => twenty twenty-four
1492 => fourteen ninety-two
1900 => nineteen hundred`
  } });

  ext('e-vocab', { more: {
    v1: `der Bruder => brother
die Schwester => sister
die Großmutter => grandmother
der Onkel => uncle
die Tante => aunt
der Bleistift => pencil
das Lineal => ruler
der Radiergummi => rubber / eraser
die Schultasche => schoolbag
der Hund => dog
das Pferd => horse
der Apfel => apple`,
    sort1: `uncle|F
grandpa|F
aunt|F
cousin|F
parents|F
pencil case|S
ruler|S
teacher|S
homework|S
break|S
bread|E
cheese|E
carrot|E
soup|E
rabbit|A
horse|A
tiger|A
mouse|A
parrot|A`,
    v2: `das Wohnzimmer => living room
die Küche => kitchen
das Badezimmer => bathroom
der Regenschirm => umbrella
die Jacke => jacket
der Schal => scarf
die Mütze => cap / hat
es regnet => it's raining
es ist windig => it's windy
der Kopf => head
die Hand => hand
der Bauch => stomach / tummy`,
    sort2: `T-shirt|C
trousers|C
dress|C
boots|C
skirt|C
kitchen|H
bedroom|H
roof|H
stairs|H
garden|H
sunny|W
rain|W
cloudy|W
foggy|W
snow|W
nose|B
arm|B
leg|B
knee|B`,
    v3: `die Bäckerei => bakery
der Bahnhof => station
die Brücke => bridge
die Bücherei => library
das Krankenhaus => hospital
mutig => brave
schüchtern => shy
faul => lazy
ehrlich => honest
neugierig => curious
der Wald => forest
das Feld => field`,
    opp: `hot => cold
early => late
heavy => light
cheap => expensive
full => empty
easy => difficult
young => old
strong => weak
quiet => loud
clean => dirty
open => closed
fast => slow
win => lose
remember => forget
buy => sell`,
    def: `the room where you cook => kitchen
a person who works in a hospital and helps sick people => nurse (or: doctor)
the day after Monday => Tuesday
an animal that gives us milk => cow
the place where you can borrow books => library
the season after summer => autumn
something you wear on your head => hat (or: cap)
the opposite of "day" => night
a place where you can see animals => zoo`,
    coll: `ein Foto machen => take a photo
Fehler machen => make mistakes
das Bett machen => make the bed
eine Pause machen => take a break
Sport treiben => do sport
Spaß haben => have fun
eine Frage stellen => ask a question
die Wahrheit sagen => tell the truth
nach Hause gehen => go home
Frühstück essen => have breakfast`
  } });

  ext('e-phrases', { more: {
    p1: `Du fragst, wo jemand wohnt. => Where do you live?
Du sagst, dass es dir gut geht. => I'm fine, thanks.
Du verabschiedest dich. => Goodbye! / See you!
Du bedankst dich. => Thank you! / Thanks!
Du entschuldigst dich, weil du zu spät bist. => Sorry I'm late.
Du fragst, ob du aufs WC gehen darfst. => Can I go to the toilet, please?
Du fragst, ob du mitspielen darfst. => Can I play too?
Du fragst, was ein Wort bedeutet. => What does … mean?
Du fragst, ob jemand Geschwister hat. => Have you got any brothers or sisters?
Du wünschst ein schönes Wochenende. => Have a nice weekend!
Du sagst, wie alt du bist. => I'm … years old.`,
    polite: `{Good morning, Mrs Smith!|Hi, teacher!}
{Could you pass the salt, please?|Salt!}
{Could you open the window, please?|Open the window!}
{No, thank you.|No.}
{Excuse me, is this seat free?|Is this free?}`,
    p2: `Du fragst, ob es das T-Shirt auch in Blau gibt. => Have you got this T-shirt in blue?
Du fragst nach dem Weg zum Bahnhof. => Excuse me, how do I get to the station?
Du fragst, ob du bar zahlen kannst. => Can I pay in cash?
Du fragst nach einer anderen Größe. => Have you got this in a bigger size?
Du bestellst ein Glas Wasser. => Can I have a glass of water, please?
Du fragst, welcher Bus zum Zoo fährt. => Which bus goes to the zoo?
Du lädst jemanden zu deiner Party ein. => Would you like to come to my party?
Du sagst, dass du nur schaust. => I'm just looking, thanks.`,
    reply: `Thank you so much! => You're welcome!
I'm so tired today. => Why don't you have a rest?
Happy birthday! => Thank you!
How are you? => I'm fine, thanks. And you?
Are you ready? => Yes, let's go! / Not yet, just a minute.
I'm going on holiday tomorrow. => Have a great time!
Let's go to the cinema! => Good idea! / Sorry, I can't.
Can you help me? => Of course!`
  } });

  ext('e-confusing', { more: {
    makedo: `Can you [make] a cake for my party?
I always [do] my homework after school.
Don't [make] so much noise!
She [does] the washing-up every evening.
We [made] a lot of friends in the holidays.
He [made] a mistake in the test.
Can you [do] me a favour?
They [do] sport every afternoon.
I [made] my bed this morning.`,
    choose: `Can I {borrow|lend} your bike?
Could you {lend|borrow} me a pen?
Please {bring|take} your swimming things to school tomorrow.
Can you {bring|take} me a glass of water, please?
My friend {lent|borrowed} me his phone.
I {borrowed|lent} a book from Lisa.
{Take|Bring} the rubbish out, please.
Can you {bring|take} me a glass of water?
Will you {lend|borrow} me some money?
I'm going to {take|bring} my dog to the park.
We can {borrow|lend} bikes at the hotel.
When you visit us, {bring|take} your little sister!
Can you {take|bring} this letter to the post office?
She {borrowed|lent} her mum's car.
He never {lends|borrows} his things to anybody.
{Bring|Take} me the newspaper, please.`,
    error: `I make my homework every day. => I do my homework every day.
Can you borrow me some money? => Can you lend me some money?
He said me the answer. => He told me the answer.
I will become a new bike for my birthday. => I will get a new bike for my birthday.
Please do less noise! => Please make less noise!
Bring this letter to the post office, please. => Take this letter to the post office, please.`,
    ff: `das Handy => mobile phone
die Chips => crisps
bekommen => get
der Chef => boss
eventuell => possibly / maybe
das Gymnasium => grammar school
sensibel => sensitive
die Fabrik => factory
der Rock => skirt
spenden => donate
der Smoking => dinner jacket / tuxedo
der Mist => rubbish`,
    ff2: `der Rat => advice
die Marmelade => jam
das Kind => child
blank => shiny
der Beamer => projector
der Oldtimer => vintage car
der Flipper => pinball machine`
  } });

  ext('e-w-describe', { more: {
    sort: `tall|A
short|A
curly hair|A
freckles|A
slim|A
a scar|A
blue eyes|A
glasses|A
friendly|C
lazy|C
funny|C
shy|C
honest|C
helpful|C
bossy|C`
  } });

  ext('e-w-email', { more: {
    order: `Hi Lisa, >> Thanks for your message! >> Guess what – we've got a new puppy! He's very small and cute. >> Do you want to come and see him on Sunday? >> Write back soon! >> Love, Mia
Dear Grandma, >> Thank you so much for the birthday present! >> I love the book. I've already read half of it. >> How are you and Grandpa? >> I hope to see you soon. >> Love, Tom`,
    style: `Hey!|I
Dear Sir or Madam,|F
See you soon!|I
I look forward to hearing from you.|F
Thanks a lot!|I
I would like to ask …|F
Yours sincerely,|F
What's up?|I
Could you please send me …|F
Bye for now!|I
I would appreciate it if …|F
Take care!|I
Thank you for your help.|F
Cheers,|I`,
    formal: `Can you send me the price? => Could you please send me the price?
I want to come on Friday. => I would like to come on Friday.
Thanks for your mail! => Thank you for your email.
Bye, Lena => Yours sincerely, Lena Gruber
Sorry I didn't write back. => I apologise for not replying earlier.`
  } });

  ext('e-w-story', { more: {
    order: `Last winter, Max went skiing with his family. >> On the first day, he was very nervous. >> Suddenly, he lost control and fell into the snow. >> A friendly ski instructor helped him up. >> In the end, Max was the best skier in his group.
One afternoon, Lena was walking home from school. >> She heard a small cat crying in a tree. >> She called the fire brigade. >> A few minutes later, a firefighter climbed up and rescued the cat. >> Lena was very happy and took the cat home.`,
    link: `[First], we packed our bags.
[After that], we had a picnic.
[Suddenly], the lights went out.
[Finally], we arrived at the hotel.
[Later], we went for a swim.
[Then] we walked to the beach.
[At last], the rain stopped.`
  } });
})();
