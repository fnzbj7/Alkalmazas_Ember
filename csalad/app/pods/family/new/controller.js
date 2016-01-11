import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newFamily() {
            var member = this.store.createRecord(
                'familymember', 
                    {
                        firstname: 'Szabó',
                        lastname: 'Gábor',
                        age: '10'
                    }
            );
            member.save();
        }
    }
});
