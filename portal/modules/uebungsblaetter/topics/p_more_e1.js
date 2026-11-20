/* Englisch – größere Aufgabenpools (Teil 1) */
(function () {
  const ext = UB.extendTopic;

  ext('e-vocab', { more: {
    sort1: `brother|F
sister|F
aunt|F
grandpa|F
father|F
pen|S
exercise book|S
sharpener|S
glue|S
scissors|S
apple|E
milk|E
rice|E
egg|E
butter|E
dog|A
tiger|A
sheep|A
duck|A
snake|A`,
    sort2: `shirt|C
dress|C
socks|C
cap|C
shoes|C
living room|H
cellar|H
toilet|H
hall|H
balcony|H
windy|W
cloudy|W
storm|W
thunder|W
ice|W
hand|B
head|B
shoulder|B
ear|B
toe|B`,
    v3: `der Zahnarzt => dentist
die Feuerwehrfrau => firefighter
der Bahnsteig => platform
das Gepäck => luggage
neidisch => jealous
stolz => proud`,
    opp: `strong => weak
rich => poor
wet => dry
high => low
thick => thin
first => last
safe => dangerous
buy => sell`,
    def: `a person who repairs cars => mechanic
the room where you sleep => bedroom
the first month of the year => January
you need it to open a door => key
a person who teaches at a school => teacher
the season after summer => autumn
a place where you can swim indoors => swimming pool`,
    coll: `einen Spaziergang machen => go for a walk
frühstücken => have breakfast
eine Frage stellen => ask a question
das Licht ausmachen => turn off the light
Musik hören => listen to music
fernsehen => watch TV
das Bett machen => make the bed
eine Entscheidung treffen => make a decision
einkaufen gehen => go shopping`
  } });

  ext('e-modals', { more: {
    can: `My dad [can] cook very well.
I [can't] find my keys. Where are they?
[Can] you play the piano?
Babies [can't] walk.
We [can] see the mountains from our window.
Sorry, I [can't] hear you. The music is too loud.
Horses [can] run very fast.
[Can] I have a glass of water, please?
My cat [can] open the door.`,
    ability: `birds / sing :: ✓ => Birds can sing.
cows / climb trees :: ✗ => Cows can't climb trees.
my sister / speak French :: ✓ => My sister can speak French.
penguins / fly :: ✗ => Penguins can't fly.
monkeys / climb :: ✓ => Monkeys can climb.
fish / talk :: ✗ => Fish can't talk.
my brother / skate :: ✓ => My brother can skate.`,
    must: `You {mustn't|don't have to} run in the corridor.
I've got enough money. You {don't have to|mustn't} pay for me.
You {mustn't|don't have to} tell anyone. It's a secret!
It isn't cold today. You {don't have to|mustn't} wear a jacket.
Passengers {mustn't|don't have to} talk to the driver.
The test is easy. You {don't have to|mustn't} be nervous.
You {mustn't|don't have to} feed the animals at the zoo.
We've got lots of time. We {don't have to|mustn't} hurry.`,
    haveto: `My brother [has to] feed the dog every morning.
[Do] you [have to] wear a uniform at your school?
We [don't have to] go to school on Sundays.
Lisa [has to] help her mum in the kitchen.
I [have to] learn twenty new words for the test.
Dad [doesn't have to] work today. It's a holiday.
[Does] your dad [have to] work at weekends?
The students [have to] switch off their phones.
You [don't have to] come with us if you don't want to.
Our teacher [has to] correct all the tests.`,
    should: `I'm hungry. :: eat something => You should eat something.
I've got a cold. :: drink hot tea => You should drink hot tea.
I can't find my glasses. :: look in your bag => You should look in your bag.
I'm always late for school. :: get up earlier => You should get up earlier.
I play computer games all night. :: not play so long => You shouldn't play so long.`,
    mix: `It's very late. You {should|might} go home now.
I don't know where Tom is. He {might|must} be at the library.
{Can|Must} you ride a horse?
You {mustn't|needn't} cross the road when the light is red.
When she was little, she {couldn't|can't} speak English.
I {can't|mustn't} open this jar. Can you help me?
Students {must|might} be quiet during the test.`,
    text: `"[Must] I tidy my room now?" – "No, you [don't have to] do it now, but you [should] do it before dinner."
My little sister [can] read, but she [can't] write yet.
You [mustn't] use your phone during the test. You [have to] switch it off.
"[Could] you help me with my homework?" – "Sorry, I [can't]. I [have to] go to training."`,
    trans: `Ich muss jeden Tag Klavier üben. => I have to practise the piano every day.
Kannst du mir helfen? => Can you help me?
Du musst nicht kommen. => You don't have to come.
Ihr solltet leiser sein. => You should be quieter.`,
    err: `She can to dance very well. => She can dance very well.
He should goes to bed. => He should go to bed.`
  } });

  ext('e-pastprogressive', { more: {
    form: `My sister [was singing:sing] in the shower.
We [were walking:walk] through the park.
At midnight the dog [was barking:bark].
[Was it raining:it / rain] when you left?
I [was writing:write] an email at 8 o'clock.
The baby [was crying:cry] all night.
They [weren't listening:not listen] to the teacher.
Grandma [was knitting:knit] a scarf.
What [was Tom doing:Tom / do] in the garden?
The birds [were singing:sing] in the trees.
We [were sitting:sit] in the car.
He [wasn't wearing:not wear] a jacket.`,
    choose: `The phone rang while I {was having|had} a bath.
Last summer we {went|were going} to Italy.
When the bell rang, the students {were writing|wrote} a test.
She {was walking|walked} home when she saw an accident.
At 8 o'clock this morning we {were sitting|sat} in the classroom.
I {lost|was losing} my keys yesterday.
The children {were playing|played} outside when it started to rain.
Mum {was making|made} a cake when the lights went out.
Tom {fell|was falling} asleep during the film.
While I {was talking|talked} to Lisa, the bus left.`,
    when: `I [was sleeping:sleep] when the alarm [went:go] off.
When we [arrived:arrive], they [were having:have] lunch.
She [was talking:talk] on the phone when the bus [came:come].
While the boys [were playing:play] football, it [began:begin] to snow.
The dog [was barking:bark] when the postman [arrived:arrive].
While I [was waiting:wait] for the bus, I [met:meet] an old friend.`,
    usedto: `My dad [used to] play in a band.
[Did] your grandma [use to] work in a shop?
I [didn't use to] like reading.
We [used to] go to the lake every summer.
My sister [used to] be afraid of the dark.
There [didn't use to] be so many cars.
People [used to] write letters instead of emails.
[Did] you [use to] play with dolls?
He [used to] eat meat, but now he's a vegetarian.
I [used to] walk to school, but now I take the bus.`,
    past: `My brother had a lot of posters. :: not any more => My brother used to have a lot of posters.
We went camping every summer. :: not any more => We used to go camping every summer.
I didn't like fish. :: now: I like it => I didn't use to like fish.`,
    text: `It [was getting] dark and we [were walking] home when we [heard] a strange noise behind us.
When I was little, I [used to] spend my holidays at my grandma's. We [used to] bake cakes together.`,
    trans: `Wir haben Karten gespielt, als das Licht ausging. => We were playing cards when the lights went out.
Früher habe ich keinen Fisch gemocht. => I didn't use to like fish.
Was hast du gemacht, als es zu regnen begann? => What were you doing when it started to rain?
Während ich schlief, hat jemand angerufen. => While I was sleeping, someone called.
Hast du früher Fußball gespielt? => Did you use to play football?`,
    err: `She were reading a book. => She was reading a book.
I was study when you came. => I was studying when you came.
He used to playing football. => He used to play football.
When the phone was ringing, I answered it. => When the phone rang, I answered it.
We didn't used to have a dog. => We didn't use to have a dog.
What did you doing at 8? => What were you doing at 8?`
  } });
})();
