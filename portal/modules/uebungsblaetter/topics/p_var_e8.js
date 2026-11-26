/* Englisch – mehr Varianten, Teil 8 (Wortlisten: neue Wörter, die es in den Pools noch nicht gab) */
(function () {
  const ext = UB.extendTopic;

  ext('e-quantity', { more: {
    sort: `bag|C
potato|C
cookie|C
cat|C
desk|C
flower|C
bike|C
shoe|C
table|C
computer|C
sweet|C
plate|C
luggage|U
air|U
traffic|U
meat|U
flour|U
honey|U
tea|U
soup|U
coffee|U
luck|U
fun|U
oil|U`
  } });

  ext('e-adverbs', { more: {
    form: `soft => softly
proud => proudly
warm => warmly
kind => kindly
wild => wildly
calm => calmly
silent => silently
strong => strongly
busy => busily
noisy => noisily
comfortable => comfortably
simple => simply
possible => possibly
hungry => hungrily
patient => patiently
rude => rudely
fluent => fluently
correct => correctly
cheerful => cheerfully
secret => secretly`
  } });

  ext('e-presentsimple', { more: {
    third: `touch => touches
mix => mixes
relax => relaxes
hurry => hurries
worry => worries
pay => pays
dress => dresses
brush => brushes
finish => finishes
guess => guesses
reach => reaches
copy => copies
cook => cooks
sleep => sleeps
wish => wishes
stay => stays
fry => fries
open => opens`
  } });

  ext('e-numbers', { more: {
    num: `101 => one hundred and one
115 => one hundred and fifteen
150 => one hundred and fifty
230 => two hundred and thirty
345 => three hundred and forty-five
412 => four hundred and twelve
500 => five hundred
678 => six hundred and seventy-eight
703 => seven hundred and three
860 => eight hundred and sixty
999 => nine hundred and ninety-nine
1000 => one thousand
1250 => one thousand two hundred and fifty
2000 => two thousand
3500 => three thousand five hundred
10000 => ten thousand`,
    ord: `6th => sixth
7th => seventh
10th => tenth
14th => fourteenth
15th => fifteenth
19th => nineteenth
24th => twenty-fourth
25th => twenty-fifth
33rd => thirty-third
50th => fiftieth
99th => ninety-ninth
101st => one hundred and first`
  } });

  ext('e-vocab', { more: {
    sort2: `hoodie|C
belt|C
pyjamas|C
sandals|C
tie|C
attic|H
garage|H
wall|H
window|H
door|H
hail|W
lightning|W
frost|W
rainbow|W
elbow|B
finger|B
neck|B
mouth|B`,
    sort1: `niece|F
son|F
daughter|F
grandson|F
board|S
desk|S
lesson|S
classmate|S
test|S
pasta|E
salad|E
cake|E
jam|E
elephant|A
frog|A
giraffe|A
owl|A`,
    opp: `tall => short
black => white
day => night
up => down
inside => outside
hard => soft (or: easy)
sweet => sour
give => take
push => pull
start => finish
laugh => cry
love => hate
ask => answer
come => go
before => after
always => never`
  } });

  ext('e-progressive', { more: {
    ing: `jump => jumping
sing => singing
drive => driving
put => putting
travel => travelling
carry => carrying
have => having
give => giving
sleep => sleeping
eat => eating
win => winning
live => living
tie => tying
skate => skating
hope => hoping
drop => dropping
chat => chatting`
  } });

  ext('e-pastsimple', { more: {
    ed: `cook => cooked
rain => rained
ask => asked
look => looked
need => needed
start => started
finish => finished
move => moved
use => used
climb => climbed
skip => skipped
chat => chatted
worry => worried
tidy => tidied
decide => decided
prefer => preferred
visit => visited
rob => robbed`
  } });

  ext('e-wordformation', { more: {
    neg: `clear => unclear
safe => unsafe
necessary => unnecessary
able => unable
complete => incomplete
dependent => independent
expensive => inexpensive
mature => immature
logical => illogical
obey => disobey
relevant => irrelevant
pack => unpack
lock => unlock
pleasant => unpleasant
probable => improbable
loyal => disloyal`,
    noun: `photograph (person) => photographer
translate (person) => translator
rob (person) => robber
climb (person) => climber
work (person) => worker
travel (person) => traveller
manage (person) => manager
piano (person) => pianist
cycle (person) => cyclist`,
    adj: `friend => friendly
dirt => dirty
salt => salty
luck => lucky
power => powerful
noise => noisy
peace => peaceful
history => historical
hope => hopeful`
  } });

  ext('e-w-describe', { more: {
    sort: `wavy hair|A
red hair|A
pale skin|A
muscular|A
a moustache|A
green eyes|A
a fringe|A
tanned|A
brave|C
selfish|C
rude|C
grumpy|C
confident|C
creative|C
reliable|C
talkative|C`
  } });

  ext('e-nouns', { more: {
    plural: `girl => girls
bird => birds
hat => hats
class => classes
beach => beaches
dog => dogs
sandwich => sandwiches
lorry => lorries
holiday => holidays
country => countries
bush => bushes
address => addresses
tree => trees
cup => cups
horse => horses`
  } });

  ext('e-comparison', { more: {
    er: `clean => cleaner – the cleanest
rich => richer – the richest
deep => deeper – the deepest
wide => wider – the widest
brave => braver – the bravest
angry => angrier – the angriest
lucky => luckier – the luckiest
dry => drier – the driest
fit => fitter – the fittest
slim => slimmer – the slimmest
hungry => hungrier – the hungriest
cool => cooler – the coolest
loud => louder – the loudest
near => nearer – the nearest`,
    more: `delicious => more delicious – the most delicious
intelligent => more intelligent – the most intelligent
colourful => more colourful – the most colourful
useful => more useful – the most useful
wonderful => more wonderful – the most wonderful
unusual => more unusual – the most unusual
successful => more successful – the most successful
crowded => more crowded – the most crowded
relaxing => more relaxing – the most relaxing
peaceful => more peaceful – the most peaceful
amazing => more amazing – the most amazing
frightening => more frightening – the most frightening`
  } });
})();
