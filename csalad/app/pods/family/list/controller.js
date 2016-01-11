import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newFamily(formData) {
            var member = this.store.createRecord(
                'familymember', formData
            );
            member.save();
        }
    }
});
