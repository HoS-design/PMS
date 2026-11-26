/* Englisch – größere Aufgabenpools (Teil 7) */
(function () {
  const ext = UB.extendTopic;

  ext('e-prepositions', { more: {
    place: `The ball is {under|on|between} the car.
My jacket is {on|under|in} the chair.
The shoes are {in front of|above|between} the door.
The school is {between|opposite|on} the church and the park.
There's a bird {on|in|under} the roof.
The pen is {in|on|above} the pencil case.
The plane is flying {above|under|between} the clouds.
The bakery is {next to|in|under} the bank.
My bike is {behind|on|above} the garage. You can't see it from the street.
The museum is {opposite|between|under} the station, across the road.
The children are playing {in|on|at} the garden.
We're meeting {at|on|in} the station.`,
    how: `We went to the island [by] boat.
I came home [by] taxi.
They travel to work [by] underground.
Do you go to school [on] foot?
My grandma came [by] bus.
We crossed the lake [by] ship.`,
    time: `My sister was born [in] March.
I'll see you [at] the weekend.
We go to church [on] Sunday.
Leaves fall [in] autumn.
I'll see you [at] the weekend.
The concert is [on] 3rd May.
I usually read [in] the evening.
Let's meet [at] noon.
My grandparents married [in] 1975.
We're having a party [on] New Year's Eve.`,
    mix: `I live {in|at|on} a small village.
My birthday is {in|on|at} April.
The book is {on|in|at} the shelf.
I'm afraid {of|from|before} spiders.
She's proud {of|on|at} her brother.`,
    text: `We arrived [at] the hotel [at] midnight. Our room was [on] the third floor.
[On] Saturday I went [to] the cinema [with] my friends.
My grandparents live [in] a village [near] Graz. We visit them [at] Easter.
The keys are [on] the table [next to] the lamp, not [in] my bag.`,
    trans: `Im Winter fahren wir Ski. => In winter we go skiing.
Ich bin im Jahr 2014 geboren. => I was born in 2014.
Das Bild hängt über dem Sofa. => The picture is hanging above the sofa.
Sie wohnt gegenüber der Schule. => She lives opposite the school.`
  } });

  ext('e-w-opinion', { more: {
    sort: `Rich and poor students look the same.|P
Some uniforms are very old-fashioned.|C
It saves time in the morning.|P
Uniforms are not always warm enough in winter.|C
Uniforms look smart.|P
Young people want to choose their own clothes.|C
There is less pressure to wear expensive brands.|P
Buying several uniforms can be expensive.|C
Uniforms make students feel equal.|P
Some students feel uncomfortable in a tie.|C`,
    phrase: `[In my opinion], school should start at nine.
[Secondly], sleep is important for learning.
[For example], many teenagers go to bed late.
[On the other hand], parents often start work early.
[However], most students would be happier.
[To sum up], a later start would be a good idea.`,
    choose: `{I think|I'm thinking} that sport is important.
{Firstly|Lastly}, it keeps you fit.
{Secondly|Firstly}, you meet new people.
Some people say sport is boring. {I disagree|I'm disagree}.
{However|Because}, too much sport can be dangerous.
{In conclusion|In the beginning}, everybody should do some sport.
I'm {in favour of|in favour for} longer holidays.
{What's more|What more}, holidays help families to spend time together.
{From my point of view|In my point of view}, holidays should be longer.`,
    rewrite: `School is boring. => I sometimes find school boring because some lessons are not very interactive.
Sport is good. => I believe that sport is good for our health and helps us to relax.
Fast food is bad. => In my view, fast food is unhealthy because it contains a lot of fat and sugar.
I want more holidays. => I would like longer holidays because students need time to rest.`
  } });

  ext('e-w-describe', { more: {
    sort: `dark hair|A
a ponytail|A
brown eyes|A
short hair|A
honest|C
polite|C
cheerful|C
generous|C`,
    ishas: `My aunt {is|has got} very sporty.
The baby {has got|is} big blue eyes.
Our neighbour {is|has got} a bit strange.
My uncle {has got|is} a moustache.
Lisa {is|has got} the tallest girl in our class.
Our cat {has got|is} white paws.`,
    gap: `My best friend [is] very funny.
She [has got] long curly hair.
My grandma [wears] a hat when she goes out.
Our flat [has got] three rooms.
There [are] lots of trees in our street.
My little brother [is] very cheeky.
He [has got] a scar on his chin.`,
    better: `The food was good. => The pizza was delicious – crispy and with lots of cheese.
My teacher is OK. => Our teacher is strict but fair, and she explains everything clearly.
The weather was bad. => It was cold and rainy, and a strong wind was blowing.`
  } });

  ext('e-pastperfect', { more: {
    form: `The streets were wet because it [had rained:rain].
I [had already eaten:already / eat] when my friends arrived.
She couldn't pay because she [had left:leave] her wallet at home.
After we [had watched:watch] the film, we went to bed.
He [had never seen:never / see] snow before he came to Austria.
When I phoned, Lisa [had already gone:already / go] out.
The teacher was angry because we [hadn't done:not do] our homework.`,
    choose: `When we got to the station, the train {had left|left}.
Last night I {watched|had watched} a great film.
She was happy because she {had passed|passed} the test.
We {had finished|finished} dinner before Dad came home.
He {opened|had opened} the door and went in.
I couldn't open the door because I {had lost|lost} my key.
Before the concert started, the band {had practised|practised} for weeks.`,
    join: `First we did the shopping. Then we cooked dinner. :: After … => After we had done the shopping, we cooked dinner.
First the film began. Then we got to the cinema. :: When … already => When we got to the cinema, the film had already begun.
First he broke his leg. Then he couldn't play. :: because => He couldn't play because he had broken his leg.
First I saved my work. Then I switched off the computer. :: Before … => Before I switched off the computer, I had saved my work.
First the rain stopped. Then we went outside. :: After … => After the rain had stopped, we went outside.
First everybody left. Then I arrived at the party. :: When … => When I arrived at the party, everybody had left.`,
    text: `When Mum came home, we [had] already [cooked] dinner. She was very surprised!
I couldn't sleep because I [had drunk] too much cola. I [had] never [felt] so awake.
By the time the ambulance arrived, a doctor [had helped] the man.
After Tom [had lost] his phone, he [looked] for it everywhere.
We [had walked] for hours when we finally [saw] the hut.`,
    trans: `Ich hatte meine Hausübung vergessen. => I had forgotten my homework.
Als ich aufwachte, hatte es geschneit. => When I woke up, it had snowed.
Nachdem wir gewonnen hatten, feierten wir. => After we had won, we celebrated.
Sie war noch nie in London gewesen. => She had never been to London.
Der Bus war schon abgefahren. => The bus had already left.
Wir hatten nichts gegessen. => We hadn't eaten anything.`,
    err: `They had went home. => They had gone home.
I didn't know him because I never met him before. => I didn't know him because I had never met him before.
After we had ate, we left. => After we had eaten, we left.
She had already leave. => She had already left.`
  } });

  ext('e-reported', { more: {
    st: `"I am hungry." :: Lisa said … => Lisa said (that) she was hungry.
"I like cats." :: Tom said … => Tom said (that) he liked cats.
"We live in a big house." :: They said … => They said (that) they lived in a big house.
"I am cold." :: Mia said … => Mia said (that) she was cold.`,
    saytell: `He [told] us a funny story.
She [said] she was sorry.
[Tell] me about your holiday!
What did you [say] to him?
They [told] the police everything.
I [said] hello to my neighbour.
Please [tell] your parents about the trip.
My friend [told] me a secret.
Did he [say] anything about the test?
The teacher [told] us to be quiet.`,
    cmd: `"Turn off the TV!" :: Mum told my brother … => Mum told my brother to turn off the TV.
"Wash your hands!" :: Mum told us … => Mum told us to wash our hands.
"Please wait here." :: The man asked me … => The man asked me to wait there.`,
    q: `"Do you have a pet?" :: Lisa asked me … => Lisa asked me if I had a pet.
"Where is the station?" :: A tourist asked me … => A tourist asked me where the station was.
"Did you like the film?" :: Tom asked me … => Tom asked me if I had liked the film.
"When does school start?" :: She asked … => She asked when school started.
"Can I borrow your pen?" :: Ben asked me … => Ben asked me if he could borrow my pen.`,
    mix: `"I've finished my homework," said Tom. => Tom said (that) he had finished his homework.
"Don't forget your umbrella!" said Grandma. => Grandma told me not to forget my umbrella.
"Where do you live?" the policeman asked. => The policeman asked where I lived.
"I'm going to visit my aunt," Lisa said. => Lisa said (that) she was going to visit her aunt.
"Can you swim?" the trainer asked me. => The trainer asked me if I could swim.
"Turn off your phones," the teacher said. => The teacher told us to turn off our phones.
"I saw Ben yesterday," Mia said. => Mia said (that) she had seen Ben the day before.`
  } });
})();
