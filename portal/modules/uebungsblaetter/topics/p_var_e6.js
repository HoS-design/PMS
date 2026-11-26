/* Englisch – mehr Varianten, Teil 6 (Grammatik Kl. 1–3): Pools mindestens 4–5 × so groß wie die Aufgabenzahl */
(function () {
  const ext = UB.extendTopic;

  ext('e-be', { more: {
    form: `Our teacher [is] very nice.
The children [are] in the playground.
I [am] twelve years old.
My shoes [are] under the bed.
The weather [is] great today.
You [are] my best friend.
Mr Brown [is] our neighbour.
We [are] hungry.
The museum [is] closed on Mondays.
My cousins [are] from Graz.
It [is] eight o'clock.`,
    short: `She is my sister. => She's my sister.
We are in the same class. => We're in the same class.
I am from Austria. => I'm from Austria.
It is a nice day. => It's a nice day.
You are very funny. => You're very funny.
He is in the kitchen. => He's in the kitchen.
They are twins. => They're twins.
I am at home. => I'm at home.
We are ready. => We're ready.
She is twelve. => She's twelve.
It is my birthday today. => It's my birthday today.
You are late. => You're late.`,
    neg: `She is my aunt. :: not => She isn't my aunt.
We are tired. :: not => We aren't tired.
I am hungry. :: not => I'm not hungry.
It is Monday today. :: not => It isn't Monday today.
They are at school. :: not => They aren't at school.
My dog is big. :: not => My dog isn't big.
You are right. :: not => You aren't right.
I am ten. :: not => I'm not ten.`,
    quest: `she / your teacher => Is she your teacher?
they / at home => Are they at home?
you / tired => Are you tired?
the shop / open => Is the shop open?
we / late => Are we late?
your parents / from Linz => Are your parents from Linz?
the film / good => Is the film good?
it / your birthday today => Is it your birthday today?`,
    answer: `Are you from Vienna? – No, [I'm not].
Is your sister twelve? – Yes, [she is].
Are your friends at the park? – No, [they aren't].
Is it cold today? – Yes, [it is].
Am I right? – Yes, [you are].
Is the shop open? – No, [it isn't].
Are you and Tom in the same class? – Yes, [we are].
Is Mr Smith your teacher? – No, [he isn't].`,
    err: `My friends is at the cinema. => My friends are at the cinema.
He are twelve years old. => He is twelve years old.
I is in the garden. => I am in the garden.
Is you tired? => Are you tired?`
  } });

  ext('e-havegot', { more: {
    choose: `{Has|Have} Lisa got a brother?
They {have|has} got a big garden.
My cat {has|have} got green eyes.
{Have|Has} we got any milk?
He {hasn't|haven't} got a computer.
I {have|has} got two sisters.
{Has|Have} the hotel got a pool?
Our flat {has|have} got a balcony.
You {haven't|hasn't} got my book.`,
    form: `My grandma [has got] a little dog.
I [have got] a new bike.
The children [have got] a lot of homework.
Our school [has got] a big library.
They [have got] three cats.
Tom [has got] a cold.
We [have got] a new car.
The house [has got] a red door.
You [have got] beautiful hair.`,
    neg: `We have got a dog. :: not => We haven't got a dog.
My brother has got a phone. :: not => My brother hasn't got a phone.
I have got a garden. :: not => I haven't got a garden.
They have got a car. :: not => They haven't got a car.
The town has got a cinema. :: not => The town hasn't got a cinema.
Mia has got long hair. :: not => Mia hasn't got long hair.
We have got time. :: not => We haven't got time.`,
    quest: `she / a brother => Has she got a brother?
your school / a library => Has your school got a library?
we / any bread => Have we got any bread?
Tom / a bike => Has Tom got a bike?
your parents / a car => Have your parents got a car?
the cat / a name => Has the cat got a name?
you / a pen => Have you got a pen?
your town / a park => Has your town got a park?`,
    answer: `Have you got a pet? – Yes, [I have].
Has your sister got a phone? – No, [she hasn't].
Have we got any homework? – No, [we haven't].
Has the house got a garden? – Yes, [it has].
Have the children got a ball? – Yes, [they have].
Has your dad got a car? – No, [he hasn't].
Have you and Lisa got a dog? – Yes, [we have].`,
    trans: `Ich habe eine kleine Schwester. => I have got a little sister.
Hast du einen Bleistift? => Have you got a pencil?
Unsere Schule hat keinen Garten. => Our school hasn't got a garden.
Hat dein Bruder ein Handy? – Ja. => Has your brother got a phone? – Yes, he has.
Die Katze hat grüne Augen. => The cat has got green eyes.`,
    err: `She have got a dog. => She has got a dog.
We hasn't got a car. => We haven't got a car.
Has you got a pen? => Have you got a pen?
Have Lisa got a sister? – Yes, she has. => Has Lisa got a sister? – Yes, she has.`
  } });

  ext('e-pronouns', { more: {
    subj: `my sister => she
the dog => it
Tom and Lisa => they
my mum => she
the teacher (Mr Smith) => he
you and your brother => you
my dad and I => we
the house => it
the children => they`,
    obj: `Where is Lisa? I can't find [her].
I've got a new game. Do you want to play [it]?
My grandparents are nice. I often visit [them].
Mr Brown is our teacher. We like [him].
Can you help [me], please?
We are at the park. Come and meet [us]!
Where are my keys? I can't find [them].
The book is great. I'm reading [it] now.
This is my cousin. Say hello to [her].`,
    choose: `Look at {me|I}!
{We|Us} play football every day.
I don't know {them|they}.
{They|Them} live in Graz.
Can you see {him|he}?
{He|Him} is my best friend.
Give the book to {me|I}, please.
{We|Us} are hungry.
Do you like {them|they}?
{They|Them} are my cousins.
Please call {him|he} tonight.
{He|Him} can swim very well.
Tell {me|I} the answer.
I often play with {him|he}.
{They|Them} are late again.`,
    self: `I taught [myself] to play the guitar.
Lisa looked at [herself] in the mirror.
Help [yourself] to some cake!
The cat is cleaning [itself].
We enjoyed [ourselves] at the party.
Tom and Ben help [each other] with their homework.
He cut [himself] with a knife.
My friends and I write to [each other] every week.
They built the treehouse [themselves].
Did you make this card [yourself]?
The twins look like [each other].`
  } });

  ext('e-nouns', { more: {
    plural: `book => books
box => boxes
baby => babies
bus => buses
toy => toys
watch => watches
lady => ladies
dish => dishes
day => days
fox => foxes
city => cities
house => houses
brush => brushes
boy => boys
party => parties
bench => benches
apple => apples
story => stories
kiss => kisses
monkey => monkeys
lunch => lunches
cherry => cherries
car => cars
peach => peaches`,
    aan: `I've got {a|an} dog.
She is eating {an|a} apple.
We need {an|a} umbrella.
There's {a|an} bird on the roof.
It takes {an|a} hour.
My dad is {a|an} doctor.
I want {an|a} ice cream.
She has got {a|an} uncle in London.
That's {an|a} interesting book.
He's got {a|an} new phone.
I saw {an|a} elephant at the zoo.`,
    this: `{These|This} shoes are too small.
{That|Those} is my school over there.
{This|These} book is really good.
{Those|That} birds in the sky are swallows.
Is {this|these} your pen?
{These|This} apples are sweet.
Look at {that|those} big dog over there!`,
    saxon: `the bike of my brother => my brother's bike
the toys of the children => the children's toys
the cat of Lisa => Lisa's cat
the room of my parents => my parents' room
the car of Mr Brown => Mr Brown's car
the shoes of the girls => the girls' shoes
the ball of the dog => the dog's ball`,
    irr: `The [children:child] are playing in the garden.
My [feet:foot] are cold.
The dentist checks my [teeth:tooth].
There are three [men:man] at the door.
How many [people:person] are coming?
Autumn [leaves:leaf] are red and yellow.
We caught five [fish:fish] in the lake.`
  } });

  ext('e-thereis', { more: {
    isare: `There {are|is} two cats in the garden.
There {is|are} a big tree in front of our house.
There {are|is} three bedrooms in our flat.
There {is|are} some juice in the glass.
There {are|is} many children in the park.
There {is|are} a new girl in our class.
There {are|is} some apples on the table.
There {is|are} a lot of snow today.
There {are|is} twenty-five students in my class.
There {is|are} a cinema in our town.
There {are|is} some books on the shelf.
There {is|are} an old castle on the hill.`,
    neg: `There is a TV in my room. :: not => There isn't a TV in my room.
There are some cows on the farm. :: not => There aren't any cows on the farm.
There is a cinema near my house. :: not => There isn't a cinema near my house.
There are some eggs in the fridge. :: not => There aren't any eggs in the fridge.
There is a bus stop in our street. :: not => There isn't a bus stop in our street.
There are some flowers in the vase. :: not => There aren't any flowers in the vase.
There is a clock in the classroom. :: not => There isn't a clock in the classroom.`,
    someany: `There are {some|any} flowers in the garden.
Are there {any|some} cookies left?
I need {some|any} help, please.
There aren't {any|some} buses on Sundays.
Would you like {some|any} tea?
Have you got {any|some} brothers or sisters?
We haven't got {any|some} homework today.
There is {some|any} cheese in the fridge.
Is there {any|some} milk left?
I'd like {some|any} water, please.
She hasn't got {any|some} pets.
Can I have {some|any} more pizza?
There aren't {any|some} chairs in the room.
We bought {some|any} bread at the bakery.
Do you have {any|some} questions?
There are {some|any} nice shops in the city centre.`,
    trans: `Im Kühlschrank ist keine Milch. => There isn't any milk in the fridge.
Gibt es hier eine Bank? => Is there a bank here?
In meiner Klasse sind 24 Kinder. => There are 24 children in my class.
Es gibt keine Äpfel mehr. => There aren't any apples left.
Sind Kekse in der Dose? => Are there any cookies in the tin?
In unserer Straße gibt es einen Supermarkt. => There is a supermarket in our street.`
  } });

  ext('e-presentsimple', { more: {
    third: `play => plays
watch => watches
fly => flies
go => goes
wash => washes
cry => cries
do => does
fix => fixes
study => studies
say => says
kiss => kisses
try => tries
catch => catches
enjoy => enjoys
have => has
miss => misses`,
    dodoes: `{Does|Do} your dad work in Graz?
We {don't|doesn't} have school on Saturday.
{Do|Does} you like pizza?
She {doesn't|don't} eat meat.
{Does|Do} it often rain here?
My friends {don't|doesn't} play tennis.
{Do|Does} they live near you?
Tom {doesn't|don't} like spiders.
{Does|Do} Lisa speak English?`,
    answer: `Does your brother play football? – No, [he doesn't].
Do your parents work? – Yes, [they do].
Does it snow in winter? – Yes, [it does].
Do you like bananas? – No, [I don't].
Does your mum drive a car? – Yes, [she does].
Do you and Ben go to the same school? – No, [we don't].`
  } });

  ext('e-progressive', { more: {
    ing: `run => running
swim => swimming
make => making
play => playing
sit => sitting
write => writing
dance => dancing
read => reading
stop => stopping
lie => lying
shop => shopping
ride => riding
cut => cutting
smile => smiling
get => getting
take => taking`,
    gap: `Shh! The baby [is sleeping:sleep].
We [are having:have] lunch right now.
Look! The dog [is running:run] after the cat.
I [am reading:read] a great book at the moment.
Why [are you laughing:you / laugh]?
Dad [isn't working:not work] today.
The children [are swimming:swim] in the lake.
[Is she listening:she / listen] to music?
They [are waiting:wait] for the bus.`,
    quest: `you / watch TV => Are you watching TV?
the dog / sleep => Is the dog sleeping?
they / play football => Are they playing football?
your mum / work today => Is your mum working today?
we / win => Are we winning?`,
    mix: `Lisa usually [walks:walk] to school.
Be quiet! I [am talking:talk] on the phone.
He [plays:play] tennis every Friday.
Look! It [is snowing:snow].
We [don't watch:not watch] TV in the morning.
What [are you doing:you / do] at the moment?
My brother always [gets up:get up] late.
Right now the cat [is sitting:sit] on the roof.
She [is wearing:wear] her new jacket today.`,
    trans: `Was machst du gerade? => What are you doing?
Er spielt jeden Tag Fußball. => He plays football every day.
Schau, es regnet! => Look, it's raining!
Normalerweise trinke ich Tee, aber heute trinke ich Kakao. => I usually drink tea, but today I'm drinking hot chocolate.
Hörst du mir zu? => Are you listening to me?`
  } });

  ext('e-wordorder', { more: {
    fix: `I play every day football. => I play football every day.
She speaks very well English. => She speaks English very well.
We go always on Sundays to Grandma. => We always go to Grandma on Sundays.
Tomorrow go we to the zoo. => Tomorrow we are going to the zoo.
He reads often comics. => He often reads comics.
I have yesterday seen a film. => I saw a film yesterday.`,
    trans: `Wir fahren im Sommer oft ans Meer. => We often go to the sea in summer.
Am Montag habe ich Englisch. => I have English on Monday.
Sie spielt sehr gut Klavier. => She plays the piano very well.
Gestern war ich im Kino. => I was at the cinema yesterday.
Ich trinke jeden Morgen Milch. => I drink milk every morning.`
  } });

  ext('e-questions', { more: {
    word: `[Where] do you live? – In Linz.
[When] is your birthday? – In May.
[What] is your favourite colour? – Green.
[Who] is your best friend? – Lisa.
[Why] are you sad? – Because I lost my phone.
[How many] brothers have you got? – Two.
[How much] is this T-shirt? – Ten euros.
[What time] does the film start? – At eight.
[How] do you get to school? – By bus.`,
    subj: `Someone called me. :: Who? => Who called you?
Lisa called someone. :: Who? => Who did Lisa call?
Something fell off the table. :: What? => What fell off the table?
Tom saw something. :: What? => What did Tom see?
Someone opened the door. :: Who? => Who opened the door?
Ben met someone at the park. :: Who? => Who did Ben meet at the park?`,
    tags: `You like pizza, [don't you]?
She isn't your sister, [is she]?
They can speak English, [can't they]?
It's cold today, [isn't it]?
Tom doesn't play tennis, [does he]?
You've got a dog, [haven't you]?
We were late, [weren't we]?
He went to the party, [didn't he]?
Lisa will help us, [won't she]?`,
    trans: `Wo wohnst du? => Where do you live?
Warum bist du müde? => Why are you tired?
Wie viele Geschwister hast du? => How many brothers and sisters have you got?
Was machst du am Wochenende? => What do you do at the weekend?
Wer ist deine Lehrerin? => Who is your teacher?`
  } });

  ext('e-prepositions', { more: {
    place: `The cat is sleeping {under|on|between} the bed.
The picture is {on|under|in} the wall.
The milk is {in|on|under} the fridge.
The bank is {next to|under|in} the post office.
The lamp is {above|under|in} the table.
Lisa is sitting {between|on|in} Tom and Ben.
The dog is {in front of|on|in} the door.
The bus stop is {opposite|on|under} the school.
My shoes are {under|on|between} the chair.`,
    time: `My birthday is [in] March.
The film starts [at] seven o'clock.
We go skiing [in] winter.
I get up early [on] Monday mornings.
School starts [in] September.
We have a party [on] my birthday.
I go to bed [at] nine.
It's very hot [in] the afternoon.
We open our presents [on] Christmas Day.
I always read [at] night.
The shop is closed [on] Sundays.`,
    mix: `She is very good {at|in|on} maths.
I'm afraid {of|from|before} spiders.
We are waiting {for|on|to} the bus.
It depends {on|from|of} how much it costs.
He is interested {in|for|at} football.
Thank you {for|of|to} the present!
My brother is good {at|in|for} drawing.
Are you afraid {of|from|for} the dark?
I'm waiting {for|on|at} my friend.
Thank you {for|of|about} coming!
She's interested {in|on|about} animals.
Lisa is really good {at|on|in} swimming.
It depends {on|of|from} you.
Who are you waiting {for|on|to}?
I'm not interested {in|for|at} that film.
Thank you {for|of|to} your email.
They were afraid {of|before|from} the big dog.`
  } });

  ext('e-modals', { more: {
    can: `Birds [can] fly.
I [can't] find my keys.
Fish [can't] walk.
[Can] you play the piano?
My little sister [can't] swim yet.
Lisa [can] run very fast.
Sorry, I [can't] come to your party.
We [can] see the mountains from our window.
Elephants [can't] jump.`,
    ability: `penguins / fly :: ✗ => Penguins can't fly.
my sister / ride a horse :: ✓ => My sister can ride a horse.
I / play the guitar :: ✓ => I can play the guitar.
dogs / climb trees :: ✗ => Dogs can't climb trees.
my grandpa / cook :: ✓ => My grandpa can cook.
my baby brother / walk :: ✗ => My baby brother can't walk.
we / speak English :: ✓ => We can speak English.`,
    haveto: `I [have to] tidy my room every Saturday.
Tom [doesn't have to] wear a uniform at his school.
We [don't have to] get up early on Sundays.
She [has to] walk the dog every morning.
You [have to] wear a helmet on your bike.
My brother [doesn't have to] help in the kitchen.
Students [have to] be quiet in the library.`,
    should: `I've got a headache. :: take a break => You should take a break.
I always forget my homework. :: write it down => You should write it down.
I eat too many sweets. :: not eat so many sweets => You shouldn't eat so many sweets.
My room is a mess. :: tidy it => You should tidy it.
I'm cold. :: put on a jumper => You should put on a jumper.
I watch TV until midnight. :: not watch TV so late => You shouldn't watch TV so late.
I've got a test tomorrow. :: study tonight => You should study tonight.`,
    trans: `Ich kann nicht schwimmen. => I can't swim.
Wir müssen jetzt gehen. => We have to go now.
Du solltest mehr Wasser trinken. => You should drink more water.
Darf ich das Fenster öffnen? => Can I open the window?
Er muss nicht kommen. => He doesn't have to come.
Du solltest nicht so spät ins Bett gehen. => You shouldn't go to bed so late.`
  } });

  ext('e-irregular', { more: {
    mix3: `We [saw:see] a great film yesterday.
Have you ever [eaten:eat] sushi?
She [wrote:write] a letter to her grandma last week.
I have already [done:do] my homework.
They [took:take] the bus to school this morning.
He has [broken:break] his leg.
Lisa [found:find] a wallet in the street yesterday.
We have never [seen:see] snow in May.
My dad [drove:drive] us to the station on Monday.`
  } });

  ext('e-pastsimple', { more: {
    waswere: `I [was] tired after the trip.
The shops [were] closed on Sunday.
[Were] you at the party last night?
My grandma [wasn't] at home yesterday.
The children [were] very loud.
It [wasn't] cold last week.
Where [were] you yesterday?
The film [was] really funny.
We [were] at the beach all day.`,
    ed: `play => played
stop => stopped
try => tried
dance => danced
carry => carried
walk => walked
plan => planned
like => liked
cry => cried
stay => stayed
shop => shopped
live => lived
study => studied
open => opened
drop => dropped
smile => smiled`,
    wh: `When [did] you [arrive]? – At six.
Who [did] you [meet] at the party? – Lisa.
Why [did] Tom [leave] early? – He was ill.
What [did] you [have] for lunch? – Pizza.
Where [did] they [go] on holiday? – To Italy.
How [did] you [get] home? – By taxi.`
  } });

  ext('e-pastprogressive', { more: {
    form: `I [was reading:read] when the phone rang.
We [were playing:play] football when it started to rain.
What [were you doing:you / do] at eight o'clock?
The sun [was shining:shine] all day.
My sister [was taking:take] a shower when the lights went out.
They [weren't listening:not listen] to the teacher.
[Was he sleeping:he / sleep] when you came home?
The children [were singing:sing] in the car.
Mum [was cooking:cook] dinner when I came home.`,
    usedto: `My grandpa [used to] work on a farm.
I [didn't use to] like vegetables, but now I do.
[Did] you [use to] play with dolls?
We [used to] live in a small village.
Tom [didn't use to] wear glasses.
There [used to] be a cinema here.
[Did] your parents [use to] have a dog?
She [used to] be afraid of the dark.`
  } });

  ext('e-future', { more: {
    goingto: `I [am going to visit:visit] my grandma at the weekend.
We [are going to watch:watch] a film tonight.
Look at those clouds! It [is going to rain:rain].
She [isn't going to buy:not buy] the dress. It's too expensive.
[Are you going to play:you / play] football tomorrow?
My parents [are going to paint:paint] the kitchen.
He [is going to learn:learn] Spanish next year.
I [am not going to eat:not eat] that!
[Is Tom going to come:Tom / come] with us?
They [are going to have:have] a party on Friday.`,
    will: `I'm thirsty. – I [will get:get] you a glass of water.
I'm sure you [will like:like] the film.
Don't worry, I [won't tell:not tell] anybody.
In 2050 people [will live:live] on Mars. Maybe!
It's late. I think I [will go:go] to bed.
Perhaps we [will meet:meet] again next year.
That box looks heavy. I [will help:help] you.`,
    trans: `Ich glaube, es wird morgen regnen. => I think it will rain tomorrow.
Wir werden nächste Woche nach London fliegen. (geplant) => We're going to fly to London next week.
Ich mache das Fenster zu. (spontan) => I'll close the window.
Pass auf! Du wirst fallen! => Careful! You're going to fall!
Vielleicht komme ich später. => Maybe I'll come later.`
  } });

  ext('e-presentperfect', { more: {
    form: `We [have finished:finish] our project.
[Has Lisa ever ridden:Lisa / ever / ride] a horse?
I [have lost:lose] my keys.
They [haven't seen:not see] the new film yet.
He [has visited:visit] London three times.
[Have you done:you / do] your homework?
My parents [have bought:buy] a new car.
She [has never been:never / be] to Vienna.`,
    jay: `I have {just|yet} eaten. I'm not hungry.
Have you {ever|yet} seen a ghost?
I have {never|ever} been to America.
Have you done your homework {yet|already}?
She has {already|yet} left. You're too late.
We haven't started {yet|already}.
Tom has {just|yet} called. Call him back!`,
    err: `I have seen him yesterday. => I saw him yesterday.
She has never be to Paris. => She has never been to Paris.
Have you ever eat sushi? => Have you ever eaten sushi?
He has finished already his homework. => He has already finished his homework.`
  } });

  ext('e-pastperfect', { more: {
    trans: `Als wir ankamen, hatte der Film schon begonnen. => When we arrived, the film had already started.
Er hatte seinen Schlüssel vergessen. => He had forgotten his key.
Ich war noch nie zuvor geflogen. => I had never flown before.
Nachdem sie gegessen hatte, ging sie ins Bett. => After she had eaten, she went to bed.
Wir hatten den Zug verpasst. => We had missed the train.`
  } });
})();
