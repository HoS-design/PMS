/* Englisch – mehr Varianten für die sechs Blätter, Teil 4 (words, numbers, phrases, writing) */
(function () {
  const ext = UB.extendTopic;

  ext('e-wordformation', { more: {
    neg: `friendly => unfriendly
polite => impolite
fair => unfair
patient => impatient
honest => dishonest
legal => illegal
tidy => untidy
usual => unusual`,
    adj: `wonder => wonderful
fame => famous
care => careful
music => musical
rain => rainy
use => useful`,
    family: `She sang [beautifully:beauty] at the concert.
The [teacher:teach] explained the rules again.
It was a very [dangerous:danger] journey.
Thank you for your [help:helpful]. You were very [helpful:help].
He is a famous football [player:play].
The weather was [sunny:sun] all week.
Please be [careful:care] with the glass.`,
    text: `Our trip was [wonderful:wonder]. The weather was [sunny:sun] and the people were very [friendly:friend].
The [waiter:wait] was very [unfriendly:friendly], but he served us [quickly:quick].
It's [impossible:possible] to sleep here. The neighbours are so [noisy:noise]!`
  } });

  ext('e-numbers', { more: {
    num: `40 => forty
90 => ninety
112 => a hundred and twelve
1,000 => a thousand`,
    time: `6:20 => twenty past six
11:45 => a quarter to twelve
4:30 => half past four
1:05 => five past one
10:15 => a quarter past ten
2:50 => ten to three
12:00 => twelve o'clock
5:35 => twenty-five to six`,
    ord: `12th => twelfth
20th => twentieth
21st => twenty-first
5th => fifth
9th => ninth`,
    ask: `What's the time? – It's [twenty to] eight. (7:40)
What's the time? – It's [five past] eleven. (11:05)
What's the time? – It's [a quarter past] two. (2:15)
What's the time? – It's twelve [o'clock]. (12:00)
What's the time? – It's [half past] seven. (7:30)`,
    years: `2024 => twenty twenty-four / two thousand and twenty-four
1985 => nineteen eighty-five
1900 => nineteen hundred
2010 => twenty ten / two thousand and ten`,
    time24: `16:00 => four o'clock (in the afternoon) / 4 p.m.
07:30 => half past seven (in the morning) / 7.30 a.m.
19:15 => a quarter past seven (in the evening) / 7.15 p.m.
12:30 => half past twelve / 12.30 p.m.`,
    calc: `9 · 6 = 54 => nine times six is fifty-four
45 : 5 = 9 => forty-five divided by five is nine`,
    text: `My birthday is on the [twenty-first] of [June]. (21. 6.)
School starts at [a quarter to] eight. (7:45)
The concert ticket costs [twenty-five] pounds. (£25)
There are [three hundred and sixty-five] days in a year. (365)`
  } });

  ext('e-vocab', { more: {
    v1: `der Onkel => uncle
die Tante => aunt
die Tochter => daughter
der Sohn => son
der Cousin, die Cousine => cousin
die Eltern => parents
der Großvater => grandfather
die Schwester => sister`,
    sort1: `aunt|F
grandma|F
nephew|F
ruler|S
rubber|S
timetable|S
classroom|S
cheese|E
carrot|E
sausage|E
rabbit|A
horse|A`,
    v2: `der Garten => garden
das Wohnzimmer => living room
die Treppe => stairs
das Fenster => window
die Tür => door
der Schrank => cupboard
der Spiegel => mirror
das Bett => bed`,
    sort2: `socks|C
coat|C
scarf|C
gloves|C
kitchen|H
stairs|H
roof|H
sunny|W
foggy|W
snow|W
knee|B
shoulder|B`,
    v3: `der Supermarkt => supermarket
die Post => post office
die Kirche => church
das Rathaus => town hall
die Bäckerei => bakery
die Apotheke => chemist's / pharmacy`,
    opp: `fast => slow
happy => sad
cheap => expensive
easy => difficult
long => short
young => old
heavy => light
early => late`,
    def: `a person who flies a plane => pilot
the place where you sleep => bedroom
an animal that says "moo" => cow
a person who teaches at a school => teacher
the meal you eat in the evening => dinner
a place where you can see animals => zoo
the day after Monday => Tuesday`,
    coll: `die Hausübung machen => do your homework
das Bett machen => make the bed
den Bus nehmen => take the bus
Musik hören => listen to music
spazieren gehen => go for a walk
ein Geschenk bekommen => get a present
einen Fehler machen => make a mistake`
  } });

  ext('e-phrases', { more: {
    p1: `Du bedankst dich. => Thank you! / Thanks!
Du entschuldigst dich. => Sorry!
Du stellst dich vor. => Hi, I'm … / My name is …
Du fragst jemanden nach seinem Namen. => What's your name?
Du wünschst ein schönes Wochenende. => Have a nice weekend!
Du hast etwas nicht verstanden. => Sorry, can you say that again, please?
Du fragst, woher jemand kommt. => Where are you from?`,
    polite: `{Could you|You must} help me, please?
{Sorry, I don't understand.|What?}
{May I|I will} open the window?
{Thank you very much!|OK.}`,
    p2: `Du fragst nach einer Tüte. => Can I have a bag, please?
Du möchtest etwas anprobieren. => Can I try it on?
Du suchst die Umkleidekabine. => Where are the changing rooms?
Du bestellst eine Pizza. => I'd like a pizza, please.
Du möchtest die Rechnung. => Can I have the bill, please?
Du fragst, ob etwas billiger ist. => Have you got anything cheaper?
Du sagst, dass du nur schaust. => I'm just looking, thanks.`,
    p3: `Du sagst, dass du später zurückrufst. => I'll call you back later.
Du verstehst am Telefon nichts. => Sorry, the line is bad. Can you speak up?
Du fragst, wer spricht. => Who's speaking, please?
Du bittest zu warten. => Hold on, please. / Just a moment, please.
Du verabschiedest dich am Telefon. => Thanks for calling. Bye!
Du fragst nach der Telefonnummer. => What's your phone number?
Du sagst, dass Tom nicht da ist. => Sorry, Tom isn't here at the moment.`,
    p4: `Am Bahnhof: Du fragst, wann der nächste Zug fährt. => When does the next train leave?
Auf der Straße: Du fragst nach dem Weg zum Museum. => Excuse me, how do I get to the museum?
Beim Arzt: Du hast Kopfschmerzen. => I've got a headache.
Im Hotel: Du möchtest ein Zimmer für zwei Nächte. => I'd like a room for two nights, please.
Im Café: Du fragst nach dem WLAN-Passwort. => What's the Wi-Fi password, please?
In der Schule: Du hast deine Hausübung vergessen. => I'm sorry, I've forgotten my homework.`,
    reply: `Happy birthday! => Thank you!
Can I sit here? => Sure, go ahead.
Have a nice day! => Thanks, you too!
I've passed my test! => Congratulations! / Well done!
I've got a cold. => Oh, I'm sorry to hear that. Get well soon!
Would you like some tea? => Yes, please. / No, thank you.`
  } });

  ext('e-confusing', { more: {
    makedo: `I always [make] my bed in the morning.
Let's [do] some exercise.
Can you [make] a cup of tea?
She [made] a mistake in her test.
We [do] the shopping on Saturdays.
He [did] his best.
Don't [make] a mess in the kitchen!
I have to [do] the washing-up.`,
    choose: `My mum {taught|learned} me to swim.
Can I {take|bring} your umbrella? I'll give it back tomorrow.
I {lent|borrowed} Tom my bike yesterday.
How much does she {earn|win} in her job?
Our team {won|earned} the match.
I can't {hear|listen} you. Can you speak up?
Did you {say|tell} the truth?
We {learn|teach} English at school.`,
    error: `She told that she was tired. => She said that she was tired.
I'm hearing music. => I'm listening to music.
He learned me how to play chess. => He taught me how to play chess.`,
    ff: `der Chef => boss
sensibel => sensitive
aktuell => current
also => so
die Note (Schulnote) => mark / grade
das Gymnasium => grammar school
eventuell => maybe / possibly
bald => soon`,
    text: `Can you [tell] me the way to the station? – Sorry, I can't [remember] it.
My brother [won] the race and our dad [made] a cake for him.
I [borrowed] a book from the library. I must [take] it back tomorrow.`,
    choose2: `I {heard|listened} a strange noise.
Can you {tell|say} me a story?
Don't forget to {remind|remember} me!
Did you {listen|hear} to the radio this morning?
She {said|told} goodbye and left.
I'll {remember|remind} this day forever.`,
    ff2: `die Kritik => criticism
die Fabrik => factory
das Rezept (beim Arzt) => prescription
spenden => donate
der Fotograf => photographer
die Chips (Kartoffelchips) => crisps`
  } });

  ext('e-w-describe', { more: {
    sort: `fat|A
blond|A
curly|A
friendly|C
lazy|C
shy|C
funny|C
clever|C
honest|C
old|A
straight|A
freckles|A
beard|A
moody|C
bossy|C
generous|C
handsome|A
pretty|A
cheerful|C
patient|C
glasses|A
bald|A
helpful|C
polite|C`,
    ishas: `My grandpa {has got|is} a grey beard.
Lisa {is|has got} shy but very nice.
He {has got|is} big brown eyes.
My teacher {is|has got} always friendly.
Our dog {has got|is} a long tail.
My sister {is|has got} very clever.`,
    gap: `My dad [has got] a moustache.
Our neighbour [is] old and friendly.
Tom [has got] freckles and red hair.
My friends [are] very funny.
My little brother [is] a bit cheeky.`,
    better: `The room is nice. => My room is small but cosy – it has got a big window and lots of posters on the walls.
She is pretty. => She has got long dark hair, big green eyes and a lovely smile.
The town is old. => Our little town has got narrow streets, an old church and a castle on the hill.`
  } });

  ext('e-w-email', { more: {
    style: `I look forward to hearing from you.|F
See you soon!|I
Yours sincerely,|F
Love,|I
I am writing to ask about …|F
How are you?|I
Could you please send me …|F
Write back soon!|I`,
    fix: `Hey Sir, I want info about the course. => Dear Sir or Madam, I would like some information about the course.
Dear Tom, … Yours faithfully, Lisa => Dear Tom, … Love / Best wishes, Lisa
Dear Mrs Smith, gimme the price. => Dear Mrs Smith, could you please tell me the price?`,
    formal: `Hi! What time does the museum open? => I would like to know what time the museum opens.
Your hotel was bad. => Unfortunately, I was not satisfied with my stay at your hotel.
I need the tickets now. => I would be grateful if you could send me the tickets as soon as possible.
Thanks a lot! => Thank you very much for your help.`
  } });

  ext('e-w-story', { more: {
    link: `[Then] we heard footsteps.
[In the end], everybody laughed.
[A few minutes later], the door opened.
[Luckily], nobody was hurt.
[After that], we went home.
[Unfortunately], it started to rain.`,
    better: `The night was dark. :: add details => It was a cold, dark night and the wind was howling through the trees.
She was happy. :: show the feeling => She jumped up and down and smiled from ear to ear.
We ate. :: add what and where => We ate delicious pizza in a tiny Italian restaurant by the sea.`,
    tense: `While we {were walking|walked} through the forest, we heard a strange noise.
Lisa {opened|was opening} the box and screamed.
I realised that I {had forgotten|forgot} my keys.
The sun {was shining|shone} and the birds were singing.`
  } });

  ext('e-w-opinion', { more: {
    sort: `Homework helps you to remember what you learned.|P
Students have less time for hobbies.|C
You can practise at your own speed.|P
Homework can be stressful.|C
Parents can see what you are learning.|P
Some students don't have help at home.|C
Phones are useful in an emergency.|P
Phones can distract students in class.|C
You can look things up quickly.|P
Some students play games instead of learning.|C
Cyberbullying can happen.|C
Phones can be used for learning apps.|P
They help families stay in contact.|P
People talk less face to face.|C`,
    phrase: `[I think] school should start at nine.
[I don't agree] that zoos are cruel.
[In conclusion], I believe phones should be allowed.
[On the one hand], fast food is cheap.
[On the other hand], it isn't healthy.
[Secondly], it is bad for the environment.
[What's more], it's expensive.
[I believe] that sport is important.
[To sum up], there are good and bad points.
[Another reason is] that it saves time.
[In my view], everyone should learn to swim.
[Finally], it's a lot of fun.`,
    choose: `I'm against homework {because|so} it takes too long.
{Firstly|Finally}, I want to talk about the advantages.
Zoos are important. {However|Because}, some animals are unhappy there.
{In conclusion|First of all}, I think we need a new playground.
I like living in the city {because|although} there is a lot to do.`,
    rewrite: `School is boring. => In my opinion, some lessons could be more interesting if we did more projects.
Fast food is bad. => I believe that eating too much fast food is unhealthy because it contains a lot of fat and sugar.
TV is good. => I think watching TV can be useful because you can learn a lot from documentaries.`
  } });
})();
