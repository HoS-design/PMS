/* Englisch – mehr Varianten, Teil 11: Schreibaufträge Kl. 3–4 (Beschreiben, Geschichte, Meinung, E-Mail) */
(function () {
  const ext = UB.extendTopic;

  ext('e-w-describe', { more: {
    place: `Describe your favourite place to relax. => where is it? ; what it looks like ; what you can see, hear and smell ; why you like it
Describe your classroom. => size ; furniture (there is / there are) ; what is on the walls ; what you would change
Describe a market or a shop you know. => where is it? ; what you can buy there ; the people ; what you like about it
Describe your perfect holiday place. => where is it? ; the weather ; what there is ; what you can do there`,
    p4: `Describe a family member. => who? ; appearance (has got / is) ; character + examples ; what you do together ; why he or she is important to you
Describe the best party you have ever been to. => where and when? ; the people ; food and music ; what happened ; feelings
Describe your perfect school of the future. => building and classrooms ; technology ; lessons and timetable ; will / would ; why it is better
Describe a photo that is important to you. => who / what is on it? ; in the foreground / in the background ; when and where it was taken ; why it is important
Describe your favourite season. => weather ; colours, sounds and smells ; what you do ; compare it with other seasons`,
    better: `The beach was nice. => The beach was long and sandy, and the water was clear and warm.
My bike is old. => My bike is old and a bit rusty, but it is still really fast.
The party was fun. => The party was great fun – we danced, played games and ate lots of cake.
Our cat is lazy. => Our cat is big and lazy – she sleeps on the sofa all day.`
  } });

  ext('e-w-story', { more: {
    write: `Write a story with the title "The mysterious parcel". => Who? Where? When? ; what was in the parcel? ; suddenly … ; ending
Write a story that begins: "The lights went out at exactly midnight …" => past simple and past progressive ; what happened ; feelings ; ending
Write a story about a surprise party. => who? ; the preparations ; what went wrong or right ; direct speech ; ending
Write a story with these four words: phone – bus – rain – friend. => use all four words ; past simple ; linking words ; ending`,
    w4: `Write a story that ends: "… and I have never opened that box again." => suspense ; narrative tenses (also past perfect) ; direct speech ; title
Write a story with the title "Locked in the school". => why you were there at night ; what you heard and saw ; feelings ; how you got out
Write a story from the point of view of an old school bag. => I … ; what it has seen ; feelings ; a special day
Write a story with these five words: map – island – boat – thunder – treasure. => use all five words ; narrative tenses ; climax ; direct speech ; title
Write a story that begins: "The message on my phone said only: 'Don't go home.'" => suspense ; past simple / progressive / perfect ; surprising ending`
  } });

  ext('e-w-opinion', { more: {
    write: `Should children get pocket money for helping at home? => your opinion ; two reasons with examples ; one argument against ; conclusion
Are video games good or bad for young people? => advantages ; disadvantages ; your opinion with reasons
Should pets be allowed at school? Write your opinion. => introduction ; arguments for ; arguments against ; In conclusion …
Is it better to travel by train or by car? => advantages of the train ; advantages of the car ; your opinion with reasons`,
    w4: `"Everybody should learn a musical instrument." Do you agree? => introduction ; arguments for ; arguments against ; examples ; your opinion in the conclusion
"Fast food should be banned at schools." Write an article for your school magazine. => catchy title ; your opinion ; arguments and examples ; counter-argument ; conclusion
"Students should choose their own subjects." Write a for-and-against essay. => introduction ; arguments for ; arguments against ; your opinion in the conclusion
"Cars should not be allowed in city centres." Discuss. => introduction ; advantages and disadvantages ; examples ; conclusion
"Social media does more harm than good." Write a post for an online forum. => Hi everyone, ; your opinion ; arguments and examples ; counter-argument ; What do you think?`,
    rewrite: `Books are boring. => I think reading can be boring if you don't find the right book.
Summer is the best. => In my opinion, summer is the best season because we can swim and spend time outside.
Cities are noisy. => I believe that big cities can be stressful because there is a lot of traffic and noise.
Pocket money is important. => In my view, pocket money is important because children learn how to handle money.`
  } });

  ext('e-w-email', { more: {
    w3: `You want to visit a museum in London with your class. Write a formal email and ask about tickets and opening hours. => Dear Sir or Madam, ; date and number of students ; questions (opening hours, prices, guided tours) ; Could you please …? ; Yours faithfully,
You are interested in a summer football camp in England. Write a formal email to the organisers. => Dear Sir or Madam, ; about you (age, experience) ; questions (dates, price, equipment) ; I look forward to hearing from you. ; Yours faithfully,
You want to rent bikes for a family holiday. Write a formal email to a bike shop. => Dear Sir or Madam, ; dates and number of bikes ; questions (prices, helmets, opening hours) ; I would be grateful if … ; Yours faithfully,
You want to take part in a cooking course for teenagers. Write a formal email and ask for information. => Dear Sir or Madam, ; why you are interested ; questions (dates, price, what to bring) ; Could you please …? ; Yours faithfully,`,
    w4: `You stayed at a hotel and your room was dirty and noisy. Write a formal email of complaint. => Dear Sir or Madam, ; when you stayed ; the problems ; what you expect ; I look forward to … ; Yours faithfully,
You want to work as a volunteer at an animal shelter in Ireland. Write an application email. => Dear Mr / Ms …, ; I am writing to apply for … ; about you (age, experience with animals) ; why you want to help ; Yours sincerely,
You ordered a jacket online, but you got the wrong size and colour. Write a formal email to the shop. => Dear Sir or Madam, ; order number and date ; the problem ; what you want (exchange / refund) ; Yours faithfully,
Your class wants to do a project with a school in Scotland. Write a formal email to the head teacher. => Dear Mr / Ms …, ; who you are ; your idea for the project ; questions ; I look forward to hearing from you. ; Yours sincerely,`,
    formal: `Tell me where the hotel is. => Could you please tell me where the hotel is?
I can't come. => Unfortunately, I will not be able to come.
Hey, I want the job. => I am writing to apply for the job.
The jacket is too small. Change it! => Unfortunately, the jacket is too small. Could I exchange it, please?
Answer fast! => I would appreciate a quick reply.
I don't get it. => I am afraid I do not understand.`,
    fix: `Hey, are there still rooms free? => Dear Sir or Madam, are there any rooms available?
I want to know when the course starts. => I would like to know when the course starts.
Hi, how much is the ticket? => Could you please tell me how much the ticket costs?`
  } });

  ext('e-wordorder', { more: {
    svo: `my brother >> rides >> a bike
the teacher >> opens >> the window
Mia >> wears >> a blue jacket
our class >> visits >> a museum
the boys >> build >> a snowman
grandpa >> reads >> the newspaper`,
    freq: `she >> is >> usually >> happy
my brother >> sometimes >> helps >> in the kitchen
we >> are >> never >> bored at the weekend
Grandma >> always >> drinks >> tea in the morning
they >> often >> go >> swimming in summer`,
    place: `my brother >> plays >> the guitar >> in his room >> every evening
we >> had >> lunch >> at a restaurant >> last Sunday
the children >> swim >> in the lake >> in summer
I >> will meet >> my cousin >> at the station >> tomorrow
she >> bought >> a new dress >> in Vienna >> last week`
  } });

  // Lückenfüller nach der Doppelungs-Bereinigung
  ext('e-nouns', { more: { trans: `Zwei Frauen und drei Männer warten. => Two women and three men are waiting.` } });
  ext('e-thereis', { more: { someany: `There aren't {any|some} buses on Sundays.
I'd like {some|any} help with my homework.
Are there {any|some} questions?` } });
  ext('e-modals', { more: { must: `Students {mustn't|don't have to} cheat in tests.
You {don't have to|mustn't} call me. I'll call you.` } });
  ext('e-pastperfect', { more: { form: `I [had never seen:never see] snow before I went to Canada.` } });
  ext('e-gerund', { more: { prep: `Thanks for [inviting:invite] me!` } });
  ext('e-linking', { more: { text: `The museum was closed. {Nevertheless|Because}, we had a great day.` } });
  ext('e-vocab', { more: { def: `the day after Friday => Saturday
the person who looks after sick animals => vet
the room where you have a shower => bathroom` } });
  ext('e-w-email', { more: { style: `I am afraid that …|F` } });
})();

