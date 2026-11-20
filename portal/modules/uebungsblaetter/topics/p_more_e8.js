/* Englisch – größere Aufgabenpools (Teil 8) */
(function () {
  const ext = UB.extendTopic;

  ext('e-numbers', { more: {
    days: `spring >> summer >> autumn >> winter
first >> second >> third >> fourth >> fifth
morning >> afternoon >> evening >> night
ten >> twenty >> thirty >> forty >> fifty`,
    time: `1:15 => a quarter past one
3:45 => a quarter to four
5:10 => ten past five
7:50 => ten to eight
8:35 => twenty-five to nine
10:20 => twenty past ten
11:30 => half past eleven
12:40 => twenty to one`,
    ask: `What's the time? – It's [five to] ten. (9:55)
What's the date today? – It's the [twenty-second] of May.
How much is it? – It's [nine] euros [ninety-nine]. (9.99 €)
When is the party? – It's [on] Saturday [at] seven.
Which day comes after Friday? – [Saturday].`,
    years: `1789 => seventeen eighty-nine
2001 => two thousand and one
1969 => nineteen sixty-nine
1683 => sixteen eighty-three`,
    time24: `13:15 => a quarter past one (in the afternoon) / 1.15 p.m.
10:30 => half past ten (in the morning) / 10.30 a.m.
22:10 => ten past ten (in the evening) / 10.10 p.m.
16:40 => twenty to five (in the afternoon) / 4.40 p.m.`
  } });

  ext('e-be', { more: {
    quest: `the film / good => Is the film good?
your friends / in the park => Are your friends in the park?
I / right => Am I right?
the books / on the table => Are the books on the table?
your dad / a doctor => Is your dad a doctor?
it / cold outside => Is it cold outside?`,
    answer: `Am I late? – No, [you aren't].
Is it cold today? – Yes, [it is].
Are your parents from Graz? – Yes, [they are].
Is Lisa your cousin? – Yes, [she is].
Are you tired? – Yes, [I am].
Is the shop open? – No, [it isn't].
Are the children in the garden? – Yes, [they are].
Is Mr Huber your teacher? – Yes, [he is].
Are you and Lisa sisters? – No, [we aren't].`
  } });

  ext('e-w-story', { more: {
    link: `[Suddenly], we heard a loud noise.
[First], we packed our bags.
[Then] we got on the train.
[One day], Tom found a key in the garden.
[After that], he looked for the door.
[In the end], he found a secret room.
[Finally], we arrived at the hotel.
[At first], I didn't like my new school.
[Later], I made lots of friends.
[The next morning], the snow was gone.`,
    better: `The house was old. :: use adjectives => The old, empty house had broken windows.
I was happy. :: add a feeling and a reason => I was so happy because I had won the competition.
She ran. :: use an adverb => She ran quickly down the stairs.
He asked a question. :: use direct speech => "Where are you going?" he asked.`,
    tense: `We {were having|had} dinner when the doorbell rang.
When I arrived, my friends {had already eaten|already ate} all the pizza.
I {was reading|read} a book when I heard a strange noise.`
  } });

  ext('e-w-email', { more: {
    style: `Hello Anna,|I
Dear Ms Gruber,|F
Bye for now!|I
Thank you for your letter of 12 May.|F
Take care!|I
Please let me know …|F
Lots of love,|I
I am interested in …|F`,
    fix: `Hi there! I want a room for two nights. => Dear Sir or Madam, I would like to book a room for two nights.
Dear Mrs Lee, … Cheers, Ben => Dear Mrs Lee, … Yours sincerely, Ben
Tell me when the museum opens. => Could you please tell me when the museum opens?
Gimme the info! => Could you please send me some information?`,
    formal: `I need a room. => I would like to book a room.
What's the price? => Could you tell me how much it costs?
Sorry I'm late with my answer. => I apologise for my late reply.
I got your email. => Thank you for your email.
Tell me soon. => I look forward to hearing from you soon.
Hi, I'm Lena. => My name is Lena Gruber and I am writing to …`
  } });

  ext('e-irregular', { more: {
    mix3: `We have [won:win] the cup!
Our team [won:win] the match yesterday.
Have you [bought:buy] the tickets?
I [bought:buy] a new jacket last week.
The film has already [begun:begin].
The concert [began:begin] at eight.
She has [sung:sing] in the choir for years.
We [sang:sing] songs around the campfire.`,
    text: `Last summer we [flew] to Spain. We [swam] in the sea every day and I [ate] paella for the first time.
My dad [drove] us to school because it [was] raining. On the way we [saw] a rainbow.`
  } });

  ext('e-wordorder', { more: {
    trans: `Sie fährt jeden Tag mit dem Bus. => She takes the bus every day.
Ich esse nie Fleisch. => I never eat meat.
Morgen besuchen wir Oma. => We're visiting Grandma tomorrow.
Er spielt am Wochenende immer Computerspiele. => He always plays computer games at the weekend.`
  } });
})();
