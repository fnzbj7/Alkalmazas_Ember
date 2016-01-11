import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyMember(formData) {
            let member = this.get('model');
            member.setProperties(formData);
            return member.save().then(() => {
                this.transitionToRoute('family.list');
            });
        }
    }
});
