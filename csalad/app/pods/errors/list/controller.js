import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            var error = this.store.createRecord(
                'error', 
                Object.assign(
                    {
                        status: 'new',
                        date: '1991',
                        location: 'labor',
                        description: 'rossz'
                    }, 
                    formData
                )
            );
            error.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});
