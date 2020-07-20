/**
 *
 * loginCtrl
 *
 */

angular
    .module('eduarena')
    .controller('dashboardCtrl', dashboardCtrl)  

function dashboardCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $cookies) {
    	
    $scope.quotes = [
    	   {
    		      "quote": "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
    		      "author": "- William Arthur Ward"
    		   },
    		   {
    		      "quote": "Good teaching must be slow enough so that it is not confusing, and fast enough so that it is not boring.",
    		      "author": "- Sidney J. Harris"
    		   },
    		   {
    		      "quote": "In an effective classroom, students should not only know what they are doing, they should also know why and how.",
    		      "author": "- Harry Wong"
    		   },
    		   {
    		      "quote": "Good teaching is one-fourth preparation and three-fourths theater.",
    		      "author": "- Gail Godwin"
    		   },
    		   {
    		      "quote": "The important thing is not so much that every child should be taught as that every child should be given the wish to learn.",
    		      "author": "- John Lubbock"
    		   },
    		   {
    		      "quote": "The need for imagination, as a sense of truth, and as a feeling of responsibility — these are the three forces which are the very nerve of education.",
    		      "author": "- Rudolf Steiner"
    		   },
    		   {
    		      "quote": "Teaching should be such that what is offered is perceived as a valuable gift and not as a hard duty.",
    		      "author": "- Albert Einstein"
    		   },
    		   {
    		      "quote": "Teaching is an instinctual art, mindful of potential, craving of realizations, a pausing, seamless process.",
    		      "author": "- A. Bartlett Giamatti"
    		   },
    		   {
    		      "quote": "The teacher’s task is to initiate the learning process and then get out of the way.",
    		      "author": "- John Warren"
    		   },
    		   {
    		      "quote": "A teacher affects eternity; he [or she] can never tell where his influence stops.",
    		      "author": "- Henry B. Adams"
    		   },
    		   {
    		      "quote": "In teaching you cannot see the fruit of a day’s work. It is invisible and remains so, maybe for twenty years.",
    		      "author": "- Jacques Barzun"
    		   },
    		   {
    		      "quote": "The greatest use of a life is to spend it for something that will outlast it.",
    		      "author": "- William James"
    		   },
    		   {
    		      "quote": "Thirty-one chances. Thirty-one futures, our futures. It’s an almost psychotic feeling, believing that part of their lives belongs to me. Everything they become, I also become. And everything about me, they helped to create.",
    		      "author": "- Esme Raji Codell"
    		   },
    		   {
    		      "quote": "Teachers are people who start things they never see finished, and for which they never get thanks until it is too late.",
    		      "author": "- Max Forman"
    		   },
    		   {
    		      "quote": "Teachers, who educate children, deserve more honor than parents, who merely gave them birth; for the latter provided mere life, while the former ensured a good life.",
    		      "author": "- Aristotle"
    		   },
    		   {
    		      "quote": "What greater joy can a teacher feel than to witness a child’s success?",
    		      "author": "- Michelle L. Graham"
    		   },
    		   {
    		      "quote": "The best education is not given to students; it is drawn out of them.",
    		      "author": "- Gerald Belcher"
    		   },
    		   {
    		      "quote": "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
    		      "author": "- Albert Einstein"
    		   },
    		   {
    		      "quote": "Good teaching is more a giving of right questions than a giving of right answers.",
    		      "author": "- Josef Albers"
    		   },
    		   {
    		      "quote": "The test of a good teacher is not how many questions he can ask his pupils that they will answer readily, but how many questions he inspires them to ask which he finds it hard to answer.",
    		      "author": "- Alice Wellington Rollins"
    		   },
    		   {
    		      "quote": "It must be remembered that the purpose of education is not to fill the minds of students with facts…it is to teach them to think, if that is possible, and always to think for themselves.",
    		      "author": "- Robert Hutchins"
    		   },
    		   {
    		      "quote": "Effective teaching may be the hardest job there is.",
    		      "author": "- William Glasser"
    		   },
    		   {
    		      "quote": "A pro is someone who can do great work when he doesn’t feel like it.",
    		      "author": "- Alastair Cook"
    		   },
    		   {
    		      "quote": "Education…is a painful, continual, and difficult work to be done in kindness, by watching, by warning…by praise, but above all, by example.",
    		      "author": "- John Ruskin"
    		   },
    		   {
    		      "quote": "Teaching is not a lost art, but the regard for it is a lost tradition.",
    		      "author": "- Jacques Barzun"
    		   },
    		   {
    		      "quote": "Teaching is the only major occupation…for which we have not developed tools that make an average person capable of competence and performance. In teaching we rely on the naturals, the ones who somehow know how to teach.",
    		      "author": "- Peter Drucker"
    		   },
    		   {
    		      "quote": "Teachers are expected to reach unattainable goals with inadequate tools. The miracle is that at times they accomplish this impossible task.",
    		      "author": "- Haim Ginott"
    		   },
    		   {
    		      "quote": "We can, whenever and wherever we choose, successfully teach all children whose schooling is of interest to us. We already know more than we need to know in order to do that. Whether or not we do it must finally depend on how we feel about the fact we haven’t so far.",
    		      "author": "- Ron Edmonds"
    		   },
    		   {
    		      "quote": "The most important part of teaching is to teach what it is to know.",
    		      "author": "- Simone Weil"
    		   },
    		   {
    		      "quote": "Teaching is the greatest act of optimism.",
    		      "author": "- Colleen Wilcox"
    		   },
    		   {
    		      "quote": "The art of teaching is the art of assisting discovery.",
    		      "author": "- Mark Van Doren"
    		   },
    		   {
    		      "quote": "Teaching is the perpetual end and office of all things. Teaching, instruction is the main design that shines through the sky and earth.",
    		      "author": "- Ralph Waldo Emerson"
    		   },
    		   {
    		      "quote": "Teaching is truth mediated by personality.",
    		      "author": "- Phyllis Brooks"
    		   },
    		   {
    		      "quote": "The whole art of teaching is only the art of awakening the natural curiosity of young minds for the purpose of satisfying it afterwards; curiosity itself can be vivid and wholesome only in proportion as the mind is contented and happy.",
    		      "author": "- Anatole France"
    		   },
    		   {
    		      "quote": "Benevolence alone will not make a teacher, nor will learning alone do it. The gift of teaching is a peculiar talent, and implies a need and a craving in the teacher himself.",
    		      "author": "- John Jay Chapman"
    		   },
    		   {
    		      "quote": "One of the beauties of teaching is that there is no limit to one’s growth as a teacher, just as there is no knowing beforehand how much your students can learn.",
    		      "author": "- Herbert Kohl"
    		   },
    		   {
    		      "quote": "I have come to believe that a great teacher is a great artist and that there are as few as there are any other great artists. Teaching might even the greatest of the arts since the medium is the human mind and spirit.",
    		      "author": "- John Steinbeck"
    		   },
    		   {
    		      "quote": "I entered the classroom with the conviction that it was crucial for me and every other student to be an active participant, not a passive consumer…education that connects the will to know with the will to become.",
    		      "author": "- Bell Hooks"
    		   },
    		   {
    		      "quote": "Education’s purpose is to replace an empty mind with an open one.",
    		      "author": "- Malcolm Forbes"
    		   },
    		   {
    		      "quote": "Among the many purposes of schooling, four stand out to us as having special moral value: to love and care, to serve, to empower and, of course, to learn.",
    		      "author": "- Andy Hargreaves and Michael Fullan"
    		   },
    		   {
    		      "quote": "The most important function of education at any level is to develop the personality of the individual and the significance of his life to himself and to others. This is the basic architecture of a life; the rest is ornamentation and decoration of the structure.",
    		      "author": "- Grayson Kirk"
    		   },
    		   {
    		      "quote": "No one has yet fully realized the wealth of sympathy, kindness, and generosity hidden in the soul of a child. The effort of every true education should be to unlock that treasure.",
    		      "author": "- Emma Goldman"
    		   },
    		   {
    		      "quote": "The object of teaching a child is to enable him [or her] to get along without his [or her] teacher.",
    		      "author": "- Elbert Hubbard"
    		   },
    		   {
    		      "quote": "Any genuine teaching will result, if successful, in someone’s knowing how to bring about a better condition of things than existed earlier.",
    		      "author": "- John Dewey"
    		   },
    		   {
    		      "quote": "The ability to think straight, some knowledge of the past, some vision of the future, some skill to do useful service, some urge to fit that service into the well-being of the community — these are the most vital things education must try to produce.",
    		      "author": "- Virginia Gildersleeve"
    		   },
    		   {
    		      "quote": "Education is much more than a matter of imparting the knowledge and skills by which narrow goals are achieved. It is also about opening the child’s eyes to the needs and rights of others.",
    		      "author": "- Dalai Lama"
    		   },
    		   {
    		      "quote": "One looks back with appreciation to the brilliant teachers, but with gratitude to those who touched our human feelings. The curriculum is so much necessary raw material, but warmth is a vital element for the growing plant and for the soul of the child.",
    		      "author": "- Carl Jung"
    		   },
    		   {
    		      "quote": "The future of the world is in my classroom today, a future with the potential for good or bad… Several future presidents are learning from me today; so are the great writers of the next decades, and so are all the so-called ordinary people who will make the decisions in a democracy.",
    		      "author": "-Ivan Welton Fitzwater"
    		   },
    		   {
    		      "quote": "No matter what accomplishments you achieve, somebody helped you.",
    		      "author": "- Althea Gibson"
    		   },
    		   {
    		      "quote": "Thirty-one chances. Thirty-one futures, our futures. It’s an almost psychotic feeling, believing that part of their lives belongs to me. Everything they become, I also become. And everything about me, they helped to create.",
    		      "author": "- Esme Raji Codell"
    		   },
    		   {
    		      "quote": "When the untapped potential of a student meets the liberating art of a teacher, a miracle unfolds.",
    		      "author": "- Mary Hatwood Futrell"
    		   },
    		   {
    		      "quote": "[Kids] don’t remember what you try to teach them. They remember what you are.",
    		      "author": "- Jim Henson"
    		   },
    		   {
    		      "quote": "Teaching is the essential profession, the one that makes all professions possible.",
    		      "author": "- David Haselkorn"
    		   },
    		   {
    		      "quote": "The work of a teacher — exhausting, complex, idiosyncratic, never twice the same — is at its heart an ethical enterprise. Teaching is the vocation of vocations.",
    		      "author": "- William Ayres"
    		   },
    		   {
    		      "quote": "What office is there which involves more responsibility, which requires more qualifications, and which ought, therefore, to be more honorable, than that of teaching?",
    		      "author": "- Harriet Martineau"
    		   },
    		   {
    		      "quote": "Teachers, I believe, are the most responsible and important members of society because their professional efforts affect the fate of the earth.",
    		      "author": "- Helen Caldicott"
    		   },
    		   {
    		      "quote": "What greater or better gift can we offer the republic than to teach and instruct our youth?",
    		      "author": "- Cicero"
    		   },
    		   {
    		      "quote": "If kids come to educators and teachers from strong, healthy, functioning families, it makes our job easier. If they do not come to us from strong, healthy, functioning families, it makes our job more important.",
    		      "author": "- Barbara Colorose"
    		   },
    		   {
    		      "quote": "To me the sole hope of human salvation lies in teaching.",
    		      "author": "- George Bernard Shaw"
    		   },
    		   {
    		      "quote": "At the desk where I sit, I have learned one great truth. The answer for all our national problems — the answer for all the problems of the world — comes to a single word. That word is education.",
    		      "author": "- Lyndon B. Johnson"
    		   }
    		];
    
    $scope.content = $scope.quotes[0].quote;
    $scope.author = $scope.quotes[0].author;
    $scope.randomQuote = function(){
       var i = Math.round(Math.random() * 60) % $scope.quotes.length;
       $scope.content = $scope.quotes[i].quote;
       $scope.author = $scope.quotes[i].author;
    }
    
};

