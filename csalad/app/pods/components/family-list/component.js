import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteMember(member) {
            member.deleteRecord();
            member.save();
        }
    }
});
