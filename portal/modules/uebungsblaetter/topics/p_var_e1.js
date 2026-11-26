/* Englisch – mehr Varianten für die sechs Blätter, Teil 1 (to be, have got, pronouns, nouns, there is) */
(function () {
  const ext = UB.extendTopic;

  ext('e-be', { more: {
    form: `My best friend [is] from Linz.
The windows [are] open.
I [am] in the garden.
Our teacher [is] very nice.
The apples [are] green.
You [are] my best friend.`,
    short: `He is my cousin. => He's my cousin.
They are at the cinema. => They're at the cinema.
It is very cold today. => It's very cold today.
She is my aunt. => She's my aunt.
I am not ready. => I'm not ready.
She is not here. => She isn't here.
We are not tired. => We aren't tired.
It is not my bag. => It isn't my bag.`,
    neg: `It is my pencil. :: not => It isn't my pencil.
They are my cousins. :: not => They aren't my cousins.
He is twelve. :: not => He isn't twelve.
You are in class 2a. :: not => You aren't in class 2a.
I am from Vienna. :: not => I'm not from Vienna.
The film is boring. :: not => The film isn't boring.
My shoes are new. :: not => My shoes aren't new.
Our dog is hungry. :: not => Our dog isn't hungry.`,
    quest: `he / your brother => Is he your brother?
it / your phone => Is it your phone?
we / late => Are we late?
the shop / open => Is the shop open?
your parents / at work => Are your parents at work?
Tom / ill => Is Tom ill?`,
    answer: `Is it cold outside? – Yes, [it is].
Are you twelve? – No, [I'm not].
Is your dad a teacher? – No, [he isn't].
Are we late? – Yes, [we are].
Is the cat in the garden? – Yes, [it is].
Are your friends at the party? – No, [they aren't].
Is Mrs Brown your teacher? – Yes, [she is].`,
    text: `This [is] my classroom. It [is] big and bright. The desks [are] new, but the board [isn't] very clean.
My grandparents [are] from Salzburg. My grandpa [is] 70 and my grandma [is] 68. They [are] very funny.
"Where [are] my keys?" – "They [are] on the table." – "No, they [aren't]!" – "Then they [are] in your bag."
Lisa and I [are] in the same class. She [is] good at maths, but I [am] better at English.
"[Is] it your birthday today?" – "Yes, it [is]! I [am] thirteen now."
Our cat [is] black and white. It [isn't] very old. Its name [is] Mimi.`,
    trans: `Wir sind in der Schule. => We're at school.
Ist das dein Hund? => Is that your dog?`,
    err: `She are my sister. => She is my sister.
The children is in the park. => The children are in the park.`
  } });

  ext('e-havegot', { more: {
    choose: `I {have|has} got two sisters.
The cat {has|have} got green eyes.
My parents {have|has} got a red car.
{Has|Have} your brother got a bike?
We {haven't|hasn't} got a garden.
{Have|Has} you got a pen?
Our school {has|have} got a big gym.
Tom and Lisa {have|has} got a new teacher.`,
    form: `Our house [has got] a big garden.
My friends [have got] new bikes.
The dog [has got] a long tail.
I [haven't got] a sister.
My dad [hasn't got] a beard.
We [have got] English on Monday.
Paul [has got] blue eyes.
You [have got] a nice room!
My grandma [has got] a cat.
They [haven't got] a car.`,
    neg: `He has got a sister. :: not => He hasn't got a sister.
They have got a garden. :: not => They haven't got a garden.
Lisa has got a cat. :: not => Lisa hasn't got a cat.
Lisa has got long hair. :: not => Lisa hasn't got long hair.
My school has got a pool. :: not => My school hasn't got a pool.
We have got time. :: not => We haven't got time.`,
    quest: `he / a dog => Has he got a dog?
your parents / a car => Have your parents got a car?
you / a sister => Have you got a sister?
Lisa / a bike => Has Lisa got a bike?
your school / a library => Has your school got a library?
we / homework => Have we got homework?`,
    answer: `Has your dog got a name? – Yes, [it has].
Have you got a brother? – No, [I haven't].
Has Tom got a phone? – Yes, [he has].
Have your parents got a car? – No, [they haven't].
Has your school got a garden? – Yes, [it has].
Have we got English today? – Yes, [we have].`,
    text: `My best friend Ben [has got] a big family. He [has got] three brothers. They [haven't got] a dog, but they [have got] two rabbits.
"[Have] you [got] a ruler?" – "Yes, I [have]. Here you are."
My room [hasn't got] a TV, but it [has got] a big window. I [have got] lots of books on my shelf.`,
    trans: `Wir haben einen Garten. => We have got a garden.
Hat dein Bruder ein Fahrrad? => Has your brother got a bike?
Ich habe keine Zeit. => I haven't got time.
Mein Hund hat braune Augen. => My dog has got brown eyes.`,
    err: `My parents has got a car. => My parents have got a car.
She haven't got a pet. => She hasn't got a pet.
Has you got a pen? => Have you got a pen?`
  } });

  ext('e-pronouns', { more: {
    subj: `my brother => he
the book => it
my friends and I => we
Mrs Brown => she
the dogs => they
you and Lisa => you`,
    obj: `My grandma lives in Linz. We visit [her] every Sunday.
Where are my shoes? I can't find [them].
Can you help [me], please?
Tom and I are here. Can you see [us]?
This is Ben. Do you know [him]?
These biscuits are great. I love [them].
The cat is hungry. Can you feed [it]?
We are going to the cinema. Do you want to come with [us]?`,
    choose: `Is this bike {yours|your}?
{Our|Ours} house is very old.
This isn't my pen. It's {his|him}.
The black dog is {theirs|their}.`,
    poss: `We've got a cat. [Our] cat is black.
Tom has got a new bike. [His] bike is blue.
You have got a nice room. I like [your] posters.
The dog is wagging [its] tail.
My parents are teachers. [Their] school is in Graz.
I love [my] grandma.`,
    mine: `This is her pen. => This pen is hers.
These are our seats. => These seats are ours.
This is their car. => This car is theirs.
That is my seat. => That seat is mine.`,
    self: `We enjoyed [ourselves] at the party.
The children made the cake [themselves].
Did you hurt [yourself]?
The cat is washing [itself].
I taught [myself] to swim.
Be careful! You can cut [yourselves], children!
She made [herself] a sandwich.
He talks to [himself] when he's nervous.`,
    text: `My friends and I are in the park. [We] are playing football. Lisa's dog is with [us]. [Its] name is Rex.
"Is that Ben's jacket?" – "Yes, it's [his]. [He] always forgets [it]."
Mum, can you help [me]? I can't find [my] keys. – Look, they're in [your] bag!`,
    trans: `Ist das eure Katze? => Is that your cat?
Er hat es selbst gemacht. => He made it himself.
Die Jacke gehört ihr. => The jacket is hers.
Ich kenne ihn nicht. => I don't know him.`,
    err: `Him is my brother. => He is my brother.
The book is her's. => The book is hers.
She hurt herselves. => She hurt herself.`
  } });

  ext('e-nouns', { more: {
    plural: `mouse => mice
city => cities`,
    aan: `It's {an|a} old house.
I need {a|an} new pencil.
There is {an|a} orange on the table.
He wants to be {an|a} actor.
We saw {an|a} elephant at the zoo.
It takes {an|a} hour to get there.
I've got {a|an} uncle in America.`,
    this: `{Those|That} trees over there are very old.
{This|These} is my brother.
Are {these|this} your keys?
{That|Those} house on the hill is ours.
I love {these|this} jeans.
{Those|That} children are from my school.`,
    saxon: `the dog of my grandma => my grandma's dog
the toys of the children => the children's toys
the books of the students => the students' books
the house of the Smiths => the Smiths' house
the name of my teacher => my teacher's name
the bikes of my brothers => my brothers' bikes`,
    irr: `My [feet:foot] are cold.
There are lots of [sheep:sheep] on the farm.
The [women:woman] are talking.
We saw two [mice:mouse] in the kitchen.
How many [people:person] are in your class?
Ten [fish:fish] are swimming in the pond.`,
    text: `There are two [women] and three [men] in the bus. One of them is [an] old man with [a] big dog.
[These] are my [brothers'] bikes. The red one is Tom's, and [that] one over there is Paul's.
I need [an] apple, [a] banana and two [tomatoes] for the salad.`,
    trans: `Ich habe einen Onkel und eine Tante. => I've got an uncle and an aunt.
Das sind die Bücher meiner Schwester. => These are my sister's books.
Jene Häuser sind sehr alt. => Those houses are very old.
Zwei Mäuse sind in der Küche. => Two mice are in the kitchen.`,
    err: `I saw three mouses. => I saw three mice.
This is my parent's car (Mum and Dad). => This is my parents' car.
Those book is mine. => That book is mine.
I've got a apple. => I've got an apple.`
  } });

  ext('e-thereis', { more: {
    isare: `There {are|is} many children in the park.
There {is|are} a new girl in our class.
There {are|is} three windows in my room.
There {is|are} some milk in the fridge.
There {are|is} lots of shops in the city centre.
There {is|are} a book on the chair.
There {are|is} two cats on the sofa.
There {is|are} a mistake in your homework.
There {are|is} twenty-two students in our class.
There {is|are} an apple in my bag.`,
    neg: `There is a bus stop near my house. :: not => There isn't a bus stop near my house.
There are some trees in the street. :: not => There aren't any trees in the street.
There is a cinema in our town. :: not => There isn't a cinema in our town.
There are some biscuits in the box. :: not => There aren't any biscuits in the box.`,
    quest: `a park / near your house => Is there a park near your house?
any pictures / on the wall => Are there any pictures on the wall?
a bakery / in your street => Is there a bakery in your street?
any pets / in your family => Are there any pets in your family?`,
    answer: `Is there a TV in your room? – No, [there isn't].
Are there any parks in your town? – Yes, [there are].
Is there a swimming pool at your school? – No, [there isn't].
Are there any apples in the bowl? – Yes, [there are].
Is there a dog in the garden? – Yes, [there is].`,
    someany: `We need {some|any} bread for breakfast.
Are there {any|some} good films on TV tonight?
I haven't got {any|some} money.
Would you like {some|any} tea?
There isn't {any|some} juice in the fridge.
I've got {some|any} new games.
Have you got {any|some} brothers or sisters?
There are {some|any} children in the park.
Can I have {some|any} water, please?
We didn't buy {any|some} vegetables.`,
    text: `In our town [there is] a big park. [There are] lots of trees, but [there aren't] any benches.
"[Are there] any biscuits left?" – "No, [there aren't]. But [there is] some cake."
[There is] a new pupil in our class. [There are] now twenty-three of us.`,
    trans: `Es gibt zwei Kinos in Graz. => There are two cinemas in Graz.
Gibt es hier eine Bushaltestelle? => Is there a bus stop here?
Es gibt keine Milch mehr. => There isn't any milk left.
Möchtest du etwas Tee? => Would you like some tea?`,
    err: `There are a dog in the garden. => There is a dog in the garden.
Are there some apples? => Are there any apples?
There isn't some milk. => There isn't any milk.`
  } });
})();
