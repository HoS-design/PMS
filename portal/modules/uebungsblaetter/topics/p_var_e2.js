/* Englisch – mehr Varianten für die sechs Blätter, Teil 2 (present simple/progressive, word order, questions, prepositions, modals, past) */
(function () {
  const ext = UB.extendTopic;

  ext('e-presentsimple', { more: {
    third: `try => tries
fly => flies
do => does
have => has
miss => misses
fix => fixes
cry => cries
wash => washes`,
    gap: `The baby [cries:cry] a lot at night.
My dad [washes:wash] the car every Sunday.
We [don't have:not have] English on Fridays.
She [studies:study] very hard.
The train [leaves:leave] at 8.15.
My parents [don't drink:not drink] coffee.`,
    dodoes: `{Does|Do} your dad work in Graz?
They {don't|doesn't} live in Vienna.
{Do|Does} the children like the game?
He {doesn't|don't} speak French.
{Does|Do} it rain a lot in Ireland?
We {don't|doesn't} go to school on Sundays.
{Do|Does} I need a jacket today?`,
    neg: `My dad watches TV every evening. :: not => My dad doesn't watch TV every evening.
We live in a big house. :: not => We don't live in a big house.
The shop opens at 8. :: not => The shop doesn't open at 8.
They have lunch at school. :: not => They don't have lunch at school.
Lisa speaks Italian. :: not => Lisa doesn't speak Italian.
My cat likes milk. :: not => My cat doesn't like milk.`,
    quest: `he / speak English => Does he speak English?
they / live in Graz => Do they live in Graz?
your brother / play football => Does your brother play football?
you / have breakfast every day => Do you have breakfast every day?
the bus / stop here => Does the bus stop here?
Lisa / walk to school => Does Lisa walk to school?`,
    answer: `Does your dad cook? – Yes, [he does].
Do you live near the school? – No, [I don't].
Does Lisa like horses? – Yes, [she does].
Do your friends play computer games? – Yes, [they do].
Does the shop open on Sundays? – No, [it doesn't].`,
    text: `My grandma [lives] in a small village. She [has] a big garden and she [grows] vegetables. She [doesn't] like the city.
"Where [does] your brother work?" – "He [works] in a bank. He [doesn't] like his job very much."
Every morning I [get] up at 6.30. I [have] breakfast with my sister, and then we [walk] to school together.
Tom [doesn't] eat meat. He [eats] a lot of vegetables and he [loves] pasta.
"[Do] you speak Spanish?" – "No, I [don't]. But my mum [does]."
On Saturdays my family [goes] shopping. My dad [drives] and my mum [writes] the shopping list.`,
    trans: `Mein Vater arbeitet in einem Krankenhaus. => My dad works in a hospital.
Spielt deine Schwester Klavier? => Does your sister play the piano?
Wir sehen am Abend nicht fern. => We don't watch TV in the evening.
Die Schule beginnt um acht Uhr. => School starts at eight o'clock.`,
    err: `My brother watch TV every day. => My brother watches TV every day.
Do she like cats? => Does she like cats?`
  } });

  ext('e-progressive', { more: {
    ing: `run => running
write => writing
sit => sitting
lie => lying
dance => dancing
get => getting
read => reading
ride => riding`,
    gap: `Be quiet! Dad [is sleeping:sleep].
We [are having:have] lunch right now.
The children [are playing:play] in the garden.
Look! Lisa [is wearing:wear] a new dress.
What [are you doing:you / do]?
It [is raining:rain] at the moment.
I [am waiting:wait] for the bus.
Tom [isn't listening:not listen] to the teacher.`,
    neg: `We are watching TV. :: not => We aren't watching TV.
He is doing his homework. :: not => He isn't doing his homework.
It is snowing. :: not => It isn't snowing.
I am listening. :: not => I'm not listening.`,
    quest: `he / do his homework => Is he doing his homework?
it / rain => Is it raining?
you / wait for the bus => Are you waiting for the bus?
the children / sleep => Are the children sleeping?`,
    simpprog: `My dad {works|is working} in a bank.
Listen! Somebody {is singing|sings}.
We {have|are having} English every Monday.
Quiet, please! I {am talking|talk} on the phone.
She usually {walks|is walking} to school.
Where is Tom? – He {is playing|plays} in his room.`,
    mix: `Look! The cat [is eating:eat] my sandwich!
My sister [plays:play] the piano every day.
Right now I [am sitting:sit] in the kitchen.
We usually [go:go] to bed at nine.
Listen! The birds [are singing:sing].
My mum often [reads:read] in the evening.
At the moment Tom [is writing:write] an email.
It [snows:snow] a lot in winter here.`,
    text: `It's 8 o'clock. My dad [is making] breakfast and my mum [is reading] the news. My sister [is still sleeping].
"Hi Lisa! What [are] you [doing]?" – "I [am waiting] for the bus. It [is] always late on Mondays."
Every day Tom [walks] to school, but today he [is going] by bike.`,
    trans: `Die Kinder spielen gerade draußen. => The children are playing outside at the moment.
Hörst du mir zu? => Are you listening to me?
Er schläft gerade nicht. => He isn't sleeping at the moment.
Schau! Der Hund schwimmt! => Look! The dog is swimming!`,
    err: `Listen! The baby cry. => Listen! The baby is crying.
She is play tennis now. => She is playing tennis now.
Are you understanding me? => Do you understand me?
They is watching TV. => They are watching TV.`
  } });

  ext('e-wordorder', { more: {
    svo: `the children >> are eating >> ice cream
my grandma >> bakes >> a cake`,
    place: `the cat >> sleeps >> on the sofa >> every afternoon
Lisa >> met >> Tom >> at the cinema >> yesterday`,
    fix: `I like very much pizza. => I like pizza very much.
She speaks very well English. => She speaks English very well.
We play in the garden football. => We play football in the garden.`,
    trans: `Ich esse sehr gern Pizza. => I like pizza very much.
Wir haben gestern im Park Fußball gespielt. => We played football in the park yesterday.
Er ist nie zu spät. => He is never late.
Sie liest jeden Abend ein Buch. => She reads a book every evening.`
  } });

  ext('e-questions', { more: {
    choose: `{Why|What|Where} are you sad? – Because I lost my phone.
{How old|How much|How many} is your brother? – Fourteen.
{What|Who|Where} is your favourite colour? – Blue.
{How many|How much|How old} brothers have you got? – Two.
{Whose|Who|Where} bag is this? – It's Tom's.
{How|What|Why} do you go to school? – By bus.`,
    word: `[Why] are you late? – Because I missed the bus.
[How] are you? – Fine, thanks.
[What] time is it? – It's three o'clock.
[How old] is your sister? – She's nine.
[Which] colour do you like better, red or blue? – Red.
[Whose] phone is this? – It's mine.
[How many] cousins have you got? – Five.
[How much] is the T-shirt? – 12 euros.`,
    ask: `Mia gets up early. :: When? => When does Mia get up?
The children eat pizza. :: What? => What do the children eat?
Your dad works in Linz. :: Where? => Where does your dad work?
They visit their grandma. :: Who? => Who do they visit?
She is happy. :: Why? => Why is she happy?
Paul goes to school. :: How? => How does Paul go to school?
You went to the cinema. :: When? => When did you go to the cinema?
Lisa bought a jacket. :: What? => What did Lisa buy?`,
    subj: `Someone ate my cake! :: Who? => Who ate my cake?
Lisa met someone. :: Who? => Who did Lisa meet?
Something broke the window. :: What? => What broke the window?
You saw something. :: What? => What did you see?
Someone lives in this house. :: Who? => Who lives in this house?
Tom helped someone. :: Who? => Who did Tom help?`,
    tags: `She isn't here, [is she]?
They live in Graz, [don't they]?
You didn't call me, [did you]?
He can't swim, [can he]?
We are late, [aren't we]?
Lisa has got a cat, [hasn't she]?
You went to the party, [didn't you]?
It won't rain, [will it]?`,
    trans: `Wie alt bist du? => How old are you?
Wann beginnt der Film? => When does the film start?
Wem gehört dieses Fahrrad? => Whose bike is this?
Was hast du gestern gemacht? => What did you do yesterday?
Du bist müde, oder? => You're tired, aren't you?
Wie viele Geschwister hast du? => How many brothers and sisters have you got?`,
    err: `Where does she lives? => Where does she live?
Why you are sad? => Why are you sad?
You like pizza, do you? => You like pizza, don't you?
How much brothers have you got? => How many brothers have you got?`
  } });

  ext('e-prepositions', { more: {
    place: `The cat is hiding {under|on|in} the bed.
There is a lamp {next to|in|under} the sofa.
The car is {in front of|in|on} the house.
The ball is {behind|in|on} the tree.
The milk is {in|on|at} the fridge.
Our school is {opposite|in|under} the park.
The picture is {above|in|under} the bed.
The bank is {between|in|on} the café and the bakery.`,
    how: `She goes to work [by] train.
I came here [on] foot.
We flew to London [by] plane.
My grandpa goes to town [by] bus.`,
    time: `The film starts [at] eight o'clock.
We go skiing [in] winter.
My birthday is [on] 5th June.
I always read [at] night.
School finishes [in] July.
I was born [in] 2013.
We have maths [on] Tuesday.
I get up early [in] the morning.
What do you do [at] the weekend?
We open our presents [at] Christmas.`,
    mix: `My friend lives {in|at|on} London.
Let's meet {on|in|at} Friday.
The book is {on|in|at} the shelf.
I'll see you {in|at|on} the afternoon.
He's waiting {at|in|on} the bus stop.
We go to the beach {in|on|at} August.
The poster is {on|in|at} the wall.`,
    text: `My little brother was born [on] a Sunday [in] winter. He came home [on] Christmas Day!
I usually go to school [by] bus, but [on] sunny days I go [by] bike.
The cat is sitting [on] the roof, and the dog is lying [under] the table [in] the kitchen.`,
    trans: `Die Katze liegt unter dem Tisch. => The cat is lying under the table.
Wir fahren mit dem Bus. => We go by bus.
Am Wochenende spiele ich Tennis. => At the weekend I play tennis.
Ich bin im Juni geboren. => I was born in June.`
  } });

  ext('e-modals', { more: {
    can: `My baby sister [can't] talk yet.
[Can] you help me, please?
Cats [can] see in the dark.
I'm sorry, I [can't] come to your party.
Penguins [can] swim very well.
My dad [can] speak three languages.
We [can't] go out. It's raining.
[Can] I open the window?
Tom [can't] find his keys.`,
    ability: `penguins / fly :: ✗ => Penguins can't fly.
my little brother / read :: ✓ => My little brother can read.
cats / climb trees :: ✓ => Cats can climb trees.
I / play the guitar :: ✗ => I can't play the guitar.
elephants / jump :: ✗ => Elephants can't jump.`,
    must: `You {mustn't|don't have to} talk during the test.
We {don't have to|mustn't} wear a uniform at our school.
You {mustn't|don't have to} cross the road when the light is red.
I {don't have to|mustn't} cook tonight. We're going to a restaurant.
Children {mustn't|don't have to} play near the river. It's dangerous.
You {don't have to|mustn't} pay. It's free!`,
    haveto: `We [have to] be at school at 7.45.
Lisa [has to] look after her little brother.
You [don't have to] come if you don't want to.
My dad [has to] get up at five every day.
I [don't have to] do my homework today. There isn't any!
[Do] you [have to] wear glasses?`,
    should: `I can't sleep. :: drink some warm milk => You should drink some warm milk.
I'm cold. :: put on a jacket => You should put on a jacket.
I've got a test tomorrow. :: study tonight => You should study tonight.
My room is a mess. :: tidy it up => You should tidy it up.
I eat too many sweets. :: eat more fruit => You should eat more fruit.`,
    mix: `You {must|can} wear a helmet when you ride a bike. It's the law.
{Can|Must} I borrow your pen, please?
You {shouldn't|mustn't} eat so much chocolate. It isn't good for you.
I {can't|mustn't} speak Chinese.
We {don't have to|mustn't} hurry. We have lots of time.
You {mustn't|don't have to} feed the animals at the zoo.
{Should|Must} I take an umbrella? – Yes, it might rain.`,
    text: `At our school you [mustn't] use your phone in class, but you [can] use it in the break.
"[Can] you swim?" – "Yes, I [can]. But I [can't] dive."
My brother [has to] wear glasses. I [don't have to] – my eyes are fine.`,
    trans: `Kannst du mir helfen? => Can you help me?
Du solltest mehr Wasser trinken. => You should drink more water.
Ich muss mein Zimmer aufräumen. => I have to tidy my room.
Wir dürfen in der Klasse nicht essen. => We mustn't eat in class.`,
    err: `He can to swim. => He can swim.
You don't must shout. => You mustn't shout.`
  } });

  ext('e-irregular', { more: {
    gap: `Last night I [slept:sleep] very badly.
She [made:make] a cake for my birthday.
We [drank:drink] lemonade at the party.
I [forgot:forget] my homework at home.`,
    mix3: `Have you ever [eaten:eat] sushi?
She [ate:eat] a whole pizza yesterday.
I have [lost:lose] my keys!
We [lost:lose] the match last Sunday.
He has never [flown:fly] in a plane.
They [flew:fly] to Spain last summer.
Have you [heard:hear] the news?
I [heard:hear] a strange noise last night.`,
    text: `Yesterday was my birthday. My friends [came] to my house and we [ate] lots of cake. My grandma [gave] me a book and my parents [bought] me a bike.
On Saturday we [drove] to the mountains. We [left] early, [had] a picnic by a lake and [swam] in the cold water.`
  } });

  ext('e-pastsimple', { more: {
    waswere: `My grandparents [were] in Vienna last week.
It [was] very hot yesterday.
[Was] Tom at school on Monday?
We [weren't] at home last night.
You [were] very lucky!
I [wasn't] tired after the trip.
The shops [were] closed on Sunday.`,
    ed: `dance => danced
cry => cried
plan => planned
open => opened
try => tried
help => helped
carry => carried
shop => shopped`,
    gap: `Yesterday Tom [played:play] football in the park.
We [didn't watch:not watch] TV last night.
My mum [made:make] pancakes for breakfast.
I [met:meet] Lisa in town on Saturday.
The film [ended:end] at ten o'clock.
They [came:come] home very late.
I [didn't like:not like] the food.
She [studied:study] for the test all weekend.`,
    neg: `They won the match. :: not => They didn't win the match.
He bought a new phone. :: not => He didn't buy a new phone.
I liked the film. :: not => I didn't like the film.
We had a test. :: not => We didn't have a test.
She came to school. :: not => She didn't come to school.`,
    quest: `he / call you => Did he call you?
you / enjoy the trip => Did you enjoy the trip?
Lisa / win the race => Did Lisa win the race?
your parents / like the film => Did your parents like the film?`,
    wh: `Who [did] you [meet] in town? – Lisa.
How [did] you [get] home? – By bus.
Why [did] he [leave] early? – He was tired.
What [did] she [buy]? – A new jacket.`,
    error: `We goed to the zoo. => We went to the zoo.
She didn't came home. => She didn't come home.
I buyed a T-shirt. => I bought a T-shirt.
Did they won the game? => Did they win the game?`,
    text: `Last weekend I [visited] my cousin in Salzburg. We [walked] through the old town and [ate] Mozartkugeln. I [didn't want] to go home!
Yesterday my dog [ran] away. We [looked] for him everywhere. In the end, my neighbour [found] him in her garden.`,
    trans: `Ich war gestern krank. => I was ill yesterday.
Wir haben am Samstag Pizza gegessen. => We ate pizza on Saturday.
Sie hat das Spiel nicht gewonnen. => She didn't win the game.
Wo warst du letzte Woche? => Where were you last week?`,
    err: `I didn't went to school. => I didn't go to school.
She was at home yesterday? => Was she at home yesterday?
They play football yesterday. => They played football yesterday.`
  } });

  ext('e-pastprogressive', { more: {
    form: `At 8 o'clock yesterday I [was sleeping:sleep].
While Dad [was cooking:cook], Mum was reading.
What [were you doing:you / do] at 6 o'clock?
The sun [was shining:shine] all afternoon.
We [weren't listening:not listen] to the teacher.
Lisa [was riding:ride] her bike when she fell.
At midnight my parents [were watching:watch] a film.
The dogs [were barking:bark] all night.
I [was doing:do] my homework when you called.
It [wasn't raining:not rain] when we left.`,
    choose: `While I {was reading|read}, my brother was playing games.
I {saw|was seeing} Tom in town yesterday.
They {were playing|played} cards when the lights went out.
When the phone rang, I {was having|had} a shower.
We {visited|were visiting} our aunt last weekend.
While we {were walking|walked} home, it started to snow.`,
    when: `I [was reading:read] when my friend [called:call].
While Mum [was driving:drive], a cat [ran:run] across the road.
When I [looked:look] out of the window, it [was snowing:snow].
They [were having:have] dinner when the doorbell [rang:ring].
He [fell:fall] while he [was skiing:ski].
When we [arrived:arrive], the children [were sleeping:sleep].`,
    usedto: `People [used to] write letters, now they write emails.
My mum [used to] have long hair.
I [didn't use to] like vegetables, but now I love them.
There [used to] be a cinema in our town.
[Did] you [use to] play with dolls?
We [used to] go camping every summer.`,
    past: `I watched cartoons every morning. :: not any more => I used to watch cartoons every morning.
My grandma lived on a farm. :: not any more => My grandma used to live on a farm.
Tom was afraid of dogs. :: not any more => Tom used to be afraid of dogs.`,
    text: `Last night I [was watching] TV when suddenly the lights [went] out. My brother [was having] a shower and he [screamed]!
When I was small, I [used to] be afraid of the dark. I always [slept] with the light on.`,
    trans: `Wir spielten Karten, als es klingelte. => We were playing cards when the doorbell rang.
Als ich aufwachte, schien die Sonne. => When I woke up, the sun was shining.
Mein Opa hat früher geraucht. => My grandpa used to smoke.
Was hast du um acht Uhr gemacht? => What were you doing at eight o'clock?`,
    err: `When I arrived, they were eat. => When I arrived, they were eating.
I was walking home when I was seeing a fox. => I was walking home when I saw a fox.
She used to living in Graz. => She used to live in Graz.
We was playing football. => We were playing football.`
  } });
})();
