import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyError(formData) {
            let error = this.get('model');
            error.setProperties(formData);
            return error.save().then(() => {
                this.transitionToRoute('errors.list');
            });
        }
    }
});