/* Lückenfüller nach der Bereinigung ähnlicher Sätze */
(function () {
  const ext = UB.extendTopic;
  ext('e-gerund', { more: { prep: `Do you feel like [going:go] out tonight?
He's famous for [telling:tell] funny stories.
We're used to [getting:get] up early.
I'm worried about [failing:fail] the test.
He succeeded in [finding:find] the key.
My sister is crazy about [riding:ride] horses.` } });
  ext('e-questions', { more: { subj: `Somebody knocked at the door. :: Who? => Who knocked at the door?` } });
  ext('e-modals', { more: { should: `My phone is always empty. :: charge it every night => You should charge it every night.
My plants are dying. :: water them more often => You should water them more often.` } });
  ext('e-quantity', { more: { some: `I can't find my glasses [anywhere].` } });
  ext('e-reported', { more: { st: `"I am in the garden." :: Mum said … => Mum said (that) she was in the garden.` } });
  ext('e-linking', { more: { basic: `I was hungry, [but] there was no food.` } });
  ext('e-vocab', { more: { coll: `einen Ausflug machen => go on a trip` } });
  ext('e-phrases', { more: { p1: `Du sagst, dass du Hunger hast. => I'm hungry.`, reply: `Do you want to come with us? => I'd love to!` } });
  ext('e-w-email', { more: { style: `Talk soon!|I` } });
  ext('e-prepositions', { more: { time: `School starts again [in] September.
We usually eat pancakes [on] Shrove Tuesday.` } });
})();
