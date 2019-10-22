import Component from '@ember/component';

export default Component.extend({
    actions: {
        selectOption(option) {
            alert(option);
        }
    }
});
