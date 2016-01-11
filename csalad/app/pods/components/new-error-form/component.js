import Ember from 'ember';


export default Ember.Component.extend({
    errors: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            this.get('onSave')({
                todo: this.$('#helyszin').val(),
                description: this.$('#leiras').val(),
                date: new Date().toLocaleString(),
                
            });
            $('.modal').modal('hide');
        }
    },
    
    validate() {
        var location = this.$('#helyszin').val();
        var description = this.$('#leiras').val();
        
        this.set('errors.location', location === '' ? 'Teendő kötelező' : '');
        this.set('errors.description', description === '' ? 'Leírás kötelező' : '');
        
        return this.get('errors.location') === '' &&
               this.get('errors.description') === '';
    }
});
