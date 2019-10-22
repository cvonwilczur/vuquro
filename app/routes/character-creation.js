import Route from '@ember/routing/route';

const DUMMY_DATA = {
    'kind_selection': {
        'question' : 'Our story begins . . .',
        'answers' : ['You were born Human, raised among the impossible towers of Nexus.',
                    'You were created Shaped, perfect in every way in the Tower of Conn\'Ing.',
                    'You flickered back to life a Clanker, creaking through the dusty deritus of a Librarian ruin.'
                    ]
    }
    
};

export default Route.extend({
    model() {
        return DUMMY_DATA;
    }
});
