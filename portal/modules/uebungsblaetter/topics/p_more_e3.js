/* Englisch – größere Aufgabenpools (Teil 3) */
(function () {
  const ext = UB.extendTopic;

  ext('e-quantity', { more: {
    sort: `tree|C
bottle|C
cup|C
orange|C
house|C
window|C
sandwich|C
coin|C
rice|U
sugar|U
furniture|U
advice|U
weather|U
salt|U
butter|U
news|U`,
    muchmany: `How {many|much} pets have you got?
There isn't {much|many} juice left.
How {much|many} time do we have?
Were there {many|much} people at the concert?`,
    few: `I've got {a little|a few} money left.
There were {a few|a little} clouds in the sky.
Could you wait {a few|a little} minutes?
I only drink {a little|a few} coffee.
She ate {a few|a little} biscuits.
We need {a little|a few} help.
{A few|A little} people came to the meeting.
There's {a little|a few} cake left.
I know {a few|a little} words in Italian.
Add {a little|a few} sugar.`,
    error: `How many money have you got? => How much money have you got?
There isn't many milk. => There isn't much milk.
I need a few help. => I need a little help.
She has got a little friends. => She has got a few friends.
There are much cars in the street. => There are many cars in the street.
How much people were there? => How many people were there?`,
    some: `I want to go [somewhere] warm.
Has [anybody] seen my bag?
[Everything] is fine, don't worry.
There's [nobody] in the classroom.
I can't see [anything]. It's too dark.
Is there [anywhere] I can charge my phone?
[Somebody] left a message for you.
I've got [something] for you!`,
    text: `How [much] money have you got? – Only [a little]. I spent most of it.
There weren't [many] people at the concert, but [everybody] had fun.
I've looked [everywhere], but I can't find my keys [anywhere].
We need [a few] tomatoes and [a little] cheese for the pizza.`,
    trans: `Ich habe nicht viel Zeit. => I haven't got much time.
Es gibt nur wenige Äpfel. => There are only a few apples.
Jemand hat meinen Stift genommen. => Somebody has taken my pen.
Ich habe überall gesucht. => I have looked everywhere.`
  } });

  ext('e-relative', { more: {
    gap: `The boy [who] sits next to me is funny.
This is the jacket [which] I bought in London.
I have a neighbour [whose] dog barks all night.
That's the school [where] my mum works.
The pizza [which] we had was delicious.
The woman [who] lives upstairs is a doctor.
Do you know the girl [whose] brother plays in our team?
This is the room [where] we have music lessons.
Animals [which] live in the desert need little water.
The students [who] were late had to wait outside.
The town [where] I was born is very small.
The man [whose] house burned down is staying with friends.
I lost the ring [which] my grandma gave me.`,
    join: `I know a woman. She works at the airport. :: who => I know a woman who works at the airport.
This is the game. I got it for my birthday. :: which => This is the game which I got for my birthday.
That's the girl. Her dog is very big. :: whose => That's the girl whose dog is very big.
This is the lake. We go swimming there. :: where => This is the lake where we go swimming.
We have a teacher. He comes from Scotland. :: who => We have a teacher who comes from Scotland.
I read a book. It was about dragons. :: which => I read a book which was about dragons.
That's the restaurant. We had dinner there. :: where => That's the restaurant where we had dinner.`,
    omit: `The jacket that I bought is red. :: Can you leave out the relative pronoun? => yes
The man who called you is my uncle. :: Can you leave out the relative pronoun? => no
The song which we heard was great. :: Can you leave out the relative pronoun? => yes
The girl who won the race is my sister. :: Can you leave out the relative pronoun? => no
The pizza that you made was delicious. :: Can you leave out the relative pronoun? => yes
The bus which goes to the station is late. :: Can you leave out the relative pronoun? => no`,
    comma: `Salzburg, [where] Mozart was born, is a beautiful city.
My grandma, [who] is 90, still walks every day.
The Danube, [which] flows through Vienna, is a long river.
Lisa, [whose] dad is a pilot, has been to many countries.
Our dog, [which] is twelve years old, sleeps a lot.
Mr Brown, [who] teaches us maths, is very strict.`,
    text: `I've got a friend [whose] parents own a restaurant. The restaurant, [which] is in the city centre, is always full.
That's the park [where] we played as children. The tree [which / that] we climbed is still there.
The girl [who / that] sits next to me is from Italy. Her brother, [who] is sixteen, plays football.
The museum [which / that] we visited was boring, but the café [where] we had lunch was great.
My aunt, [whose] husband is a farmer, lives in a village [where] there are more cows than people.`,
    trans: `Der Mann, der dort steht, ist mein Vater. => The man who is standing there is my father.
Das ist der Park, in dem wir Fußball spielen. => That's the park where we play football.
Ich habe eine Freundin, deren Bruder in Wien lebt. => I have a friend whose brother lives in Vienna.
Die Schuhe, die ich gekauft habe, sind zu klein. => The shoes (that) I bought are too small.
Graz, das in der Steiermark liegt, ist eine schöne Stadt. => Graz, which is in Styria, is a beautiful city.
Kennst du den Jungen, der gewonnen hat? => Do you know the boy who won?`,
    err: `The girl which sits next to me is nice. => The girl who sits next to me is nice.
This is the house who I live in. => This is the house which I live in.
The man whose his car is red is my neighbour. => The man whose car is red is my neighbour.
Vienna, that is the capital of Austria, is big. => Vienna, which is the capital of Austria, is big.`
  } });

  ext('e-havegot', { more: {
    choose: `I {haven't|hasn't} got a sister.
{Has|Have} Tom got a girlfriend?
The rabbit {has|have} got white fur.
My friends {have|has} got skateboards.
Our town {hasn't|haven't} got a cinema.
{Have|Has} we got homework today?
My teacher {has|have} got a red car.
You {have|has} got a nice smile.
The children {haven't|hasn't} got any money.
{Has|Have} the hotel got a pool?
Mum and Dad {have|has} got a new sofa.
It {has|have} got four legs.`,
    neg: `The house has got a cellar. :: not => The house hasn't got a cellar.
My parents have got a dog. :: not => My parents haven't got a dog.
Lisa has got long hair. :: not => Lisa hasn't got long hair.
We have got a test today. :: not => We haven't got a test today.
I have got a cold. :: not => I haven't got a cold.
The bike has got a bell. :: not => The bike hasn't got a bell.
You have got a lot of homework. :: not => You haven't got a lot of homework.
My town has got a castle. :: not => My town hasn't got a castle.`,
    quest: `your house / a garden => Has your house got a garden?
you / any brothers => Have you got any brothers?
Lisa / a phone => Has Lisa got a phone?
the hotel / a pool => Has the hotel got a pool?
your grandparents / a dog => Have your grandparents got a dog?
we / time for a break => Have we got time for a break?
your teacher / a car => Has your teacher got a car?
they / a new flat => Have they got a new flat?`,
    answer: `Have you got a brother? – No, [I haven't].
Has your house got a garden? – Yes, [it has].
Have your grandparents got a dog? – Yes, [they have].
Has Lisa got a phone? – Yes, [she has].
Have we got a test today? – No, [we haven't].
Has your dad got a beard? – No, [he hasn't].
Have you got any pets? – Yes, [I have].
Has the hotel got a pool? – No, [it hasn't].`,
    text: `"[Have] you [got] a sister?" – "No, I [haven't], but I [have got] two brothers."
My best friend [has got] a horse. It [has got] a white spot on its nose.
We [haven't got] a garden, but we [have got] a big balcony with lots of flowers.
"[Has] your town [got] a swimming pool?" – "Yes, it [has]. It [has got] a slide too."`,
    trans: `Ich habe Kopfweh. => I have got a headache.
Hat deine Schwester ein Fahrrad? => Has your sister got a bike?
Wir haben einen neuen Lehrer. => We have got a new teacher.
Meine Großeltern haben kein Auto. => My grandparents haven't got a car.`,
    err: `Have your brother got a car? => Has your brother got a car?`
  } });

  ext('e-progressive', { more: {
    ing: `begin => beginning
smile => smiling
die => dying
fly => flying
hit => hitting
come => coming
study => studying
plan => planning`,
    gap: `Look! The sun [is shining:shine].
We [are having:have] lunch right now.
My sister [is talking:talk] on the phone.
Listen! Somebody [is knocking:knock] at the door.
I [am learning:learn] for my test at the moment.`,
    neg: `He is wearing a hat. :: not => He isn't wearing a hat.
I am watching TV. :: not => I'm not watching TV.
The children are sleeping. :: not => The children aren't sleeping.
Mum is working today. :: not => Mum isn't working today.`,
    quest: `he / sleep => Is he sleeping?
you / wear my jacket => Are you wearing my jacket?
the children / have fun => Are the children having fun?
Lisa / cook dinner => Is Lisa cooking dinner?`,
    simpprog: `Be careful! The baby {is sleeping|sleeps}.
Lisa {plays|is playing} tennis twice a week.
Why {are you crying|do you cry}? What's wrong?
Cats {like|are liking} fish.`,
    mix: `Look! The bus [is coming:come].
The bus usually [comes:come] at 7.30.
My grandma [visits:visit] us every Sunday.
Right now she [is sitting:sit] in our kitchen.
Listen! The baby [is crying:cry].
I [don't like:not like] spinach.
Hurry up! We [are waiting:wait] for you.
Lisa [goes:go] to bed at nine every evening.
Today she [is staying:stay] up late.
What [does your dad do:your dad / do]? – He's a doctor.`,
    text: `Look! The children [are playing] in the snow. They always [play] outside when it [snows].
"[Are] you [coming] to the party?" – "Sorry, I can't. I [am helping] my dad today."
My grandpa usually [reads] the newspaper in the morning, but today he [is working] in the garden.
Shh! I [am listening] to the radio. They [are talking] about our school!`,
    trans: `Die Sonne scheint. => The sun is shining.
Sie trägt heute eine Brille. => She is wearing glasses today.
Ich gehe normalerweise zu Fuß, aber heute fahre ich mit dem Bus. => I usually walk, but today I'm taking the bus.
Wartest du auf mich? => Are you waiting for me?`,
    err: `She is haveing breakfast. => She is having breakfast.
Are you understand me? => Do you understand me?
They is waiting outside. => They are waiting outside.
I'm wanting a drink. => I want a drink.`
  } });
})();
