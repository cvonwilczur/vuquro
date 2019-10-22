import Route from '@ember/routing/route';

const DUMMY_DATA = {
    'kind_selection' : {
        'question' : 'Our story begins . . .',
        'answers' : ['You were born Human, raised among the impossible towers of Nexus.',
                    'You were created Shaped, perfect in every way in the Tower of Conn\'Ing.',
                    'You flickered back to life a Clanker, creaking through the dusty deritus of a Librarian ruin.'
                    ]
    },
    'shaped_childhood' : {
        'question' : 'As a fresh production, you . . .',
        'answers' : ['Dominated the other freshlings physically, impressing Mother Superior with your young prowess.',
                    'Spent the hours in the Lyceum pods, revealing a knack for knowledge to Mother Superior.',
                    'Used quick wits and faster reflexes to evade your daily meditation, earning Mother Superior\'s ire.',
                    'Sat in a corner speaking to No One in particular, as Mother Superior\'s voicebox squealed in binary tongues.'
                    ]
    },
    'shaped_cleric_adult' : {
        'question': 'The touch of the Gods proved useful to the Arcanists . . .',
        'answers' : ['Through you the Gods channeled body-altering power, allowing you to achieve apex physical condition.',
                    'The Gods whispered half-sane secrets into your ears, granting you an uncanny understanding of the Work.',
                    'They granted you gifts in the darkness, showing you the secret spaces between light.',
                    'They gave you glimpses into the thoughts and desires of the other freshlings, silvering your leaden tongue.'
                    ]
    }
};

export default Route.extend({
    model() {
        return DUMMY_DATA;
    }
});
