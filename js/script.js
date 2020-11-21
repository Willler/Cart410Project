/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

/* Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});*/

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'me': {
		name: 'me',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		//'show notification Welcome',
		/*{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},*/
		'nvl When you come to, you struggle to situate yourself. Were you in the safety of you own room, snoozing away the late morning hours of your day with nary a care in the world? ',
		'nvl Had you fallen asleep somewhere weird again?',
		'nvl You try to move your body, but immediately wince as you feel a particularly bad kink in your neck pulse in discomfort. ',
		'nvl Definitely the latter. Just where was it this time?',
		'nvl You sit up, frantically rubbing away at your eyes to try and shake away the lingering wisps of sleep blurring your vision.',
		'nvl You groan as you do so, your limbs clenching in disapproval at every tiny flex of your muscles.',
		'nvl Forget where you passed out... what exactly had you been up to last night? You furrow your brows, trying to remember.',
		'nvl But, despite your best efforts, the answers just won\'t come and the more you try to recall, the more frustrated you get.',
		'nvl After a few minutes of fruitless efforts, your nostrils flare in annoyance as you take a deep breath.',
		'nvl Why couldn\'t you remember... and just why wouldn\'t this damnable blurriness just go away!?',
		'nvl Before you could give it anymore thought, however, you suddenly get an urge to do something.',
		'nvl It was a base instinct crying out through every part of your body. You...',
		{
			'Choice': {
				
				'Yes': {
					'Text': 'Reach down',
					'Do': 'jump ReachDown'
				},
			}
		}
	],

	'ReachDown': [
		'nvl bitch you thot',
		'end'
	],
});