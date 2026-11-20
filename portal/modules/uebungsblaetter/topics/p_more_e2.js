/* Englisch – größere Aufgabenpools (Teil 2) */
(function () {
  const ext = UB.extendTopic;

  ext('e-thereis', { more: {
    isare: `There {is|are} a dog under the table.
There {are|is} many trees in the park.
There {is|are} a bottle of water in my bag.
There {are|is} two cats on the sofa.
There {is|are} some cheese in the fridge.
There {are|is} ten children in the swimming pool.
There {is|are} a new student in our class.
There {are|is} lots of books in the library.
There {is|are} a bird on the roof.
There {are|is} some people at the bus stop.
There {is|are} a museum in the city centre.
There {are|is} two windows in my room.
There {is|are} some juice in the glass.
There {are|is} many mountains in Austria.
There {is|are} a pen on the floor.`,
    neg: `There is a lamp on my desk. :: not => There isn't a lamp on my desk.
There are some trees in the street. :: not => There aren't any trees in the street.
There is a swimming pool in our town. :: not => There isn't a swimming pool in our town.
There are some biscuits in the box. :: not => There aren't any biscuits in the box.`,
    quest: `a library / at your school => Is there a library at your school?
any good restaurants / in your town => Are there any good restaurants in your town?
a hospital / near here => Is there a hospital near here?
any windows / in the cellar => Are there any windows in the cellar?`,
    answer: `Is there a cinema in your town? – Yes, [there is].
Are there any trees in your garden? – Yes, [there are].
Is there a dog in your family? – No, [there isn't].
Are there any sweets in the box? – No, [there aren't].
Is there a bus stop near your school? – Yes, [there is].
Are there any girls in your team? – Yes, [there are].
Is there any bread? – No, [there isn't].`,
    someany: `I need {some|any} help with my homework.
There aren't {any|some} clouds in the sky.
Do you have {any|some} pets?
We've got {some|any} new neighbours.
I haven't got {any|some} money with me.
Would you like {some|any} cake?
Is there {any|some} sugar in my tea?
There are {some|any} children in the park.
He didn't make {any|some} mistakes.
Can you buy {some|any} bread, please?
Are there {any|some} good films on TV tonight?
She hasn't got {any|some} time today.
I'd like {some|any} information, please.
There isn't {any|some} juice left.`,
    text: `In our classroom [there are] twenty desks, but [there isn't] a sofa. [There is] a big board on the wall.
"[Are there] any good shops in your town?" – "Yes, [there are]. [There is] a big shopping centre."
[There isn't] any bread, but [there are] some crackers.
On the farm [there are] lots of animals. [There is] a horse, but [there aren't] any pigs.`,
    trans: `Gibt es hier eine Bushaltestelle? => Is there a bus stop here?
Auf dem Tisch liegen zwei Bücher. => There are two books on the table.
Es gibt keinen Zucker mehr. => There isn't any sugar left.
Gibt es einen Garten? => Is there a garden?`,
    err: `There isn't any eggs. => There aren't any eggs.
Are there a cat in your house? => Is there a cat in your house?
There is any milk in the fridge. => There is some milk in the fridge.`
  } });

  ext('e-conditionals', { more: {
    t1: `If you [study:study], you will get good marks.
If it [is:be] cold, we will wear our jackets.
If I [have:have] time, I will call you.
We [will miss:miss] the bus if we don't run.
If Lisa [comes:come], we will play cards.
If you touch the dog, it [will bark:bark].
If they [win:win] the match, they will celebrate.
I [will buy:buy] you an ice cream if you help me.
If it [snows:snow], we will build a snowman.
If you [don't wear:not wear] a hat, you will get cold.
She [won't be:not be] happy if you forget her birthday.
If we [take:take] the train, we will be there at ten.
If you eat too much, you [will feel:feel] sick.
If I [find:find] your book, I will give it back.`,
    t2: `If I [had:have] more time, I would learn the guitar.
If it [were:be] warmer, we would go swimming.
She [would buy:buy] a horse if she had enough money.
If you [practised:practise] more, you would play better.
What [would you say:you / say] if you met the president?
If we [lived:live] on a farm, we would have lots of animals.
I [wouldn't eat:not eat] that if I were you.
If my dog [could:can] talk, it would tell me its secrets.
If they [didn't live:not live] so far away, we would visit them more often.
He [would be:be] happier if he had more friends.
If I [knew:know] her number, I would call her.`,
    choose: `If you mix red and blue, you {get|would get} purple.
If I {were|am} a teacher, I would give no homework.
If it {doesn't rain|won't rain}, we'll go for a walk.
She would come if you {asked|ask} her.
If we {had|would have} a car, we could drive to the lake.
If you {had studied|studied} harder, you would have passed.`,
    t3: `If you [had told:tell] me, I would have come.
If I had seen you, I [would have said:say] hello.
We [would have won:win] if we had played better.
If she [hadn't forgotten:not forget] her ticket, she would have caught the train.
If they had asked, I [would have helped:help] them.
If I [had woken up:wake up] earlier, I wouldn't have been late.
He [wouldn't have fallen:not fall] if he had been more careful.
If we [had taken:take] the bus, we would have arrived on time.
If you had called, I [would have picked:pick] you up.`,
    text: `If you [eat] too many sweets, you [will] get toothache.
If I [could] fly, I [would] fly to school every day.
If we [had] known about the party, we [would] have come.
If it [is] sunny tomorrow, we [will] go to the lake. If it [were] summer, we [would] go swimming.`,
    trans: `Wenn du dich beeilst, erwischst du den Bus. => If you hurry, you will catch the bus.
Wenn ich ein Haustier hätte, wäre ich glücklich. => If I had a pet, I would be happy.
Wenn sie mich gefragt hätte, hätte ich ja gesagt. => If she had asked me, I would have said yes.
Was machst du, wenn es regnet? => What will you do if it rains?
Wenn ich fliegen könnte, würde ich nach Australien fliegen. => If I could fly, I would fly to Australia.
Ich würde kommen, wenn ich Zeit hätte. => I would come if I had time.`,
    err: `If I would have time, I would come. => If I had time, I would come.
If she will come, I will be happy. => If she comes, I will be happy.
If we had won, we would celebrated. => If we had won, we would have celebrated.
If I am you, I would apologise. => If I were you, I would apologise.`
  } });

  ext('e-presentperfect', { more: {
    form: `We [have just arrived:just / arrive].
He [has written:write] three emails today.
I [have forgotten:forget] my password.
[Have you seen:you / see] my glasses?
They [haven't finished:not finish] the project yet.
My brother [has grown:grow] a lot.
She [has never ridden:never / ride] a horse.`,
    ever: `Have you ever climbed a mountain? :: ✓ => Yes, I have.
Has Lisa ever been to Vienna? :: ✓ => Yes, she has.
Have your parents ever been to Spain? :: ✗ => No, they haven't.
Has Mr Bauer ever been angry? :: ✓ => Yes, he has.
Have you ever lost your phone? :: ✗ => No, I haven't.
Has it ever snowed in July here? :: ✗ => No, it hasn't.`,
    jay: `Has the film started {yet|just}?
I've {already|yet} packed my bag. Let's go!
She hasn't called me {yet|already}.
They've {just|yet} come back from holiday.
I've {never|ever} seen snow in May.
Have you {ever|never} been to a concert?
We've {already|yet} eaten. Thanks!
He's {just|yet} gone out. He'll be back in an hour.
Has your sister passed her driving test {yet|just}?
I haven't read this book {yet|already}.`,
    forsince: `He has had a cold [since] Friday.
We have lived in this flat [for] ten years.
I have been awake [since] six o'clock.
They have been married [for] twenty years.
She hasn't eaten meat [since] 2019.
I have had this bike [for] two years.
It hasn't snowed [since] last winter.
My grandma has lived alone [since] my grandpa died.
We have waited [for] an hour.
Tom has been in hospital [for] a week.
I have known Max [since] kindergarten.`,
    tense: `We {have been|were} friends since kindergarten.
Last week I {visited|have visited} my grandma.
I {have already seen|already saw} this film. Let's watch something else.
When {did you buy|have you bought} your new bike?`,
    prog: `They [have been talking:talk] on the phone for an hour.
I [have been learning:learn] French since September.
How long [has she been living:she / live] in Graz?
It [has been snowing:snow] since this morning.
We [have been waiting:wait] for you for ages!
My brother [has been playing:play] computer games all afternoon.`,
    text: `I [have] never [eaten] sushi, but my sister [ate] it last week in Vienna.
We [have been] friends [since] kindergarten. We [met] when we were three.
"[Has] the bus [left] yet?" – "Yes, it [left] five minutes ago."
My dad [has worked] at this company [for] ten years.`,
    trans: `Ich habe diesen Film schon gesehen. => I have already seen this film.
Wir sind seit Montag hier. => We have been here since Monday.
Hast du jemals einen Wal gesehen? => Have you ever seen a whale?
Ich lerne seit zwei Stunden. => I have been studying for two hours.`,
    err: `She has went home. => She has gone home.`
  } });

  ext('e-confusing', { more: {
    makedo: `I have to [do] the washing today.
Can you [make] a cup of tea?
Did you [make] your bed this morning?
We [did] a test in maths yesterday.
Please don't [make] me angry!
She [does] yoga every morning.
They [made] a snowman in the garden.
I [did] the cleaning yesterday.
Can we [make] a deal?
He [made] a phone call.
Let's [do] an exercise together.
Who [made] this mess?`,
    choose: `Can you {tell|say} me a story?
She {said|told} goodbye and left.
I'd like to {borrow|lend} a book from the library.
I can {lend|borrow} you some money.
{Take|Bring} your coat with you when you go out.
Could you {bring|take} the newspaper to me?
Mrs Gruber {teaches|learns} maths at our school.
We {learn|teach} English at school.
How much money does a nurse {earn|win}?
Who {won|earned} the race?
{Tell|Say} me the truth!
Did he {say|tell} anything?`,
    error: `I will make a test tomorrow. => I will do a test tomorrow.
Can I lend your pen? => Can I borrow your pen?
She told that she was tired. => She said that she was tired.
I become a lot of presents for my birthday. => I get a lot of presents for my birthday.`,
    ff: `die Bank (Geldinstitut) => bank
das Rezept (zum Kochen) => recipe
der Rock => skirt
die Fantasie => imagination
das Kino => cinema
die Marmelade => jam
der Dom => cathedral
die Kritik => criticism`,
    text: `I [lost] my wallet and I [missed] the bus. What a day!
Mr Huber [teaches] us history. We [learn] a lot in his lessons.
Could you [bring] me a glass of water? And please [take] the empty plates to the kitchen.`,
    choose2: `{Watch|Look} out! There's a car!
I {heard|listened} a strange noise last night.
Please {remind|remember} me to buy milk.
Do you {remember|remind} our first day at school?
I love {watching|looking} football on TV.
We {missed|lost} the beginning of the film.
Our team {lost|missed} the game 0:2.
The thief {stole|robbed} her handbag.`,
    ff2: `die Kette (Schmuck) => necklace
der Becher => mug
der Prospekt => brochure
das Formular => form
die Mappe => folder
der Hut => hat`
  } });
})();
