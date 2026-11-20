/* Englisch – größere Aufgabenpools (Teil 6) */
(function () {
  const ext = UB.extendTopic;

  ext('e-gerund', { more: {
    gap: `My mum suggested [taking:take] the bus.
We hope [to win:win] the match.`,
    choose: `She is afraid of {flying|to fly}.
I hope {to see|seeing} you soon.
He enjoys {playing|to play} chess.
We need {to leave|leaving} now.
I'm tired of {waiting|to wait}.
They promised {to come|coming} early.
Do you fancy {going|to go} out tonight?
He stopped {eating|eat} sweets.`,
    prep: `She's proud of [winning:win] the race.
Before [going:go] to bed, I brush my teeth.
I'm sorry for [being:be] late.
He's keen on [playing:play] chess.
After [eating:eat], we went for a walk.
Instead of [watching:watch] TV, let's play a game.
She apologised for [breaking:break] the vase.
I'm worried about [failing:fail] the test.
We talked about [going:go] to Italy.
Are you good at [cooking:cook]?
He insisted on [paying:pay] for the meal.`,
    text: `I'm not very good at [cooking], but I enjoy [baking] cakes. Tomorrow I'm planning [to bake] a chocolate cake.
We decided [to go] for a walk instead of [watching] TV. It was a great idea!`,
    trans: `Ich habe Angst vorm Fliegen. => I'm afraid of flying.
Wir hoffen, bald zu gewinnen. => We hope to win soon.
Vergiss nicht, das Licht auszumachen! => Don't forget to turn off the light!
Sie ging, ohne sich zu verabschieden. => She left without saying goodbye.`,
    err: `I can't stand to wait. => I can't stand waiting.
She is interested in learn Spanish. => She is interested in learning Spanish.
Do you mind to open the window? => Do you mind opening the window?
I hope seeing you soon. => I hope to see you soon.
He gave up to smoke. => He gave up smoking.
I'd like going to Paris. => I'd like to go to Paris.`
  } });

  ext('e-wordformation', { more: {
    neg: `kind => unkind
visible => invisible
believable => unbelievable
comfortable => uncomfortable
appear => disappear
healthy => unhealthy
lucky => unlucky
perfect => imperfect
connect => disconnect
known => unknown`,
    noun: `paint (person) => painter
dance (person) => dancer
sing (person) => singer
play (person) => player
write (person) => writer
drive (person) => driver
visit (person) => visitor
bake (person) => baker
science (person) => scientist
garden (person) => gardener
kind (noun) => kindness
educate (noun) => education
enjoy (noun) => enjoyment
free (noun) => freedom
explain (noun) => explanation
sad (noun) => sadness`,
    adj: `colour => colourful
harm (no harm) => harmless
fog => foggy
love => lovely
tradition => traditional
wind => windy`,
    family: `The [singer:sing] was really good.
Be [careful:care]! The floor is wet.
She is a very [talented:talent] painter.
This book is [useless:use]. It doesn't help me at all.
The [government:govern] has made new laws.
It was [unbelievable:believe]!`,
    text: `The [singer:sing] gave a [wonderful:wonder] concert. Everybody clapped [loudly:loud].
It's [unhealthy:health] to eat too many sweets. Fruit is much [healthier:healthy].
The [visitors:visit] were very [friendly:friend]. They gave us an [invitation:invite] to their home.
I was very [disappointed:disappoint] with the film. The story was [boring:bore] and the actors were [unknown:know].
Thank you for your [kindness:kind]. Your advice was very [helpful:help].`
  } });

  ext('e-pronouns', { more: {
    subj: `Grandpa => he
the window => it
Lisa and I => we
the teachers => they
my mum => she
the apple => it`,
    obj: `I love my grandparents. I often call [them].
Where is my bag? Have you seen [it]?
Mrs Gruber is ill. Let's send [her] a card.
Wait for [me]!
Tom is my best friend. I tell [him] everything.`,
    mine: `This car is their car. => This car is theirs.
That room is his room. => That room is his.`,
    self: `He hurt [himself] when he fell off his bike.
We built the tree house [ourselves].
The door opened by [itself].
Help [yourself] to a drink, Lisa!
My sisters argue with [each other] all the time.
I taught [myself] to swim.
She bought [herself] a new dress.
They introduced [themselves] to the class.
Tom and his dad look like [each other].
Did you boys clean the kitchen [yourselves]?`,
    text: `This is Ben. [He] is my cousin. I like [him] a lot.
"Whose jacket is this?" – "It's [hers]. She left [it] here yesterday."
We painted the room [ourselves]. Our parents helped [us] a little.`,
    trans: `Er sieht mich nicht. => He doesn't see me.
Das ist unser Lehrer. Wir mögen ihn. => That's our teacher. We like him.
Ich habe das selbst gemacht. => I made it myself.
Ist das dein Fahrrad oder meines? => Is that your bike or mine?`,
    err: `Lisa and me went shopping. => Lisa and I went shopping.`
  } });

  ext('e-presentsimple', { more: {
    third: `catch => catches
try => tries
kiss => kisses
buy => buys
push => pushes
carry => carries
enjoy => enjoys
teach => teaches`,
    dodoes: `{Does|Do} your cat sleep a lot?
I {don't|doesn't} understand the question.
{Do|Does} your parents like music?
My grandma {doesn't|don't} use a phone.
{Does|Do} he speak Italian?
We {don't|doesn't} eat fish.
{Do|Does} you know my brother?
The shop {doesn't|don't} open on Sundays.
{Does|Do} it rain a lot in Ireland?`,
    answer: `Do you play an instrument? – Yes, [I do].
Does your grandpa drive? – No, [he doesn't].
Do your friends like football? – No, [they don't].
Does the bus stop here? – Yes, [it does].
Does Lisa speak German? – Yes, [she does].
Do you and your sister share a room? – Yes, [we do].`
  } });

  ext('e-questions', { more: {
    choose: `{Where|When|Who} do you go on holiday? – To Italy.
{Why|What|Where} do you like dogs? – Because they're friendly.
{What|Who|Where} is your favourite food? – Pizza.
{When|Where|How} is the party? – On Saturday.
{Who|What|When} is sitting next to you? – Ben.
{How|Why|What} do you spell your name? – L-I-S-A.
{How often|How old|How many} do you play tennis? – Twice a week.
{How long|How many|How old} is the film? – Two hours.`,
    word: `[How often] do you go swimming? – Every Sunday.
[What] is your name? – Ben.
[Where] is your school? – In the town centre.
[Why] do you like summer? – Because it's warm.
[How long] does the journey take? – Three hours.
[Who] is your favourite teacher? – Mr Huber.
[When] does the shop close? – At six.
[How] is your grandma? – She's fine, thanks.`,
    tags: `She can't swim, [can she]?
You're new here, [aren't you]?
They didn't come, [did they]?
He has finished, [hasn't he]?`,
    err: `How old you are? => How old are you?
Where did she went? => Where did she go?
Who is this bag? => Whose bag is this?
Does she likes music? => Does she like music?`
  } });
})();
