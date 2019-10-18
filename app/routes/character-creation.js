import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['You were born to Elven parents, raised in the woodlands of Elswyr.',
                'You were a bully in your childhood, physically dominating the other children.',
                'During your youth, you were apprenticed to a blacksmith.']
    }
});
