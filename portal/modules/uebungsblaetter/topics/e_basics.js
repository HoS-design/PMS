/* Englisch – Grundlagen 1. Klasse: to be, have got, pronouns, nouns, there is/are
   Anweisungen auf Englisch, Merkkasten und „Das kannst du“ auf Deutsch. */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-grammar' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ to be
  def({
    id: 'e-be', title: 'to be: am, is, are', klassen: [1], img: 'MiniHoS_Schwarz_Winken-Buch',
    merk: '<b>to be</b> (sein): I <b>am</b> – you <b>are</b> – he/she/it <b>is</b> – we/you/they <b>are</b>. <b>Kurzformen</b>: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re. <b>Verneinung</b> mit not: I\'m not, he isn\'t (is not), they aren\'t (are not). <b>Frage</b>: Das Verb kommt nach vorne: <b>Are</b> you ready? – Yes, I am. / No, I\'m not. <b>Is</b> she twelve? – Yes, she is. / No, she isn\'t.',
    pools: {
      form: `I [am] twelve years old.
My name [is] Lena.
We [are] in class 1b.
Tom and Ben [are] my friends.
The cat [is] under the table.
You [are] a great singer.
It [is] cold today.
My parents [are] at work.
Our teacher [is] very nice.
I [am] from Austria.
They [are] in the garden.
The books [are] on my desk.
Graz [is] a big city.
My brother [is] ten.
We [are] hungry.
The dog [is] brown and white.
You and Mia [are] in the same class.
My favourite colour [is] green.
I [am] good at football.
The apples [are] red.
She [is] my best friend.
He [is] at home.
The shop [is] closed.
These shoes [are] new.
My grandma [is] seventy.
The children [are] in the park.`,
      short: `I am hungry. => I'm hungry.
She is my sister. => She's my sister.
We are ready. => We're ready.
They are at school. => They're at school.
He is twelve. => He's twelve.
It is sunny. => It's sunny.
You are late. => You're late.
I am from Graz. => I'm from Graz.
They are my friends. => They're my friends.
She is not here. => She isn't here.
We are not tired. => We aren't tired.
He is not at home. => He isn't at home.`,
      neg: `I am tired. :: not => I'm not tired.
She is at home. :: not => She isn't at home.
We are in the classroom. :: not => We aren't in the classroom.
The dog is hungry. :: not => The dog isn't hungry.
They are my cousins. :: not => They aren't my cousins.
It is cold. :: not => It isn't cold.
My bag is red. :: not => My bag isn't red.
You are late. :: not => You aren't late.
Tom is eleven. :: not => Tom isn't eleven.
The windows are open. :: not => The windows aren't open.
I am good at maths. :: not => I'm not good at maths.
The film is boring. :: not => The film isn't boring.`,
      quest: `you / ready => Are you ready?
she / your sister => Is she your sister?
they / at school => Are they at school?
it / your pencil => Is it your pencil?
Tom / twelve => Is Tom twelve?
we / late => Are we late?
the cat / in the garden => Is the cat in the garden?
your parents / at home => Are your parents at home?
he / your teacher => Is he your teacher?
the shop / open => Is the shop open?
you / from Austria => Are you from Austria?
Lisa and Mia / friends => Are Lisa and Mia friends?`,
      answer: `Are you hungry? – Yes, [I am].
Is she your sister? – No, [she isn't].
Are they at home? – Yes, [they are].
Is it your bag? – Yes, [it is].
Is Tom in your class? – No, [he isn't].
Are you twelve? – No, [I'm not].
Is the cat black? – Yes, [it is].
Are we late? – No, [we aren't].
Is your mum a teacher? – Yes, [she is].
Are the shops open? – No, [they aren't].
Is your brother at home? – No, [he isn't].
Are you and Ben friends? – Yes, [we are].`
    },
    levels: {
      1: {
        ichkann: ['Du kannst am, is und are richtig einsetzen.', 'Du kannst die Kurzformen von to be schreiben.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 10, wordbox: false, title: 'am, is or are?', instr: 'Fill in the correct form of to be.' },
          { type: 'pair', pool: 'short', n: 5, filter: x => !/not/.test(x.q), inline: true, head: 'Long form', col: 'Short form', title: 'Short forms', instr: 'Write the sentences with short forms.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze mit to be verneinen.', 'Du kannst Kurzformen mit not bilden (isn\'t, aren\'t).'],
        tasks: [
          { type: 'gap', pool: 'form', n: 6, title: 'am, is or are?', instr: 'Fill in the correct form of to be.' },
          { type: 'pair', pool: 'neg', n: 6, inline: true, head: 'Sentence', col: 'Negative sentence', title: 'Make the sentences negative.', instr: 'Use short forms: isn\'t, aren\'t, I\'m not.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Fragen mit to be stellen.', 'Du kannst Kurzantworten geben (Yes, I am. / No, she isn\'t.).'],
        tasks: [
          { type: 'pair', pool: 'quest', n: 6, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Make questions with to be.' },
          { type: 'gap', pool: 'answer', n: 7, title: 'Short answers', instr: 'Complete the short answers.' },
          { type: 'pair', pool: 'neg', n: 3, title: 'Make the sentences negative.', instr: 'Use short forms.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ have got
  def({
    id: 'e-havegot', title: 'have got / has got', klassen: [1], img: 'MiniHoS_Schwarz_Jubeln',
    merk: '<b>have got</b> (haben, besitzen): I/you/we/they <b>have got</b> (I\'ve got), he/she/it <b>has got</b> (she\'s got). <b>Verneinung</b>: I <b>haven\'t got</b> a dog. He <b>hasn\'t got</b> a bike. <b>Frage</b>: <b>Have</b> you <b>got</b> a pet? – Yes, I have. / No, I haven\'t. <b>Has</b> she <b>got</b> a phone? – Yes, she has. / No, she hasn\'t.',
    pools: {
      form: `My sister [has got] a new bike.
We [have got] two cats.
I [have got] a big family.
Tom [has got] blue eyes.
They [have got] a nice garden.
The dog [has got] a long tail.
You [have got] a lot of books.
My grandparents [have got] a farm.
Lisa [has got] long hair.
Our school [has got] a big gym.
I [have got] a cold.
He [has got] three brothers.
We [have got] maths today.
The house [has got] a red door.
My mum [has got] a new car.
You and Ben [have got] the same shoes.
Our teacher [has got] a dog.
The rabbits [have got] long ears.`,
      neg: `I have got a dog. :: not => I haven't got a dog.
She has got a phone. :: not => She hasn't got a phone.
We have got a car. :: not => We haven't got a car.
Tom has got a sister. :: not => Tom hasn't got a sister.
They have got a garden. :: not => They haven't got a garden.
My cat has got a collar. :: not => My cat hasn't got a collar.
You have got my pen. :: not => You haven't got my pen.
He has got time today. :: not => He hasn't got time today.
I have got a brother. :: not => I haven't got a brother.
Our flat has got a balcony. :: not => Our flat hasn't got a balcony.`,
      quest: `you / a pet => Have you got a pet?
she / a brother => Has she got a brother?
they / a big house => Have they got a big house?
Tom / a bike => Has Tom got a bike?
your school / a library => Has your school got a library?
we / English today => Have we got English today?
your dog / a name => Has your dog got a name?
you / a pencil => Have you got a pencil?
your parents / a car => Have your parents got a car?
Mia / a cold => Has Mia got a cold?`,
      answer: `Have you got a pet? – Yes, [I have].
Has she got a sister? – No, [she hasn't].
Have they got a garden? – Yes, [they have].
Has Tom got a phone? – No, [he hasn't].
Have you got a ruler? – No, [I haven't].
Has your cat got a name? – Yes, [it has].
Have we got PE today? – Yes, [we have].
Has your mum got a car? – Yes, [she has].
Have your friends got bikes? – No, [they haven't].
Has your brother got a girlfriend? – No, [he hasn't].`,
      choose: `My brother {has|have} got a new phone.
We {have|has} got a dog and two cats.
Lisa {hasn't|haven't} got a bike.
{Have|Has} you got a pencil?
They {haven't|hasn't} got a garden.
{Has|Have} your sister got a pet?
I {have|has} got a big family.
The cat {has|have} got green eyes.
Our flat {hasn't|haven't} got a balcony.
{Have|Has} your parents got a car?
Tom and I {have|has} got the same jacket.
My school {has|have} got a swimming pool.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst have got und has got richtig einsetzen.', 'Du weißt, dass es bei he, she und it has got heißt.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 8, title: 'have or has?', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'form', n: 8, title: 'have got or has got?', instr: 'Fill in have got or has got.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze mit have got verneinen.', 'Du kannst haven\'t got und hasn\'t got richtig verwenden.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 6, title: 'Circle the correct word.', instr: 'have / has / haven\'t / hasn\'t' },
          { type: 'pair', pool: 'neg', n: 6, inline: true, head: 'Sentence', col: 'Negative sentence', title: 'Make the sentences negative.', instr: 'Use haven\'t got or hasn\'t got.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Fragen mit have got stellen.', 'Du kannst Kurzantworten geben (Yes, I have. / No, she hasn\'t.).'],
        tasks: [
          { type: 'pair', pool: 'quest', n: 6, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Make questions with have got / has got.' },
          { type: 'gap', pool: 'answer', n: 6, title: 'Short answers', instr: 'Complete the short answers.' },
          { type: 'gap', pool: 'form', n: 4, title: 'have got or has got?', instr: 'Fill in the correct form.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ pronouns
  def({
    id: 'e-pronouns', title: 'Pronouns: I, me, my, mine, myself', klassen: [1, 2, 3], img: 'MiniHoS_Geste_Willkommen',
    merk: '<b>Personalpronomen</b> als Subjekt: I, you, he, she, it, we, you, they. Als <b>Objekt</b> (nach dem Verb oder einer Präposition): me, you, him, her, it, us, you, them – Can you help <b>me</b>? I like <b>him</b>. <b>Possessivbegleiter</b> (vor einem Nomen): my, your, his, her, its, our, your, their – <b>my</b> bag. <b>Possessivpronomen</b> (allein): mine, yours, his, hers, ours, yours, theirs – The bag is <b>mine</b>. <b>Reflexivpronomen</b>: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves – She hurt <b>herself</b>. <b>each other</b> = einander.',
    pools: {
      subj: `Lena => she
Tom => he
my parents => they
the cat => it
you and I => we
Mr Smith => he
the books => they
my sister and I => we
Mrs Brown => she
the bike => it
Ben and Mia => they
my dog => it`,
      obj: `Look at Tom. Can you see [him]?
I've got a new phone. Do you like [it]?
Lisa is nice. I often help [her].
These are my friends. I play with [them] every day.
Can you help [me], please?
We're in the garden. Come and play with [us]!
Where are my keys? I can't find [them].
Mr Brown is our teacher. We like [him].
My grandma lives in Linz. I visit [her] every month.
This is a great song. Listen to [it]!
Mia and I are hungry. Can you give [us] an apple?
Where is Ben? I want to talk to [him].
The flowers are beautiful. Mum loves [them].
Is that your sister? Please say hello to [her].
You're my friend. I trust [you].`,
      poss: `This is Anna. [Her] bag is red.
I've got a dog. [My] dog is called Rex.
Tom and Lisa live in Graz. [Their] house is big.
We love [our] school.
Ben has got a bike. [His] bike is new.
The cat is eating [its] food.
You and Max, where are [your] books?
Mr Miller is [our] English teacher.
My parents and [their] friends are at the party.
Is this [your] pencil, Mia?
Lisa is talking to [her] brother.
I can't find [my] keys.
The children are playing with [their] toys.
Paul is cleaning [his] room.`,
      mine: `This bag is my bag. => This bag is mine.
These books are your books. => These books are yours.
The red bike is his bike. => The red bike is his.
That phone is her phone. => That phone is hers.
The big house is our house. => The big house is ours.
The cat is their cat. => The cat is theirs.
Is this pencil your pencil? => Is this pencil yours?
The blue jacket is my jacket. => The blue jacket is mine.
These shoes are her shoes. => These shoes are hers.
The garden is our garden. => The garden is ours.`,
      choose: `This is {my|mine} bag.
The bag is {mine|my}.
Is this {your|yours} pencil?
Is this pencil {yours|your}?
{Her|Hers} cat is black.
The black cat is {hers|her}.
Can you help {me|I}?
{We|Us} are in class 2a.
Please give {them|they} the ball.
{They|Them} live in Vienna.
Look at {him|he}!
{He|Him} is my cousin.
This is {our|ours} classroom.
The classroom is {ours|our}.
{Their|Theirs} dog is very friendly.
The friendly dog is {theirs|their}.`,
      self: `I cut [myself] with a knife.
She looked at [herself] in the mirror.
He taught [himself] to play the guitar.
We enjoyed [ourselves] at the party.
The cat is washing [itself].
Did you hurt [yourself], Tom?
They made the cake [themselves].
Children, help [yourselves] to some cake!
Ben and Lisa often call [each other].
My brother and I help [each other] with homework.
Be careful! Don't burn [yourself]!
I made this card [myself].
Lena introduced [herself] to the new teacher.
The two friends hugged [each other].`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Nomen durch he, she, it, we oder they ersetzen.', 'Du kannst Objektpronomen (me, him, her, us, them) verwenden.'],
        tasks: [
          { type: 'pair', pool: 'subj', n: 6, inline: true, head: 'Noun', col: 'Pronoun', title: 'Which pronoun?', instr: 'Write he, she, it, we or they.' },
          { type: 'gap', pool: 'obj', n: 8, title: 'me, him, her, it, us, them', instr: 'Fill in the object pronoun.' },
          { type: 'gap', pool: 'choose', n: 4, filter: x => /\{(me|We|them|They|him|He)\|/.test(x.q), title: 'Circle the correct word.', instr: 'Subject or object?' }
        ]
      },
      2: {
        ichkann: ['Du kannst my, your, his, her, its, our, their richtig verwenden.', 'Du kannst mine, yours, his, hers, ours, theirs verwenden.'],
        tasks: [
          { type: 'gap', pool: 'poss', n: 6, title: 'my, your, his, her …', instr: 'Fill in the possessive word.' },
          { type: 'pair', pool: 'mine', n: 4, title: 'mine, yours, hers …', instr: 'Write the sentences again. Use mine, yours, his, hers, ours or theirs.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'Circle the correct word.', instr: 'my or mine? your or yours?' }
        ]
      },
      3: {
        ichkann: ['Du kannst Reflexivpronomen (myself, herself …) verwenden.', 'Du kannst each other richtig einsetzen.', 'Du kannst alle Pronomen sicher unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 'self', n: 8, title: 'myself, yourself … or each other?', instr: 'Fill in the gaps.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'Circle the correct word.', instr: 'Choose the correct pronoun.' },
          { type: 'gap', pool: 'obj', n: 4, title: 'Object pronouns', instr: 'Fill in me, him, her, it, us or them.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ nouns, a/an, this/these, 's
  def({
    id: 'e-nouns', title: 'Nouns: plural, a/an, this/these', klassen: [1], img: 'MiniHoS_Schwarz_Lesen-Buch',
    merk: '<b>Mehrzahl</b>: meist + s (book – books), nach s, sh, ch, x + es (bus – buses, box – boxes), Konsonant + y → ies (baby – babies), aber: boy – boys. Unregelmäßig: man – men, woman – women, child – children, foot – feet, tooth – teeth, mouse – mice, person – people. <b>a / an</b>: an vor Selbstlaut-<i>Klang</i>: an apple, an hour; a vor Mitlaut-Klang: a book, a uniform. <b>this / that</b> (Einzahl), <b>these / those</b> (Mehrzahl); this/these = hier, that/those = dort. <b>Besitz-s</b>: Tom<b>\'s</b> bike, my parents<b>\'</b> car, the children<b>\'s</b> room.',
    pools: {
      plural: `book => books
bus => buses
baby => babies
box => boxes
boy => boys
dish => dishes
city => cities
watch => watches
day => days
family => families
man => men
woman => women
child => children
foot => feet
tooth => teeth
mouse => mice
person => people
knife => knives
leaf => leaves
fox => foxes
glass => glasses
key => keys
sheep => sheep
fish => fish`,
      aan: `I've got {an|a} apple.
She has got {a|an} brother.
Can I have {an|a} egg, please?
He is {an|a} English teacher.
It's {a|an} big house.
We need {an|a} umbrella.
My mum is {a|an} doctor.
There is {an|a} orange on the table.
I'll be back in {an|a} hour.
She wears {a|an} uniform at school.
It's {an|a} old car.
Tom has got {a|an} new bike.
That's {an|a} interesting book.
He's {a|an} good friend.
Is there {an|a} ice cream for me?
I want {a|an} sandwich.`,
      this: `{This|These} book is very good.
{These|This} shoes are too small.
Look at {that|those} bird in the tree!
{Those|That} houses over there are old.
Are {these|this} your keys?
Is {this|these} your pencil?
I like {that|those} jacket in the window.
{These|This} apples are sweet.
Who are {those|that} children over there?
{This|These} is my friend Ben.`,
      saxon: `the bike of Tom => Tom's bike
the car of my parents => my parents' car
the room of my sister => my sister's room
the toys of the children => the children's toys
the dog of Lisa => Lisa's dog
the books of the teacher => the teacher's books
the house of my grandparents => my grandparents' house
the phone of Ben => Ben's phone
the bags of the girls => the girls' bags
the bed of the cat => the cat's bed`,
      irr: `Two [men:man] are standing at the door.
I brush my [teeth:tooth] every morning.
There are three [children:child] in the garden.
My [feet:foot] are cold.
The cat is chasing two [mice:mouse].
Many [people:person] live in Vienna.
Five [women:woman] work in this shop.
Be careful with the [knives:knife]!
In autumn the [leaves:leaf] are red and yellow.
The farmer has got a lot of [sheep:sheep].`
    },
    levels: {
      1: {
        ichkann: ['Du kannst die Mehrzahl von Nomen bilden.', 'Du kannst a und an richtig verwenden.'],
        tasks: [
          { type: 'pair', pool: 'plural', n: 8, filter: x => !/man|child|foot|tooth|mouse|person|knife|leaf|sheep|fish/.test(x.q), inline: true, head: 'Singular', col: 'Plural', title: 'One – many', instr: 'Write the plural.' },
          { type: 'gap', pool: 'aan', n: 8, title: 'a or an?', instr: 'Circle a or an. Listen to the first sound!' }
        ]
      },
      2: {
        ichkann: ['Du kennst unregelmäßige Mehrzahlformen (children, feet, mice …).', 'Du kannst this, that, these und those richtig verwenden.'],
        tasks: [
          { type: 'pair', pool: 'plural', n: 8, inline: true, head: 'Singular', col: 'Plural', title: 'Write the plural.', instr: 'Careful: some plurals are irregular.' },
          { type: 'gap', pool: 'this', n: 6, title: 'this, that, these or those?', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'aan', n: 4, title: 'a or an?', instr: 'Circle the correct word.' }
        ]
      },
      3: {
        ichkann: ['Du kannst das Besitz-s (Tom\'s bike, my parents\' car) bilden.', 'Du kannst unregelmäßige Mehrzahlformen im Satz verwenden.'],
        tasks: [
          { type: 'pair', pool: 'saxon', n: 6, inline: true, head: 'of …', col: 'with \'s', title: 'Whose is it?', instr: 'Write it with \'s or s\'.' },
          { type: 'gap', pool: 'irr', n: 6, title: 'Irregular plurals', instr: 'Fill in the plural of the word in brackets.' },
          { type: 'gap', pool: 'this', n: 4, title: 'this, that, these or those?', instr: 'Circle the correct word.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ there is / there are, some / any
  def({
    id: 'e-thereis', title: 'There is / there are, some / any', klassen: [1, 2], img: 'MiniHoS_Forschen_Fernglas',
    merk: '<b>there is</b> (Einzahl) / <b>there are</b> (Mehrzahl) = es gibt, da ist/sind: There\'s a cat in the garden. There are two books on the desk. <b>Verneinung</b>: There isn\'t a … / There aren\'t any … <b>Frage</b>: Is there a …? – Yes, there is. / No, there isn\'t. Are there any …? – Yes, there are. / No, there aren\'t. <b>some</b> in bejahten Sätzen (und bei Angeboten/Bitten: Would you like some tea?), <b>any</b> in verneinten Sätzen und Fragen: There aren\'t any apples. Are there any eggs?',
    pools: {
      isare: `There {is|are} a cat in the garden.
There {are|is} two books on my desk.
There {is|are} a big tree in front of our school.
There {are|is} twenty-four students in my class.
There {is|are} an apple in my bag.
There {are|is} lots of shops in Graz.
There {is|are} a park near my house.
There {are|is} three bedrooms in our flat.
There {is|are} a clock on the wall.
There {are|is} some flowers on the table.
There {is|are} milk in the fridge.
There {are|is} five people in my family.`,
      someany: `There are {some|any} apples in the bowl.
There aren't {any|some} bananas.
Are there {any|some} eggs in the fridge?
I've got {some|any} new games.
We haven't got {any|some} milk.
Have you got {any|some} brothers or sisters?
Would you like {some|any} tea?
There isn't {any|some} bread left.
Can I have {some|any} water, please?
Is there {any|some} cheese on the pizza?
She has got {some|any} good ideas.
They don't have {any|some} homework today.`,
      neg: `There is a TV in my room. :: not => There isn't a TV in my room.
There are some cookies. :: not => There aren't any cookies.
There is a garden. :: not => There isn't a garden.
There are some students in the classroom. :: not => There aren't any students in the classroom.
There is a bus stop near my house. :: not => There isn't a bus stop near my house.
There are some chairs in the kitchen. :: not => There aren't any chairs in the kitchen.
There is a cinema in my town. :: not => There isn't a cinema in my town.
There are some pictures on the wall. :: not => There aren't any pictures on the wall.`,
      quest: `a swimming pool / at your school => Is there a swimming pool at your school?
any shops / near your house => Are there any shops near your house?
a computer / in your room => Is there a computer in your room?
any eggs / in the fridge => Are there any eggs in the fridge?
a park / in your town => Is there a park in your town?
any good films / on TV tonight => Are there any good films on TV tonight?
a bus / to the city centre => Is there a bus to the city centre?
any mistakes / in my test => Are there any mistakes in my test?`,
      answer: `Is there a lake near your town? – Yes, [there is].
Are there any cats in your house? – No, [there aren't].
Is there a bakery in your street? – No, [there isn't].
Are there any apples left? – Yes, [there are].
Is there a TV in the kitchen? – No, [there isn't].
Are there any students in the gym? – Yes, [there are].
Is there any milk? – Yes, [there is].
Are there any buses on Sunday? – No, [there aren't].`,
      room: `Describe your bedroom. Write 6 sentences with there is / there are. => There is a bed … ; There are two … ; There isn't a … ; There aren't any …
Describe your classroom. Write 6 sentences with there is / there are. => There are … students ; There is a board … ; There isn't … ; some / any
Describe your dream house. Write 6 sentences with there is / there are. => There is a swimming pool … ; There are … ; some / any
Describe your town or village. Write 6 sentences with there is / there are. => There is a church … ; There are some shops … ; There isn't a …`
    },
    levels: {
      1: {
        ichkann: ['Du kannst there is und there are richtig verwenden.', 'Du kannst beschreiben, was es in einem Raum gibt.'],
        tasks: [
          { type: 'gap', pool: 'isare', n: 10, title: 'There is or there are?', instr: 'Circle is or are.' },
          { type: 'write', pool: 'room', n: 1, lines: 7, title: 'Write about a place.', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze mit there is/are verneinen und Fragen stellen.', 'Du kannst Kurzantworten geben (Yes, there is. / No, there aren\'t.).'],
        tasks: [
          { type: 'pair', pool: 'neg', n: 4, title: 'Make the sentences negative.', instr: 'Use isn\'t a … / aren\'t any …' },
          { type: 'pair', pool: 'quest', n: 4, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Is there a …? / Are there any …?' },
          { type: 'gap', pool: 'answer', n: 5, title: 'Short answers', instr: 'Complete the answers.' }
        ]
      },
      3: {
        ichkann: ['Du kannst some und any richtig verwenden.', 'Du weißt, dass man bei Angeboten und Bitten some verwendet.'],
        tasks: [
          { type: 'gap', pool: 'someany', n: 10, title: 'some or any?', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'answer', n: 4, title: 'Short answers', instr: 'Complete the answers.' },
          { type: 'write', pool: 'room', n: 1, lines: 5, title: 'Write about a place.', instr: 'Use some and any, too.' }
        ]
      }
    }
  });
})();
