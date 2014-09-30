import ApplicationAdapter from './application';
import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({ 
    host : 'http://raspberrypi:9898',
    namespace : 'financial/service',
    crossDomain: true, // enable this
    buildURL : function (type, id) {
    //console.log(this._super.buildURL(type, id));
    console.log (type);
    //
     var url = this.get('host') + '/' + this.get('namespace') + '/' + type + '.php';

     if (id) {
      url += '?id=' + id;
     }
     console.log(url);
     return url;
     }
});
export default ApplicationAdapter;
