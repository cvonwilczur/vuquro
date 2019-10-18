import Component from '@ember/component';

export default Component.extend({
    actions: {
        selectAnswer(question) {
            alert(question);
        }
    }
});
