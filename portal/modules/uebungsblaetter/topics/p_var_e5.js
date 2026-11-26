/* Englisch 3. Klasse (Buch) – mehr Varianten für die neuen Themen.
   if-clauses und Passiv übernehmen zusätzlich passende Sätze aus den Themen der 4. Klasse (ohne Typ 3 / ohne will, have been …). */
(function () {
  const ext = UB.extendTopic;
  const find = (id) => UB.topics.find(t => t.id === id);
  // Zeilen aus einem anderen Thema übernehmen (ohne doppelte)
  const borrow = (to, pool, from, fpool, ok) => {
    const a = find(to), b = find(from); if (!a || !b || !b.pools[fpool]) return;
    const have = new Set(a.pools[pool].split('\n').map(x => x.trim()));
    const add = b.pools[fpool].split('\n').map(x => x.trim()).filter(x => x && !have.has(x) && (!ok || ok(x)));
    if (add.length) a.pools[pool] += '\n' + add.join('\n');
  };
  borrow('e-cond12', 't1', 'e-conditionals', 't1');
  borrow('e-cond12', 't2', 'e-conditionals', 't2');
  borrow('e-cond12', 'choose', 'e-conditionals', 'choose', x => !/had|have (been|visited|come)|would have|melts/.test(x));
  borrow('e-cond12', 'err', 'e-conditionals', 'err', x => !/had (came|come)|would have|would helped/.test(x));
  const simplePassive = x => !/will be|has been|have been|can be|can't be|must be|is being/.test(x);
  borrow('e-passive3', 'present', 'e-passive', 'present', simplePassive);
  borrow('e-passive3', 'past', 'e-passive', 'past', simplePassive);
  borrow('e-passive3', 'active', 'e-passive', 'active', simplePassive);
  borrow('e-passive3', 'err', 'e-passive', 'err', simplePassive);
  borrow('e-ppcont', 'form', 'e-presentperfect', 'prog');

  ext('e-revision3', { more: {
    ps: `My sister [doesn't like:not like] horror films.
The bus [stops:stop] in front of our school.
[Do your parents work:your parents / work] at the weekend?
He [watches:watch] TV every evening.
We [visit:visit] our grandparents every Sunday.
My cat [sleeps:sleep] on my bed.
[Does Tom play:Tom / play] in a band?
I [don't eat:not eat] breakfast on school days.
Our teacher [gives:give] us a lot of homework.
The sun [rises:rise] in the east.
My best friend [lives:live] next door.
They [don't speak:not speak] German.`,
    past: `We [didn't go:not go] out because it was raining.
My grandpa [taught:teach] me to play chess.
She [found:find] a wallet in the street.
[Did your team win:your team / win] the match?
The children [ate:eat] all the biscuits.
I [forgot:forget] my umbrella at school.
We [saw:see] a fox in the garden last night.
Columbus [sailed:sail] to America in 1492.
He [didn't hear:not hear] the alarm.
They [flew:fly] to London last summer.
[Did she enjoy:she / enjoy] the concert?
My dad [cooked:cook] spaghetti yesterday.`,
    choose: `Lisa {plays|played} tennis twice a week.
Last Monday we {had|have} a maths test.
I {saw|see} a great film on Saturday.
My brother usually {gets|got} up at 6.
{Did|Does} your sister go to the party last night?
We never {eat|ate} meat on Fridays.
Yesterday it {rained|rains} all day.
My parents {met|meet} in 2005.
{Do|Did} you usually walk to school?
Tom {didn't come|doesn't come} to school last Friday.
In 1969 people {walked|walk} on the moon.
She often {forgets|forgot} her keys.
What time {do|did} you usually have dinner?
I {lost|lose} my phone two days ago.
My grandma {lives|lived} in Vienna now.
We {went|go} skiing last winter.
He {doesn't drink|didn't drink} milk. He doesn't like it.
They {moved|move} to Graz three years ago.`,
    neg: `We went to the cinema. :: question => Did we go to the cinema?
My brother plays the guitar. :: negative => My brother doesn't play the guitar.
They won the match. :: negative => They didn't win the match.
Lisa lives near the school. :: question => Does Lisa live near the school?
I saw your sister. :: negative => I didn't see your sister.
He likes football. :: question => Does he like football?
She bought a new bike. :: negative => She didn't buy a new bike.
You go to bed at nine. :: question => Do you go to bed at nine?
We had pizza for lunch. :: question => Did we have pizza for lunch?
The shop opens at 8. :: negative => The shop doesn't open at 8.`,
    err: `Where did you went? => Where did you go?
My sister go to school by bus. => My sister goes to school by bus.
Last year we visit London. => Last year we visited London.
He didn't came to my party. => He didn't come to my party.
Do your brother like pizza? => Does your brother like pizza?
I seed a big dog yesterday. => I saw a big dog yesterday.
She don't live here. => She doesn't live here.
We was at home last night. => We were at home last night.`
  } });

  ext('e-cond12', { more: {
    t1: `If you [ask:ask] nicely, she will help you.
If it [is:be] cold tomorrow, I'll wear my new jacket.
We [will miss:miss] the start if we don't leave now.
If I [find:find] your keys, I'll call you.
If he [doesn't study:not study], he won't pass.
The teacher [will be:be] angry if you're late again.
If you [touch:touch] the stove, you'll burn yourself.
If we [win:win] the game, we'll have a party.
If you [don't water:not water] the flowers, they will die.
I [will buy:buy] you an ice cream if you help me.
If the weather [is:be] nice, we'll go to the lake.
If you [eat:eat] too many sweets, you'll get a stomach ache.
She [won't come:not come] if it rains.
If I [get:get] a good mark, my parents will be happy.`,
    unless: `{Unless|If} it stops raining, we'll stay inside.
I won't go {unless|if} you come with me.
{If|Unless} you need help, just call me.
You'll be cold {unless|if} you wear a jacket.
{Unless|If} we hurry, we'll miss the film.
I'll buy the shoes {if|unless} they are cheap.
She won't pass the test {unless|if} she studies more.
{If|Unless} you finish your homework, you can watch TV.
The plant will die {unless|if} you water it.
{Unless|If} you say sorry, she won't forgive you.
{If|Unless} I have time, I'll help you.
You can't drive {unless|if} you have a licence.
{If|Unless} it's sunny, we'll go swimming.
He won't wake up {unless|if} you shout.
{Unless|If} you practise, you won't improve.
We'll go to the beach {if|unless} the weather is good.`,
    untr: `If you don't eat, you will be hungry. :: unless => Unless you eat, you will be hungry.
If she doesn't hurry, she'll miss the bus. :: unless => Unless she hurries, she'll miss the bus.
If we don't practise, we'll lose the match. :: unless => Unless we practise, we'll lose the match.
If you don't wear a helmet, you can't ride your bike. :: unless => Unless you wear a helmet, you can't ride your bike.
If he doesn't apologise, I won't talk to him. :: unless => Unless he apologises, I won't talk to him.
If you don't take an umbrella, you'll get wet. :: unless => Unless you take an umbrella, you'll get wet.
If they don't call, we'll start without them. :: unless => Unless they call, we'll start without them.`,
    t2: `If I [were:be] a bird, I would fly to Africa.
If we [had:have] a pool, we would swim every day.
She [would be:be] happy if you called her.
If he [spoke:speak] English, he could work in London.
If I [found:find] a wallet, I would take it to the police.
What [would you do:you / do] if you were the president?
If I [didn't have:not have] homework, I would go out.
They [would buy:buy] a bigger house if they had more money.
If you [practised:practise] more, you would play better.
If my parents [let:let] me, I would get a dog.
I [would go:go] to the party if I weren't ill.`,
    choose: `If I {had|have} more money, I would buy a new bike.
If it {snows|would snow} tomorrow, we'll build a snowman.
She {would|will} travel the world if she had time.
If you {don't|won't} hurry, we'll be late.
{Unless|If} you study, you'll fail the test.
If he {called|calls} me now, I would answer.
If we {leave|left} now, we'll catch the bus.`,
    err: `If I will see her, I will tell her. => If I see her, I will tell her.
If I had wings, I will fly. => If I had wings, I would fly.
If he would know the answer, he would tell us. => If he knew the answer, he would tell us.
Unless you don't study, you will fail. => Unless you study, you will fail.
If it rains, we would stay at home. => If it rains, we will stay at home.
If I was a cat, I would sleep all day. => If I were a cat, I would sleep all day.`
  } });

  ext('e-permission', { more: {
    allowed: `My cousin [is allowed to:be allowed to] stay out until ten.
[Are we allowed to:we / be allowed to] use a calculator?
You [aren't allowed to:not / be allowed to] park here.
I [am not allowed to:not / be allowed to] have a phone in my room at night.
Children under 12 [aren't allowed to:not / be allowed to] see this film.
[Is your sister allowed to:your sister / be allowed to] go to concerts?
We [are allowed to:be allowed to] wear jeans at school.
Visitors [aren't allowed to:not / be allowed to] touch the paintings.
Tom [is allowed to:be allowed to] play computer games at the weekend.
[Am I allowed to:I / be allowed to] sit here?
My dog [isn't allowed to:not / be allowed to] sleep on the sofa.
Students [are allowed to:be allowed to] leave early on Fridays.
You [aren't allowed to:not / be allowed to] eat in the library.
[Are you allowed to:you / be allowed to] watch TV before school?
Lisa [isn't allowed to:not / be allowed to] go to the party.
We [are allowed to:be allowed to] choose our own seats.
Dogs [are allowed to:be allowed to] come into this café.
I [am allowed to:be allowed to] invite five friends to my party.
You [aren't allowed to:not / be allowed to] use your phone while driving.`,
    let: `My parents never [let:let] me watch horror films.
Will you [let:let] me use your phone?
The teacher [lets:let] us choose our partners.
Dad didn't [let:let] us go swimming because of the storm.
My sister never [lets:let] me borrow her clothes.
[Let:let] me carry your bag!
Our coach [lets:let] us play music in the changing room.
My grandma [lets:let] me eat ice cream for breakfast.
Mum didn't [let:let] me go out last night.
Please [let:let] the dog come in.
They don't [let:let] dogs into the shop.
Will your parents [let:let] you stay at my house?
The bus driver didn't [let:let] us get on.`,
    lettr: `We aren't allowed to talk during the test. :: the teacher / let => The teacher doesn't let us talk during the test.
I am allowed to choose my own clothes. :: my mum / let => My mum lets me choose my own clothes.
Tom is allowed to stay up late. :: his parents / let => His parents let him stay up late.
Our teacher lets us use our phones in the break. :: be allowed to => We are allowed to use our phones in the break.
My dad doesn't let me drive his car. :: be allowed to => I'm not allowed to drive my dad's car.
Students aren't allowed to run in the corridor. :: the school / let => The school doesn't let students run in the corridor.
My parents let my sister have a party. :: be allowed to => My sister is allowed to have a party.
I'm not allowed to eat in my room. :: my parents / let => My parents don't let me eat in my room.
Ben is allowed to ride his bike to school. :: his mum / let => His mum lets him ride his bike to school.
Grandma doesn't let us feed the ducks. :: be allowed to => We aren't allowed to feed the ducks.`,
    past: `My dad [couldn't:can / not] swim when he was a child.
Last night we [weren't allowed to:not / be allowed to] watch the film.
The climbers [were able to:be able to] reach the top in the end.
When I was three, I [couldn't:can / not] read.
She lost her key, but she [was able to:be able to] get in through the window.
[Could you:you / can] ride a bike when you were five?
In the past, women [weren't allowed to:not / be allowed to] vote.
The doctors [were able to:be able to] help him.
I [was allowed to:be allowed to] stay at my friend's house last weekend.
We [couldn't:can / not] go outside because of the snow.
After two hours we [were able to:be able to] fix the computer.
My grandma [could:can] dance very well when she was young.
[Was Tom allowed to:Tom / be allowed to] go to the concert?
The kids [were allowed to:be allowed to] eat as much cake as they wanted.
I [wasn't able to:not / be able to] finish the test in time.`,
    fut: `Soon you [will be able to:be able to] read this book on your own.
We [won't be allowed to:not / be allowed to] use phones on the school trip.
I [have been able to:be able to] swim since I was four.
[Will we be allowed to:we / be allowed to] stay up late at the camp?
In a few years robots [will be able to:be able to] drive cars.
Tom [hasn't been able to:not / be able to] play since his accident.
You [will be allowed to:be allowed to] drive when you are 18.
She [has been allowed to:be allowed to] go to school on her own since last year.
After this course you [will be able to:be able to] cook a three-course meal.
I [haven't been able to:not / be able to] find my keys all week.
Next year we [will be allowed to:be allowed to] choose our own project.
My little sister [will be able to:be able to] walk soon.`,
    choose: `Yesterday I {was able to|can} answer all the questions.
You {aren't allowed to|don't let} eat in the classroom.
My parents {let|allowed} me stay up late last night.
{Will you be able to|Can you will} come tomorrow?
When I was little, I {couldn't|can't} swim.
I {haven't been able to|couldn't} sleep well since Monday.
Our teacher {lets|lets to} us listen to music.
Are we {allowed to|allowed} take photos here?
Last year we {weren't allowed to|didn't allowed to} go on the trip.
Next week you {will be allowed to|are allowed} use the new computers.
My dad doesn't let me {use|to use} his laptop.
In the end, the firefighters {were able to|could to} put out the fire.
I {can't|couldn't} play football now. I've hurt my foot.
She {has been able to|was able to} speak French since she was ten.
{Am I allowed to|Do I allowed to} come in?
They didn't {let|allow} us go out.`
  } });

  ext('e-ppcont', { more: {
    form: `My mum [has been cooking:cook] all morning.
How long [has she been working:she / work] here?
We [have been walking:walk] for three hours.
You [have been playing:play] computer games all day!
The baby [has been crying:cry] since midnight.
I [haven't been sleeping:not sleep] well lately.
[Have you been running:you / run]? You're out of breath.
They [have been building:build] the new school for two years.
Lisa [has been practising:practise] the piano since lunch.
It [hasn't been snowing:not snow] for long.
My dad [has been repairing:repair] the car all afternoon.
[Has it been raining:it / rain] all night?`,
    forsince: `The phone has been ringing [for] ten minutes.
She has been living in Vienna [since] last summer.
We have been waiting for the bus [for] twenty minutes.
He has been playing football [since] he was five.
I have been reading this book [since] Friday.
They have been talking on the phone [for] an hour.
It has been snowing [since] early this morning.
My sister has been learning Spanish [for] two years.
We have been sitting here [since] 3 o'clock.
You have been watching TV [for] three hours!
The children have been swimming [since] lunchtime.
I have been working on this project [for] a week.`,
    howlong: `your brother / play the drums / 2022 :: How long …? => How long has your brother been playing the drums? – He has been playing the drums since 2022.
Lisa / swim / one hour :: How long …? => How long has Lisa been swimming? – She has been swimming for one hour.
the children / sleep / 8 o'clock :: How long …? => How long have the children been sleeping? – They have been sleeping since 8 o'clock.
you / learn French / two years :: How long …? => How long have you been learning French? – I have been learning French for two years.
it / rain / this morning :: How long …? => How long has it been raining? – It has been raining since this morning.
Tom / work on his project / three days :: How long …? => How long has Tom been working on his project? – He has been working on it for three days.
your parents / live in Graz / 2010 :: How long …? => How long have your parents been living in Graz? – They have been living in Graz since 2010.`,
    why: `The kitchen smells of cake. :: Mum / bake => Mum has been baking.
Your clothes are dirty. :: you / play football? => Have you been playing football?
I'm very tired. :: I / study / all night => I have been studying all night.
The grass is wet. :: it / rain => It has been raining.
Tom's fingers hurt. :: he / play / the guitar => He has been playing the guitar.
Lisa is all wet. :: she / swim? => Has she been swimming?
My eyes hurt. :: I / look at / the screen / for hours => I have been looking at the screen for hours.
You're out of breath. :: you / run? => Have you been running?
The children are very quiet. :: they / sleep => They have been sleeping.
Dad's hands are black. :: he / repair / the car => He has been repairing the car.`,
    choose: `She {has been cleaning|has cleaned} her room all morning. She's still not finished.
I {have visited|have been visiting} Vienna three times.
We {have been waiting|have waited} for over an hour!
Tom {has broken|has been breaking} his leg.
How many pages {have you read|have you been reading}?
My dad {has been working|has worked} in the garden since 9.
They {have been talking|have talked} on the phone for ages.
I {have lost|have been losing} my keys. Can you help me find them?
It {has been raining|has rained} for three days now.
She {has written|has been writing} two emails today.
I {have been learning|have learned} English for four years.
We {have finished|have been finishing} the project. Here it is!
How long {have you been living|have you lived} here? (still living)
He {has eaten|has been eating} five pancakes!
You look hot. {Have you been running|Have you run}?
I {have known|have been knowing} Lisa for years.`,
    err: `She has been work all day. => She has been working all day.
They have been playing since two hours. => They have been playing for two hours.
My dad has been working in Linz for 2019. => My dad has been working in Linz since 2019.
Has you been sleeping? => Have you been sleeping?
We are learning English for three years. => We have been learning English for three years.
It has been rain all day. => It has been raining all day.
How long you have been waiting? => How long have you been waiting?
I have been owning this bike for a year. => I have owned this bike for a year.
She have been crying. => She has been crying.
He has been knowing her since 2020. => He has known her since 2020.`
  } });

  ext('e-passive3', { more: {
    present: `Football [is played:play] all over the world.
The museum [is closed:close] on Mondays.
These cakes [are baked:bake] every morning.
Lunch [is served:serve] at 12 o'clock.
Many languages [are spoken:speak] in India.
The bins [are emptied:empty] every Tuesday.
Our school [is cleaned:clean] every evening.
Oranges [are grown:grow] in Spain.
The tickets [are sold:sell] at the door.
Bread [is made:make] from flour.
[Are these shoes made:these shoes / make] in Italy?
The house [isn't heated:not heat] in summer.`,
    past: `The bridge [was destroyed:destroy] by a flood.
The thieves [were arrested:arrest] last night.
The first email [was sent:send] in 1971.
[Was the window broken:the window / break] by the storm?
The match [was won:win] by our team.
Our house [was painted:paint] last year.
These pictures [were painted:paint] by Picasso.
The money [wasn't found:not find].
The new school [was opened:open] in 2019.
The cake [was made:make] by my grandma.
Many trees [were damaged:damage] in the storm.
The Harry Potter books [were translated:translate] into many languages.`,
    choose: `This castle {was built|built} 500 years ago.
Our teacher {gave|was given} us a lot of homework.
The letters {are delivered|deliver} by the postman.
My sister {made|was made} a cake yesterday.
These cars {are made|make} in Germany.
The thief {was caught|caught} by the police.
Millions of people {watch|are watched} the World Cup.
The rooms {are cleaned|clean} every day.`,
    active: `Tom broke the vase. => The vase was broken by Tom.
The children decorated the classroom. => The classroom was decorated by the children.
They sell newspapers at the station. => Newspapers are sold at the station.
Picasso painted this picture. => This picture was painted by Picasso.
Bees make honey. => Honey is made by bees.
The storm destroyed the old barn. => The old barn was destroyed by the storm.
Someone found my phone. => My phone was found.
They speak Spanish in Argentina. => Spanish is spoken in Argentina.
My grandma knitted this scarf. => This scarf was knitted by my grandma.
A famous architect designed the museum. => The museum was designed by a famous architect.`,
    err: `The pizza was deliver at 7. => The pizza was delivered at 7.
These shoes is made in Italy. => These shoes are made in Italy.
The car were repaired yesterday. => The car was repaired yesterday.
The picture was painted from Klimt. => The picture was painted by Klimt.
English are spoken in Australia. => English is spoken in Australia.
The cake was eat by the dog. => The cake was eaten by the dog.`
  } });

  // Mit den längeren neuen Sätzen passen diese Blätter sonst nicht mehr auf A4
  const setN = (id, lv, pool, n) => { const t = find(id); const sp = t && t.levels[lv] && t.levels[lv].tasks.find(x => x.pool === pool); if (sp) sp.n = n; };
  setN('e-nouns', 4, 'err', 3);
  setN('e-presentperfect', 4, 'trans', 3);
  setN('e-w-describe', 1, 'ishas', 4);
  setN('e-w-describe', 1, 'sort', 10);
})();
