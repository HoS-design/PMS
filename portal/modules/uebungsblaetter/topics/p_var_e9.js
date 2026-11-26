/* Englisch – mehr Varianten, Teil 9: alle Pools mindestens 5 × so groß wie die Aufgabenzahl (Kl. 1–2) */
(function () {
  const ext = UB.extendTopic;

  ext('e-be', { more: {
    form: `Grandma [is] in the garden.
Our cat [is] black and white.
You [are] very good at football.
The bananas [are] yellow.
I [am] in the school choir.
The cinema [is] near the station.`,
    short: `He is my cousin. => He's my cousin.
They are from Italy. => They're from Italy.
It is my birthday today. => It's my birthday today.
They are in the garden. => They're in the garden.
You are a great friend. => You're a great friend.`,
    quest: `he / your brother => Is he your brother?
the children / in the garden => Are the children in the garden?
I / late => Am I late?
the museum / open today => Is the museum open today?`,
    answer: `Is your dog old? – No, [it isn't].
Are your parents at work? – Yes, [they are].
Are you twelve? – Yes, [I am].`,
    text: `Hi, I [am] Mia. I [am] eleven and my brother [is] fourteen. We [are] from Linz.
"[Are] you tired?" – "No, I [am not]. I [am] just hungry!"
Our classroom [is] big. The walls [are] yellow and the windows [are] very large.
"[Is] Tom at home?" – "No, he [isn't]. He [is] at the football club."`,
    trans: `Ich bin müde. => I'm tired.
Sind deine Eltern zu Hause? => Are your parents at home?
Ihr seid nicht zu spät. => You aren't late.
Mein Lieblingsessen ist Pizza. => My favourite food is pizza.`
  } });

  ext('e-havegot', { more: {
    choose: `{Have|Has} you got a pet?
My cousins {have|has} got a swimming pool.
She {hasn't|haven't} got a brother.`,
    form: `My uncle [has got] a red car.
My cousins [have got] a big garden.`,
    neg: `The car has got four doors. :: not => The car hasn't got four doors.
We have got a pool. :: not => We haven't got a pool.`,
    quest: `your grandma / a cat => Has your grandma got a cat?
they / a big house => Have they got a big house?
you / any brothers => Have you got any brothers?
your grandparents / a dog => Have your grandparents got a dog?
the school / a gym => Has the school got a gym?`,
    answer: `Has your brother got a bike? – Yes, [he has].
Have your neighbours got a car? – No, [they haven't].`,
    text: `My aunt [has got] a farm. She [has got] cows and horses, but she [hasn't got] any sheep.
"[Have] you [got] a pen?" – "No, I [haven't]. But Lisa [has got] one."
Our flat [hasn't got] a garden, but it [has got] a big balcony.
"[Has] your dog [got] a name?" – "Yes, it [has]. His name is Bello."`,
    err: `I has got a new bike. => I have got a new bike.
Our dog have got a long tail. => Our dog has got a long tail.
They hasn't got a garden. => They haven't got a garden.`
  } });

  ext('e-pronouns', { more: {
    obj: `Where is my phone? I need [it].
Tom is nice. I like [him] a lot.
Can you help [us] with our homework?
Lisa and Mia are here. Say hello to [them].`,
    choose: `{They|Them} are very funny.
Wait for {me|I}!
{We|Us} are best friends.`,
    poss: `Lisa has got a cat. [Her] cat is very old.
We live in Graz. [Our] house is near the river.
My grandparents have got a farm. [Their] farm is big.
I've got a dog. [My] dog's name is Max.
Have you got [your] schoolbag?
The bird is building [its] nest.
Tom and Ben are brothers. [Their] mum is a teacher.`,
    mine: `This is our house. => This house is ours.
That is your jacket. => That jacket is yours.
That is her umbrella. => That umbrella is hers.
This is his cap. => This cap is his.
Those are our bikes. => Those bikes are ours.`,
    self: `I hurt [myself] when I fell.
The children dressed [themselves].`,
    text: `"Is this your cap?" – "No, it isn't [mine]. I think it's Tom's. Give it to [him]."
My sister and I made a cake [ourselves]. Mum was proud of [us].
"Where are Lisa and Ben?" – "[They] are in the garden. I can see [them]."
This is my grandma. [She] is 80. I visit [her] every Sunday.`,
    trans: `Kannst du mir helfen? => Can you help me?
Das ist nicht mein Heft, es ist ihres. => That isn't my exercise book, it's hers.
Wir haben es selbst gemacht. => We made it ourselves.
Ich sehe sie jeden Tag. (Mehrzahl) => I see them every day.
Gib es ihm bitte! => Give it to him, please!`,
    err: `Me and Tom are friends. => Tom and I are friends.
This pen is my. => This pen is mine.
Can you help I? => Can you help me?
The dog is eating it's food. => The dog is eating its food.`
  } });

  ext('e-nouns', { more: {
    aan: `She is {an|a} actress.
We saw {a|an} horse.
He's {an|a} only child.
She is {an|a} honest girl.`,
    this: `{These|This} are my friends.
Can you see {those|that} boats over there?
{This|These} is my bedroom.`,
    saxon: `the bag of my sister => my sister's bag
the toys of the dogs => the dogs' toys`,
    irr: `The [mice:mouse] are eating the cheese.
Two [women:woman] are waiting at the bus stop.`,
    text: `There are three [children] in the garden. One of them has got [an] apple.
I've got [an] uncle in London. He's got two [children] and a big dog.
"Are [these] your shoes?" – "No, [those] shoes over there are mine."
Look at the [geese] on the lake! There's [a] white one and [an] old grey one.`,
    trans: `Ich habe zwei Füße. => I've got two feet.
Das ist das Zimmer meiner Schwester. => That's my sister's room.
Diese Schuhe sind zu klein. => These shoes are too small.
Ich esse eine Orange. => I'm eating an orange.
Die Kinder spielen im Garten. => The children are playing in the garden.`
  } });

  ext('e-thereis', { more: {
    isare: `There {are|is} two bikes in front of the house.
There {is|are} a spider on the wall.
There {are|is} lots of people at the concert.
There {is|are} some milk in the fridge.
There {are|is} three windows in my room.`,
    neg: `There is a sofa in the kitchen. :: not => There isn't a sofa in the kitchen.
There are some cups in the cupboard. :: not => There aren't any cups in the cupboard.`,
    quest: `a cinema / in your town => Is there a cinema in your town?
a bus stop / in your street => Is there a bus stop in your street?
a computer / in your room => Is there a computer in your room?
any milk / in the fridge => Is there any milk in the fridge?
any students / in the classroom => Are there any students in the classroom?`,
    answer: `Is there a swimming pool at your school? – No, [there isn't].
Are there any biscuits in the tin? – No, [there aren't].
Is there a pet in your family? – Yes, [there is].
Are there any mountains in your country? – Yes, [there are].
Is there a lift in your school? – No, [there isn't].
Are there any trees in your street? – No, [there aren't].`,
    someany: `Can I have {some|any} more chips, please?
There are {some|any} ducks on the lake.
Are there {any|some} good films on TV tonight?`,
    text: `In my bedroom [there is] a bed and [there are] two shelves, but [there isn't] a TV.
"[Is there] a bakery near here?" – "Yes, [there is]. It's next to the bank."
[There aren't] any clouds today. [There is] only blue sky.
In our class [there are] twelve girls and [there are] ten boys.`,
    trans: `Gibt es einen Park in der Nähe? => Is there a park nearby?
Im Kühlschrank ist keine Milch. => There isn't any milk in the fridge.`,
    err: `There is two cats in the garden. => There are two cats in the garden.
Is there any apples? => Are there any apples?
There aren't some biscuits left. => There aren't any biscuits left.
There are a big tree in the park. => There is a big tree in the park.`
  } });

  ext('e-presentsimple', { more: {
    gap: `Lisa [plays:play] the guitar every day.
My parents [don't like:not like] loud music.
The shop [closes:close] at 6 p.m.
He [goes:go] to bed at nine.
My dad [fixes:fix] old bikes.
It [rains:rain] a lot in April.
My brother [doesn't eat:not eat] fish.
Grandpa [fixes:fix] everything.
[Does she speak:she / speak] French?`,
    dodoes: `{Does|Do} your teacher give a lot of homework?
He {doesn't|don't} play the piano.`,
    neg: `She likes cats. :: not => She doesn't like cats.
I play the piano. :: not => I don't play the piano.
My dad drives to work. :: not => My dad doesn't drive to work.
We go to school on Saturday. :: not => We don't go to school on Saturday.
Tom speaks Spanish. :: not => Tom doesn't speak Spanish.
The cat sleeps in my room. :: not => The cat doesn't sleep in my room.`,
    quest: `she / like chocolate => Does she like chocolate?
you / play an instrument => Do you play an instrument?
your parents / work on Saturdays => Do your parents work on Saturdays?
it / snow in winter => Does it snow in winter?
your sister / go to university => Does your sister go to university?`,
    text: `My sister [plays] the violin. She [practises] every day, but she [doesn't] like concerts.
"[Do] you like horses?" – "Yes, I [do]. I [ride] every Saturday."
On Sundays we [visit] our grandparents. Grandma always [makes] a cake.
Mr Smith [teaches] English. He [comes] from London and he [speaks] very fast.`,
    trans: `Wir essen um sechs Uhr zu Abend. => We have dinner at six o'clock.
Sie mag keine Spinnen. => She doesn't like spiders.
Kocht dein Vater gern? => Does your father like cooking?
Der Bus kommt um acht. => The bus comes at eight.`,
    err: `She don't like apples. => She doesn't like apples.
Does they live here? => Do they live here?
My mum work in a shop. => My mum works in a shop.
He doesn't plays football. => He doesn't play football.`
  } });

  ext('e-progressive', { more: {
    gap: `Mum [is cooking:cook] dinner right now.
Grandma [is knitting:knit] a scarf.
I [am not watching:not watch] TV at the moment.
[Are you doing:you / do] your homework?
Look! Tom [is climbing:climb] the tree.
We [are waiting:wait] for the train.
It [is raining:rain] again.`,
    neg: `I am sleeping. :: not => I'm not sleeping.
The dog is barking. :: not => The dog isn't barking.
The baby is sleeping. :: not => The baby isn't sleeping.
I am reading a comic. :: not => I'm not reading a comic.
It is snowing. :: not => It isn't snowing.`,
    simpprog: `Look! The bus {is coming|comes}.
I usually {walk|am walking} to school.
Be quiet! The baby {is sleeping|sleeps}.
My dad {works|is working} in a bank.
What {are you doing|do you do} right now?
She {goes|is going} swimming every Tuesday.
It {is snowing|snows} at the moment.`,
    text: `Look at my brother! He [is dancing] in the kitchen. He usually [dances] only at parties.
It's Saturday morning. The sun [is shining] and the birds [are singing].
"What [are] you [doing]?" – "I [am writing] a letter to my grandma."
Every day Lisa [takes] the bus, but today she [is riding] her bike.`,
    trans: `Wir warten gerade auf dich. => We're waiting for you.
Sie trägt heute ein rotes Kleid. => She's wearing a red dress today.
Was liest du gerade? => What are you reading?`,
    err: `He is cook dinner. => He is cooking dinner.
Look! It rains. => Look! It's raining.
They playing football now. => They are playing football now.
I am liking this song. => I like this song.
She is sit on the sofa. => She is sitting on the sofa.`
  } });

  ext('e-wordorder', { more: {
    svo: `my mum >> drinks >> coffee
the dog >> likes >> bones
we >> play >> football
Lisa >> reads >> a book`,
    freq: `I >> never >> eat >> fish
we >> usually >> walk >> to school
he >> is >> always >> late`,
    place: `we >> meet >> our friends >> at the park >> on Saturdays
my dad >> drinks >> coffee >> in the kitchen >> every morning
they >> played >> tennis >> at the club >> yesterday
I >> do >> my homework >> at my desk >> after lunch`,
    fix: `She plays very good the piano. => She plays the piano very well.
I eat in the morning always cereal. => I always eat cereal in the morning.`,
    trans: `Im Winter fahren wir oft Ski. => We often go skiing in winter.
Er spielt am Nachmittag im Garten. => He plays in the garden in the afternoon.`
  } });

  ext('e-questions', { more: {
    choose: `{Where|When|Who} do you live? – In Vienna.
{When|Where|Why} is the party? – On Friday.
{When|Where|Who} does the film start? – At eight.
{Why|How|When} are you late? – Because I missed the bus.
{How much|How many|How old} is the ticket? – Five euros.
{What time|How long|How often} does school start? – At eight.
{How|What|Who} do you go to school? – By bike.`,
    word: `[Whose] turn is it? – It's Ben's.
[How old] is your sister? – Ten.
[Which] bus goes to the station, the 3 or the 7? – The 7.
[How often] do you play tennis? – Twice a week.
[Where] are my shoes? – Under the bed.`,
    ask: `We play football on Saturdays. :: When? => When do you play football?
Lisa lives in Linz. :: Where? => Where does Lisa live?
Tom likes pizza. :: What? => What does Tom like?
They are late. :: Why? => Why are they late?
My sister has got three cats. :: How many? => How many cats has your sister got?
The film starts at eight. :: What time? => What time does the film start?
Ben goes to bed at nine. :: When? => When does Ben go to bed?`,
    tags: `Tom is from Linz, [isn't he]?
It isn't raining, [is it]?
You were at the party, [weren't you]?
They don't live here, [do they]?`,
    trans: `Wann beginnt der Unterricht? => When does school start?
Wie viel kostet das? => How much is it?
Wem gehört diese Tasche? => Whose bag is this?`,
    err: `Where you live? => Where do you live?
What time the film starts? => What time does the film start?
How many sisters you have got? => How many sisters have you got?
Who did call you? => Who called you?
Do you can swim? => Can you swim?`
  } });

  ext('e-prepositions', { more: {
    how: `My aunt travels to work [by] train.
My uncle travels [by] plane.
We came home [on] foot.
They came [by] bus.
Grandma sent the parcel [by] post.`,
    time: `The concert is [on] Saturday.
We have lunch [at] noon.
My birthday is [in] June.`,
    text: `The cat is sitting [under] the table, and the dog is lying [in front of] the door.
We go skiing [in] February. School starts again [on] Monday.
Meet me [at] the bus stop [at] half past three.
The bakery is [between] the bank and the post office, [opposite] the park.`,
    mix: `He is good {at|in|on} tennis.
I'm afraid {of|from|for} heights.`,
    trans: `Das Bild hängt an der Wand. => The picture is on the wall.
Wir treffen uns um drei Uhr. => We're meeting at three o'clock.
Ich gehe zu Fuß zur Schule. => I go to school on foot. / I walk to school.
Im Sommer schwimmen wir im See. => In summer we swim in the lake.
Das Geschäft ist neben der Bank. => The shop is next to the bank.`
  } });

  ext('e-modals', { more: {
    can: `Cats [can] see in the dark.
My grandma [can't] use a smartphone.
[Can] your brother ride a bike?
Snakes [can't] fly.
We [can] go to the cinema tonight.`,
    ability: `fish / talk :: ✗ => Fish can't talk.
my mum / speak French :: ✓ => My mum can speak French.
I / whistle :: ✓ => I can whistle.`,
    must: `You {mustn't|don't have to} run in the corridor.
You {don't have to|mustn't} bring food. We've got enough.
You {mustn't|don't have to} cross the road when the light is red.
We {don't have to|mustn't} wear a uniform at our school.
Students {mustn't|don't have to} eat in the computer room.
You {don't have to|mustn't} bring food. There's a café.
You {mustn't|don't have to} talk during the test.`,
    should: `I'm always tired. :: go to bed earlier => You should go to bed earlier.
My tooth hurts. :: see a dentist => You should see a dentist.
I've got a toothache. :: go to the dentist => You should go to the dentist.
I'm bored. :: read a book => You should read a book.`,
    mix: `{Can|Should} you play the piano?
You look tired. You {should|can't} go to bed early.
We {have to|can} wear a helmet when we ride our bikes.
My grandma {can't|mustn't} hear very well.
I {can|have to} speak three languages.
You {don't have to|mustn't} come if you don't want to.
I'm sorry, I {can't|mustn't} come to your party. I'm ill.
You {should|can} drink more water. It's healthy.`,
    text: `At the swimming pool you [mustn't] run. You [have to] take a shower first.
"[Can] I go to the toilet, please?" – "Yes, you [can]."
You look tired. You [should] go to bed early tonight.
Tomorrow is Sunday, so we [don't have to] get up early.`,
    trans: `Du solltest mehr schlafen. => You should sleep more.
Ich kann nicht kommen. => I can't come.
Du musst das nicht machen. => You don't have to do that.`,
    err: `You must to go now. => You must go now.
They can to speak French. => They can speak French.
She don't can dance. => She can't dance.
He have to work today. => He has to work today.`
  } });

  ext('e-irregular', { more: {
    gap: `We [went:go] to the cinema last night.
I [bought:buy] a new jacket yesterday.
She [told:tell] me a funny story.
They [ran:run] to the bus stop.
My dad [built:build] a tree house for us.
I [forgot:forget] my homework at home.
The teacher [gave:give] us a lot of homework.
We [sang:sing] songs at the party.`,
    mix3: `She has [written:write] three emails today.
We [drank:drink] lemonade at the picnic last Sunday.`,
    text: `On Saturday we [went] to the zoo. We [saw] lions and I [took] lots of photos.
Yesterday my little sister [fell] off her bike. She [hurt] her knee, but she [didn't cry].
Last week I [found] an old box in the attic. Inside, there [was] a letter that my grandpa [wrote] in 1960.`
  } });

  ext('e-pastsimple', { more: {
    waswere: `The shops [were] closed on Sunday.
[Was] your brother at school today?
I [wasn't] at home on Sunday.`,
    gap: `We [visited:visit] the museum last week.
We [didn't watch:not watch] the news.
I [watched:watch] a film yesterday evening.
[Did you see:you / see] the football match?
The bus [arrived:arrive] late.
He [wrote:write] a long email.
We [stayed:stay] at a hotel by the sea.
My brother [broke:break] my favourite cup.`,
    neg: `She went to the party. :: not => She didn't go to the party.
We had fun. :: not => We didn't have fun.
Tom called me. :: not => Tom didn't call me.
Tom bought a new bike. :: not => Tom didn't buy a new bike.
The shop opened at eight. :: not => The shop didn't open at eight.
They ate all the cake. :: not => They didn't eat all the cake.`,
    quest: `you / sleep well => Did you sleep well?
Lisa / win the race => Did Lisa win the race?
they / go to Italy => Did they go to Italy?
your dad / cook dinner => Did your dad cook dinner?
it / rain yesterday => Did it rain yesterday?`,
    error: `I buyed a new bike. => I bought a new bike.
Did you saw the film? => Did you see the film?
She runned to school. => She ran to school.
We was at home yesterday. => We were at home yesterday.
He didn't went home. => He didn't go home.`,
    text: `Last weekend we [visited] my aunt in Vienna. We [went] to a museum and [ate] ice cream in the park.
"[Did] you [enjoy] the party?" – "Yes, I [did]! We [danced] all night."
On Monday I [woke] up late, so I [ran] to the bus stop. Luckily, the bus [was] late too.`,
    trans: `Wir waren letzte Woche in Wien. => We were in Vienna last week.
Hast du gestern deine Oma besucht? => Did you visit your grandma yesterday?
Sie hat den Film nicht gesehen. => She didn't see the film.
Wir haben einen Schneemann gebaut. => We built a snowman.
Er ist um sieben Uhr aufgestanden. => He got up at seven o'clock.`,
    err: `We goed to the beach. => We went to the beach.
Did he finished his homework? => Did he finish his homework?
I were at the cinema. => I was at the cinema.
I stoped the car. => I stopped the car.`
  } });

  ext('e-pastprogressive', { more: {
    form: `At 9 p.m. my parents [were watching:watch] the news.
The sun [was shining:shine] when we arrived.
I [wasn't listening:not listen] when the teacher explained it.`,
    when: `While I [was reading:read], the lights [went:go] out.
When Tom [came:come] in, we [were watching:watch] TV.
I [was walking:walk] to school when I [found:find] a wallet.
While the children [were playing:play] outside, it [started:start] to snow.
When the teacher [came:come] in, everybody [was talking:talk].
She [broke:break] her arm while she [was skiing:ski].
We [were sitting:sit] in the garden when a bee [stung:sting] me.`,
    choose: `While I {was cooking|cooked}, the phone rang.
We {were watching|watched} a film when Dad came home.
Yesterday I {went|was going} to the dentist.
When I {opened|was opening} the door, the cat ran out.
At 9 p.m. I {was doing|did} my homework.
I {cut|was cutting} my finger while I was cooking.
The sun {was shining|shone} when we woke up.`,
    usedto: `My mum [used to] have long hair.
[Did] you [use to] go to kindergarten?
I [used to] be afraid of dogs.
We [didn't use to] have a car.`,
    past: `I played with dolls. :: not any more => I used to play with dolls.
My dad didn't wear glasses. :: now: he wears glasses => My dad didn't use to wear glasses.
We lived in Vienna. :: not any more => We used to live in Vienna.
She had a cat. :: not any more => She used to have a cat.`,
    text: `I [was sleeping] when the alarm [went] off. I [jumped] out of bed!
While Dad [was cooking], Mum [was setting] the table.
My grandpa [used to] work in a factory. He [used to] get up at five every morning.`,
    trans: `Was hast du um acht Uhr gemacht? => What were you doing at eight o'clock?
Es regnete, als wir losgingen. => It was raining when we left.
Früher hatte ich lange Haare. => I used to have long hair.
Während ich las, hörte er Musik. => While I was reading, he was listening to music.
Ich war gerade beim Duschen, als das Telefon läutete. => I was having a shower when the phone rang.`,
    err: `While I was read, the phone rang. => While I was reading, the phone rang.
They was playing outside. => They were playing outside.
I use to live in Graz. => I used to live in Graz.
Did you used to play tennis? => Did you use to play tennis?
We was watching TV. => We were watching TV.`
  } });

  ext('e-future', { more: {
    goingto: `We [are going to paint:paint] my room on Saturday.
[Is it going to rain:it / rain] tomorrow?
I [am going to be:be] a vet one day.`,
    choose: `I'm thirsty. – I {'ll|'m going to} get you a drink.
She {'s going to|'ll} have a baby in May.
The phone is ringing. – I {'ll|'m going to} answer it.
We've bought paint. We {'re going to|'ll} paint the kitchen.
Careful! You {'re going to|'ll} drop the plates!
Wait, I {'ll|'m going to} open the door for you.
He has saved money. He {'s going to|'ll} buy a new bike.`,
    arr: `My grandparents [are coming:come] for dinner tonight.
My grandparents [are coming:come] for dinner tonight.
Tom [is meeting:meet] his friends at 6.
I [am playing:play] football on Saturday morning.
[Are you doing:you / do] anything this weekend?
She [isn't coming:not come] to the party.`,
    text: `"What [are] you [doing] on Saturday?" – "I [am meeting] Lisa. We [are going to] go shopping."
It's very cloudy. I think it [is going to] rain.
"I'm cold." – "I [will] close the window."
Our train [leaves] at 7.15 tomorrow morning, so we [are going to] get up early.`,
    trans: `Morgen wird es sonnig sein. => It will be sunny tomorrow.
Ich treffe am Freitag meine Freunde. (fix vereinbart) => I'm meeting my friends on Friday.`,
    err: `It will to be sunny tomorrow. => It will be sunny tomorrow.
It's going rain. => It's going to rain.
We going to the cinema tonight. => We're going to the cinema tonight.
They will visits us next week. => They will visit us next week.`
  } });

  ext('e-presentperfect', { more: {
    ever: `Have you ever been to London? :: ✓ => Yes, I have.
Has your mum ever met a famous person? :: ✗ => No, she hasn't.
Has your brother ever ridden a horse? :: ✓ => Yes, he has.
Has Lisa ever seen the sea? :: ✗ => No, she hasn't.
Have you ever broken your arm? :: ✗ => No, I haven't.`,
    forsince: `My dad has worked at the bank [for] ten years.
She has been ill [for] three days.
We have known each other [since] primary school.
They have been married [for] twenty years.
He has worked here [since] last summer.
I haven't seen her [for] ages.
It has rained [since] Monday.
We have waited [for] an hour.`,
    tense: `I {saw|have seen} Lisa yesterday.
{Have you finished|Did you finish} your homework yet?
She {has lived|lives} in Graz since 2020.
I {lost|have lost} my wallet yesterday.
Columbus {discovered|has discovered} America in 1492.
They {have been|are} friends for ten years.
When {did you arrive|have you arrived}?`,
    prog: `Grandpa [has been working:work] in the garden all day.
It [has been raining:rain] since lunchtime.
It [has been raining:rain] all day.
My sister [has been talking:talk] on the phone for an hour.
I'm tired because I [have been running:run].`,
    text: `I [have] never [been] to Italy, but my sister [has visited] Rome twice.
"[Have] you [seen] my keys?" – "Yes, I [saw] them on the table this morning."
We [have lived] in this house [since] 2018.
"Have you done your homework [yet]?" – "Yes, I [have] [just] finished it."`,
    err: `I have saw this film twice. => I have seen this film twice.
I have saw this film twice. => I have seen this film twice.`
  } });

  ext('e-pastperfect', { more: {
    form: `When we arrived, the film [had started:start].
I was nervous because I [hadn't flown:not fly] before.
I [had never seen:never / see] snow before that winter.
After he [had finished:finish] his homework, he went out.
The streets were wet because it [had rained:rain].
When I opened the fridge, somebody [had eaten:eat] my yoghurt.
We [had already eaten:already / eat] when Dad came home.
[Had you met:you / meet] him before?`,
    join: `First I finished my homework. Then I played football. :: After … => After I had finished my homework, I played football.
First the guests left. Then we cleaned the kitchen. :: After … => After the guests had left, we cleaned the kitchen.
First she lost her key. Then she couldn't get in. :: because => She couldn't get in because she had lost her key.
First they ate all the cake. Then I came home. :: When … => When I came home, they had eaten all the cake.
First she did her homework. Then she went out. :: After … => After she had done her homework, she went out.`,
    choose: `When I got home, my sister {had already gone|already goes} to bed.
She couldn't pay because she {had forgotten|has forgotten} her purse.
I {had never flown|never fly} before that trip.
After the guests {had left|leave}, we tidied up.
The ground was white because it {had snowed|snows} during the night.
He {had forgotten|forgets} his homework, so the teacher was angry.`,
    text: `When I [got] to school, I realised that I [had forgotten] my lunch.
The kitchen [was] a mess because the children [had made] pancakes.
By the time we [arrived], the concert [had] already [started].
She [had] never [seen] the sea before she [went] to Croatia.`,
    trans: `Nachdem wir gegessen hatten, gingen wir spazieren. => After we had eaten, we went for a walk.
Sie hatte den Film schon gesehen. => She had already seen the film.
Als wir ankamen, war der Zug schon abgefahren. => When we arrived, the train had already left.`,
    err: `When I came, they had leave. => When I came, they had left.
The film had began when we arrived. => The film had begun when we arrived.
They had never flew before. => They had never flown before.
We had went there before. => We had gone there before.`
  } });
})();
